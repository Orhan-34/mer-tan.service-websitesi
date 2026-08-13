import { cn } from "@/lib/utils";

/**
 * Mercedes-Benz üç köşeli yıldızının çizgisel gösterimi. `currentColor` ile
 * renklenir.
 *
 * ⚠️ Marka logosu tescillidir. Kullanımı yalnızca yetkili servis/bayi
 * sözleşmesi kapsamında ve marka sahibinin kurumsal kimlik kılavuzuna uygun
 * şekilde mümkündür (plan §15.3). Yetki yoksa bu bileşen kaldırılmalı ve
 * marka adı yalnızca tanımlayıcı biçimde kullanılmalıdır.
 */
export function MbStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      focusable="false"
      className={cn("size-8", className)}
    >
      <circle cx="24" cy="24" r="22" />
      <path d="M24 24V2" strokeLinecap="round" />
      <path d="M24 24 5 35" strokeLinecap="round" />
      <path d="M24 24l19 11" strokeLinecap="round" />
    </svg>
  );
}
