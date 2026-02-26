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
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0a66c2]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#0f2239] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">{description}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
