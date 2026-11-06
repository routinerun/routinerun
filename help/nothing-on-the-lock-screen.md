# Nothing on the Lock Screen

A going run should put a card on the Lock Screen and in the Dynamic Island. If it does not, one of four switches is off, iOS has refused another card, or the run is in a status that has no card. Open the run and press the pin at the top: if it cannot put a card up, it says why.

## Check these, in order

1. **iOS has Live Activities off for the app.** In the Settings app: **Apps › Routine Run › Live Activities**. Nothing in Routine Run can switch this back on, and Pin will say so.
2. **The app's own switch.** **More**, **Show runs on the lock screen**. Off means no card for any run, except a run you pin by hand.
3. **The routine's switch.** Open the routine, **Settings**, and under **Live Activity**, **Show it on the lock screen**. Off means runs of this routine do not put a card up by themselves.
4. **The run's own.** The pin at the top of the run's page puts its card up, and reads **Pinned** while the card is there. Holding a run in a list offers **Pin** and **Unpin** too. A run's own choice wins over both switches above.

## A run that has no card

- **You swiped the card away.** That is taken as your answer. Pin the run to put it back.
- **The run is paused.** Pausing a run does not bring a card back. A card already up stays, with **Resume** on it.
- **The run is planned for later.** The card comes when the run begins.
- **The run has no steps yet,** or it has finished. A finished run leaves its card for a few minutes, with **Again** on it.

## iOS would not put another card up

iOS limits how many cards one app can show at once. With many runs going, the next one is refused, and Pin says: "iOS would not put another card up." Unpin a run you are not watching and try again.

## The card is there, and the Lock Screen does not show it

A Focus can decide what the Lock Screen shows. More › Diagnostics lists **Live Activities** with how many cards are on screen. A card counted there and missing from the Lock Screen is iOS hiding it for the Focus.

## Still nothing

Open **More › Diagnostics** in the app. The **Live Activities** line says whether iOS allows cards at all, and how many are up or out of date.

See also [Live Activity buttons](live-activity-buttons.md), and [On time with a locked phone](on-time-with-a-locked-phone.md) for what still reaches you without a card.
