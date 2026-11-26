import { useEffect, useRef, useState } from "react";
import { EVENT } from "@/lib/conference";
import { useLang } from "@/lib/i18n";

export function Countdown({ compact = false }: { compact?: boolean }) {
  const { fr } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1600);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  const diff = now === null ? 0 : Math.max(0, new Date(EVENT.startISO).getTime() - now);
  const labels = fr ? ["Jours", "Heures", "Minutes", "Secondes"] : ["Days", "Hours", "Minutes", "Seconds"];
  const units: [number, string][] = [
    [Math.floor(diff / 864e5), labels[0]!],
    [Math.floor((diff % 864e5) / 36e5), labels[1]!],
    [Math.floor((diff % 36e5) / 6e4), labels[2]!],
    [Math.floor((diff % 6e4) / 1e3), labels[3]!],
  ];
  return (
    <div ref={ref} className={`grid grid-cols-4 text-center ${compact ? "gap-2" : "gap-3"}`}>
      {units.map(([v, l]) => (
        <div key={l} className={`glass rounded-2xl ${compact ? "px-2 py-3" : "px-3 py-4"}`}>
          <div className={`font-bold tabular-nums ${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>{now === null ? "—" : Math.floor(v * progress)}</div>
          <div className="eyebrow mt-1 text-[0.65rem] text-forest-foreground/75">{l}</div>
        </div>
      ))}
    </div>
  );
}
