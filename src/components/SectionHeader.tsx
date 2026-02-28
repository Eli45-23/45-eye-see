import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto text-center text-measure" : "text-measure"}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="type-h2">{title}</h2>
      {description ? <p className="mt-3 text-[15px] leading-relaxed text-muted-soft">{description}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
