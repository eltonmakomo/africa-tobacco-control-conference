import { describe, expect, it } from "vitest";

import { NAV_EN, NAV_FR } from "@/components/site/Header";

// The microsite architecture document fixes the top-level menu as
// About | Program | Call for Abstracts | Participate | Knowledge Hub | Media.
// The organiser later dropped Participate and Call for Abstracts, and Past Editions stays as its own page.
const DOCUMENT_ORDER = ["/about", "/program", "/speakers", "/knowledge-hub", "/media"];

describe("Top-level menu", () => {
  it("follows the architecture document order, without Participate", () => {
    const to = NAV_EN.map((n) => n.to);
    expect(to.slice(0, DOCUMENT_ORDER.length)).toEqual(DOCUMENT_ORDER);
    expect(to).not.toContain("/participate");
  });

  it("keeps Past Editions reachable from the menu", () => {
    expect(NAV_EN.map((n) => n.to)).toContain("/past-editions");
  });

  it("offers the same pages in French as in English", () => {
    expect(NAV_FR.map((n) => n.to)).toEqual(NAV_EN.map((n) => n.to));
  });
});
