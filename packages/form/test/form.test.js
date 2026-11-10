// The package against the app's own pairs. Run: node --test test/*.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { problems, problemWith, upgrade, SCHEMAS, NEWEST_FORM } from "../src/index.js";

const folder = new URL("../fixtures/upgrade/", import.meta.url);
const read = (name) => JSON.parse(readFileSync(new URL(name, folder), "utf8"));
const names = readdirSync(folder).filter((name) => name.endsWith(".form1.json")).map((name) => name.replace(".form1.json", ""));

test("there are pairs to check, written by the app", () => {
  assert.ok(names.length > 50, `only ${names.length} pairs`);
});

test("each form 1 upgrades to the form 2 the app makes of it", () => {
  for (const name of names) assert.deepEqual(upgrade(read(`${name}.form1.json`)), read(`${name}.form2.json`), name);
});

test("both halves of every pair are routines their form's schema takes", () => {
  for (const name of names) {
    assert.deepEqual(problems(read(`${name}.form1.json`)), [], `${name}.form1.json`);
    assert.deepEqual(problems(read(`${name}.form2.json`)), [], `${name}.form2.json`);
  }
});

test("the schemas are the ones the docs publish", () => {
  for (const form of [1, 2]) {
    // The docs folder here, developers/ in the public repository.
    const where = [`../../../docs/developers/`, `../../../developers/`].map((path) => new URL(`${path}written-routine.v${form}.schema.json`, import.meta.url)).find(existsSync);
    const published = JSON.parse(readFileSync(where, "utf8"));
    assert.deepEqual(SCHEMAS[form], published, `form ${form}`);
  }
  assert.equal(SCHEMAS[2].$id, "https://routinerun.com/schema/routine.v2.json");
});

test("upgrading form 2 changes nothing, and nothing is lost on the way up", () => {
  const two = read("every-key-that-moved.form2.json");
  assert.deepEqual(upgrade(two), two);
  const stranger = { routineRun: 1, name: "A", somethingLater: [1], steps: [{ title: "B", laterToo: true }] };
  assert.deepEqual(upgrade(stranger), { routineRun: 2, name: "A", somethingLater: [1], steps: [{ title: "B", laterToo: true }] });
});

test("form 2 says what is wrong in the same words form 1 did, where the key is new", () => {
  const routine = { routineRun: 2, name: "A", steps: [{ title: "B" }] };
  assert.equal(problemWith(routine), null);
  assert.match(problemWith({ ...routine, steps: [{ title: "B", deadline: { by: "09:00", startBy: "08:00" } }] }), /both "by" and "startBy"/);
  assert.match(problemWith({ ...routine, steps: [{ title: "B", repeats: 0 }] }), /at least 1/);
  assert.match(problemWith({ ...routine, triggers: [{ when: { at: "07:00", weekdays: ["someday"] } }] }), /mon/);
  assert.match(problemWith({ ...routine, triggers: [{ when: { every: { minutes: 20 }, between: [9] } }] }), /at least 2/);
  assert.match(problemWith({ ...routine, reactions: [{ on: "lunch", does: [{ note: "x" }] }] }), /reactions/);
  assert.match(problemWith({ ...routine, values: { year: { text: 2026 } } }), /values/);
  assert.match(problemWith({ ...routine, routineRun: NEWEST_FORM + 1 }), new RegExp(`form ${NEWEST_FORM + 1}`));
});
