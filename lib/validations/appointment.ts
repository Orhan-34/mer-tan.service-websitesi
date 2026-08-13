import { z } from "zod";
import {
  MAX_DAYS_AHEAD,
  serviceOptionValues,
  timeSlots,
} from "@/lib/data/appointment-options";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Messages = Dictionary["form"]["errors"];

/**
 * Randevu şeması. Hata mesajları dile göre değiştiği için şema bir fabrika
 * fonksiyonudur; hem istemcide hem server action içinde aynı şema kullanılır.
 */
export function appointmentSchema(m: Messages) {
  return z.object({
    fullName: z.string().trim().min(3, m.fullNameMin).max(80, m.fullNameMax),

    // 05xx xxx xx xx / +905xx… / 5xx… — boşluk ve ayraçlar temizlenerek kontrol edilir
    phone: z
      .string()
      .trim()
      .transform((value) => value.replace(/[\s()\-.]/g, ""))
      .refine((value) => /^(?:\+90|0)?5\d{9}$/.test(value), m.phone),

    email: z
      .string()
      .trim()
      .email(m.email)
      .optional()
      .or(z.literal("")),

    serviceType: z.enum(serviceOptionValues, {
      errorMap: () => ({ message: m.serviceType }),
    }),

    vehicleModel: z
      .string()
      .trim()
      .max(60, m.vehicleModelMax)
      .optional()
      .or(z.literal("")),

    date: z
      .string()
      .min(1, m.datePast)
      .superRefine((value, ctx) => {
        const picked = new Date(`${value}T00:00:00`);
        if (Number.isNaN(picked.getTime())) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: m.datePast });
          return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (picked < today) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: m.datePast });
          return;
        }

        const limit = new Date(today);
        limit.setDate(limit.getDate() + MAX_DAYS_AHEAD);
        if (picked > limit) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: m.dateRange });
          return;
        }

        if (picked.getDay() === 0) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: m.dateSunday });
        }
      }),

    time: z.enum(timeSlots, { errorMap: () => ({ message: m.time }) }),

    note: z.string().trim().max(600, m.noteMax).optional().or(z.literal("")),

    kvkkConsent: z.literal(true, {
      errorMap: () => ({ message: m.kvkk }),
    }),

    /** Spam koruması — dolu gelirse istek sessizce reddedilir. */
    website: z.string().max(0).optional(),
  });
}

export type AppointmentInput = z.infer<ReturnType<typeof appointmentSchema>>;
