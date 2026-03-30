import type { EnrichedDocument } from "@warren/shared";
import { formatDaysAgo } from "@warren/shared";
import { Card } from "./card";
import { StatusBadge } from "./status-badge";

interface AttentionPanelProps {
  title: string;
  documents: EnrichedDocument[];
  accentColor: "red" | "green" | "amber";
  emptyMessage?: string;
}

const accentStyles: Record<AttentionPanelProps["accentColor"], string> = {
  red: "border-l-red-400",
  green: "border-l-green-400",
  amber: "border-l-amber-400",
};

export function AttentionPanel({
  title,
  documents,
  accentColor,
  emptyMessage = "No documents.",
}: AttentionPanelProps) {
  return (
    <Card
      title={title}
      padding="p-5"
      className={`border-l-[3px] ${accentStyles[accentColor]}`}
    >
      {documents.length === 0 ? (
        <p className="text-sm text-gray-500">{emptyMessage}</p>
      ) : (
        <div className="divide-y divide-gray-100">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between gap-6 px-2 py-3"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                <p className="mt-0.5 text-xs text-gray-400">
                  {doc.owner}
                  <span className="mx-1 text-gray-300">/</span>
                  {formatDaysAgo(doc.days)}
                </p>
              </div>
              <div className="shrink-0">
                <StatusBadge status={doc.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
