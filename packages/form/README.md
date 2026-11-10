# @routinerun/form

Check and upgrade a routine written for Routine Run, in form 1 or form 2. The same checks
the relay makes before it hands a routine to a phone, and the same upgrade the app makes when
it reads form 1.

```bash
node bin/routinerun.js check morning.json
node bin/routinerun.js upgrade morning.json
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

Until a build that reads form 2 is on the App Store, the app writes and teaches form 1
(`TAUGHT_FORM`), and a link takes only form 1. A link or a prompt is read on whatever phone it
reaches.

## Where things come from

- `schema/`: the JSON Schemas, written by the app's own reader (`WrittenRoutineSchema.swift`),
  never by hand. Form 2's says `$id: https://routinerun.com/schema/routine.v2.json`.
- `src/schema-v1.js`, `src/schema-v2.js`: the same, as modules, for readers without JSON
  imports.
- `fixtures/upgrade/`: every example the app shows an assistant and every starter, as form 1
  beside the form 2 the app makes of it, plus one file using every key form 2 renames. The
  app's tests write them; `test/form.test.js` asks this package for the same form 2 from each.
- `starters/`: every routine the app ships, in form 2, with where it sits in the catalogue.
  The same files are `routines/` in the public repository.
- `skins/`: the three skins of the row design, as data (`schema/skin.v1.schema.json`). A skin
  changes how rows look and nothing about what they say.

The schemas, the pairs and the starters are written by the app and are edited there, never
here. Not published to npm yet (`"private": true`).
