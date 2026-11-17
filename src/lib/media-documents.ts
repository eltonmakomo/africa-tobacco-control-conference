import { z } from "zod";

const requiredDocument = (message: string) => z.custom<File>(
  (file) => typeof File !== "undefined" && file instanceof File && file.size > 0,
  { message },
);

export const mediaDocumentsSchema = z.object({
  photoId: requiredDocument("Attach a valid photo ID or passport copy"),
  pressBadge: requiredDocument("Attach a valid press card or media organisation badge"),
  assignmentLetter: requiredDocument("Attach an editor’s or assignment letter"),
  portrait: requiredDocument("Attach a passport-sized photograph"),
  portfolio: z.string().trim().refine(
    (value) => !value || value.split(/\s+/).every((link) => {
      try { return ["https:", "http:"].includes(new URL(link).protocol); }
      catch { return false; }
    }),
    "Enter valid portfolio links beginning with https:// or http://",
  ).optional(),
});