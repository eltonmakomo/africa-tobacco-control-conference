import { describe, expect, it } from "vitest";
import { mediaDocumentsSchema } from "./media-documents";

const file = new File(["test document"], "document.pdf", { type: "application/pdf" });
const complete = { photoId: file, pressBadge: file, assignmentLetter: file, portrait: file, portfolio: "" };

describe("Accreditation supporting documents", () => {
  it.each(["photoId", "pressBadge", "assignmentLetter", "portrait"] as const)("requires %s", (name) => {
    expect(mediaDocumentsSchema.safeParse({ ...complete, [name]: new File([], "") }).success).toBe(false);
  });
  it("accepts all four supporting documents", () => {
    expect(mediaDocumentsSchema.safeParse(complete).success).toBe(true);
  });
  it("accepts multiple portfolio links", () => {
    expect(mediaDocumentsSchema.safeParse({ ...complete, portfolio: "https://example.com/work\nhttps://example.com/story" }).success).toBe(true);
  });
  it("rejects invalid portfolio links", () => {
    expect(mediaDocumentsSchema.safeParse({ ...complete, portfolio: "not a link" }).success).toBe(false);
  });
});