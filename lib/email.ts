import { Resend } from "resend";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";
import type { AppointmentInput } from "@/lib/validations/appointment";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!,
  );

function table(rows: [string, string][]) {
  return rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr>
           <td style="padding:6px 16px 6px 0;color:#8e8e8e;font-size:13px;vertical-align:top">${escapeHtml(label)}</td>
           <td style="padding:6px 0;color:#0f0f0f;font-size:14px">${escapeHtml(value)}</td>
         </tr>`,
    )
    .join("");
}

function wrap(title: string, body: string) {
  return `<!doctype html>
<html><body style="margin:0;background:#f4f4f2;font-family:Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px">
    <div style="background:#0a0a0a;color:#fff;padding:20px 24px;border-radius:6px 6px 0 0">
      <div style="font-size:15px;font-weight:600">${escapeHtml(siteConfig.name)}</div>
    </div>
    <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px">
      <h1 style="margin:0 0 16px;font-size:18px;color:#0f0f0f">${escapeHtml(title)}</h1>
      ${body}
    </div>
  </div>
</body></html>`;
}

/**
 * Randevu bildirimlerini gönderir: servise detaylı, müşteriye özet.
 *
 * `RESEND_API_KEY` tanımlı değilse (yerel geliştirme) gönderim atlanır ve
 * içerik konsola yazılır — form akışı yine uçtan uca test edilebilir.
 */
export async function sendAppointmentEmails(
  data: AppointmentInput,
  referenceId: string,
  locale: Locale,
) {
  const dict = getDictionary(locale);
  const serviceLabel = dict.form.serviceOptions[data.serviceType];

  const rows: [string, string][] = [
    [dict.email.referenceLabel, referenceId],
    [dict.form.labels.fullName, data.fullName],
    [dict.form.labels.phone, data.phone],
    [dict.form.labels.email, data.email ?? ""],
    [dict.form.labels.serviceType, serviceLabel],
    [dict.form.labels.vehicleModel, data.vehicleModel ?? ""],
    [dict.form.labels.date, data.date],
    [dict.form.labels.time, data.time],
    [dict.form.labels.note, data.note ?? ""],
  ];

  const summary = `<table style="border-collapse:collapse;width:100%">${table(rows)}</table>`;

  const internalHtml = wrap(
    `${dict.email.internalSubject} — ${referenceId}`,
    `${summary}
     <p style="margin:20px 0 0;font-size:13px">
       <a href="tel:${escapeHtml(data.phone)}" style="color:#0f0f0f">${escapeHtml(data.phone)}</a>
     </p>`,
  );

  const customerHtml = wrap(
    dict.form.successTitle,
    `<p style="margin:0 0 16px;font-size:14px;color:#5a5a5a">${escapeHtml(dict.email.customerIntro)}</p>
     <p style="margin:0 0 16px;font-size:14px;color:#0f0f0f"><strong>${escapeHtml(dict.email.referenceLabel)}: ${escapeHtml(referenceId)}</strong></p>
     <h2 style="margin:24px 0 8px;font-size:14px;color:#0f0f0f">${escapeHtml(dict.email.summaryTitle)}</h2>
     ${summary}
     <p style="margin:24px 0 0;font-size:13px;color:#5a5a5a">${escapeHtml(siteConfig.contact.phoneDisplay)} · ${escapeHtml(siteConfig.contact.email)}</p>`,
  );

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.APPOINTMENT_NOTIFY_EMAIL ?? siteConfig.contact.email;
  const from = process.env.APPOINTMENT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.info(
      `[randevu] RESEND_API_KEY tanımlı değil — e-posta gönderilmedi. Talep: ${referenceId}`,
      rows,
    );
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to: notifyTo,
    replyTo: data.email || undefined,
    subject: `${dict.email.internalSubject} — ${referenceId}`,
    html: internalHtml,
  });

  if (data.email) {
    await resend.emails.send({
      from,
      to: data.email,
      subject: `${dict.email.customerSubject} — ${referenceId}`,
      html: customerHtml,
    });
  }
}
