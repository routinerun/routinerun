# A step did not fire

When a run reaches a step, the actions set to run on arrival are done and the rest wait for a press. If something did not happen, the run's history usually says why: open the run, press **Arrange sections…** at the foot, and tick **History**.

## Was it meant to run by itself?

Open the step, then the action. Under **When it runs**, **Set off by** says which:

- **When the run arrives:** done as the run reaches the step.
- **Only when I press it:** a button on the step, its notification and the Lock Screen card, and nothing until it is pressed.

An action can also be kept for one round, such as the third time through. An orange line on the action says when it will never run.

## A shortcut that did not run

iOS lets one app open another only when you ask. So a shortcut usually becomes a **Run** button on the step and its notification, and the history says "Waiting for you to run it".

**Needs iOS 27.** A shortcut runs by itself only through the bridge: the Routine Run Bridge shortcut, plus an automation, **When I get a notification from Routine Run**, set to run immediately. See [Answers in the background](in-the-background.md). On iOS 26 a shortcut always waits for your press.

A step calls a shortcut by name, so one renamed or deleted in Shortcuts no longer answers. In **More › Data**, the ellipsis, **Set up**, **Shortcuts** lists the ones the app knows, marking any "not on this phone" or "did not run last time".

## Nothing arrived at all

- **Notifications are off.** **More › Diagnostics** in the app says "Not authorised". Turn them on in the Settings app, **Apps › Routine Run › Notifications**.
- **A Focus held it back.** A Focus can silence the app, and Routine Run's own Focus filter can hide routines. See [Place and Focus](place-and-focus.md).
- **The routine is turned off.** Nothing starts it on its own.
- **The run is paused.** Nothing moves until you press **Paused** on the run's page.

## The timer ran out and the run did not move

A timer tells you. It moves the run only if the step says so: its **Settings**, **When it runs out**, **Move on by itself**.

Even then, iOS lets no app act at an exact moment. The reminder arrives on time, and the move and its actions happen the next time the app is awake. See [On time with a locked phone](on-time-with-a-locked-phone.md).

## With iCloud on

Each automatic thing is done by one device. **More › iCloud › This device** says whether this one puts up cards at a routine's moments and notices where you are. A run's timers are kept by the device that last moved it. See [iCloud sync](icloud-sync.md).

## Anything else

A web request with no answer gives up after 15 seconds, and a Home scene needs that home on this phone. The history names either. For events from another app, such as a page, see [On call](on-call.md).
