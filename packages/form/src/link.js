// A link that opens a routine on whatever phone it reaches: https://routinerun.com/w?d=…, the
// routine's JSON deflated raw and written in base64url. The same link the relay's
// routine_link makes, with the same longest length.
//
// A link is read on any phone, so it carries only the form the app hands out (TAUGHT_FORM).
import { problems, TAUGHT_FORM } from "./index.js";

export const SITE = "https://routinerun.com";
export const MAXIMUM_LINK = 6000;

async function deflate(text) {
  const stream = new Blob([new TextEncoder().encode(text)]).stream().pipeThrough(new CompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function b64url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * `{ link }` for a routine a phone can open, `{ link: null, json }` for one too long to be a
 * link (copy the JSON instead), or `{ problem }` when it is not one to hand out.
 */
export async function linkFor(routine) {
  const found = problems(routine, { needsSteps: true, upTo: TAUGHT_FORM });
  if (found.length) {
    const later = routine?.routineRun > TAUGHT_FORM ? ` A link carries form ${TAUGHT_FORM} until the app that reads form ${routine.routineRun} is on the App Store.` : "";
    return { problem: found[0] + later };
  }
  const json = JSON.stringify(routine);
  const link = `${SITE}/w?d=${b64url(await deflate(json))}`;
  return { json, link: link.length <= MAXIMUM_LINK ? link : null };
}
