import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = {
  28: { box: "size-7", icon: 14 },
  32: { box: "size-8", icon: 16 },
  40: { box: "size-10", icon: 20 },
} as const;

type IconCircleProps = {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  tone?: "dark" | "light";
  className?: string;
};

/** Çizgisel ikonu dairesel outline içine alan sarmalayıcı — tasarımın imzası. */
export function IconCircle({
  icon: Icon,
  size = 28,
  tone = "dark",
  className,
}: IconCircleProps) {
  const { box, icon } = sizes[size];

  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full border",
        box,
        tone === "dark"
          ? "border-line-dark-strong text-white"
          : "border-line-light text-fg-light",
        className,
      )}
    >
      <Icon size={icon} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}
