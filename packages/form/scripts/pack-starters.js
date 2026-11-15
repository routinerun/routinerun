// Run by `npm pack` and `npm publish`: copies the starters into the package, because the
// folders `routinerun new` reads them from in a checkout are not in an install. Nothing here
// is written by hand; the copy is the app's own files, as the repository has them.
import { cpSync, existsSync, rmSync } from "node:fs";

const into = new URL("../starters/", import.meta.url);
const from = [
  new URL("../../RoutineKit/Sources/RoutineKit/Resources/Starters/", import.meta.url),
  new URL("../../../routines/", import.meta.url),
].find((url) => existsSync(url));
if (!from) throw new Error("pack-starters: no starters next to this package to copy");
rmSync(into, { recursive: true, force: true });
cpSync(from, into, { recursive: true, filter: (path) => !path.endsWith(".md") });
