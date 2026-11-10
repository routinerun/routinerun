// Skins as data. Run: node --test test/*.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { problemsWithSkin, SKIN_SCHEMA } from "../src/skin.js";

const folder = new URL("../skins/", import.meta.url);
const skins = readdirSync(folder).filter((name) => name.endsWith(".json"));

test("the schema file and the module are one schema", () => {
  assert.deepEqual(JSON.parse(readFileSync(new URL("../schema/skin.v1.schema.json", import.meta.url), "utf8")), SKIN_SCHEMA);
});

test("the three skins of the concept are skins", () => {
  assert.deepEqual(skins.sort(), ["blush.json", "calm.json", "clean.json", "lilac.json", "ops.json"]);
  for (const name of skins) assert.deepEqual(problemsWithSkin(JSON.parse(readFileSync(new URL(name, folder), "utf8"))), [], name);
});

test("a skin cannot reach past how rows look", () => {
  const clean = JSON.parse(readFileSync(new URL("clean.json", folder), "utf8"));
  assert.match(problemsWithSkin({ ...clean, kindWord: "hidden" })[0], /cannot have/);
  assert.match(problemsWithSkin({ ...clean, rows: { ...clean.rows, script: "x" } })[0], /cannot have/);
  assert.match(problemsWithSkin({ ...clean, light: { ...clean.light, accent: "url(javascript:x)" } })[0], /accent/);
  assert.match(problemsWithSkin({ ...clean, rows: { ...clean.rows, padding: 40 } })[0], /at most 16/);
  assert.match(problemsWithSkin({ ...clean, skin: 2 })[0], /"skin": 1/);
});
