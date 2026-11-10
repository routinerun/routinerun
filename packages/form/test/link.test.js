// Links and starters. Run: node --test test/*.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { inflateRawSync } from "node:zlib";
import { readFileSync, readdirSync } from "node:fs";
import { linkFor, MAXIMUM_LINK } from "../src/link.js";
import { problems } from "../src/index.js";

const one = JSON.parse(readFileSync(new URL("../fixtures/upgrade/example-01.form1.json", import.meta.url), "utf8"));

test("a link carries the routine, deflated, the way the app and the relay read it", async () => {
  const { link } = await linkFor(one);
  assert.match(link, /^https:\/\/routinerun\.com\/w\?d=[A-Za-z0-9_-]+$/);
  const d = link.split("d=")[1].replace(/-/g, "+").replace(/_/g, "/");
  assert.deepEqual(JSON.parse(inflateRawSync(Buffer.from(d, "base64")).toString()), one);
  assert.ok(link.length <= MAXIMUM_LINK);
});

test("a link carries form 1 until form 2 is handed out, and says so", async () => {
  const two = JSON.parse(readFileSync(new URL("../fixtures/upgrade/example-01.form2.json", import.meta.url), "utf8"));
  const { problem } = await linkFor(two);
  assert.match(problem, /form 1 until the app that reads form 2/);
});

test("every starter file is a form 2 routine with its place in the catalogue", () => {
  const shelf = new URL("../starters/", import.meta.url);
  const files = readdirSync(shelf).flatMap((group) => readdirSync(new URL(`${group}/`, shelf)).map((name) => new URL(`${group}/${name}`, shelf)));
  assert.ok(files.length > 40, `${files.length} starters`);
  for (const file of files) {
    const starter = JSON.parse(readFileSync(file, "utf8"));
    assert.deepEqual(problems(starter), [], file.pathname);
    assert.equal(starter.routineRun, 2);
    assert.ok(file.pathname.endsWith(`/${starter.catalogue.slug}.json`), file.pathname);
  }
});
