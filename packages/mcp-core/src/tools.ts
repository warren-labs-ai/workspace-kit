import type { Document } from "@warren/shared";
import { getDocumentStatus, daysAgo } from "@warren/shared";
import { MCPServer } from "./server";
import type {
  ListDocumentsInput,
  ListDocumentsOutput,
  GetWorkspaceSummaryOutput,
} from "./types";

// Mock data — in a real app, this would come from a database or API
const MOCK_NOW = new Date("2026-03-30");

const mockDocuments: Document[] = [
  { id: "1", title: "API Reference", owner: "Sarah Chen", lastUpdated: "2026-03-28" },
  { id: "2", title: "Onboarding Guide", owner: "James Park", lastUpdated: "2026-03-25" },
  { id: "3", title: "Incident Response Playbook", owner: "Maria Lopez", lastUpdated: "2026-03-15" },
  { id: "4", title: "Architecture Decision Records", owner: "Alex Kim", lastUpdated: "2026-03-01" },
  { id: "5", title: "Deployment Runbook", owner: "Sarah Chen", lastUpdated: "2026-02-20" },
  { id: "6", title: "Security Policy", owner: "James Park", lastUpdated: "2026-02-10" },
];

function enrichDocuments() {
  return mockDocuments.map((doc) => ({
    ...doc,
    status: getDocumentStatus(doc.lastUpdated, MOCK_NOW),
    daysAgo: daysAgo(doc.lastUpdated, MOCK_NOW),
  }));
}

// Tool definitions

const toolDefinitions = [
  {
    name: "listDocuments",
    description: "List documents, optionally filtered by staleness status",
    parameters: {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: ["fresh", "warning", "stale"],
          description: "Filter by status. Omit to return all documents.",
        },
      },
    },
  },
  {
    name: "getWorkspaceSummary",
    description: "Get a summary of document freshness across the workspace",
    parameters: {
      type: "object",
      properties: {
        workspaceId: {
          type: "string",
          description: "Workspace ID. Currently ignored (single workspace).",
        },
      },
    },
  },
];

// Tool handlers

function handleListDocuments(params?: Record<string, unknown>): ListDocumentsOutput {
  const input = (params ?? {}) as ListDocumentsInput;
  let docs = enrichDocuments();

  if (input.status) {
    docs = docs.filter((d) => d.status === input.status);
  }

  return { documents: docs, total: docs.length };
}

function handleGetWorkspaceSummary(): GetWorkspaceSummaryOutput {
  const docs = enrichDocuments();
  return {
    name: "Workspace Kit",
    totalDocuments: docs.length,
    fresh: docs.filter((d) => d.status === "fresh").length,
    warning: docs.filter((d) => d.status === "warning").length,
    stale: docs.filter((d) => d.status === "stale").length,
  };
}

/** Create an MCPServer with the workspace tools registered. */
export function createToolServer(): MCPServer {
  const server = new MCPServer({
    name: "workspace-kit",
    version: "0.0.1",
    tools: toolDefinitions,
  });

  server.registerHandler("listDocuments", handleListDocuments);
  server.registerHandler("getWorkspaceSummary", handleGetWorkspaceSummary);

  return server;
}
