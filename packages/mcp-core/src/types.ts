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
