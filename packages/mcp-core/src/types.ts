// MCP protocol types

export interface MCPTool {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export interface MCPRequest {
  method: string;
  params?: Record<string, unknown>;
}

export interface MCPResponse {
  result?: unknown;
  error?: { code: number; message: string };
}

export interface MCPServerConfig {
  name: string;
  version: string;
  tools: MCPTool[];
}

// Tool-specific types

export interface ListDocumentsInput {
  status?: "fresh" | "warning" | "stale";
}

export interface ListDocumentsOutput {
  documents: Array<{
    id: string;
    title: string;
    owner: string;
    lastUpdated: string;
    status: "fresh" | "warning" | "stale";
    daysAgo: number;
  }>;
  total: number;
}

export interface GetWorkspaceSummaryInput {
  workspaceId?: string;
}

export interface GetWorkspaceSummaryOutput {
  name: string;
  totalDocuments: number;
  fresh: number;
  warning: number;
  stale: number;
}
