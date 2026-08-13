import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href: string };

/**
 * İç sayfaların üst bloğu: breadcrumb + h1 + açıklama.
 * Sabit header'ın altında kalmaması için üstten ek boşluk verir.
 */
export function PageHeader({
  title,
  description,
  crumbs,
  crumbsLabel,
  children,
  className,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  crumbsLabel: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-line-dark bg-ink pb-14 pt-[calc(4rem+2.5rem)] lg:pb-16 lg:pt-[calc(72px+4rem)]",
        className,
      )}
    >
      <Container>
        <nav aria-label={crumbsLabel}>
          <ol className="flex flex-wrap items-center gap-1 text-[11.5px] text-fg-dark-subtle">
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <li key={crumb.href} className="flex items-center gap-1">
                  {last ? (
                    <span aria-current="page" className="text-fg-dark-muted">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.href} className="transition-colors hover:text-white">
                        {crumb.name}
                      </Link>
                      <ChevronRight
                        className="size-3"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="text-h2 mt-5 max-w-[760px] text-white">{title}</h1>

        {description ? (
          <p className="text-lead mt-4 max-w-[620px] text-fg-dark-muted">
            {description}
          </p>
        ) : null}

        {children}
      </Container>
    </section>
  );
}
