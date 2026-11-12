import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, children, image }: { eyebrow: string; title: ReactNode; intro?: string; children?: ReactNode; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
      {image && <img src={image} alt="" aria-hidden className="absolute inset-0 -z-20 size-full object-cover" />}
      {image && <div className="absolute inset-0 -z-10 bg-gradient-hero" />}
      <div className="pointer-events-none absolute -right-32 top-1/2 size-[40rem] -translate-y-1/2 rounded-full bg-swirl opacity-50 animate-spin-slow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="eyebrow text-forest-foreground/90 animate-rise">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl animate-rise">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-forest-foreground/80 animate-rise">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow?: string; title?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5">
        {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
        {title && <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{title}</h2>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Pending({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-dashed border-accent bg-accent/10 p-5 text-sm">
      <span className="mt-1 size-2 shrink-0 rounded-full bg-accent" />
      <p className="text-foreground/80">{children}</p>
    </div>
  );
}

export function TBC() {
  return <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">To be confirmed</span>;
}
