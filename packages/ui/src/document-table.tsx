import type { EnrichedDocument } from "@warren/shared";
import { formatDaysAgo } from "@warren/shared";
import { Card } from "./card";
import { StatusBadge } from "./status-badge";

interface DocumentTableProps {
  documents: EnrichedDocument[];
}

export function DocumentTable({ documents }: DocumentTableProps) {
  return (
    <Card padding="p-5">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-400">
            <th className="w-2/5 pb-3 pr-4 font-medium">Title</th>
            <th className="px-4 pb-3 font-medium">Owner</th>
            <th className="px-4 pb-3 font-medium">Last Updated</th>
            <th className="pb-3 pl-4 text-right font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="transition-colors hover:bg-gray-50/50"
            >
              <td className="py-3.5 pr-4 font-medium text-gray-900">
                {doc.title}
              </td>
              <td className="px-4 py-3.5 text-gray-500">{doc.owner}</td>
              <td className="px-4 py-3.5 text-gray-400">
                {formatDaysAgo(doc.days)}
              </td>
              <td className="py-3.5 pl-4 text-right">
                <StatusBadge status={doc.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
