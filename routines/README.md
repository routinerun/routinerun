# Routines

The routines Routine Run ships, one file each, in form 2 of [the written form](../developers/written-routine.md):
the same shape an assistant or a person writes, and the one the app reads.

- [`starters/`](starters) — mornings, evenings, the house, work, health, the year.
- [`on-call/`](on-call) — runbooks for being paged: the first minutes of an incident, handing
  the pager over, after it is fixed. These are what a [connection](../connections/README.md)
  from PagerDuty or Opsgenie starts.

These files are the starters, not a copy of them: the app bundles exactly these and reads them
the way it reads a routine you paste in.

Each file is a routine (`name`, `description`, `steps`, and anything else the form says) with a
`catalogue` block beside it: its `slug`, its shelf (`group`), its `number` on the shelf, which
its identity in the app is made from and never changes, its `order` on the shelf, the
`release` it arrived in, what it depends on (a shortcut, Health, a timer that has to reach you),
and `web`, a link that opens it in the app, where nothing is saved until you press Add. A routine
pasted or opened anywhere else with a `catalogue` block is read and the block ignored.

A routine is English on purpose: once it is added it is that person's routine, in the words
it was written in.

To start one of your own from one of these, or to check one before you send it:

```bash
node packages/form/bin/routinerun.js new morning
node packages/form/bin/routinerun.js check my-routine.json
```

Routines other people write go in `community/`, by pull request. A check runs on every one,
and an accepted routine becomes a starter in the app by its file being copied in and given a
number on its shelf.

Licence: [CC BY 4.0](../LICENSE-CONTENT).
