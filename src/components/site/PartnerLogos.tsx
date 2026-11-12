import { PARTNERS } from "@/lib/conference";

export function PartnerLogos({
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  height = "h-24",
  padded = true,
}: {
  columns?: string;
  height?: string;
  padded?: boolean;
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {PARTNERS.map((p) => (
        <div
          key={p.short}
          className={`flex items-center justify-center rounded-2xl bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg ${padded ? "" : "p-4"}`}
        >
          <img
            src={p.logo}
            alt={p.name}
            loading="lazy"
            className={`${height} w-auto max-w-full object-contain`}
          />
        </div>
      ))}
    </div>
  );
}
