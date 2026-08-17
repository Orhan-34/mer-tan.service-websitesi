import {
  Disc3,
  Droplets,
  Filter,
  Gauge,
  Settings2,
  Snowflake,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

export const serviceIds = [
  "adblue",
  "engine",
  "transmission",
  "brakes",
  "climate",
  "egrdpf",
] as const;

export type ServiceId = (typeof serviceIds)[number];

type ServiceMeta = {
  icon: LucideIcon;
  image: string;
  /** Anasayfada öne çıkan 4 hizmet. */
  featured: boolean;
  slug: Record<Locale, string>;
};

/**
 * Dilden bağımsız hizmet verisi. Başlık, açıklama ve kapsam metinleri
 * `lib/i18n/dictionaries/*` içinde, aynı `ServiceId` anahtarlarıyla tutulur.
 */
export const serviceMeta: Record<ServiceId, ServiceMeta> = {
  adblue: {
    icon: Droplets,
    image: "/images/services/adblue.webp",
    featured: true,
    slug: { tr: "adblue-sistemleri", en: "adblue-systems" },
  },
  engine: {
    icon: Gauge,
    image: "/images/services/motor.webp",
    featured: true,
    slug: { tr: "motor-sistem-arizalari", en: "engine-system-faults" },
  },
  transmission: {
    icon: Settings2,
    image: "/images/services/sanziman.webp",
    featured: true,
    slug: { tr: "sanziman-arizalari", en: "transmission-faults" },
  },
  brakes: {
    icon: Disc3,
    image: "/images/services/ebs-abs.webp",
    featured: true,
    slug: { tr: "ebs-abs-fren-sistemleri", en: "ebs-abs-brake-systems" },
  },
  climate: {
    icon: Snowflake,
    image: "/images/services/klima.webp",
    featured: false,
    slug: { tr: "arac-klima-sistemleri", en: "vehicle-air-conditioning" },
  },
  egrdpf: {
    icon: Filter,
    image: "/images/services/egr-dpf.webp",
    featured: false,
    slug: { tr: "egr-dpf-arizalari", en: "egr-dpf-faults" },
  },
};

export const featuredServiceIds = serviceIds.filter((id) => serviceMeta[id].featured);

/** Herhangi bir dildeki slug'dan hizmeti bulur (rewrite edilmiş EN URL'ler için gerekli). */
export function findServiceBySlug(slug: string): ServiceId | undefined {
  return serviceIds.find((id) =>
    Object.values(serviceMeta[id].slug).includes(slug),
  );
}
