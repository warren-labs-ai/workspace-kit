import { Card } from "@warren/ui";
import type { InvestorDocument } from "@warren/shared";
import { metrics, documents, updates } from "../data/mock-investor";

const typeLabels: Record<InvestorDocument["type"], string> = {
  deck: "Deck",
  memo: "Memo",
  faq: "FAQ",
  report: "Report",
  legal: "Legal",
};

const typeStyles: Record<InvestorDocument["type"], string> = {
  deck: "bg-blue-50 text-blue-700",
  memo: "bg-purple-50 text-purple-700",
  faq: "bg-gray-100 text-gray-600",
  report: "bg-green-50 text-green-700",
  legal: "bg-amber-50 text-amber-700",
};

export const metadata = {
  title: "Investor Room — Workspace Kit",
};

export default function InvestorRoom() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Investor Room
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Key materials, metrics, and updates for current and prospective investors
        </p>
      </div>

      {/* Key Metrics */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <Card key={m.label} padding="p-5">
            <p className="text-sm font-medium text-gray-500">{m.label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{m.value}</p>
            {m.detail && (
              <p className="mt-1 text-xs text-gray-400">{m.detail}</p>
            )}
          </Card>
        ))}
      </div>

      {/* Documents + Updates */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Documents */}
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Documents
          </h2>
          <Card padding="p-5">
            <div className="divide-y divide-gray-100">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between gap-4 px-2 py-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      Updated {doc.updatedAt}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${typeStyles[doc.type]}`}
                  >
                    {typeLabels[doc.type]}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Updates */}
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Recent Updates
          </h2>
          <Card padding="p-5">
            <div className="divide-y divide-gray-100">
              {updates.map((update) => (
                <div key={update.id} className="px-2 py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-medium text-gray-900">
                      {update.title}
                    </p>
                    <time className="shrink-0 text-xs text-gray-400">
                      {update.date}
                    </time>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {update.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
