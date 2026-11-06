# Answers in the background

With the Routine Run Ask shortcut alone, Shortcuts opens every time you ask ChatGPT or
Apple's model with the web. The bridge lets the shortcut run behind the app instead. You
carry on, and a notification says when the answer is ready. Tap it, and the answer is on
the page you asked from.

This needs **iOS 27**, because iOS 26 cannot run a shortcut when a notification arrives.

You do not need this for **On this phone** or **Apple's cloud**. Those never open
Shortcuts.

## Setting it up

The bridge is also what runs a step's shortcuts in the background, so you may have it
already. If you have not:

1. On the Describe page, with ChatGPT chosen, tap **Write in the background**. It appears
   once Routine Run Ask has run at least once. It is also under **More → Triggers → … → The
   bridge**.
2. Follow the page: add the Routine Run Bridge shortcut, then make one automation in
   Shortcuts. **When I get a notification from Routine Run → run Routine Run Bridge**,
   set to run immediately.

The automation cannot be shared as a link, so this part is done by hand once.

## While it is asking

The page says "Asking … in the background" with **Cancel**. You can close the page. The
answer waits until you open the notification or the app.

**ChatGPT, talk it through** always opens in front, because a chat needs you.
