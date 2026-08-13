import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold whitespace-nowrap",
    "transition-[background-color,border-color,color] duration-[180ms] ease-[var(--ease-smooth)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-white text-ink hover:bg-[#e8e8e8]",
        "primary-dark": "bg-fg-light text-white hover:bg-[#242424]",
        "outline-light":
          "border border-[rgba(255,255,255,0.35)] text-white hover:border-[rgba(255,255,255,0.6)] hover:bg-white/10",
        "outline-dark":
          "border border-[#1a1a1a] text-fg-light hover:bg-fg-light hover:text-white",
        ghost: "text-current hover:bg-white/6",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-[34px] px-3.5 text-[12px]",
        md: "h-10 px-5 text-[13px]",
        lg: "h-12 px-7 text-[14px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      aria-busy={loading || undefined}
      disabled={asChild ? undefined : disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { buttonVariants };
