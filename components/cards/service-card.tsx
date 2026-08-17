import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IconCircle } from "@/components/ui/icon-circle";

export function ServiceCard({
  title,
  excerpt,
  icon,
  image,
  href,
  imageAlt,
}: {
  title: string;
  excerpt: string;
  icon: LucideIcon;
  image: string;
  href: string;
  imageAlt: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-md border border-line-dark"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[400ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.04]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--overlay-card)]"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-start gap-3 p-4">
        <IconCircle icon={icon} size={28} />
        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold leading-snug text-white [font-family:var(--font-sans)]">
            {title}
          </h3>
          {/* Mobilde hover yok — açıklama daima görünür. */}
          <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-fg-dark-muted transition-all duration-300 [@media(hover:hover)]:translate-y-1 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:translate-y-0 [@media(hover:hover)]:group-focus-visible:opacity-100">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
