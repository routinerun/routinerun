# The Routine Run Ask shortcut

ChatGPT, and Apple's model with web search, can only be asked from the Shortcuts app.
Routine Run Ask is a free shortcut that asks them for the app and brings the answer back.

## Adding it

1. Choose ChatGPT or Apple's cloud with the web beside **Write it**, and press it. If the
   shortcut is not there yet, the page offers **Get Routine Run Ask**.
2. It opens in Shortcuts. Tap **Add Shortcut**.
3. Come back and tap **I've added it: ask now**. What you wrote is still there.

Or get it any time from **More → Assistants → ChatGPT and the web → Get the shortcut**.

## What happens when you ask

Shortcuts opens for a moment, the model answers, and Routine Run comes back with the
answer on the page you asked from. **ChatGPT, talk it through** stays open as a chat until
you are done.

If you do not want Shortcuts to open each time, add the [bridge](in-the-background.md).

## ChatGPT does not answer

Turn on the ChatGPT extension in **Settings → Apple Intelligence & Siri → ChatGPT**. A
ChatGPT account is optional.

## A newer version

The app knows which version of the shortcut last ran. When a newer one is out, the
**ChatGPT and the web** page says so. The old one keeps working; to update, delete it in
Shortcuts and get it again.

## Building it yourself

**More → Assistants → ChatGPT and the web → Build it yourself** lists every action in it.
In short:

1. **Get the Question** (Routine Run), with Recipe set to 1.
2. **Which Model** (Routine Run), with Unless given set to Shortcut Input.
3. **If** on the model, with one **Use Model** per branch, answering as Text.
4. **Bring the Answer** (Routine Run), with the If result.

Name it exactly `Routine Run Ask`, with no number in the name.

To pick a model by voice, make a shortcut named what you will say that runs Routine Run
Ask with the model's name as its input, such as `ChatGPT`.
