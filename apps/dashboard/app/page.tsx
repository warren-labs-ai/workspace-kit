import Link from "next/link";
import { Card } from "@warren/ui";

const packs = [
  {
    title: "Documentation Dashboard",
    description:
      "Track documentation freshness, ownership, and staleness across your team.",
    href: "/docs",
    accent: "border-t-blue-500",
  },
  {
    title: "Investor Room",
    description:
      "Share key metrics, documents, and updates with current and prospective investors.",
    href: "/investor-room",
    accent: "border-t-purple-500",
  },
];

const includes = [
  { label: "MCP Core", detail: "Type-safe server primitives" },
  { label: "Shared Types", detail: "Common interfaces across packages" },
  { label: "UI Components", detail: "Cards, badges, charts, tables" },
  { label: "Workflow Packs", detail: "Declarative workflow definitions" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero */}
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Open Source
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Workspace Kit
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          A monorepo starter for building AI-powered internal tools and dashboards.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Shared types, UI components, MCP primitives, and workflow packs — so you can focus on your tools instead of your tooling.
        </p>
      </div>

      {/* What's included */}
      <div className="mb-14 border-t border-gray-200 pt-8">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
          What&apos;s Included
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {includes.map((item) => (
            <div key={item.label}>
              <p className="text-sm font-semibold text-gray-900">{item.label}</p>
              <p className="mt-0.5 text-sm text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Example Packs */}
      <div>
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Example Packs
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {packs.map((pack) => (
            <Link key={pack.href} href={pack.href} className="group">
              <Card
                padding="p-6"
                className={`border-t-[3px] transition-all group-hover:border-gray-300 group-hover:shadow-md ${pack.accent}`}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {pack.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {pack.description}
                </p>
                <p className="mt-4 text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700">
                  View demo &rarr;
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
