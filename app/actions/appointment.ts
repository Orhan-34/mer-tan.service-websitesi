"use server";

import { headers } from "next/headers";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { sendAppointmentEmails } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { appointmentSchema } from "@/lib/validations/appointment";

export type AppointmentState =
  | { status: "idle" }
  | { status: "success"; referenceId: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string[]>;
      /** Hata sonrası kullanıcının yazdıklarını korumak için. */
      values?: Record<string, string>;
    };

export const initialAppointmentState: AppointmentState = { status: "idle" };

function generateReferenceId() {
  const now = new Date();
  const stamp = [
    String(now.getFullYear()).slice(2),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const random = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `KLM-${stamp}-${random}`;
}

export async function submitAppointment(
  _prev: AppointmentState,
  formData: FormData,
): Promise<AppointmentState> {
  const rawLocale = String(formData.get("locale") ?? "");
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0].trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return { status: "error", message: dict.form.errors.rateLimit };
  }

  const raw = Object.fromEntries(formData) as Record<string, string>;

  // Honeypot doluysa bot kabul edilir: sessizce "başarılı" dönülür.
  if (raw.website) {
    return { status: "success", referenceId: generateReferenceId() };
  }

  const parsed = appointmentSchema(dict.form.errors).safeParse({
    ...raw,
    kvkkConsent: raw.kvkkConsent === "on" || raw.kvkkConsent === "true",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: dict.form.errors.generic,
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      values: raw,
    };
  }

  const referenceId = generateReferenceId();

  try {
    await sendAppointmentEmails(parsed.data, referenceId, locale);
  } catch (error) {
    console.error("[randevu] E-posta gönderilemedi", error);
    return { status: "error", message: dict.form.errors.send, values: raw };
  }

  return { status: "success", referenceId };
}
