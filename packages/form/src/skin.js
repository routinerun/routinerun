// A skin: how the rows of a page look, as data (schema/skin.v1.schema.json). Checked the way
// a routine is, by the same few rules of JSON Schema, so a skin somebody writes is refused in
// a sentence before anybody draws it.
import schema from "./schema-skin.js";
import { problemsAgainst, isObject } from "./check.js";

export const SKIN_SCHEMA = schema;

/** Every problem with a skin, one sentence each; an empty list when there is none. */
export function problemsWithSkin(skin) {
  if (!isObject(skin)) return ["Send one skin as a JSON object."];
  if (skin.skin !== 1) return ['The skin needs "skin": 1, the version of the shape it is written in.'];
  return problemsAgainst(skin, schema).map((problem) => problem.replace(/^The routine/, "The skin"));
}
