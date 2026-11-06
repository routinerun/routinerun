# Connect Claude, ChatGPT and others

An assistant that speaks MCP can read your routines and runs, start and move runs, and suggest new routines and changes that you look over on the phone before anything is saved. There is no account: signing in shows a code, and you type it on your phone. What that looks like in practice is on [With your assistant](https://routinerun.com/assistants).

## Two addresses

- **`https://api.routinerun.com/mcp`** — your phone. The assistant signs in, and from then on it can read, start, plan, move and suggest — and it has the public tools below too, so this one address is all most people need.
- **`https://api.routinerun.com/mcp/public`** — no sign-in, and nothing of yours. The assistant can write a routine and hand you a link that opens it in the app, or find one of the routines the app ships. Useful before you have connected anything, or for an assistant somebody else is using.

The rest of this page is about the first. The second is added the same way, with **No sign-in** chosen where the assistant asks how to authenticate.

## Claude

Routine Run is in Claude's connector directory: [claude.ai/directory/connectors/routine-run](https://claude.ai/directory/connectors/routine-run).

1. On claude.ai or in the Claude app, open **Customize › Connectors** (in some versions **Settings › Connectors**), find **Routine Run** and press **Connect**. Or open the link above.
2. If it is not listed for you yet, add it by hand: **+**, **Add custom connector**, name it **Routine Run**, paste `https://api.routinerun.com/mcp`, leave everything else as it is and press **Add**, then **Connect**. A Routine Run page opens with an eight-character code.
3. On your iPhone: **More › Connections**, **Add a connection…**, **An assistant**, type the code, and **Connect**. The page in Claude carries on by itself.

A connector added on the web reaches the Claude app on your phone as well. On the Free plan Claude allows one custom connector. On Team and Enterprise an owner adds it for the organisation first.

## ChatGPT

Custom connectors are in ChatGPT's developer mode, on paid plans:

1. **Settings › Apps** (or **Apps & Connectors**) › **Advanced settings**, and turn on **Developer mode**. On Business, Enterprise and Edu an admin may have to allow it first.
2. Back in **Apps**, **Create**. Name it **Routine Run**, paste `https://api.routinerun.com/mcp`, and choose **OAuth** for authentication.
3. Connect, and type the code it shows on your iPhone as above.

Start a new chat afterwards, so the connector is loaded. ChatGPT asks before each action an app takes; that is ChatGPT's own question, and Routine Run asks nothing more.

## Claude Code

```
claude mcp add --transport http routine-run https://api.routinerun.com/mcp
```

Then `/mcp` inside Claude Code, choose **routine-run** and sign in.

## Cursor, VS Code and others

Anything that takes a remote MCP server by its address works. In Cursor, `~/.cursor/mcp.json`:

```
{ "mcpServers": { "routine-run": { "url": "https://api.routinerun.com/mcp" } } }
```

In VS Code, `.vscode/mcp.json`:

```
{ "servers": { "routine-run": { "type": "http", "url": "https://api.routinerun.com/mcp" } } }
```

Each opens the same sign-in page with a code the first time it is used.

## What to ask it

- "What is on my phone in Routine Run?"
- "Start my Pomodoro."
- "Where is my morning run? Mark the step I am on as done."
- "Write me a routine for packing for a trip and send it to my phone."
- "Make me a checklist for testing the new build and start it now." — a run of its own, which stays out of Routines unless you keep it.
- "How did my week go? Which steps do I keep skipping?"
- "Pause my run" or "Put this step last."
- "Plan Morning for tomorrow at seven."

Claude and ChatGPT also list ready-made requests from Routine Run — **Review my week**, **Plan tomorrow**, **A checklist for right now**, **Tidy a routine**, **Where am I?** — in the menu where they keep prompts.
- "Look at my evening routine and suggest a shorter version."

A new routine or a change arrives as a notification, and waits under **Suggested** in **In hand** until you answer it. Tap either and the app shows it the way it would be saved; nothing is written until you press **Save**, and **Drop** in In hand lets it go.

**Ask before starting**, on the same page, makes every run it starts or plans wait in **In hand** for **Start**, and its notification opens In hand. Without it a run begins at once — Stop undoes it — but you can still say "ask me first" in the chat, and that one run waits.

An assistant does not see a run's notes and values unless you turn on **Read notes and values** on its page in **More › Connections**.

## Webhooks on runs it starts

A webhook an assistant writes does nothing until you open it on the step and press **Allow**. On a run it starts for you, a button whose webhook goes somewhere a rule can name — https, an address written out in full — also offers **Allow from Claude from now on**. Press it once, and the buttons on runs Claude starts that send the same request arrive allowed: the same address to the letter, the same method, and no secret but the ones it carried when you allowed it.

A button can also say **Next presses it too**, on its page under **When it runs**. Pressing **Next** on that step then presses the button as well, once: if you pressed it already, Next leaves it alone. That is for the button at the end of a run that asks for the next one, so finishing the step is enough. Only your own Next presses it, from the app, the Lock Screen, a notification, the watch or Siri. A timer running out, the step's time passing, or the assistant moving the run on does not, and an allowed rule covers such a button exactly as it covers any other.

Everything else still waits for you: a new address, a new secret, another method, a webhook that would go the moment the step is reached rather than when you press it, and anything another assistant or connection writes. The rule is for runs it starts, never for routines you keep, so keeping one of those runs as a routine asks once more.

The rules are listed under **Webhooks it may send** on the assistant's page in **More › Connections**. Swipe one away to take it back: its buttons ask again, on the runs going now too. Removing the assistant takes all of them with it.

A script that starts runs through an **Any system** address gets the same answer, under its own name. See [Connections](connections.md).

To skip the review, turn on **Save without asking** on the assistant's page in **More › Connections**. New routines are then saved as they arrive and can be deleted like any other; a change keeps the routine as it was in **Earlier versions**. Starting, pausing, stopping and moving runs never ask either way.

## When it goes wrong

- **The assistant says the phone did not answer.** Reading needs the phone reachable: on, online, and with notifications for Routine Run allowed.
- **A run starts only when you tap the notification.** On iOS 26 that is how it is. On iOS 27, with the Routine Run bridge, it starts by itself.
- **It worked, then stopped after you installed another build.** A new build of the app gets a new push address from Apple. Remove the connection in **More › Connections** and connect again.
- **To sign it out**, remove it in **More › Connections**. Its token stops working at once.

The menus above are each assistant's own and they move. If a name here does not match what you see, the address and the code are what matter.
