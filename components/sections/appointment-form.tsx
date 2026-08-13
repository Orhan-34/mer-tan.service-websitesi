"use client";

import { CheckCircle2, ChevronDown, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useActionState } from "react";
import {
  initialAppointmentState,
  submitAppointment,
} from "@/app/actions/appointment";
import { Button } from "@/components/ui/button";
import {
  CheckboxField,
  Field,
  Input,
  Select,
  Textarea,
} from "@/components/ui/field";
import {
  MAX_DAYS_AHEAD,
  serviceOptionValues,
  timeSlots,
  toDateInputValue,
} from "@/lib/data/appointment-options";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { path } from "@/lib/i18n/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Randevu formu.
 *
 * JavaScript kapalıyken de çalışır: `<form action={serverAction}>` progressive
 * enhancement ile doğrudan POST eder, doğrulama ve hata mesajları sunucudan
 * gelir. JS varken `useActionState` aynı akışı sayfa yenilemeden yürütür.
 */
export function AppointmentForm({
  locale,
  dict,
  variant = "card",
  id = "randevu",
}: {
  locale: Locale;
  dict: Dictionary;
  /** `card`: anasayfadaki görselli kart. `plain`: tam sayfa / iletişim. */
  variant?: "card" | "plain";
  id?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitAppointment,
    initialAppointmentState,
  );
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const dateRef = React.useRef<HTMLInputElement>(null);

  // Tarih sınırları DOM'a doğrudan yazılır. Sayfa statik üretildiği için
  // sunucuda hesaplanan bir tarih ertesi gün eskir; istemcide state tutmak ise
  // gereksiz bir render turu doğurur. Sunucu tarafı doğrulama zaten aynı
  // kuralları (geçmiş tarih, Pazar, 60 gün) yeniden uygular.
  React.useEffect(() => {
    const input = dateRef.current;
    if (!input) return;

    const today = new Date();
    const latest = new Date(today);
    latest.setDate(latest.getDate() + MAX_DAYS_AHEAD);

    input.min = toDateInputValue(today);
    input.max = toDateInputValue(latest);
  }, []);

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? (state.values ?? {}) : {};
  const errorOf = (field: string) => errors[field]?.[0];

  if (state.status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-md bg-paper-card p-7 lg:p-9",
          variant === "card" && "shadow-[var(--shadow-card)]",
        )}
      >
        <div aria-live="polite" className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 size-6 shrink-0 text-success"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <div>
            <h3 className="text-h3 text-fg-light">{dict.form.successTitle}</h3>
            <p className="text-body mt-3 text-fg-light-muted">
              {dict.form.successText}
            </p>
            <p className="text-body mt-3 text-fg-light">
              {dict.form.successReference}:{" "}
              <strong className="tabular-nums">{state.referenceId}</strong>
            </p>
          </div>
        </div>

        <Button
          variant="outline-dark"
          size="md"
          onClick={() => window.location.reload()}
        >
          {dict.form.successAgain}
        </Button>
      </div>
    );
  }

  const formBody = (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot — ekran okuyuculardan ve klavyeden gizli */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-sm border border-error/30 bg-error-bg p-3.5"
        >
          <TriangleAlert
            className="mt-0.5 size-4 shrink-0 text-error"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="text-[12.5px] leading-relaxed text-error">
            {state.message}{" "}
            <span className="block text-fg-light-muted">
              {dict.form.errorFallback}{" "}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-semibold text-fg-light underline underline-offset-2"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </span>
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={`${id}-fullName`}
          label={dict.form.labels.fullName}
          error={errorOf("fullName")}
          required
        >
          {(props) => (
            <Input
              {...props}
              name="fullName"
              type="text"
              autoComplete="name"
              required
              defaultValue={values.fullName}
              placeholder={dict.form.placeholders.fullName}
            />
          )}
        </Field>

        <Field
          id={`${id}-phone`}
          label={dict.form.labels.phone}
          error={errorOf("phone")}
          required
        >
          {(props) => (
            <Input
              {...props}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              defaultValue={values.phone}
              placeholder={dict.form.placeholders.phone}
            />
          )}
        </Field>
      </div>

      <Field
        id={`${id}-serviceType`}
        label={dict.form.labels.serviceType}
        error={errorOf("serviceType")}
        required
      >
        {(props) => (
          <Select {...props} name="serviceType" required defaultValue={values.serviceType ?? ""}>
            <option value="" disabled>
              {dict.form.placeholders.serviceType}
            </option>
            {serviceOptionValues.map((value) => (
              <option key={value} value={value}>
                {dict.form.serviceOptions[value]}
              </option>
            ))}
          </Select>
        )}
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={`${id}-date`}
          label={dict.form.labels.date}
          error={errorOf("date")}
          required
        >
          {(props) => (
            <Input
              {...props}
              ref={dateRef}
              name="date"
              type="date"
              required
              defaultValue={values.date}
            />
          )}
        </Field>

        <Field
          id={`${id}-time`}
          label={dict.form.labels.time}
          error={errorOf("time")}
          required
        >
          {(props) => (
            <Select {...props} name="time" required defaultValue={values.time ?? ""}>
              <option value="" disabled>
                {dict.form.placeholders.time}
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </div>

      {/* Görsel sadeliği korumak için opsiyonel alanlar katlanır. */}
      <div className="rounded-sm border border-line-light">
        <button
          type="button"
          onClick={() => setDetailsOpen((open) => !open)}
          aria-expanded={detailsOpen}
          aria-controls={`${id}-details`}
          className="flex w-full items-center justify-between px-3.5 py-3 text-[12.5px] font-medium text-fg-light-muted"
        >
          {dict.form.detailsToggle}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              detailsOpen && "rotate-180",
            )}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>

        <div
          id={`${id}-details`}
          hidden={!detailsOpen}
          className="flex flex-col gap-4 border-t border-line-light p-3.5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id={`${id}-email`}
              label={dict.form.labels.email}
              hint={dict.form.optional}
              error={errorOf("email")}
            >
              {(props) => (
                <Input
                  {...props}
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={values.email}
                  placeholder={dict.form.placeholders.email}
                />
              )}
            </Field>

            <Field
              id={`${id}-vehicleModel`}
              label={dict.form.labels.vehicleModel}
              hint={dict.form.optional}
              error={errorOf("vehicleModel")}
            >
              {(props) => (
                <Input
                  {...props}
                  name="vehicleModel"
                  type="text"
                  defaultValue={values.vehicleModel}
                  placeholder={dict.form.placeholders.vehicleModel}
                />
              )}
            </Field>
          </div>

          <Field
            id={`${id}-note`}
            label={dict.form.labels.note}
            hint={dict.form.optional}
            error={errorOf("note")}
          >
            {(props) => (
              <Textarea
                {...props}
                name="note"
                rows={3}
                maxLength={600}
                defaultValue={values.note}
                placeholder={dict.form.placeholders.note}
              />
            )}
          </Field>
        </div>
      </div>

      <CheckboxField
        id={`${id}-kvkkConsent`}
        name="kvkkConsent"
        required
        error={errorOf("kvkkConsent")}
      >
        {dict.form.kvkkConsentPrefix}
        <Link
          href={path(locale, "kvkk")}
          className="font-medium text-fg-light underline underline-offset-2"
        >
          {dict.form.kvkkConsentLink}
        </Link>
        {dict.form.kvkkConsentSuffix}
      </CheckboxField>

      <Button
        type="submit"
        variant="primary-dark"
        size="lg"
        className="w-full"
        loading={pending}
      >
        {pending ? dict.form.submitting : dict.form.submit}
      </Button>

      <p className="text-[11px] text-fg-light-subtle">{dict.form.footnote}</p>
    </form>
  );

  if (variant === "plain") {
    return (
      <div id={id} className="scroll-mt-24">
        {formBody}
      </div>
    );
  }

  return (
    <div
      id={id}
      className="grid scroll-mt-24 overflow-hidden rounded-md bg-paper-card shadow-[var(--shadow-card)] md:grid-cols-[1.25fr_1fr]"
    >
      <div className="p-7 lg:p-9">
        <h2 className="text-h3 text-fg-light">{dict.form.title}</h2>
        <p className="text-body-sm mt-3 text-fg-light-muted">
          {dict.form.description}
        </p>
        <div className="mt-7">{formBody}</div>
      </div>

      <div className="relative hidden min-h-[280px] md:block">
        <Image
          src="/images/about/teknisyen-xentry.svg"
          alt={dict.form.imageAlt}
          fill
          sizes="(max-width: 768px) 0px, 40vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
