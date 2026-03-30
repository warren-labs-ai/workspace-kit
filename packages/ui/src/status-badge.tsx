import type { DocumentStatus } from "@warren/shared";

interface StatusBadgeProps {
  status: DocumentStatus;
}

const styles: Record<DocumentStatus, string> = {
  fresh: "bg-green-50 text-green-700 ring-green-600/20",
  warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
  stale: "bg-red-50 text-red-700 ring-red-600/20",
};

const labels: Record<DocumentStatus, string> = {
  fresh: "Fresh",
  warning: "Needs review",
  stale: "Stale",
};

const dotStyles: Record<DocumentStatus, string> = {
  fresh: "bg-green-500",
  warning: "bg-amber-500",
  stale: "bg-red-500",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`} />
      {labels[status]}
    </span>
  );
}
