import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: { label: string; href: string };
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Tasarımdaki "Hizmetlerimiz ———— Tüm Hizmetler ›" satırının bileşen hâli.
 * `action` verildiğinde desktop'ta başlıkla aynı satırda sağa yaslanır,
 * mobilde alta düşer.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  tone = "dark",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        centered && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-[640px]", centered && "text-center")}>
        {eyebrow ? (
          <p
            className={cn(
              "text-eyebrow mb-3",
              isDark ? "text-fg-dark-subtle" : "text-fg-light-subtle",
            )}
          >
            {eyebrow}
          </p>
        ) : null}

        <Heading
          className={cn("text-h2", isDark ? "text-white" : "text-fg-light")}
        >
          {title}
        </Heading>

        {description ? (
          <p
            className={cn(
              "text-body mt-4",
              isDark ? "text-fg-dark-muted" : "text-fg-light-muted",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <Link
          href={action.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-1 text-[12px] font-medium transition-colors",
            isDark
              ? "text-fg-dark-muted hover:text-white"
              : "text-fg-light-muted hover:text-fg-light",
          )}
        >
          {action.label}
          <ChevronRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}
