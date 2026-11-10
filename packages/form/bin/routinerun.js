#!/usr/bin/env node
// routinerun check <file>...   says what is wrong with each routine or skin, or that it is fine
// routinerun upgrade <file>    prints the routine in form 2
// routinerun link <file>       prints a link that opens the routine on an iPhone
// routinerun new [name]        lists the starters, or prints one to start from
//
// A file holds one routine or a list of them, in either form, or one skin.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { problems, upgrade } from "../src/index.js";
import { problemsWithSkin } from "../src/skin.js";
import { linkFor } from "../src/link.js";

const [command, ...args] = process.argv.slice(2);

function read(file) {
  const said = JSON.parse(readFileSync(file, "utf8"));
  return Array.isArray(said) ? said : [said];
}

// The starters sit beside the package here, and in routines/ in the public repository.
const shelves = [new URL("../starters/", import.meta.url), new URL("../../../routines/", import.meta.url)].filter((url) => existsSync(url));
function starters() {
  const seen = new Set();
  return shelves.flatMap((shelf) => readdirSync(shelf).flatMap((group) => {
    const folder = new URL(`${group}/`, shelf);
    return existsSync(folder) ? readdirSync(folder).filter((name) => name.endsWith(".json")).map((name) => ({ group, slug: name.slice(0, -5), url: new URL(name, folder) })) : [];
  })).filter(({ group, slug }) => !seen.has(`${group}/${slug}`) && seen.add(`${group}/${slug}`));
}

if (command === "check" && args.length) {
  let wrong = 0;
  for (const file of args) {
    read(file).forEach((said, index) => {
      const found = "skin" in said ? problemsWithSkin(said) : problems(said);
      const which = `${file}${index ? ` (${index + 1})` : ""}`;
      if (found.length) {
        wrong += 1;
        console.log(`${which}: ${found[0]}${found.length > 1 ? ` (and ${found.length - 1} more)` : ""}`);
      } else {
        console.log(`${which}: fine, ${"skin" in said ? "a skin" : `form ${said.routineRun}`}`);
      }
    });
  }
  process.exit(wrong ? 1 : 0);
} else if (command === "upgrade" && args.length === 1) {
  const routines = read(args[0]).map(upgrade);
  console.log(JSON.stringify(routines.length === 1 ? routines[0] : routines, null, 2));
} else if (command === "link" && args.length === 1) {
  const [routine] = read(args[0]);
  const { link, problem } = await linkFor(routine);
  if (problem) { console.log(problem); process.exit(1); }
  console.log(link ?? "Too long for a link. Paste the JSON into the app instead: Ask an AI to write it.");
} else if (command === "new") {
  const all = starters();
  if (!args.length) {
    for (const { group, slug } of all) console.log(`${group}/${slug}`);
  } else {
    const found = all.find(({ slug, group }) => slug === args[0] || `${group}/${slug}` === args[0]);
    if (!found) { console.log(`No starter called ${args[0]}. Run routinerun new to list them.`); process.exit(1); }
    const { catalogue, ...routine } = JSON.parse(readFileSync(found.url, "utf8"));
    console.log(JSON.stringify(routine, null, 2));
  }
} else {
  console.log("routinerun check <file>...\nroutinerun upgrade <file>\nroutinerun link <file>\nroutinerun new [name]");
  process.exit(command ? 1 : 0);
}
