// The part of JSON Schema the written form's schemas use, and nothing more.
//
// Moved here from the relay, which now imports it, so the
// relay, the site and anybody checking a routine on their own machine ask the same
// questions of it. A keyword the schemas start using is a keyword this has to learn: one it
// does not know is refused rather than skipped, so a rule cannot be added that a reader
// quietly ignores. The app's tests check with their own copy of the same rules
// (SchemaCheck.swift), and the two have to learn a keyword together.

const UNDERSTOOD = new Set([
  "$schema", "$id", "$defs", "$ref", "title", "description",
  "type", "const", "enum", "pattern", "minLength", "minimum", "maximum", "minProperties", "minItems", "maxItems",
  "properties", "required", "additionalProperties", "items", "anyOf", "allOf", "not",
]);

/** Every problem with `value` against `schema`, one sentence each, the first most useful. */
export function problemsAgainst(value, schema) {
  return check(value, schema, schema, "");
}

function check(value, schema, root, path) {
  if (!schema || typeof schema !== "object") return [];
  const stranger = Object.keys(schema).find((key) => !UNDERSTOOD.has(key));
  if (stranger) return [`${where(path)}: the schema uses ${stranger}, which this check cannot read.`];
  const found = [];
  if (schema.$ref) {
    const target = root.$defs?.[schema.$ref.replace("#/$defs/", "")];
    if (!target) return [`${where(path)}: ${schema.$ref} names nothing.`];
    found.push(...check(value, target, root, path));
  }
  if (schema.type !== undefined) {
    const allowed = [].concat(schema.type);
    if (!allowed.some((type) => fits(value, type))) return [...found, `${where(path)} should be ${allowed.join(" or ")}.`];
  }
  if ("const" in schema && value !== schema.const) found.push(`${where(path)} should be ${JSON.stringify(schema.const)}.`);
  if (schema.enum && !schema.enum.includes(value)) found.push(`${where(path)} should be one of ${schema.enum.join(", ")}.`);
  if (typeof value === "string") {
    if (schema.pattern && !new RegExp(schema.pattern, "u").test(value)) found.push(`${where(path)} is not written the way it should be: "${value.slice(0, 60)}".`);
    if (schema.minLength !== undefined && [...value].length < schema.minLength) found.push(`${where(path)} is too short.`);
  }
  if (typeof value === "number") {
    if (schema.minimum !== undefined && value < schema.minimum) found.push(`${where(path)} should be at least ${schema.minimum}.`);
    if (schema.maximum !== undefined && value > schema.maximum) found.push(`${where(path)} should be at most ${schema.maximum}.`);
  }
  if (isObject(value)) {
    if (schema.minProperties !== undefined && Object.keys(value).length < schema.minProperties) found.push(`${where(path)} is empty.`);
    for (const key of schema.required ?? []) if (!(key in value)) found.push(`${where(path)} needs "${key}".`);
    for (const [key, field] of Object.entries(value)) {
      const rule = schema.properties?.[key];
      if (rule) found.push(...check(field, rule, root, `${path}.${key}`));
      else if (schema.additionalProperties === false) found.push(`${where(path)} has "${key}", which it cannot have.`);
      else if (schema.additionalProperties) found.push(...check(field, schema.additionalProperties, root, `${path}.${key}`));
    }
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) found.push(`${where(path)} needs at least ${schema.minItems}.`);
    if (schema.maxItems !== undefined && value.length > schema.maxItems) found.push(`${where(path)} can hold at most ${schema.maxItems}.`);
    if (schema.items) value.forEach((element, index) => found.push(...check(element, schema.items, root, `${path}[${index}]`)));
  }
  for (const rule of schema.allOf ?? []) found.push(...check(value, rule, root, path));
  if (schema.anyOf) {
    const each = schema.anyOf.map((rule) => check(value, rule, root, path));
    if (!each.some((problems) => problems.length === 0)) {
      // The shape that came nearest says what was meant: one whose own word is there — an
      // action whose argument is wrong — before any other, then whichever is wrong least.
      const named = schema.anyOf.map((rule, index) => ({ rule, problems: each[index] }))
        .filter(({ rule }) => isObject(value) && rule.required?.length && rule.required.every((key) => key in value))
        .map(({ problems }) => problems);
      const nearest = (named.length ? named : each).reduce((best, problems) => (problems.length < best.length ? problems : best));
      found.push(nearest[0] ?? `${where(path)} is not a shape the form has.`);
    }
  }
  if (schema.not && check(value, schema.not, root, path).length === 0) {
    found.push(schema.not.description ? `${where(path)} cannot have ${schema.not.description}.` : `${where(path)} is a shape the form does not allow.`);
  }
  return found;
}

function fits(value, type) {
  switch (type) {
    case "object": return isObject(value);
    case "array": return Array.isArray(value);
    case "string": return typeof value === "string";
    case "boolean": return typeof value === "boolean";
    case "number": return typeof value === "number" && Number.isFinite(value);
    case "integer": return Number.isInteger(value);
    case "null": return value === null;
    default: return false;
  }
}

export function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// "steps[2].does[0]" reads as step 3's first action, which is how a person and a model count.
function where(path) {
  if (!path) return "The routine";
  const step = path.match(/^\.steps\[(\d+)\](.*)$/);
  if (step) return `Step ${Number(step[1]) + 1}${step[2] ? ` (${step[2].replace(/^\./, "")})` : ""}`;
  return `"${path.replace(/^\./, "")}"`;
}
