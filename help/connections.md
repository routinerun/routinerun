# Connections

A connection is an address another system can send to — a pager, a queue, a script of your own — so it can start or move a routine on your phone. Nothing goes through our relay until you make one.

## Making one

In the app: **More › Connections**, then **Add a connection…**, and **Any system** for a script or an automation, or **PagerDuty** for pages.

The page that opens has the two things the other system needs:

- **Address**, which starts with `https://api.routinerun.com/v1/in/`.
- **Secret**, which starts with `rr_`. It goes in the request's `Authorization` header as `Bearer` and the secret.

**Copy address** and **Copy secret** put each on the clipboard; the secret leaves it again after two minutes. Rename the connection on the same page, so you know later which system it is.

The first connection registers this phone with the relay, once. That needs a real iPhone: the simulator cannot prove it is the app.

## What it can do

- Hand over an event, the way an automation does with **Handle Event**: your Sources decide which routine it starts.
- Start a routine, by its name or its id.
- Start a run of steps it writes itself, the way an assistant does.
- Move a run on, add a note to it, or set a value on it.
- Add a step to a list that stays open, such as **To read**.

Every request is answered with a command id at once. When the phone has done it, the relay can tell you what became of it: done, refused, too old, the run had moved, or not found. The [developer page](https://routinerun.com/developers) has the requests.

## Webhooks on the runs it writes

A webhook in a run a script writes arrives switched off, the same as one an assistant writes. Open it on the step and press **Allow** for this run. A button going somewhere a rule can name, https and an address written out in full, also offers **Allow from** and the connection's name **from now on**. Press it once and the buttons on runs this address starts that send the same request arrive allowed: the same address to the letter, the same method, and no secret but the ones it carried. Everything else still asks, and so does a webhook set to go the moment its step is reached.

The rules are listed under **Webhooks it may send** on the connection's page. Swipe one away to take it back, on the runs going now too. Give the script that writes runs an address of its own, not one Home Assistant or another service also holds: a rule covers everything that has the secret. If the secret gets out, **Remove** the connection. Its rules go with it.

PagerDuty connections don't offer this. What they send is a page, not a run.

## Connecting an assistant

Claude, ChatGPT or another assistant that speaks MCP can use your routines too.

1. In the assistant, add a connector with the address `https://api.routinerun.com/mcp`. In Claude: **Settings › Connectors › Add custom connector**.
2. Signing in opens a page with an eight-letter code.
3. In Routine Run: **More › Connections › Add a connection… › An assistant**, and type the code. The page goes on by itself.

It can then read your routines and runs when it asks, start and move runs, write notes and values, and suggest a change to a routine. A suggestion opens on the screen you would see for a pasted answer, and nothing is saved until you press Save. Each question it asks shows as a quiet notification. **Remove** on its connection signs it out.

No iPhone with Routine Run to hand? The sign-in page has **Try with a demo library**, which connects the assistant to a small made-up library instead.

## When the run starts

- **iOS 27 with the bridge:** by itself. The notification arrives, the bridge takes it, and the run's card is on the Lock Screen a few seconds later, phone locked or not.
- **Otherwise:** the notification says what came. The run starts when you tap it, or the next time you open the app.

A start that waits more than an hour is not done, and a **Next** that waits more than fifteen minutes is not done either: by then nobody meant it.

## What our relay keeps

The address, the name you gave it, when it was last used, a token Apple gives us for sending to this phone, and a fingerprint of the secret, not the secret itself. What the other system sends is passed to your phone and not kept; Apple holds it until the phone is reachable, a day at most. A command too long for one notification waits on the relay sealed under a key that goes only to your phone, until the phone takes it or the command expires: an hour for a run, a day for anything else. The phone's answer — one word — is kept for about an hour so the sender can read it.

**Remove** on a connection's page stops its address at once, and removing the last one makes the relay forget this phone. **Turn all off** in the **…** menu does both in one go. Neither can be undone: a new connection gets a new address.

The [privacy page](https://routinerun.com/privacy) says the same in full.

## When it goes wrong

- **"This needs an iPhone":** connections are made on a real device.
- **The relay said no:** the words after it say why. "unknown_address_or_secret" means the secret was copied wrong or the connection was removed.
- **Nothing arrives:** check that notifications for Routine Run are on. A connection reaches the phone as one.
- **It worked, then stopped after an update:** a connection belongs to the copy of the app that made it. Swapping one build for another — TestFlight for a build from Xcode, or the other way round — gives the phone a new push token, and older connections no longer reach it. Remove them and make them again, and give the other system the new address and secret. Updating the same app from the App Store or TestFlight does not do this.
