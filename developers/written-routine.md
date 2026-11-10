# The written form

A routine leaves Routine Run in one shape: the **written form**. It is what an assistant writes when asked for a routine, what the MCP tools and `POST /runs` take, and what a share link, a published code and a file an organisation hosts carry.

It is pinned by [`written-routine.v1.schema.json`](written-routine.v1.schema.json), a JSON Schema (draft 2020-12), published at `https://routinerun.com/developers/written-routine.v1.schema.json`. The app writes that file from its own reader's tables, and a test fails while the committed copy differs, so the schema cannot describe a form the app does not read.

## Versions

Every routine says its form in `"routineRun"`. The app reads forms **1** and **2**, and still writes form 1.

Form 2, pinned by [`written-routine.v2.schema.json`](written-routine.v2.schema.json) (`$id`: `https://routinerun.com/schema/routine.v2.json`), says the same routine in the app's own words:
- `description` for `about`;
- `repeats` for a step's `times`;
- one `deadline` object for a step's ten deadline keys;
- `triggers` for a routine's `times`.

It also says what form 1 could not: notes, places, a step's tags and check-ins, other triggers, reactions, and a value's kind where reading it plainly would be wrong. Form 1 is read for ever and turned into form 2 by one table, the app's and `@routinerun/form`'s alike. Links, codes and the request to an assistant stay form 1 until a build that reads form 2 is on the App Store.

- A reader takes every form up to the newest it knows, and refuses a newer one with a sentence naming both numbers. The relay that carries routines to the phone does the same.
- A form changes number only when something already valid would be read differently. Adding an optional field, an action word or a colour does not.

## What is allowed and what is read

The schema says what a writer should write. The app reads a little more, because a model on the phone writes it and nobody is there to send it back: a capital in a colour, `"Monday"` for `"mon"`, `"9.30"` for `"09:30"`, a label beside an action, or its kind named in a `"type"` field.

**An action word the reader does not know is not an error.** It becomes a step action that does nothing and says it needs a newer version, the import screen names the word, and it is written back out exactly as it came, so the version that knows the word reads it whole.

**A webhook preset** (`telegram`, `discord`, …) is written under its id, or as `preset:<id>`. A bare id that is also one of the app's own words is the app's word, so a preset whose id is a word is always written with the prefix.

**A colour** is one of the twelve names, or `#RRGGBB` for any other. A model is told the names; the hex is what the app writes for a colour somebody chose by hand.

## Where it travels

| Where | Shape |
|---|---|
| Share link | `https://routinerun.com/r?w=1&d=…`: the JSON, raw DEFLATE, base64url. One routine is an object, several are a list. Links with `v=1` carry the app's own bundle and are still read — and are what the app writes until the build that reads `w=1` has reached the App Store, so a link never reaches a phone that cannot open it. |
| Published code | The JSON as text in the public record's `bundle` field. A record from before holds the app's bundle there; the two are told apart by `"routineRun"`. |
| An organisation's file | `<path>.json` beside the page, the JSON itself. |
| `routine_link`, `/w` | The JSON, as the assistant wrote it, deflated onto `https://routinerun.com/w?d=…`. |

A link and a code carry no identity: no `from`, no step `was`. They always arrive as a routine of their own. `from` and `was` are for an assistant changing a routine that is already on the phone.
