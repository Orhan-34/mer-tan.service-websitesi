import {
  Activity,
  Award,
  ClipboardCheck,
  FileCode2,
  KeyRound,
  ScanSearch,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ── Hero slider ────────────────────────────────────────────────── */

export const heroSlideIds = ["dealership", "expertise", "workshop"] as const;
export type HeroSlideId = (typeof heroSlideIds)[number];

export const heroSlideImages: Record<HeroSlideId, string> = {
  dealership: "/images/hero/hero-01-bayi.svg",
  expertise: "/images/hero/hero-02-gle.svg",
  workshop: "/images/hero/hero-03-atolye.svg",
};

/* ── Trust bar ──────────────────────────────────────────────────── */

export const trustItemIds = [
  "authorized",
  "software",
  "technicians",
  "diagnostics",
  "standards",
] as const;
export type TrustItemId = (typeof trustItemIds)[number];

export const trustIcons: Record<TrustItemId, LucideIcon> = {
  authorized: ShieldCheck,
  software: FileCode2,
  technicians: Users,
  diagnostics: Activity,
  standards: Award,
};

/* ── Rakamlarla Koluman ─────────────────────────────────────────── */

export const statIds = ["experience", "vehicles", "accuracy", "rating"] as const;
export type StatId = (typeof statIds)[number];

/**
 * ⚠️ Bu rakamlar örnektir. Yayına almadan önce gerçek verilerle değiştirin —
 * yanlış istatistik hem güven hem yasal risk yaratır.
 */
export const statValues: Record<
  StatId,
  { value: number; prefix?: string; suffix?: string; decimals?: number }
> = {
  experience: { value: 20, suffix: "+" },
  vehicles: { value: 12000, suffix: "+" },
  accuracy: { value: 98, prefix: "%" },
  rating: { value: 4.8, suffix: "/5", decimals: 1 },
};

/* ── Servis süreci ──────────────────────────────────────────────── */

export const processStepIds = ["booking", "diagnosis", "approval", "delivery"] as const;
export type ProcessStepId = (typeof processStepIds)[number];

export const processIcons: Record<ProcessStepId, LucideIcon> = {
  booking: KeyRound,
  diagnosis: ScanSearch,
  approval: ClipboardCheck,
  delivery: Award,
};

/* ── SSS ────────────────────────────────────────────────────────── */

export const faqIds = [
  "warranty",
  "ecu-symptoms",
  "xentry-duration",
  "walk-in",
  "genuine-parts",
  "cost-estimate",
  "courtesy-car",
  "models",
] as const;
export type FaqId = (typeof faqIds)[number];
