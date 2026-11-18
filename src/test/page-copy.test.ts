import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { KEY_DATES } from "@/lib/conference";

// The organiser asked for every "to be confirmed" / sample-style note to come off
// the site, so unconfirmed details are left out instead of being flagged in copy.
const BANNED = [
  "To be confirmed",
  "to be confirmed",
  "Sample profile",
  "for layout purposes",
  "coming soon",
  "Details to follow",
  "will be listed as they are confirmed",
  "Draft outline",
];

function pageFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
    .map((e) => `${dir}/${e.name}`);
}

const SOURCES = [
  ...pageFiles(join(process.cwd(), "src/routes")),
  ...pageFiles(join(process.cwd(), "src/components/site")),
];

describe("Page copy", () => {
  it("carries no placeholder or to-be-confirmed notes", () => {
    const offenders = SOURCES.flatMap((file) => {
      const text = readFileSync(file, "utf8");
      return BANNED.filter((phrase) => text.includes(phrase)).map((phrase) => `${file}: ${phrase}`);
    });

    expect(offenders).toEqual([]);
  });

  it("keeps only confirmed dates in the abstracts timeline", () => {
    expect(KEY_DATES.map((k) => k.date)).toEqual(["October / November 2026", "22–23 April 2027"]);
  });
});
