import type { InvestorMetric, InvestorDocument, InvestorUpdate } from "@warren/shared";

export const metrics: InvestorMetric[] = [
  { label: "ARR", value: "$2.4M", detail: "Up 18% QoQ" },
  { label: "Runway", value: "14 months", detail: "At current burn" },
  { label: "Team", value: "12", detail: "3 eng, 2 design, 4 ops" },
  { label: "NRR", value: "115%", detail: "Trailing 12 months" },
];

export const documents: InvestorDocument[] = [
  { id: "1", title: "Series A Deck", type: "deck", updatedAt: "2026-03-25" },
  { id: "2", title: "Product Memo", type: "memo", updatedAt: "2026-03-20" },
  { id: "3", title: "Investor FAQ", type: "faq", updatedAt: "2026-03-15" },
  { id: "4", title: "Q1 2026 Financials", type: "report", updatedAt: "2026-03-28" },
  { id: "5", title: "Term Sheet (Draft)", type: "legal", updatedAt: "2026-03-10" },
];

export const updates: InvestorUpdate[] = [
  {
    id: "1",
    date: "2026-03-28",
    title: "Q1 financials published",
    description: "Revenue grew 18% QoQ. Full breakdown available in the Q1 report.",
  },
  {
    id: "2",
    date: "2026-03-20",
    title: "Product memo updated",
    description: "Added roadmap section covering Q2–Q3 priorities and MCP integration timeline.",
  },
  {
    id: "3",
    date: "2026-03-10",
    title: "Term sheet shared",
    description: "Draft term sheet circulated to lead investors for review.",
  },
  {
    id: "4",
    date: "2026-02-15",
    title: "Advisory board formed",
    description: "Three industry advisors confirmed. Bios added to the deck.",
  },
];
