# Skins

How the rows of a page look in Routine Run, as data: density, type, radius, and the colours of
the ground they stand on. One file each, checked against [`skin.v1.schema.json`](../packages/form/schema/skin.v1.schema.json).

- [`clean.json`](clean.json): the app as it ships, the system's own look.
- [`calm.json`](calm.json): more air, a book's type, two lines for the second line.
- [`ops.json`](ops.json): one line a row and values in a fixed width, for a long run read at a glance.

A skin changes how a row looks and nothing about what it says: the kind word, the dot that says
whose a thing is, the routine's group under "From" and the order in which a long line is cut are
the app's on every skin. That is also why a skin is colours and numbers only, with no code: it is
data anybody can write and nobody has to trust.

To check one:

```bash
node packages/form/bin/routinerun.js check my-skin.json
```

Skins other people make go in `community/`, by pull request.

Licence: [CC BY 4.0](../LICENSE-CONTENT).
