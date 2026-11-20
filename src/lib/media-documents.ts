import { z } from "zod";

const requiredDocument = (message: string) => z.custom<File>(
  (file) => typeof File !== "undefined" && file instanceof File && file.size > 0,
  { message },
);

/** Supporting-document rules for the media accreditation form, in English or French. */
export function getMediaDocumentsSchema(lang: "en" | "fr" = "en") {
  const fr = lang === "fr";
  return z.object({
    photoId: requiredDocument(fr ? "Joignez une pièce d'identité avec photo ou une copie du passeport" : "Attach a valid photo ID or passport copy"),
    pressBadge: requiredDocument(fr ? "Joignez une carte de presse ou un badge d'organe de presse valide" : "Attach a valid press card or media organisation badge"),
    assignmentLetter: requiredDocument(fr ? "Joignez une lettre du rédacteur ou de mission" : "Attach an editor’s or assignment letter"),
    portrait: requiredDocument(fr ? "Joignez une photo d'identité" : "Attach a passport-sized photograph"),
    portfolio: z.string().trim().refine(
      (value) => !value || value.split(/\s+/).every((link) => {
        try { return ["https:", "http:"].includes(new URL(link).protocol); }
        catch { return false; }
      }),
      fr ? "Saisissez des liens valides commençant par https:// ou http://" : "Enter valid portfolio links beginning with https:// or http://",
    ).optional(),
  });
}

export const mediaDocumentsSchema = getMediaDocumentsSchema("en");
