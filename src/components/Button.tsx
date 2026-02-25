import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./Button.module.css";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
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

function getClassName(variant: "primary" | "secondary", className?: string): string {
  const variantClass = variant === "primary" ? styles.primary : styles.secondary;
  return `${styles.button} ${variantClass}${className ? ` ${className}` : ""}`;
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
