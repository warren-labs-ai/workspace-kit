import type { MCPServerConfig, MCPTool, MCPRequest, MCPResponse } from "./types";

export class MCPServer {
  private config: MCPServerConfig;
  private handlers = new Map<string, (params?: Record<string, unknown>) => unknown>();

  constructor(config: MCPServerConfig) {
    this.config = config;
  }

  get name(): string {
    return this.config.name;
  }

  get tools(): MCPTool[] {
    return this.config.tools;
  }

  registerHandler(method: string, handler: (params?: Record<string, unknown>) => unknown): void {
    this.handlers.set(method, handler);
  }

  async handleRequest(request: MCPRequest): Promise<MCPResponse> {
    const handler = this.handlers.get(request.method);
    if (!handler) {
      return { error: { code: -32601, message: `Method not found: ${request.method}` } };
    }
    try {
      const result = await handler(request.params);
      return { result };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { error: { code: -32000, message } };
    }
  }
}
