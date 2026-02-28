import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function getClassName(variant: "primary" | "secondary" | "ghost", className?: string): string {
  const baseClass =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

  const variantClass =
    variant === "primary"
      ? "bg-[var(--accent)] text-[var(--text)] hover:bg-[#60a5fa]"
      : variant === "secondary"
        ? "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.04)]"
        : "text-[var(--accent)] underline-offset-4 hover:text-[#60a5fa] hover:underline";

  return `${baseClass} ${variantClass}${className ? ` ${className}` : ""}`;
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = getClassName(variant, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as LinkButtonProps;
    return (
      <a className={classes} href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type, ...nativeProps } = props as NativeButtonProps;

  return (
    <button className={classes} type={type ?? "button"} {...nativeProps}>
      {children}
    </button>
  );
}
