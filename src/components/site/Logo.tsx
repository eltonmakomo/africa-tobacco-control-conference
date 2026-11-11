import logo from "@/assets/actcd-logo-vertical.jpg.asset.json";

/** Full-colour vertical logo, always on a white surface per brand guidelines. */
export function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Africa Conference on Tobacco Control and Development"
      className={`${className} w-auto`}
      width={1040}
      height={990}
    />
  );
}
