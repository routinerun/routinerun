# Place and Focus

A routine can offer itself when you arrive somewhere or leave, and a Focus can start, pause or stop routines as it comes on. A place puts a card up and you tap it to start. A Focus acts through a **Focus rule**. Both work on iOS 26.1.

## Arriving or leaving

Open the routine, press the plus, then **Trigger**, and choose one of two:

- **At a place.** Choose a place, then **When**: **Arriving** or **Leaving**. iOS watches the place for the app, so location while using the app is enough. It can be minutes late, and now and then it misses one. iOS allows twenty of these for the whole app.
- **When you settle somewhere.** Noticed once you have stayed a while, so it is late on purpose: good for "got to work", no use for "passing the shop". It needs Always access to your location. **Ask for permission** is on the trigger. There is no limit on how many.

When it fires, a card goes up with the routine's name and a button. Press it to start. Arriving is always a notification, whatever **Reaches you** says elsewhere.

**Needs iOS 27** for a place to start a routine with no tap at all. It goes through [the bridge](in-the-background.md).

Places are named once and used everywhere: **More → Data → … → Set up → Places**. **Know when I am at one**, on that screen, lets a step come back or a planned run begin when you are at one. It needs Always access too.

## Focus

A Focus reaches the app only through its Focus filter, and the filter wears a **Focus rule**. Make one in **More → Data → … → Set up → Focus rules**:

- **Shown in the app**: which routines the lists show while it is on.
- **May interrupt**: which routines may still reach you. iOS drops the rest.
- **Acts on**: routines to act on, with **Does what** (**Start it**, **Pause it**, **Resume it**, **Next step**, **Stop it**) and **When it ends**.
- **Fires**: triggers made with **When a Focus changes**. Tick the ones this Focus sets off. Each fires as the Focus comes on or goes off, whichever it was written for, and offers what it always offers: a card, or a shortcut for your automation.

Then put the rule on a Focus. **Put it on a Focus…** asks which one, using a one-step shortcut you add once. Or choose it under **Rule** in iPhone Settings → Focus → the Focus you mean → Focus Filters → Routine Run.

## When something goes wrong

- **A place never fires.** Check Routine Run in iPhone Settings → Privacy & Security → Location Services.
- **A Focus does nothing.** Each Focus needs its own filter. **More** in the app says when the filter last ran.
- **A "When a Focus changes" trigger never fires.** It fires only from a Focus rule that ticks it under **Fires**, and only once that rule is on the Focus. A trigger that is off, or has nothing to do, is not offered there.
- **With iCloud, only one device reacts.** On purpose: see [iCloud sync](icloud-sync.md).
