import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Option = string | { value: string; label: string };

/**
 * Brand-styled dropdown: rounded field, chevron that always keeps a margin on
 * its left, and a frosted panel with brand hover states instead of the native
 * browser list. Registers its value in FormData through a hidden input.
 */
export function FieldSelect({
  name,
  options,
  placeholder = "Select…",
  defaultValue = "",
  id,
  className,
}: {
  name: string;
  options: readonly Option[];
  placeholder?: string;
  defaultValue?: string;
  id?: string;
  className?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const items = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));

  return (
    <>
      <input type="hidden" name={name} value={value} />
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger
          id={id ?? `${name}-select`}
          className={cn(
            "h-auto w-full rounded-xl border border-input bg-background px-4 py-2.5 text-left text-sm font-normal shadow-none transition",
            "data-[placeholder]:text-muted-foreground hover:border-primary/50",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            "data-[state=open]:border-primary data-[state=open]:ring-2 data-[state=open]:ring-primary/20",
            // chevron: explicit margin on its left, brand green, flips when open
            "[&>svg]:ml-4 [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-primary [&>svg]:opacity-70",
            "[&>svg]:transition-transform [&>svg]:duration-300",
            "data-[state=open]:[&>svg]:rotate-180",
            className,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          position="popper"
          className="rounded-2xl border-border bg-card p-1.5 shadow-card-lg"
        >
          {items.map((o) => (
            <SelectItem
              key={o.value}
              value={o.value}
              className={cn(
                "rounded-xl py-2.5 pl-3 pr-9 text-sm transition-colors",
                "focus:bg-secondary focus:text-primary data-[state=checked]:bg-secondary/70 data-[state=checked]:font-semibold",
              )}
            >
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
