export interface Workspace {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

export interface WorkflowStatus {
  id: string;
  name: string;
  state: "idle" | "running" | "completed" | "failed";
  startedAt?: Date;
  completedAt?: Date;
}

export interface MetricPoint {
  timestamp: string;
  value: number;
  label?: string;
}

export type DocumentStatus = "fresh" | "warning" | "stale";

export interface Document {
  id: string;
  title: string;
  owner: string;
  lastUpdated: string; // ISO date string
}

export function getDocumentStatus(lastUpdated: string, now: Date = new Date()): DocumentStatus {
  const days = Math.max(0, Math.floor((now.getTime() - new Date(lastUpdated).getTime()) / (1000 * 60 * 60 * 24)));
  if (days <= 7) return "fresh";
  if (days <= 30) return "warning";
  return "stale";
}

export function daysAgo(lastUpdated: string, now: Date = new Date()): number {
  return Math.max(0, Math.floor((now.getTime() - new Date(lastUpdated).getTime()) / (1000 * 60 * 60 * 24)));
}

export function formatDaysAgo(d: number): string {
  if (d === 0) return "Today";
  if (d === 1) return "Yesterday";
  return `${d}d ago`;
}

// Investor Room types

export interface InvestorMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface InvestorDocument {
  id: string;
  title: string;
  type: "deck" | "memo" | "faq" | "report" | "legal";
  updatedAt: string; // ISO date string
}

export interface InvestorUpdate {
  id: string;
  date: string; // ISO date string
  title: string;
  description: string;
}

/** A Document enriched with computed status and age. */
export interface EnrichedDocument extends Document {
  status: DocumentStatus;
  days: number;
}
