import type { Document } from "@warren/shared";

export const MOCK_NOW = new Date("2026-03-30");

export const mockDocuments: Document[] = [
  { id: "1", title: "API Reference", owner: "Sarah Chen", lastUpdated: "2026-03-28" },
  { id: "2", title: "Onboarding Guide", owner: "James Park", lastUpdated: "2026-03-25" },
  { id: "3", title: "Incident Response Playbook", owner: "Maria Lopez", lastUpdated: "2026-03-15" },
  { id: "4", title: "Architecture Decision Records", owner: "Alex Kim", lastUpdated: "2026-03-01" },
  { id: "5", title: "Deployment Runbook", owner: "Sarah Chen", lastUpdated: "2026-02-20" },
  { id: "6", title: "Security Policy", owner: "James Park", lastUpdated: "2026-02-10" },
  { id: "7", title: "Data Model Reference", owner: "Maria Lopez", lastUpdated: "2026-01-15" },
  { id: "8", title: "Team Working Agreement", owner: "Alex Kim", lastUpdated: "2025-12-01" },
];
