import { type ElementType, type ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return <Component className={`${styles.container}${className ? ` ${className}` : ""}`}>{children}</Component>;
}
