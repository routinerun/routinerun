# Describe it: getting an AI to write for you

Say what you want in a sentence, and a model writes it. You look it over before anything
is kept.

## Where to find it

Every place that can be written by an AI has a **Describe…** item, first in its menu:

- **New routine:** the plus in the middle of the tab bar, then **Ask an AI to write it**.
- **Change a routine:** the routine's ellipsis, **Describe changes…**
- **Change one step:** the step's ellipsis, **Describe changes…**
- **Add to a routine or a run:** the plus on its page, **Describe it…**
- **After a run:** the run's ellipsis, **Describe what to change…**
- **What a run collected:** the review page, **Sort these out**
- **Notes:** the notes page, **Deal with these notes**
- **Triggers:** the Triggers tab, **Describe it…**

They all open the same page.

## The page

1. **Say what it is for.** One sentence is enough: "A morning: water, ten minutes of
   stretching, a shower".
2. **Write it.** The name beside the button is who writes it. Tap the name to choose
   another. See [Who writes it](who-writes-it.md) for what it starts on.
3. **Or continue with an assistant.** Sends the request to Claude, the ChatGPT app or any
   other assistant through the share sheet. Say what you want there if you did not say it
   here. When it answers, copy the whole answer and come back.
4. **Or paste.** **Paste its answer** takes what you copied, words around it and all. When
   you come back with something new copied, the button says **Paste what you just
   copied**. **Type the steps yourself…** opens a box for a list, one step a line.

![Describe changes on a routine, before anything is written.](describe)

## What comes back

The answer is never shown as code. You see what it made:

- **A new routine:** its name, the first steps, and three buttons. **Keep it** puts it in
  Routines. **Start it** walks it once, and the run asks at the end whether to keep it.
  **Look it over** shows every step, and every link or shortcut it would use, before you
  decide.
- **Changes to a routine:** how many, and **Look over the changes**, which shows each one
  before it is applied. A change can be undone.
- **Answers about a run:** what to keep and what was only for that run, and **Look over
  the answers**.
- **Triggers:** each trigger it wrote, to add one by one.

If the answer cannot be read, the page says why in a sentence. **Try again** sends the model
the reason and what it wrote. **Copy this for your assistant** is for an answer from a chat,
so you can paste the reason back to it.

## What an assistant can and cannot put on a step

It can write names, descriptions, tips, tags, a colour and a symbol, links,
shortcuts to run, and triggers. It can also write the things that reach past your phone:
a webhook, a calendar event, a reminder, an alarm, a Home scene or a Health entry.

Those arrive **switched off**. Each one is marked orange on its step and does nothing, not
on arrival and not as a button, until you open it, see where it goes and what it sends,
and press **Allow**. **Remove** takes it off the step instead.

For Home Assistant, Slack, ntfy, PagerDuty and IFTTT it writes what to do there, a
Home Assistant call like `light.turn_off` or a message for Slack, and the app knows the
address. The step then says "Home Assistant: light.turn_off" rather than an address.

An assistant never sees a password or a token. It writes `{secret:name}` where one goes,
and the step asks you to paste the value once. It is kept in this phone's keychain and
never leaves it: not in an export, not in a shared link, and not in anything an assistant
is shown.

## A timer on a step you did not want

A length on a step makes it count down and ring. Models are asked to leave it off unless
you give one, but if a step has one you do not want: the step's **⋯ → Take the timer off**.
