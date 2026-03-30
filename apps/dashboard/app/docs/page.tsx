import { SummaryCards, AttentionPanel, DocumentTable } from "@warren/ui";
import type { SummaryItem } from "@warren/ui";
import { getDocumentStatus, daysAgo } from "@warren/shared";
import { mockDocuments, MOCK_NOW } from "../data/mock-documents";

const enriched = mockDocuments.map((doc) => ({
  ...doc,
  status: getDocumentStatus(doc.lastUpdated, MOCK_NOW),
  days: daysAgo(doc.lastUpdated, MOCK_NOW),
}));

const staleDocs = enriched.filter((d) => d.status === "stale");
const recentDocs = enriched.filter((d) => d.status === "fresh");

const summaryItems: SummaryItem[] = [
  { label: "Fresh", count: recentDocs.length, description: "Updated within 7 days", color: "green" },
  { label: "Needs Review", count: enriched.filter((d) => d.status === "warning").length, description: "Not updated in 8\u201330 days", color: "amber" },
  { label: "Stale", count: staleDocs.length, description: "Not updated in over 30 days", color: "red" },
];

export const metadata = {
  title: "Documentation Dashboard — Workspace Kit",
};

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Documentation Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Track freshness and ownership across {mockDocuments.length} team documents
        </p>
      </div>

      <div className="mb-6">
        <SummaryCards items={summaryItems} />
      </div>

      <div className="mb-6">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Team Attention
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <AttentionPanel
            title="Stale Documents"
            documents={staleDocs}
            accentColor="red"
            emptyMessage="No stale documents."
          />
          <AttentionPanel
            title="Recently Updated"
            documents={recentDocs}
            accentColor="green"
            emptyMessage="No recent updates."
          />
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          All Documents
        </h2>
        <DocumentTable documents={enriched} />
      </div>
    </main>
  );
}
