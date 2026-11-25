import { mkdirSync, writeFileSync } from "node:fs";

// A Wi-Fi name that hints at a whole story: the signal died when she left.
const ENTRY = "NoSignalSinceSheLeft";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
}

writeEntry();
