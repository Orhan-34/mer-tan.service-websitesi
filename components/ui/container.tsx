import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  size?: "shell" | "narrow";
};

export function Container({
  className,
  size = "shell",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-10",
        size === "shell" ? "max-w-[1280px]" : "max-w-[840px]",
        className,
      )}
      {...props}
    />
  );
}
