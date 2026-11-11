# Connections: other apps' notifications

One file per app Routine Run can hear from. A connection says what that app's
notifications look like and what each one means: start a routine, move the run that is
going, write a value on it, or let it pass. The app is built with these files; nothing is
fetched from a phone. Each has a page at [routinerun.com/apps](https://routinerun.com/apps).

## How a notification gets to Routine Run

Since iOS 27, a shortcut can start itself when a notification arrives from an app you name.
Each connection comes with a shortcut called `From <App> via Routine Run` that does two
things: its trigger listens to the app, and Routine Run's **Handle Event** gets the
notification's App, Title and Body. The shortcut decides nothing. The rules below do, inside
Routine Run, so a rule can change without anybody reinstalling anything, and every decision
is written down in History › Decisions.

A shared shortcut arrives with its automation turned off. Turning it on in Shortcuts is the
one step nobody else can take for you. How to set one up: [routinerun.com/help/connect-an-app](https://routinerun.com/help/connect-an-app).

## The file

| field | what it is |
|---|---|
| `id` | lower case, one word: the file name and the page address |
| `app` | the app's name exactly as Shortcuts reports it on a notification; empty only for `any` |
| `kind` | `any`, `planner`, `habits`, `tasks`, `oncall`, `home`, `chat` |
| `shortcut` | the iCloud id of the published `From <App> via Routine Run`, once there is one |
| `bundleID`, `teamID` | what a Shortcuts trigger names the app by |
| `summary` | one sentence: what happens |
| `rules` | read in order; the first that matches decides |
| `starter` | optional: the id of a routine the app ships, added with the connection |
| `samples` | real notifications and what each must come to. Every one is run through the app's own handler before a build |
| `inApp` | the other direction: what the app's own Shortcuts actions can do from a step |
| `verified` | `true` only when the samples were read off a phone. Only verified connections are offered in the App Store build |

### Rules

`when` is one of:
- `"anything"`;
- `{"kind": "contains", "text": "words"}`, which ignores case and accents;
- `{"kind": "pattern", "text": "regex"}`, whose first capture group is the value;
- `"namesARoutine"`: the text has the name of one of the person's routines, as whole words, longest name first.

`in` is `title`, `body` or `both` (the default).

`does` is one of:
- `{"kind": "start", "routine": "<routine id>"}`;
- `"startNamed"`: the routine the text named;
- `"next"` or `{"kind": "next", "routine": "<routine id>"}`: moves the going run on one step;
- `{"kind": "setValue", "key": "key", "routine": "<id>"}`: writes the match onto the going run;
- `"ignore"`.

A rule matches the person's own words — a task, habit or routine name — rather than the
app's wording around them, because the app's words are translated into the phone's language
and a rule written against "starts in 5 minutes" stops matching in German.

## Helping with one

Most of these have samples that were guessed, not seen (`"verified": false`). If you use
one of these apps, connect **Any app** in Routine Run, let a few notifications come in, and
send what History › Decisions shows through the
[connection form](https://github.com/routinerun/routinerun/issues/new?template=connection.yml). Leave out anything personal.

Licence: [CC0](../LICENSE-DATA).
