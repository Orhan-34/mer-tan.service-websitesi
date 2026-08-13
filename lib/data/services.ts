import {
  BadgeCheck,
  CircuitBoard,
  Code2,
  Cpu,
  MonitorCheck,
  Settings2,
  Snowflake,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

export const serviceIds = [
  "ecu",
  "xentry",
  "electronics",
  "coding",
  "maintenance",
  "transmission",
  "climate",
  "inspection",
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
  ecu: {
    icon: Cpu,
    image: "/images/services/ecu.svg",
    featured: true,
    slug: { tr: "motor-beyni-ecu-ariza-tespiti", en: "ecu-fault-diagnosis" },
  },
  xentry: {
    icon: MonitorCheck,
    image: "/images/services/xentry.svg",
    featured: true,
    slug: { tr: "xentry-diagnostik", en: "xentry-diagnostics" },
  },
  electronics: {
    icon: CircuitBoard,
    image: "/images/services/electronics.svg",
    featured: true,
    slug: { tr: "elektronik-sistem-ariza-tespiti", en: "electronic-system-diagnosis" },
  },
  coding: {
    icon: Code2,
    image: "/images/services/coding.svg",
    featured: true,
    slug: { tr: "kodlama-yazilim-guncelleme", en: "coding-software-updates" },
  },
  maintenance: {
    icon: Wrench,
    image: "/images/services/maintenance.svg",
    featured: false,
    slug: { tr: "periyodik-bakim", en: "scheduled-maintenance" },
  },
  transmission: {
    icon: Settings2,
    image: "/images/services/transmission.svg",
    featured: false,
    slug: { tr: "sanziman-ariza-tespiti", en: "transmission-diagnosis" },
  },
  climate: {
    icon: Snowflake,
    image: "/images/services/climate.svg",
    featured: false,
    slug: { tr: "klima-ve-konfor-sistemleri", en: "climate-and-comfort-systems" },
  },
  inspection: {
    icon: BadgeCheck,
    image: "/images/services/inspection.svg",
    featured: false,
    slug: { tr: "arac-ekspertiz", en: "vehicle-inspection" },
  },
};

export const featuredServiceIds = serviceIds.filter((id) => serviceMeta[id].featured);

/** Herhangi bir dildeki slug'dan hizmeti bulur (rewrite edilmiş EN URL'ler için gerekli). */
export function findServiceBySlug(slug: string): ServiceId | undefined {
  return serviceIds.find((id) =>
    Object.values(serviceMeta[id].slug).includes(slug),
  );
}
