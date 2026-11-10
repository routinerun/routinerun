// Form 1 of the written routine turned into form 2.
//
// The same table as the app's (WrittenForm.form2 in WrittenForm.swift), line for line, so a
// routine upgraded here and one upgraded on the phone are the same routine. The pairs in
// fixtures/upgrade/ are written by the app from every example it shows an assistant and
// every starter; test/upgrade.test.js asks this for the same form 2 from each form 1.
//
// Nothing is lost: every key form 1 has a place in form 2, and a key this does not know is
// carried across as it was.

import { isObject } from "./check.js";

export const NEWEST_FORM = 2;

/** Form 2 from form 1. A routine already in form 2 comes back as it is. */
export function upgrade(routine) {
  if (!isObject(routine) || routine.routineRun >= NEWEST_FORM) return routine;
  const out = { ...routine, routineRun: NEWEST_FORM };
  rename(out, "about", "description");
  const triggers = [];
  if (Array.isArray(out.times)) {
    for (const time of out.times) {
      if (!isObject(time)) continue;
      const when = {};
      if ("at" in time) when.at = time.at;
      if ("days" in time) when.weekdays = time.days;
      triggers.push({ when });
    }
  }
  delete out.times;
  if (Array.isArray(out.triggers)) triggers.push(...out.triggers.map(triggerWritten));
  if (triggers.length) out.triggers = triggers;
  else delete out.triggers;
  if (isObject(out.rounds)) {
    out.rounds = { ...out.rounds };
    rename(out.rounds, "times", "repeats");
  }
  if (Array.isArray(out.steps)) out.steps = out.steps.map(stepWritten);
  return out;
}

function stepWritten(step) {
  if (!isObject(step)) return step;
  const out = { ...step };
  rename(out, "about", "description");
  rename(out, "times", "repeats");
  const deadline = {};
  for (const key of ["by", "startBy", "day", "late", "tellMe"]) {
    if (key in out) {
      deadline[key] = out[key];
      delete out[key];
    }
  }
  // "alarm" was a second way to say how the time reaches you. Said where "tellMe" is not,
  // it becomes the one way.
  if ("alarm" in out) {
    const rings = out.alarm;
    delete out.alarm;
    if (typeof rings === "boolean" && !("tellMe" in deadline)) deadline.tellMe = rings ? "alarm" : "notification";
  }
  if ("warnHours" in out) {
    deadline.warn = { hours: out.warnHours };
    delete out.warnHours;
  }
  if ("byMinutesFromStart" in out) {
    deadline.within = { minutes: out.byMinutesFromStart };
    delete out.byMinutesFromStart;
  }
  const byDate = out.byDate;
  const byValue = out.byValue;
  delete out.byDate;
  delete out.byValue;
  if (byDate !== undefined || byValue !== undefined) deadline.from = byDate ?? byValue;
  if (Object.keys(deadline).length) out.deadline = deadline;
  if (Array.isArray(out.triggers)) out.triggers = out.triggers.map(triggerWritten);
  return out;
}

function triggerWritten(trigger) {
  if (!isObject(trigger)) return trigger;
  const out = { ...trigger };
  rename(out, "ask", "question");
  if (isObject(out.when)) {
    const when = { ...out.when };
    rename(when, "days", "weekdays");
    if ("every" in when) {
      const count = when.every;
      delete when.every;
      let unit = "minutes";
      if ("unit" in when) {
        if (typeof when.unit === "string") unit = when.unit;
        delete when.unit;
      }
      when.every = { [unit]: count };
    }
    if ("from" in when && "until" in when) {
      when.between = [when.from, when.until];
      delete when.from;
      delete when.until;
    }
    out.when = when;
  }
  return out;
}

function rename(object, from, to) {
  if (!(from in object)) return;
  object[to] = object[from];
  delete object[from];
}
