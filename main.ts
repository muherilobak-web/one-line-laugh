// One-Line Laugh entry: writes a single funny line to /output/entry.txt.
// The line is a single sentence of at most 200 characters, no trailing newline.
// Output contract: exactly one line, one sentence, 1-200 characters, UTF-8.
// No trailing newline, so the gate reads the line byte-for-byte as written.
// The program is deterministic: every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I hit 10,000 steps every day now — I just wear my fitness tracker on my dog.");
