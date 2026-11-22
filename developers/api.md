# Developers

A connection is an HTTPS address that starts or moves a routine on one person's iPhone. It is made in the app, under Settings › Connections, and this page is what a script, a pager or an automation sends to it.

The OpenAPI file, the MCP registry entries, examples and a Claude Code plugin are also on [GitHub](https://github.com/routinerun/routinerun), which is where an issue about any of this goes.

## The address and the secret

Each connection has its own address and its own secret:

```
https://api.routinerun.com/v1/in/<connection id>
Authorization: Bearer rr_…
```

The secret is shown in the app, never by the relay, which keeps only a fingerprint of it. Every request below goes to the address with one of the paths after it, and a JSON body. Tools that already speak another format can send it as they are: see [From other tools](#from-other-tools).

There is no account and no API key for the whole service: an address reaches the one phone that made it, and nothing else. Removing the connection in the app stops the address at once.

## What you can send

| Request | Body | What the phone does |
|---|---|---|
| `POST /events` | `title`, and `body`, `source`, `externalId`, `routine`, `fields` if you have them. With no `title`, the first line of `body`, `message`, `msg`, `text` or `content` is the title; a body that is not JSON is the words themselves | What **Handle Event** does: the person's Sources decide which routine starts |
| `POST /runs` | `routine` — a name or an id; `name` and `values` (an object of key → value) for the run; `restart: true`; `askFirst: true` to wait for the person's OK | Starts that routine, or puts Start and Drop in In hand. A routine that runs one at a time and is already going answers `alreadyGoing` unless `restart` is said |
| `POST /runs` | `written` — a routine in the [written form](https://routinerun.com/llms-routine.txt) ([schema](https://routinerun.com/developers/written-routine.v2.schema.json)), and `askFirst` | Starts a run of those steps, kept out of Routines unless the person keeps it. `written` may be 30,000 characters, as with an assistant's `start_new_run`; what does not fit one push the phone fetches sealed |
| `POST /runs` | `routine` and `at` — an ISO 8601 moment to come; `name`, `values` and `askFirst` | Plans a run of that routine; it shows as Planned and begins then |
| `POST /runs/{run}/next` | `expectsStep` if you know it | Moves the run on, unless it has moved since |
| `POST /runs/{run}/pause`, `/resume`, `/stop` | nothing | Pauses, resumes or stops the run, as its own buttons do |
| `POST /runs/{run}/later`, `/last` | `expectsStep` if you know it | Puts the step in hand one place down, or at the end |
| `POST /runs/{run}/notes` | `text` | Writes a note on the run, at the step it is on |
| `PUT /runs/{run}/values/{key}` | `value` | Sets a value on the run |
| `POST /routines/{routine}/steps` | `title`, and `description` | Adds a step to a list that stays open |
| `POST /pagerduty` | a PagerDuty Webhooks V3 delivery, as sent | Reads the incident as an event |
| `POST /alertmanager`, `/grafana` | an Alertmanager or Grafana webhook notification, as sent | Reads a firing group as one event; a cleared one is heard and not passed on |
| `POST /v2/enqueue`, `/enqueue` | an Events API v2 event, as sent, with the secret as `routing_key` | Reads a trigger as an event; acknowledge and resolve are heard and not passed on |

### What you can read

| Request | What comes back |
|---|---|
| `GET /routines`, `?match=` part of a name | Each routine's id, name, step count, whether it stays open as a list (`staysOpen`), whether several runs of it can go at once (`severalAtOnce`), and the values a run of it needs (`startsWith`) |
| `GET /routines/{routine}` | Its `description`, its steps with theirs, its version and its written form |
| `GET /runs` | The runs going, and the step each is on |
| `GET /runs/{run}` | One run's steps, each done, in hand or ahead — never its notes or values |
| `GET /history`, `?days=` up to 92 and `?routine=` | Runs finished, stopped and going per routine, and the steps most often skipped or put off |

A read is answered by the phone, so it needs the phone reachable; one that does not answer in about 20 seconds is `504 phone_did_not_answer`.

A routine is found by its id, or by its name in any case. Two routines with the same name are neither.

What is read is said in the words of the written form 2 ([schema](https://routinerun.com/developers/written-routine.v2.schema.json)): a routine's and a step's words about themselves are `description`, as in the form. They were `detail`, and `detail` is said beside `description` until the first relay deploy after 15 December 2026, so a script that reads it has that long to move; `POST /routines/{routine}/steps` reads either. `written`, the routine whole, is in the form the phone itself reads, and a change is sent back in it as it came.

For example:

```
curl -X POST https://api.routinerun.com/v1/in/<connection id>/runs \
  -H "Authorization: Bearer rr_…" \
  -H "content-type: application/json" \
  -d '{"routine": "Morning"}'
```

## What comes back

Every request is answered at once with `202` and a command id:

```
{"command": "896ea5dc-1477-4edd-8a77-18333032f8f6", "accepted": true}
```

`202` means the relay handed it to Apple for the phone, not that it was done. The phone is the only place that knows the routines, so only the phone can say. Ask it:

```
GET /v1/in/<connection id>/commands/<command id>
```

`status` is one of the words below, and where the command started or found a run, `run` is its id — what `/runs/{run}/…` takes next:

```
{"command": "896ea5dc-…", "status": "done", "run": "3f0c2b1e-…"}
```

| Status | Meaning |
|---|---|
| `waiting` | The phone has not answered yet, or the answer is more than an hour old |
| `done` | Carried out |
| `refused` | The phone would not: a step that is not finished, a routine that runs one at a time, a policy |
| `tooOld` | Arrived after it stopped meaning anything |
| `runHadMoved` | A Next that expected another step |
| `alreadyDone` | The same command, again |
| `notFound` | No such routine or run on the phone |
| `alreadyGoing` | A start of a routine that runs one at a time, with a run of it going: nothing started or ended, and `run` is the one going |
| `daySet` | A date that had no day was given one, and everything counted from it is armed (`set_date`, below) |
| `linked` | A date linked to an event in the person's calendar or to a reminder, which moves only there, or one counted from another date, which moves only with it: nothing changed |
| `wrongKind` | A day given to a moment that happens, or a moment marked on a date that is a day: nothing changed |

## How long a command waits

A command is not done if the phone gets it after this long:

| Command | Waits |
|---|---|
| Next | 15 minutes |
| Start | 1 hour |
| Events, notes, values, steps, a date's day, a moment | 24 hours |

On iOS 27 with the Routine Run bridge, a command is carried out within seconds, with the phone locked. On iOS 26, or without the bridge, it is carried out when the person taps the notification or opens the app.

## Errors

| Status | `error` | Meaning |
|---|---|---|
| 401 | `secret_needed` | No `Authorization: Bearer` header, and on `/v2/enqueue` no `routing_key` either |
| 401 | `unknown_address_or_secret` | The connection is gone, or the secret is wrong |
| 400 | `title_needed`, `routine_needed`, `text_needed`, `summary_needed` | The body is missing what that request needs |
| 400 | `body_not_json`, `not_an_alertmanager_notification`, `not_an_events_v2_event` | The body is not what that path reads |
| 404 | `not_found` | No such path |
| 409 | `phone_has_no_push_token` | The phone has not been reachable yet |
| 410 | `phone_gone` | The app was deleted from the phone |
| 413 | `body_too_long` | Bodies are 3000 characters at most; 64 KB on `/events`, `/pagerduty` and the formats below, of which what reaches the phone is cut to fit a push, and on `POST /runs` with `written`, whose `written` may be 30,000 characters |
| 413 | `too_long_for_a_push` | A written run is longer than one push and the app on the phone is a version that cannot fetch the rest. Write it shorter, or update the app |
| 429 | `too_many_requests` | 60 a minute for each address |

An address belongs to the copy of the app that made it. When a different build replaces it on the phone — a TestFlight build over one from Xcode, or the other way round — the phone gets a new push token, and older addresses answer `410` or are accepted and never arrive. Make the connection again on the phone and use the new address and secret.

## MCP

The same connection, for an assistant: `https://api.routinerun.com/mcp`, Streamable HTTP without sessions. Sign-in is OAuth 2.1 with PKCE (S256), clients registered dynamically or named by a client metadata URL; the metadata is at `/.well-known/oauth-protected-resource/mcp` and `/.well-known/oauth-authorization-server`. Signing in shows a code the person types on their phone, or offers a demo library. How each assistant adds it: [Connect Claude, ChatGPT and others](https://routinerun.com/help/assistants).

| Tool | What it does |
|---|---|
| `list_routines`, `get_routine` | Names and step counts; one routine's description and steps, its version and its written form, in the same words as the reads above |
| `list_runs`, `get_run` | The runs going, and where each stands |
| `start_run`, `next_step`, `pause_run`, `resume_run`, `stop_run`, `put_off_step`, `add_note`, `set_value`, `add_step` | The requests above, waiting up to 15 seconds for the phone's answer |
| `add_note` with `step` | From 1.5: the note goes on that step of the run, by its number, title or id. On a step the run has not reached it waits, and the person is told on the Lock Screen when the run gets there — the forecast at seven, heard at the walk. An older phone is refused rather than given a note on the wrong step |
| `add_step_button` | Puts one button that waits on a going run's step: put it aside, a deadline, or a check-in, in the written form's words. The run's own, until the person keeps it |
| `get_history` | How the last few days went: runs finished, stopped and going for each routine, the steps most often skipped or put off — never notes or values |
| `propose_routine_change` | A routine whole in its written form, shown on the phone to be saved or dropped |
| `plan_run` | Plans a run of a routine for a moment to come; it shows as Planned and begins then |
| `how_to_write_a_routine`, `routine_link`, `find_starter_routine` | The public tools below, here too, so one connector is enough |
| `start_new_run` | A run of steps the assistant writes, begun at once and kept out of Routines unless the person keeps it |
| `propose_new_routine` | A new routine in the written form, with no `from`, shown on the phone to be saved or dropped |
| `list_dates` | The person's named dates and moments that happen, which routines count from: each one's `description` where it has one (what it is, or how anybody can tell it has happened), its `kind` (`day`, `time` or `happens`), its day or moment (`on`), or `noDayYet`, when a moment last happened, whether it is `linked` to an event, a reminder or another `date` (then `countedFrom` says how: `7 days after Departure`), and the routines counting from it |
| `set_date` | Gives a named date its day: `on` is `2026-11-15` for a whole day, or a moment with its offset for a date with a time. What counts from it moves, or is armed if it had no day (`daySet`). A moment that happens and a linked date are left alone |
| `mark_moment` | Says a moment that happens has happened, now or `at` a moment up to a day ahead or a month back. Only a time later than the last one counts |
| `publish_routine` | Publishes a routine at `routinerun.com/c/<code>`: the steps only, cut as a phone's Publish cuts them. From 1.5 nothing goes up on the assistant's word: the routine goes to the phone, In hand shows exactly what would be public with Publish and Drop, and the answer is `asked` until the person decides; `command_status` then says `done` with `url` and `code`, or `refused`. An older phone is refused rather than published for. `code` replaces one this connection published |
| `add_comment` | From 1.5: a comment on a routine the person shares with other people, or on a step (its number, title or id) or a run of it, signed as the person and marked as the assistant's. It waits in In hand for the person's Post unless they set the assistant to save without asking. Nothing reads comments: what the others write never goes to an assistant |
| `unpublish_routine` | Takes a code this connection published down, for everybody |
| `command_status` | What became of a command |

`start_run`, `start_new_run` and `plan_run` take `ask_first`: the run then waits in In hand for the person's Start, and the receipt is `asked` until they answer — `done` or `refused`. A connection set to **Ask before starting** does this for every run. `get_run` carries the run's notes and values only where the person has turned on **Read notes and values** for that assistant. The server also offers prompts — `write_a_routine`, `review_my_week`, `plan_tomorrow`, `checklist_now`, `tidy_a_routine`, `where_am_i` — which clients show as commands. Every tool declares an `outputSchema`: a command answers `{command, status, run}`, with `status` one of the receipt's words, and a tool that reads says the shape of what it reads. The three that take a routine — `start_new_run`, `propose_new_routine`, `propose_routine_change` — take `written` as one JSON object, or as JSON text.

Reads are answered by the phone, so they need it reachable; a phone that does not answer in about 20 seconds is said to have not answered.

`list_dates`, `set_date` and `mark_moment` need a version of the app that knows dates. To a phone known to have an older one they say so and send nothing; a phone the relay has not heard from since is tried, and if it stays silent the answer says it may be too old.

### Writing a routine, with no sign-in

`https://api.routinerun.com/mcp/public` is a second MCP server for an assistant helping somebody who has connected nothing, or does not have the app yet. Nothing on it is anybody's, so it needs no sign-in.

| Tool | What it does |
|---|---|
| `how_to_write_a_routine` | The form the app reads, from [llms-routine.txt](https://routinerun.com/llms-routine.txt): its fields and actions, and what a routine that works in the app has. With `part: "examples"`, three routines in the form and the shortcuts the app adds in one tap |
| `routine_link` | Checks a routine in that form and returns a `routinerun.com/w?d=…` link that opens it on the app's review screen |
| `find_starter_routine` | The routines the app ships, found by words, each with its `description`, its steps and a link that adds it |

The routine sent to `routine_link` is turned into a link and not kept. 60 calls a minute from one address. Its one prompt, `write_a_routine`, is the signed-in server's, ending with `routine_link` rather than a suggestion on the phone.

## PagerDuty

In PagerDuty, add a Generic Webhook (V3) subscription to the service, with the address followed by `/pagerduty` and a custom header `Authorization` set to `Bearer` and the secret. An incident's title becomes the event's title and its id the event's id, so a page that is sent twice starts one run.

## From other tools

These tools send to the address as they are, with nothing written for Routine Run on their side. Each event goes to the connection's Sources like any other, so which routine it starts is set on the phone — or said by the alert itself, where it says `routine`.

A notification that something has **cleared** — an Alertmanager or Grafana group that resolved, an Events API `resolve` or `acknowledge` — is answered and not passed on: nothing on the phone answers a recovery, and passed on it would read as a second page.

A repeat of the same alert within five minutes is one event (the phone's own policy, which can be changed). A repeat after that, while the run it started is still going, is queued behind it rather than ending it. If a tool repeats an unresolved alert every few hours, give the Routine Run route a long repeat interval.

### Prometheus Alertmanager

```yaml
receivers:
  - name: routinerun
    webhook_configs:
      - url: https://api.routinerun.com/v1/in/<connection id>/alertmanager
        http_config:
          authorization:
            credentials: rr_…
route:
  routes:
    - receiver: routinerun
      matchers: [severity="page"]
      repeat_interval: 24h
```

The title is `[FIRING:2] HighLatency`, the body the `summary` and `description` annotations, and the event's id the group's labels, so the run is called after the group. An annotation `routine: When something breaks` on the alert rule starts that routine whatever the Sources say.

### Grafana

Alerting › Contact points › Webhook. URL: the address followed by `/grafana`. Under Optional settings, Authorization header scheme `Bearer` and credentials the secret. Read as Alertmanager's, with Grafana's own title.

### Anything that pages PagerDuty

Alertmanager, Grafana, Uptime Kuma and Zabbix let the PagerDuty address be changed, and then the secret goes where the integration key goes:

| Tool | Address field | Key field |
|---|---|---|
| Alertmanager, `pagerduty_configs` | `url: https://api.routinerun.com/v1/in/<connection id>/v2/enqueue` | `routing_key: rr_…` |
| Grafana, PagerDuty contact point | API URL, under Optional settings | Integration Key |
| Uptime Kuma, PagerDuty | Integration URL | Integration Key |

`payload.summary` is the title, `custom_details` the body, `dedup_key` the event's id. `custom_details.routine` names the routine to start.

### Uptime Kuma, Healthchecks and other webhooks

Any tool with a plain webhook works with `/events` and a header. Uptime Kuma: Notification type **Webhook**, Post URL the address followed by `/events`, body **application/json**, and Additional Headers `{"Authorization": "Bearer rr_…"}`; its `msg` becomes the title. Healthchecks: integration **Webhook**, method POST, the same URL and header, and any body — its first line is the title.

### Apprise, and everything built on it

```
jsons://api.routinerun.com/v1/in/<connection id>/events?+Authorization=Bearer%20rr_…
```

### A script

```
curl https://api.routinerun.com/v1/in/<connection id>/events \
  -H "Authorization: Bearer rr_…" \
  -d "Backup failed on nas01"
```

## What the relay keeps

The connection's address and name, when it was last used, a token for reaching the phone, and a fingerprint of the secret. Not the body of anything you send: it is passed to the phone and not kept, and Apple holds it until the phone is reachable, a day at most. A command too long for one push waits on the relay sealed under a key that goes only to the phone, until the phone takes it or the command expires: an hour for a run, a day for anything else. The phone's answer, one word, is kept for about an hour. For a routine published with `publish_routine`, the code, the connection that published it, the command that asked, and when; the routine is in iCloud's public database, not on the relay. The [privacy page](https://routinerun.com/privacy) says the rest.

The whole of it in OpenAPI: [openapi.json](https://routinerun.com/developers/openapi.json).
