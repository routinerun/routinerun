# Values in a step's name

A step can name a value it does not know yet. Write "Go to window" and add the value **window** after it, and the step reads "Go to window …" until somebody says which window. Once the run is told 7, it reads "Go to window 7" everywhere: on the run's page, the Lock Screen, the Dynamic Island, the watch and the widgets.

The routine keeps one wording. Each run fills in its own value.

## Putting a value in

1. Press the step's name, on its page or on the run's card.
2. Press the **⊕** that appears beside it while you type.
3. Choose a value, or **A value by name…** for one the routine does not have yet.

The value goes in as a chip. The description takes values the same way.

Besides values, a name can say the run's name, the routine's name and when the run started. A name cannot say the time of day. It would go stale on a Lock Screen that nobody redraws.

## A run named by its value

A routine's name can hold a value too. Press the name on the routine's page, press **⊕** and pick one, so it reads "Due diligence: company". The routine is still called "Due diligence" in your list. Each run is called "Due diligence: Acme" once it is told the company, and "Due diligence 2" until then. A name you type on a run wins.

A run's own name takes a value the same way. Name one run "Incident" with the value **id**, and it reads "Incident …" until the number arrives, then "Incident 4812".

## Where the value comes from

The nearest one wins:

1. What this run was told at this step.
2. What this run was told.
3. What the routine's step says.
4. What the routine says.

A value set on the run reaches every step that names it. A value kept at one step fills that step only.

A value can be set:

- by hand, under **Add or see…** on the run's page;
- from Shortcuts, with **Set Value**;
- by a step's own action, **Change a value**;
- by another app through a connection. See [Connections](connections.md).

## What you see while you write

With the caret in the name, you see the words as written, with the value as a chip. With the caret out, you see them filled in.

On the routine's page there is no run yet, so a value nobody has given reads as its own name in grey.

## Keep and the band

Filling in a value is not a change to the step. The orange band does not count it, and **Keep** never writes "window 7" into the routine. The value itself is the run's own, like any value, and the band counts that as it always has. See [Keep or Only here](keep-or-only-here.md).

Renaming the step inside a run is a change. Keep then writes the new name into the routine with its chips, so every later run fills them in for itself.

## When something goes wrong

- **It still says "…".** The value has not reached the run, or it was written under another name. Names are matched exactly, capitals and spaces included. Open the run's values and check the spelling.
- **It shows braces, like {time}.** That word cannot go in a name. Take it out, or move it to the step's message.
- **A finished run says an old value.** That is what it said then. A finished run keeps its words as they were.
