---
name: routine-run
description: Write a routine for the Routine Run iPhone app, in the JSON form the app reads, when somebody asks for a routine, checklist or runbook "for Routine Run" or to paste into it.
---

# Writing a routine for Routine Run

> Routine Run is an iPhone and Apple Watch app that walks somebody through a routine one step at a time. When somebody asks you to write a routine for it, this is how. What follows is word for word the request the app itself sends to an assistant, written in the voice of the person asking. Follow it, and ask them what the routine is for if they have not said.

I use an iPhone app called Routine Run. It walks me through a routine step by step. Please write me a routine for it, in the form below, so I can paste your answer straight into the app.

REPLY WITH ONE JSON OBJECT in a single code block, and nothing inside the block but the JSON — no comments. Anything you want to tell me goes after the block.

AFTER THE BLOCK, say in a sentence or two what you made and anything you had to assume. Then remind me to copy the JSON and open https://routinerun.com/w on my phone. That opens the app on the page that reads it, with what I copied already in it, and it shows me what would change before anything is written.

THE FORM (version 1):
- "routineRun": 1 — always.
- "name": what the routine is called.
- "about": one or two sentences on what it is for. If a step needs something the app cannot do by itself — a shortcut I have to make, an app I need — say so here.
- Every "about" is Markdown, drawn as such: **bold**, *italic*, a list ("- " or "1. " lines, separated by \n), and [links](https://…), which are tappable. Reach for a list where the step is a handful of things to check or bring; plain sentences otherwise. No headings, tables or pictures.
- "symbol": an SF Symbols name, like "sunrise" or "timer". Leave it out if unsure.
- "colour": one of red, orange, yellow, green, mint, teal, blue, indigo, purple, pink, brown, grey. A colour already written as a hex, like "#2E7D4F", is one I chose: keep it exactly as it is.
- "values": optional named values the routine keeps, as "name": value — words, a number, true or false, or a link.
- "steps": the steps, in order. Each has "title" (what to do, as an instruction), and may have "about" (how or why, and the tip that saves a beginner — a sentence or three, or a short list), "symbol", "colour", "minutes" (if it runs on a clock), "times" (if it is done more than once), "values", "does" (actions that happen when the step is reached), "buttons" (actions that wait for me to press them; give each a "title" beside its word, like {"set": {"key": "a14", "to": "ok"}, "title": "Got it"}, when two would read the same, and "onNext": true beside one that pressing Next on the step should press too — the button at the end that asks for the next one) and "links".
- "runName": for a routine with several runs going at once, what each is called, naming a value — "Due diligence: {param:company}" — so the runs read "Due diligence: Acme" rather than "Due diligence 3".
- A step's "title" and "about" may name one of the routine's "values" as {param:name}, for what is only known on the day — "Go to window {param:window}" reads "Go to window 7" once the run is told 7, and "…" until then. Give the value in the routine's "values", empty if nobody knows it yet.
- "links" on a step: things worth opening while doing it — a how-to video, a recipe, a map — as [{"title": "Fixing a dripping tap", "url": "https://…"}]. Only links you are sure exist. For a video, a YouTube search link (https://www.youtube.com/results?search_query=…) is better than a video you cannot check.
- "by" on a step: "09:00" if it has to be FINISHED by then — being somewhere, a call, a deadline. Give that step its "minutes" too: it begins at "by" less its minutes, whatever I am doing, and an alarm tells me. Anything still in front of it is skipped unless its "late" says otherwise.
- WHEN I GIVE A TIME THE WHOLE ROUTINE HAS TO BE DONE BY — "finish by 11:30", "out of the door at nine" — give EVERY step a "by", not only the last: the last step's is that time, and each one before it is the next step's "by" less the next step's "minutes". With 20 minutes of breakfast and 15 of getting ready for work done by 11:30, breakfast is by 11:15 and getting ready by 11:30. Otherwise only the last step knows the clock, and the rest run late without a word.
- "startBy" on a step: "08:30" if it is only worth doing when begun by then, like coffee before leaving. After that time it is skipped.
- "by" can also be a whole date, "2026-10-03 13:00", for a deadline on another day — a report due Friday. A routine with a date in it is for once, so say so after the block: I will start it rather than keep it.
- "day" on a step: 2 means "by" or "startBy" is on the second day of the run, for a routine that takes more than a day — the tap washer on the second evening. Counted from the day I start it, so it works every time.
- "byValue" on a step, instead of "by": a deadline counted from a date in "values" — {"value": "appointment", "days": -3} is three days before it. Put the date itself in "values" as "appointment": "2026-10-06 10:00". This is how a routine I run again and again can have deadlines: each time, only the date changes.
- "byDate" on a step, instead of "by": a deadline counted from a named date several routines share, like a trip — {"date": "Departure", "days": -1, "hours": 19} is seven in the evening the day before. Name each date once in "dates" with its day: [{"name": "Departure", "on": "2026-11-14"}] — or without "on" if I have not fixed the day yet: everything waits and starts once I set it. If I already have a date by that name, mine is used and keeps its day, so moving my trip moves every step counted from it. Use "byDate" when what I said hangs off an event — a trip, a launch, a move — rather than off a run.
- "startsFrom": optional, when it should offer to start counted from a named date: [{"date": "Departure", "days": -3, "at": "19:00"}], or in minutes from the date's own time: {"date": "Go out", "minutes": -120} is two hours before.
- "followUp" on a step: how I usually put this step down when I am waiting on somebody — {"days": 2, "at": "10:00", "workdays": true, "soonerIf": "reply"} comes back in two working days at ten, or as soon as something arrives with "reply" in it. Only that step is put aside; the rest of the run goes on. Add "wholeRun": true only when nothing after it can be done without the answer. Give it to a step that sends a message, an application or a request; leave it out everywhere else.
- "asksWhatToKeep": false for a routine that is a list of errands rather than a template — today's jobs, this week's shopping, a one-off plan. Left out, a run of it asks at the end which of the things it collected belong to the routine from now on, which is the point of a routine I keep improving and a chore with one answer for a list of errands. Decide it from what I described rather than asking me.
- "byMinutesFromStart" on a step, instead of "by": minutes after I start the run that the step has to be done by — 60 for "be there an hour after I set off". Use it whenever what I said was about how long the whole thing takes rather than about the clock: written as a time of day, that routine is late from its first second every morning I start it five minutes behind.
- "late": optional, with "by" or "startBy": "skip", "keep" (do what was in the way afterwards) or "ask" (just tell me, move nothing). Left out, a time of day skips and anything with a date or a day asks.
- "tellMe": optional, how the time reaches me: "alarm", "notification", "calendar" (an event in my day) or "reminders" (a reminder with a box to tick). Left out, a "by" on a time of day rings an alarm and everything else is a notification. For a deadline days off, "reminders" is usually what I want.
- "warnHours": optional, how many hours ahead to tell me as well — 24 for the day before, 0 for never. Left out, anything more than a day off is said the day before.
- "rounds": optional, for steps that repeat as a group: {"from": 2, "through": 3, "times": 4}, counting steps from 1. Leave "times" out to go round until I stop.
- "times": optional, when it should offer to start: [{"at": "07:00", "days": ["mon", "fri"]}]. Days are mon, tue, wed, thu, fri, sat, sun; leave "days" out for every day.
- "order": optional, for a routine somebody else walks from a code — a car handed over, a visit to a counter: "inOrder" lists every step but opens only the one in hand, with no Later; "oneAtATime" shows only what is done and the step in hand. Leave it out for anything I walk myself.
- "waitsOut": true on a step with "minutes" when Next should wait until they are up — photos that have to be taken, a mask left on. Leave it out everywhere else.
- "severalAtOnce": true only if two runs of it can sensibly be going at once.
- "once": true if this happens once — a plan for today, a one-off job, a trip. When its run is finished it goes to the archive rather than staying among my routines. Leave it out for anything I will do again.
- "staysOpen": true for a list that is never done — things to read later, to watch, an inbox. It waits when it is empty instead of finishing, and I send things to it from the share sheet. It can have no steps at all: its steps are what I send it.
- "nudge": optional, only with "staysOpen": the time of day, like "18:00", it tells me once how much is waiting in it. Leave it out unless I ask to be reminded.
- "tags": optional, one to three words I file routines under, like ["Morning", "Home"]. Use a word I have used; otherwise leave it out rather than inventing a filing system for me.

THE ACTIONS, and these are the only ones — each is one word and what it is about:
- {"shortcut": "Name of a shortcut"} or {"shortcut": {"name": "Focus On via Routine Run", "input": "Work"}} — runs a Shortcuts shortcut by its exact name, handing it the input if there is one
- {"open": "https://example.com"} — opens a link
- {"say": "Words to say"} or {"say": {"text": "idempotent", "lang": "en-US"}} — says the words out loud, in my phone's language unless "lang" names another
- {"copy": "Text"} — puts the text on the clipboard
- {"note": "What to write down"} — asks me to write a note, with this as the prompt
- {"count": "reps"} — adds one to a number value
- {"set": {"key": "mood", "to": "calm"}} — sets a value
- {"add": {"key": "water", "number": 250}} — adds a number to a value
- {"addLine": {"key": "log", "text": "Done"}} — adds a line to a text value
- {"now": "startedAt"} — sets a value to the current moment
- {"howLong": "plankTime"} — keeps how long this step took
- {"run": "next"} — moves the run on: next, pause, finish or stop
- {"webhook": {"url": "https://example.com/hook", "method": "POST", "headers": {"Authorization": "Bearer {secret:example}"}, "body": {"run": "{instance}", "step": "{step}"}}} — sends a request to a server; method is GET, POST, PUT or DELETE, POST if left out
- {"event": {"title": "Focus", "in": 0, "minutes": 50}} — puts an event in my calendar, starting in so many minutes and lasting so many
- {"reminder": {"title": "Send the invoice", "in": 60, "list": "Work"}} — adds a reminder to Reminders, due in so many minutes
- {"alarm": {"title": "Tea is ready", "in": 4}} — rings an alarm in so many minutes
- {"scene": "Movie night"} — runs a Home scene by its exact name
- {"health": {"log": "water", "amount": 250}} — writes to Health: water (ml), mindful (minutes) or weight (kg)
- {"homeassistant": {"call": "light.turn_off", "entity": "light.living_room"}} — calls a Home Assistant service; "data" adds fields, "address" is where it answers if not homeassistant.local
- {"slack": {"text": "{instance} is done"}} — posts to a Slack channel through its incoming webhook
- {"ntfy": {"topic": "my-topic", "text": "Time to leave", "title": "Routine Run"}} — pushes a message through ntfy, to a topic I name
- {"pagerduty": {"action": "acknowledge", "key": "{param:incident}"}} — triggers, acknowledges or resolves a PagerDuty incident; trigger needs a summary
- {"ifttt": {"event": "leaving_home", "values": ["{instance}"]}} — fires an IFTTT webhook event with up to three values
- {"discord": {"text": "{instance} is done"}} — posts a message to a Discord channel through the channel's webhook
- {"googlechat": {"text": "{instance} is done"}} — posts a message to a Google Chat space through its webhook
- {"healthchecks": {}} — tells a Healthchecks.io check that this happened, so it can say when one day it did not
- {"pushover": {"text": "{instance} is done"}} — pushes a notification to your devices through Pushover; "title" may be left out
- {"telegram": {"chat": "123456789", "text": "{instance} is done"}} — sends a message from your own Telegram bot to a chat you name
- {"zapier": {"text": "{instance} reached {step}"}} — starts a Zap that begins with Webhooks by Zapier, Catch Hook, handing it the run, the step and a message; "text" may be left out

TIMES I HAVE TO KEEP. If I mention being somewhere at a time, leaving at a time or finishing by a time or a date, put it on the step as "by", "startBy", "byValue" or "byDate" — never only in "about". That is what makes the app wake me, warn me the day before, and drop what does not fit.

ASK FIRST if something that changes the steps is unclear — what time I have to be somewhere, how long the travel is, what I already have. Up to three short questions, then the JSON once I answer. If it is clear, write it straight away.

WHAT REACHES PAST MY PHONE. A webhook, an event, a reminder, an alarm, a Home scene and a Health entry each arrive switched off: nothing is sent or written until I have looked at it in the app and said Allow. So write them where the routine needs them. The one exception: on a run you start for me, a button whose webhook I have allowed for you from now on works at once, "onNext" or not — so for a webhook I use every day keep the address, the method and the secret names exactly as before, and change only the body. Never put one in "does": a webhook that goes when the step is reached always waits for my Allow. Never put a password, a token or a key in one — write {secret:short-name} where it goes and tell me after the block which secrets to add; I paste each one in once, on my phone. Only name a Home scene I have told you I have, and only name a shortcut I have told you I have or one of these, which the app offers to add in one tap — use them rather than inventing one:
- "Focus On via Routine Run": Turns on the Focus it is given by name, or Do Not Disturb if none, until it is turned off. Input: the name of a Focus that exists on the phone, like Work — or nothing, for Do Not Disturb.
- "Focus Off via Routine Run": Turns off whichever Focus is on.
- "Do Not Disturb For via Routine Run": Turns on Do Not Disturb for as many minutes as it is given, thirty if none. Input: a number of minutes.
- "Low Power On via Routine Run": Turns Low Power Mode on.
- "Low Power Off via Routine Run": Turns Low Power Mode off.
- "Volume via Routine Run": Sets the volume to the percentage it is given, fifty if none. Input: a percentage, 0 to 100.
- "Brightness via Routine Run": Sets the screen's brightness to the percentage it is given, fifty if none. Input: a percentage, 0 to 100.
- "Play Playlist via Routine Run": Plays an Apple Music playlist by name, shuffled. Input: the playlist's exact name.
- "Start Timer via Routine Run": Starts a timer in Clock for the minutes it is given, twenty-five if none. Input: a number of minutes.
- "Wi-Fi Off via Routine Run": Turns Wi-Fi off.
- "Bluetooth Off via Routine Run": Turns Bluetooth off.
- "Airplane Mode On via Routine Run": Turns Airplane Mode on.
- "Airplane Mode Off via Routine Run": Turns Airplane Mode off.
- "Open App via Routine Run": Opens any app on the phone by its name, including the ones with no link to open them by. Input: the app's name as it reads on the Home Screen, like Notes or Spotify.
A webhook's body can use the same placeholders as anything else a step says: {instance}, {step}, {stepNumber}, {state}, {param:key}. For Home Assistant, Slack, ntfy, PagerDuty, IFTTT and every other service in the list above use its own word rather than "webhook": the app knows their addresses and asks me for the key, so you never have to guess either. A second channel of the same service is the same word with "secret" naming its own key, like "secret": "discord-team".

MAKE IT WORTH HAVING. On a step somebody could get stuck on, put the one tip that matters in its "about" and a link to a how-to — a video search for the exact job is better than a guess. LEAVE "minutes" OUT unless I give a length or the step is timed by its nature — a plank, tea steeping, a focus block — or it has a "by". A step with minutes runs a timer and rings when it ends, which on "pack the bag" is only noise; most steps have none. If I mention a time, a deadline or an appointment, it goes on the step as "by", "startBy", "byValue" or "byDate". If what I describe is a list I keep adding to — reading, watching, things to deal with — make it "staysOpen".

KEEP IT SMALL. Steps are instructions a person reads while doing them: short titles, one idea each. Most routines are four to eight steps.

GIVE EVERY STEP A "symbol", an SF Symbols name that fits what the step is — "cup.and.saucer" for tea, "shower" for a shower, "figure.walk" for a walk. A step's mark is how it is recognised at a glance on the lock screen and the watch.

WRITE IN MY LANGUAGE: the name, the about, every title and every tip, in the language of what I wrote below — not in the language of these instructions.

EXAMPLES, two from routines the app ships with and one against the clock:

```json
{
  "about" : "Its timers reach you with a card; set one to wake you if the phone will be face down.",
  "colour" : "orange",
  "name" : "First half hour",
  "routineRun" : 1,
  "steps" : [
    {
      "minutes" : 1,
      "title" : "Water, before coffee"
    },
    {
      "about" : "Neck, shoulders, hips. Long enough to count, short enough that you do it.",
      "minutes" : 3,
      "title" : "Move for three minutes"
    },
    {
      "about" : "Not the inbox. The inbox is somebody else's list of what your morning is for.",
      "title" : "Read only what you chose to read"
    },
    {
      "about" : "One. A morning that produces three is a morning that produced none.",
      "title" : "Name the one thing today is about"
    }
  ],
  "symbol" : "sunrise",
  "times" : [
    {
      "at" : "07:00",
      "days" : [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri"
      ]
    }
  ]
}
```

```json
{
  "about" : "Twenty-five minutes, five off, four times, then a long one. Its timers reach you with a card; set one to wake you if the phone will be face down.",
  "colour" : "pink",
  "name" : "Pomodoro, four rounds",
  "rounds" : {
    "from" : 2,
    "through" : 3,
    "times" : 4
  },
  "routineRun" : 1,
  "steps" : [
    {
      "about" : "One line. The rounds are cheap; deciding what they are for is the part that gets skipped.",
      "title" : "Write what the four rounds are for"
    },
    {
      "about" : "Twenty-five minutes on that one thing. Anything else that comes up gets written down, not done.",
      "minutes" : 25,
      "title" : "Focus"
    },
    {
      "about" : "Away from it. The round after a break you skipped is the round that goes badly.",
      "minutes" : 5,
      "title" : "Five off"
    },
    {
      "about" : "Fifteen minutes, and away from the desk for them.",
      "minutes" : 15,
      "title" : "The long one"
    }
  ],
  "symbol" : "timer"
}
```

```json
{
  "about" : "Out of the door in time for nine, with whatever does not fit dropped on the way.",
  "colour" : "orange",
  "name" : "School run",
  "routineRun" : 1,
  "steps" : [
    {
      "minutes" : 5,
      "startBy" : "08:20",
      "title" : "Make coffee"
    },
    {
      "about" : "Lunch, water bottle, homework folder.",
      "links" : [
        {
          "title" : "Packing list",
          "url" : "https://www.youtube.com/results?search_query=school+bag+packing+checklist"
        }
      ],
      "minutes" : 10,
      "title" : "Pack the bag"
    },
    {
      "by" : "09:00",
      "minutes" : 25,
      "title" : "Drive to school"
    },
    {
      "minutes" : 20,
      "title" : "Back home"
    }
  ],
  "symbol" : "figure.and.child.holdinghands"
}
```

IF YOU CAN READ THE WEB, read these before you answer, rather than guessing: https://routinerun.com/llms-full.txt is the Routine Run method, the ideas every routine here is meant to follow, as plain text; https://routinerun.com/help is how each part of the app works. If you cannot, carry on without them.

## If you are connected to their phone (the Routine Run MCP server)

Read before you write, and ask in the chat — one message, with choices where there are any ("by 9:00 or 9:30?"), and a default they can leave ("otherwise 25 minutes").

**Starting a run.** 1) list_routines: severalAtOnce says whether a second start is a second run, startsWith lists the values its name and steps need. 2) list_runs: a routine that runs one at a time and is going is carried on, not started again. 3) Any startsWith value the chat has not given: ask — or, if they would rather answer on the phone, start with ask_first and leave it out, and Start on the phone asks. 4) start_run with values, and a name when several are going. 5) Go on with the run id the answer gives. restart only when they asked to start over.

**Writing a routine.** list_routines and find_starter_routine first: offer to change one that is close, or a starter, rather than write a second. Ask only what changes the steps — a time to keep, which of their shortcuts or Home scenes, whether a step does something or only reminds, one run or several at once. Never invent tags, scenes, shortcuts or links. Then propose_new_routine.

**Changing a routine.** get_routine, whole. Name steps by number and title from it. Ask only if the change reads two ways ("after step 3, or at the end?"). One step on a list: add_step. Anything else: propose_routine_change with the whole routine, "was" left as it is on every step that was there.

**After a run.** get_run and get_history; suggest at most three changes, each with the reason from what happened. Change nothing without proposing it.