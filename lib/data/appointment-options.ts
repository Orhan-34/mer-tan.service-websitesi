/** Formdaki hizmet seçenekleri. Etiketler sözlükten (`form.serviceOptions`) gelir. */
export const serviceOptionValues = [
  "adblue",
  "engine",
  "transmission",
  "brakes",
  "climate",
  "egrdpf",
  "other",
] as const;

export type ServiceOptionValue = (typeof serviceOptionValues)[number];

export const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
] as const;

/** Randevu en fazla kaç gün ileriye alınabilir. */
export const MAX_DAYS_AHEAD = 60;

/** `YYYY-MM-DD` — `<input type="date">` min/max değerleri için. */
export function toDateInputValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;
}
