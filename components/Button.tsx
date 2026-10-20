import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "onDark" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  /** target=_blank para links externos */
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-[.06em] leading-none whitespace-nowrap transition-colors duration-200 ease-out cursor-pointer select-none disabled:opacity-60";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-amarelo-500 text-grafite-900 shadow-accent hover:bg-amarelo-600",
  onDark:
    "bg-transparent text-branco border-2 border-[rgba(255,255,255,.18)] hover:border-amarelo-500 hover:bg-[rgba(255,255,255,.06)]",
  outline:
    "bg-transparent text-grafite-900 border-2 border-grafite-600 hover:bg-amarelo-100 hover:border-amarelo-500",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth,
  onClick,
  external,
  ariaLabel,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    const isHash = href.startsWith("#");
    const externalProps =
      external && !isHash
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...externalProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
