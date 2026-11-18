import { useEffect, useRef, useState } from "react";

/** Animates every number inside `value` (e.g. "350+", "44 / 47", "~9.5%") each time it scrolls into view. */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [p, setP] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    setP(0);
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const x = Math.min(1, (t - start) / duration);
          setP(1 - Math.pow(1 - x, 3));
          if (x < 1) raf = requestAnimationFrame(tick);
        };
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
        setP(0);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [duration]);
  const text = value.replace(/\d+(\.\d+)?/g, (m) => {
    const dec = m.includes(".") ? m.split(".")[1]!.length : 0;
    return (parseFloat(m) * p).toFixed(dec);
  });
  return <span ref={ref} className="tabular-nums">{text}</span>;
}
