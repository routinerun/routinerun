# Publish for a code: a routine on a sign

Publish puts one routine under a short code, for a sign, a sticker or a QR at a door. Anyone with the code opens the steps on an iPhone: in the App Clip, with nothing to install, or in Routine Run if they have it.

## Where to find it

A routine's page, the ellipsis, **Publish for a code**. Nothing is published until you press **Publish**.

## What goes, and what does not

Only the steps, as somebody at a counter would walk them:

- **Goes:** the routine's name and description, and each step's name, description, duration, mark and the time of day it is set to. With them go the buttons a visitor can press: a web page to open (a payment page, a form), a number to call or text, an email address, words to copy. On the App Clip they are buttons on the step, and in the app for somebody who has it; a web page opens over the steps in both, so paying does not leave the walk. A video, a map, an App Store page or a Turo trip opens in its own app instead, where the visitor has it. On the page for a browser they are links.
- **Stays on your phone:** every other action (shortcuts, webhooks, Home, Health, alarms), any address with a value in it, triggers, values, notes, places, tags, any calendar date a step is set to, and every step you turned off.

So publish a routine you would put on a sign.

A description is drawn as it is written, lists included. A picture in one, written as `![what it shows](https://routinerun.com/…)`, is drawn by the App Clip only when it is on routinerun.com: fetching a picture tells whoever serves it that somebody opened the code, from which network and when. On routinerun.com that is us, and we keep no log of it; anywhere else it would be a server the visitor never chose to tell, so a picture from anywhere else is shown as its words.

## In order, or one at a time

On the routine's **Settings**, **Steps** says how freely somebody walking it may move about, and it goes with the routine when it is published:

- **Any order:** any step can be read ahead of time, and Later puts the one in hand at the end. What every routine does unless you say otherwise.
- **In order:** every step is listed, but only the one in hand opens, and there is no Later.
- **One at a time:** only the steps done and the one in hand are shown, with how many are left.

A step with a length can also say **Next waits until the time is up**, in its own settings: for photos of a car before it is driven, five minutes that should not go in five seconds. The App Clip keeps all of this. A run started in the app for somebody who has it does not yet.

## Where it is kept

In iCloud's public database for Routine Run, under your iCloud account. Anyone with the code can read it, Apple keeps it, and we can see it in iCloud's developer console, because that is how a public database works. With it, iCloud keeps an identifier for your iCloud account: a random string that lets only you change or take it down. It does not tell us your name or your Apple ID. Anyone who opens one of your codes can see that identifier too, so they could tell that two codes came from the same account; the app uses it only to let them block you on their phone.

You need to be signed in to iCloud on the phone. iCloud sync does not need to be on.

## The code

It looks like `routinerun.com/c/ab23cd45`: eight letters and digits, with no 0, 1, i, l or o so it can be read off a sign. The page shows it as a QR, with **Share the link** and **Copy the link**. The link is short enough for any QR, an NFC tag or an App Clip Code.

- **Style the code…** chooses how the QR looks: its colour (the routine's by default; a pale one is darkened until a camera can read it), the routine's mark, two initials or a logo from Photos in the middle, square or round dots, and a line under it. Nothing is uploaded: the mark and the initials are drawn on the phone, and a logo is kept on this phone only, never synced or published. The code on screen, the poster and the PDF all use it.
- **Print a poster** prints a page with the QR and every step written out, for visitors whose phone the code does not open. Letter in the US and Canada, A4 elsewhere.
- **Write to an NFC tag** puts the link on a sticker. An iPhone held to it opens the same steps, with no app running. NTAG213 stickers hold it many times over. **After writing** says what guards the tag, because a tag strangers tap and nobody guarded can be written over by anybody with a phone, with a link that only looks like yours:
  - **Password**, the default: the tag gets a password that guards writing and leaves reading open. Strangers cannot change it; your own devices can write it again, for another code or another routine. The password is made on your phone the first time, kept in your iCloud Keychain, and never shown, published or sent. It needs an NTAG213, 215 or 216, which is what is sold as an NFC sticker almost everywhere.
  - **Lock for good:** the tag can never be changed again, by you or anybody. Asked each time.
  - **Leave it open:** anybody can write over it.

## On your own website instead

An organisation can keep the routine on its own site rather than in iCloud. On the same page, **Share the two files** gives you two files named after the routine:

- `before-the-counter.json`: the routine, with only the steps in it, the same as publishing.
- `before-the-counter.html`: a page listing the steps, for anybody who opens the address without an iPhone.

Put them on your site so the page opens at an address like `https://your-site/rr/before-the-counter` and the routine sits beside it at the same address with `.json` on the end. Then write to support@routinerun.com with the address. We register it, and the code on your door opens the steps with your domain on them. Nothing goes to iCloud this way.

## Update and Unpublish

- **Update** sends the routine as it is now, under the same code. Printed copies keep working.
- **Point this code at another routine…** keeps the code and changes what it opens: the summer menu for the winter one, this year's documents for last year's. Every poster, sticker and tag with the code opens the new routine from the next scan. Only routines without a code of their own are offered, and the old routine can be published again under a new code.
- **Unpublish** takes it down for everybody, and asks first, because every printed copy stops working. Publishing again makes a new code.

The code is remembered on the phone you published from. If you delete the app or lose that phone, write to support@routinerun.com with the code and we will take it down.

## What is not published, and reporting one

Before anything is published, the phone checks the routine's words against a short list of slurs and strong profanity, and refuses to publish one that carries any of them. It says which word, so you can change it. A phone that opens a code checks the same way and does not show such a routine.

Opening somebody else's code, you can:

- **Report this routine**, on the import screen in the app or under the routine's name in the App Clip. It writes an email to support@routinerun.com from your own Mail, with the code in it. We take down a routine that breaks the rules.
- **Block whoever published it**, on the import screen in the app. Every code from that publisher stops opening on this phone. Opening one of their codes again offers **Unblock and open**. The list stays on your phone.

## Related

- [Export](export.md): send a routine to somebody as a file or a link
- [iCloud sync](icloud-sync.md): your own private iCloud, which is separate from this
