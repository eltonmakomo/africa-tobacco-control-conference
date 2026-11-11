import vertical from "@/assets/actcd-logo-vertical.jpg.asset.json";
import horizontal from "@/assets/actcd-logo-horizontal.png.asset.json";
import reverse from "@/assets/actcd-logo-horizontal-reverse.png.asset.json";

/**
 * Approved ACTCD logo variants (brand guidelines p.10):
 * - "horizontal": full colour, white/light surfaces only
 * - "reverse": reverse colour, sits on its own brand-green field
 * - "vertical": full colour stacked, white/light surfaces only
 */
const VARIANTS = {
  horizontal: { src: horizontal.url, w: 335, h: 110 },
  reverse: { src: reverse.url, w: 334, h: 110 },
  vertical: { src: vertical.url, w: 1040, h: 990 },
} as const;

export function Logo({ className = "h-12", variant = "horizontal" }: { className?: string; variant?: keyof typeof VARIANTS }) {
  const v = VARIANTS[variant];
  return (
    <img src={v.src} alt="Africa Conference on Tobacco Control and Development" className={`${className} w-auto`} width={v.w} height={v.h} />
  );
}
