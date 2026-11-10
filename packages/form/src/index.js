// @routinerun/form: check, upgrade and link a routine written for Routine Run.
//
// The written form is what an assistant, a person or a script writes and what the app reads
// (developers/written-routine.md). Form 2 is the app's own words; form 1 is still read,
// and upgrade() turns it into form 2 by the table the app uses. The schemas in schema/ are
// written by the app's own reader (WrittenRoutineSchema.swift), never by hand.

import v1 from "./schema-v1.js";
import v2 from "./schema-v2.js";
import { problemsAgainst, isObject } from "./check.js";
import { upgrade, NEWEST_FORM } from "./upgrade.js";

export { upgrade, NEWEST_FORM, problemsAgainst };

/**
 * The form the app writes and teaches, and so the one a routine is asked for in. It stays 1
 * until a build that reads form 2 is on the App Store (WrittenRoutine.form in the app): a
 * link or a prompt is read on whatever phone it reaches.
 */
export const TAUGHT_FORM = 1;

/** Each form's schema, by its number. */
export const SCHEMAS = { 1: v1, 2: v2 };

/**
 * Every problem with a routine, one sentence each, the first the one to fix first: an empty
 * list when there is none. `needsSteps` is for a run, which cannot start with none. `upTo` is
 * the newest form taken: a link, read on any phone, takes only `TAUGHT_FORM`.
 */
export function problems(routine, { needsSteps = false, upTo = NEWEST_FORM } = {}) {
  if (!isObject(routine)) return ["Send one routine as a JSON object."];
  const form = routine.routineRun;
  if (!Number.isInteger(form) || form < 1) {
    return [`The routine needs "routineRun": ${TAUGHT_FORM}, so the app knows which form it is in.`];
  }
  if (form > upTo) {
    return [`This is written in form ${form} ("routineRun": ${form}), and the newest form taken here is ${upTo}. Write it in form ${TAUGHT_FORM}.`];
  }
  if (needsSteps && Array.isArray(routine.steps) && routine.steps.length === 0) return ['The routine needs "steps", at least one.'];
  return problemsAgainst(routine, SCHEMAS[form]);
}

/** The first problem with a routine, or null when there is none. */
export function problemWith(routine, options) {
  return problems(routine, options)[0] ?? null;
}
