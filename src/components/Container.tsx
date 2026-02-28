import { type ElementType, type ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  wide = false,
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={`layout-container${styles.container ? ` ${styles.container}` : ""}${wide ? ` ${styles.wide}` : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Component>
  );
}
