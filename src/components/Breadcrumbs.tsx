import Link from "next/link";

type Crumb = {
  name: string;
  href?: string;
  path?: string;
  isCurrent?: boolean;
};

type BreadcrumbsProps = {
  items: readonly Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-[var(--muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = item.isCurrent ?? isLast;

          return (
            <li key={`${item.name}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true" className="text-[var(--muted)]">/</span> : null}
              {(item.href || item.path) && !isCurrent ? (
                <Link
                  href={(item.href ?? item.path) || "/"}
                  className="font-medium text-[var(--accent)] underline-offset-4 transition hover:text-[#60a5fa] hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current={isCurrent ? "page" : undefined} className="font-medium text-[var(--text)]">
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
