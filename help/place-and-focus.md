# Place and Focus

A routine can offer itself when you arrive somewhere or leave, and a Focus can start, pause or stop routines as it comes on. A place puts a card up and you tap it to start. A Focus acts through a **Focus rule**. Both work on iOS 26.1.

## Arriving or leaving

Open the routine, press the plus, then **Trigger**, and choose one of two:

- **At a place.** Choose a place, then **When**: **Arriving** or **Leaving**. iOS watches the place for the app, so location while using the app is enough. It can be minutes late, and now and then it misses one. iOS allows twenty of these for the whole app.
- **When you settle somewhere.** Noticed once you have stayed a while, so it is late on purpose: good for "got to work", no use for "passing the shop". It needs Always access to your location. **Ask for permission** is on the trigger. There is no limit on how many.

When it fires, a card goes up with the routine's name and a button. Press it to start. Arriving is always a notification, whatever **Reaches you** says elsewhere.

**Needs iOS 27** for a place to start a routine with no tap at all. It goes through [the bridge](in-the-background.md).

Places are named once and used everywhere: **More → Places**. **Know when I am at one**, on that screen, lets a step come back or a planned run begin when you are at one. It needs Always access too.

## Focus

A Focus reaches the app only through its Focus filter, and the filter wears a **Focus rule**. Make one in **More → Focus rules**:

- **Shown in the app**: which routines the lists show while it is on.
- **May interrupt**: which routines may still reach you. iOS drops the rest.
- **Acts on**: routines to act on, with **Does what** (**Start it**, **Pause it**, **Resume it**, **Next step**, **Stop it**) and **When it ends**.
- **Fires**: triggers made with **When a Focus changes**. Tick the ones this Focus sets off. Each fires as the Focus comes on or goes off, whichever it was written for, and offers what it always offers: a card, or a shortcut for your automation.

Then put the rule on a Focus. **Put it on a Focus…** asks which one, using a one-step shortcut you add once. Or choose it under **Rule** in iPhone Settings → Focus → the Focus you mean → Focus Filters → Routine Run.

## A Focus rule without a Focus

A rule can also be turned on in the app, with no Focus of the iPhone's at all:

- The moon in the corner of **In hand**, or **Focus…** in the **⋯** menu of Routines, Runs or Steps. Pick a rule and how long: until you turn it off, an hour, three hours, or until the end of today.
- **Focus on** a tag: swipe right on it in **More → Tags**, or press and hold it for **Focus on** or **Everything but**.
- **Add to a Focus…** in a routine's or a run's **⋯** menu: **Only this, now**, **Everything but this, now**, a **New rule…** with it in, or **Shown** or **Hidden** in each rule you have. A run is in a rule through its routine. A run whose routine was only made for it is added on its own.
- **Several at once**: in Routines or Runs, **⋯ → Select**, tick them, and press **Focus…** in the bar at the foot. A rule that says different things about them says **Some**, and an answer is given to all of them. **Only these** and **Everything but these** ask for the rule's name first, filled in with what their names begin with. **Tag…** beside it puts a tag on all of them: a tick means every one has it, a dash means some do, and pressing it gives it to all or takes it from all.
- Swipe right on a rule in **More → Focus rules**.
- **Turn On a Focus Rule** in Shortcuts, so a Control Center control or the Action button can do it too.

A rule can leave things out as well as keep them: **Hidden in the app** on its page. Hidden wins over shown, and a rule that only hides keeps everything else.

Turned on this way, a rule narrows the lists, the widgets and the watch, and nothing else. Whatever is going keeps going, and what may reach you is still up to your iPhone's Focus. It stays on with the app closed. The capsule over each list says which rule is on. Tap it to see everything for a while; press and hold it for **Another rule…** or **Turn off the Focus**.

The switcher at the foot of Routines, Runs and Steps shows up to three of your rules and **…** for every rule. Press a rule to turn it on, and press it again to turn it off; the one that is on is filled in its colour. Press and hold a rule for its name. Rules that share a mark appear one at a time: the one that is on, or the one you used last. **Keep as a Focus** in the filter sheet turns what you narrowed to into a rule.

When a Focus of your iPhone's wears a rule, a rule you choose in the app goes over it, and turning that off goes back to the iPhone's. Pressing that rule off shows everything until the Focus ends, and pressing it again goes back to it.

## When something goes wrong

- **A place never fires.** Check Routine Run in iPhone Settings → Privacy & Security → Location Services.
- **A Focus does nothing.** Each Focus needs its own filter. **More** in the app says when the filter last ran.
- **A "When a Focus changes" trigger never fires.** It fires only from a Focus rule that ticks it under **Fires**, and only once that rule is on the Focus. A trigger that is off, or has nothing to do, is not offered there.
- **With iCloud, only one device reacts.** On purpose: see [iCloud sync](icloud-sync.md).
