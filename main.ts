// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one fortune-cookie message for a software engineer to
// /output/entry.txt: a single line, at most 120 characters.
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic: the same fixed text on every run, stdlib only, no network,
// no input data, no randomness — the program always writes this one fortune.
const FORTUNE =
  "Today a stranger will merge your PR without reading it. That stranger is future you.";

const MAX_CHARS = 120;

if (FORTUNE.length === 0 || FORTUNE.length > MAX_CHARS) {
  throw new Error(`fortune must be 1-${MAX_CHARS} characters, got ${FORTUNE.length}`);
}
if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
  throw new Error("fortune must be a single line");
}
if (FORTUNE.trim() !== FORTUNE) {
  throw new Error("fortune must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
