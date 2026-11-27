import type { ReactNode } from "react";

export function PageHero({ title, children, image, imgClassName = "object-top", minH = "min-h-[560px]" }: { title: ReactNode; children?: ReactNode; image?: string; imgClassName?: string; minH?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-forest-foreground">
      {image && <img src={image} alt="" aria-hidden className={`banner-photo absolute inset-0 -z-20 size-full object-cover ${imgClassName}`} />}
      {image && <div className="absolute inset-0 -z-10 bg-gradient-hero" />}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-brand" />
      <div className={`relative mx-auto flex ${minH} max-w-7xl flex-col justify-center px-5 py-20 md:px-10 md:py-28 ${image ? "max-sm:min-h-0 max-sm:py-10" : ""}`}>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl animate-rise">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function Section({ id, eyebrow, title, children, className = "", center = false }: { id?: string; eyebrow?: string; title?: ReactNode; children: ReactNode; className?: string; center?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {eyebrow && <p className={`eyebrow text-primary ${center ? "text-center" : ""}`}>{eyebrow}</p>}
        {title && <h2 className={`mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl ${center ? "mx-auto text-center" : ""}`}>{title}</h2>}
        <div className={title ? "mt-10 md:mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}
