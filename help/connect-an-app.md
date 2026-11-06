# Apps that start routines

Your planner reminds you about **Morning**, and your Morning routine starts. A habit
app, a to-do app, a pager or Home Assistant can do the same: when it sends a
notification, Routine Run reads it and starts, moves or skips a routine.

This needs iOS 27, where a shortcut can start itself when a notification arrives.

## Setting one up

1. In the app, open **More › Events from elsewhere › Connect an app**.
2. Pick the app. Its page shows the notifications it sends and what each one will do.
3. Press **Connect**.
4. Press **Add the shortcut**, then **Add Shortcut** in Shortcuts. The shortcut is called
   **From** and the app's name, followed by **via Routine Run**.
5. In Shortcuts, open that shortcut and turn on its automation. A shared shortcut
   always arrives with it turned off, and only you can turn it on.

The app's page says when the first notification reaches Routine Run. If it says
nothing heard yet, check that the automation is on.

## What it does with a notification

The shortcut decides nothing. It hands over the app's name and the notification's
title and message. Routine Run reads them with the app's rules, in order, and the
first rule that matches decides:

- **Names one of your routines → starts that routine.** This is the rule most apps
  start with. Name a task in Structured, a habit in Streaks or a to-do in Things after
  one of your routines, and its reminder starts it. Whole words only, so a routine
  called **Read** does not start on "ready".
- **Moves the run that is going on**: one step forward, as Next would.
- **Writes a value on the run**: the number or words the rule picked out.
- **Lets it pass**: nothing happens.

A notification no rule matches does nothing. Every one is written in
**History › Decisions**, with what was decided and why.

## Making a rule from a notification

Open the notification in **History › Decisions** and press **Make a rule from this…**

1. Tap the words that change from one notification to the next, such as a task's name,
   a number or a time.
2. Choose what it should do.

The new rule goes first, so it wins over the older ones. Rules are listed, reordered
and deleted under **Edit the source** on the app's page.

**Any app** works for an app that is not in the list. Connect it, and in its shortcut
choose which apps it listens to. Then make rules from what they send.

## When it does not start

- **Nothing in History › Decisions.** The automation is off, or the phone is on
  iOS 26. Turn it on in Shortcuts.
- **"None of the rules matched".** The notification said something the rules do not
  expect. Make a rule from it.
- **"Nothing is going for it to act on".** A rule that moves a run fired while no run
  was going.

Notifications are read on the phone, and nothing is sent anywhere.
