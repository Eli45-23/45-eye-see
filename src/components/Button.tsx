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
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca3ff] focus-visible:ring-offset-2";

  const variantClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#0a66c2] to-[#0d79e8] text-white shadow-lg shadow-[#0a66c2]/20 hover:from-[#0d79e8] hover:to-[#0a66c2]"
      : variant === "secondary"
        ? "border border-[#d8e8ff] bg-white text-[#0b2a4f] shadow-sm hover:border-[#b8d7ff] hover:bg-[#f7fbff]"
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
