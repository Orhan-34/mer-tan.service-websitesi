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

/**
 * Slider yalnızca görsel gösterir; slide başına başlık/açıklama yoktur.
 * Bu yüzden görseller dekoratif sayılır ve `alt=""` ile sunulur.
 * İlk sıradaki görsel LCP'dir — en hafif dosya başa konmuştur.
 */
export const heroSlideImages = [
  "/images/cars/mercedes-filo.webp",
  "/images/cars/mercedes-sedan.webp",
  "/images/cars/mercedes-suv.webp",
  "/images/cars/mercedes-panelvan.webp",
  "/images/cars/mercedes-mini-panelvan.webp",
  "/images/cars/mercedes-minibus.webp",
  "/images/cars/mercedes-otobus.webp",
  "/images/cars/mercedes-tir.webp",
] as const;

/* ── Trust bar ──────────────────────────────────────────────────── */

export const trustItemIds = [
  "software",
  "technicians",
  "diagnostics",
  "standards",
] as const;
export type TrustItemId = (typeof trustItemIds)[number];

export const trustIcons: Record<TrustItemId, LucideIcon> = {
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
  "adblue-warning",
  "dpf-cleaning",
  "transmission-overhaul",
  "abs-warning",
  "climate-gas",
  "walk-in",
  "genuine-parts",
  "cost-estimate",
  "courtesy-car",
  "models",
] as const;
export type FaqId = (typeof faqIds)[number];
