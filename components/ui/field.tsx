import * as React from "react";
import { cn } from "@/lib/utils";

const controlClasses = [
  "h-11 w-full rounded-sm border border-line-input bg-white px-3.5 text-fg-light",
  "placeholder:text-fg-light-subtle",
  "transition-colors duration-150",
  "focus:border-fg-light focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]",
  "aria-[invalid=true]:border-error aria-[invalid=true]:bg-error-bg/40",
  "disabled:opacity-60",
].join(" ");

/* ── Label + hata sarmalayıcısı ─────────────────────────────────── */

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
  }) => React.ReactNode;
};

export function Field({
  id,
  label,
  hint,
  error,
  required,
  className,
  children,
}: FieldProps) {
  const errorId = `${id}-error`;
  const describedBy = error ? errorId : undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="text-[12.5px] font-medium text-fg-light-muted"
      >
        {label}
        {required ? (
          <span className="text-error" aria-hidden="true">
            {" "}
            *
          </span>
        ) : hint ? (
          <span className="text-fg-light-subtle"> ({hint})</span>
        ) : null}
      </label>

      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": describedBy,
      })}

      {error ? (
        <p id={errorId} role="alert" className="text-[12px] text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/* ── Kontroller ─────────────────────────────────────────────────── */

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(controlClasses, className)} {...props} />;
}

export function Select({
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        controlClasses,
        "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235A5A5A%22 stroke-width=%221.5%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_0.75rem_center] bg-no-repeat pr-10",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(controlClasses, "h-auto min-h-[88px] py-2.5", className)}
      {...props}
    />
  );
}

type CheckboxFieldProps = React.ComponentProps<"input"> & {
  error?: string;
  children: React.ReactNode;
};

export function CheckboxField({
  id,
  error,
  children,
  className,
  ...props
}: CheckboxFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-start gap-2.5">
        <input
          type="checkbox"
          id={id}
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-fg-light"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-[12.5px] leading-relaxed text-fg-light-muted"
        >
          {children}
        </label>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="text-[12px] text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
