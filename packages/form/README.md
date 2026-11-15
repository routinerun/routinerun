# @routinerun/form

Check and upgrade a routine written for Routine Run, in form 1 or form 2. The same checks
the relay makes before it hands a routine to a phone, and the same upgrade the app makes when
it reads form 1.

```bash
npx @routinerun/form check morning.json
npx @routinerun/form upgrade morning.json
npx @routinerun/form new morning
```

```js
import { problems, upgrade } from "@routinerun/form";

problems(routine);   // [] when it is fine, else one sentence per problem, most useful first
upgrade(routine);    // form 2, from form 1; form 2 comes back as it is
```

## The two forms

**Form 2** is the routine in the app's own words. Compared with form 1:
- `about` is `description`;
- a step's `times` is `repeats`;
- the ten deadline keys on a step are one `deadline` object;
- a routine's `times` are `triggers`;
- form 2 can also say notes, places, a step's tags and check-ins, other triggers, and reactions.

**Form 1** is still read for good, and `upgrade` turns it into form 2 by the same table the app
uses.

The app hands out form 2 and, since 15 November 2026, teaches it (`TAUGHT_FORM`): every build
since 1.3 reads it, and a link or a prompt is read on whatever phone it reaches. A link takes
form 1 or 2 and nothing newer.

## Where things come from

- `schema/`: the JSON Schemas, written by the app's own reader (`WrittenRoutineSchema.swift`),
  never by hand. Form 2's says `$id: https://routinerun.com/schema/routine.v2.json`.
- `src/schema-v1.js`, `src/schema-v2.js`: the same, as modules, for readers without JSON
  imports.
- `fixtures/upgrade/`: every example the app shows an assistant and every starter, as form 1
  beside the form 2 the app makes of it, plus one file using every key form 2 renames. The
  app's tests write them; `test/form.test.js` asks this package for the same form 2 from each.
- The starters are not in this folder. They are the app's own files, which it bundles and
  reads: every routine it ships, in form 2, with where it sits in the catalogue. In the
  public repository they are `routines/<starters|on-call>/<slug>.json`, and `routinerun new`
  reads them from there. The package on npm carries a copy, made as it is packed
  (`scripts/pack-starters.js`).
- `skins/`: the three skins of the row design, as data (`schema/skin.v1.schema.json`). A skin
  changes how rows look and nothing about what they say.

The schemas and the pairs are written by the app, and the starters are the app's; all of
them are edited there, never here. Published to npm from the public repository.
