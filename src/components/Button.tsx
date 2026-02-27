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
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca3ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]";

  const variantClass =
    variant === "primary"
      ? "bg-[#0a66c2] text-white shadow-lg shadow-[#0a66c2]/35 hover:bg-[#1d8dff]"
      : variant === "secondary"
        ? "border border-[#3b82f6] bg-transparent text-[#dbeafe] hover:border-[#60a5fa] hover:text-[#eff6ff]"
        : "text-[#0a66c2] underline-offset-4 hover:underline";

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
