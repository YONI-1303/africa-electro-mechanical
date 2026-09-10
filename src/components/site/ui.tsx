import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 text-sm font-medium tracking-tight rounded-sm transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none";

export const buttonStyles = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-primary/90"),
  outline: cn(
    base,
    "border border-border bg-transparent text-foreground hover:bg-accent",
  ),
  onDark: cn(
    base,
    "border border-graphite-foreground/30 bg-transparent text-graphite-foreground hover:bg-graphite-foreground/10",
  ),
  ghost: cn(base, "px-0 text-foreground hover:text-primary"),
};

type Variant = keyof typeof buttonStyles;

export function CTALink({
  to,
  hash,
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  to?: string;
  hash?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">) {
  if (href) {
    return (
      <a href={href} className={cn(buttonStyles[variant], className)} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to ?? "/"}
      hash={hash}
      className={cn(buttonStyles[variant], className)}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "label-technical flex items-center gap-3",
          align === "center" && "justify-center",
          onDark ? "text-primary-foreground/60" : "text-muted-foreground",
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem]",
          onDark ? "text-graphite-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            onDark ? "text-graphite-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
