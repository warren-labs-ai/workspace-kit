# @warren/mcp-core

Minimal MCP (Model Context Protocol) server primitives for Workspace Kit. Provides a tool registry, typed request/response handling, and two example tools backed by mock data.

This is a starting point, not a production server. It demonstrates the pattern so you can extend it with real data sources.

## What's Included

### MCPServer

A lightweight server class that registers named tool handlers and routes requests to them:

```ts
import { MCPServer } from "@warren/mcp-core";

const server = new MCPServer({
  name: "my-server",
  version: "0.1.0",
  tools: [{ name: "ping", description: "Health check", parameters: {} }],
});

server.registerHandler("ping", () => ({ ok: true }));

const response = await server.handleRequest({ method: "ping" });
// { result: { ok: true } }
```

### Example Tools

| Tool | Description |
|------|-------------|
| `listDocuments` | List documents, optionally filtered by status (`fresh`, `warning`, `stale`) |
| `getWorkspaceSummary` | Get document freshness counts across the workspace |

Both tools use mock data from the documentation dashboard concepts. In a real app, you'd replace the mock data with database queries or API calls.

### createToolServer

Factory function that returns an `MCPServer` with both example tools registered:

```ts
import { createToolServer } from "@warren/mcp-core";

const server = createToolServer();

const docs = await server.handleRequest({
  method: "listDocuments",
  params: { status: "stale" },
});

const summary = await server.handleRequest({
  method: "getWorkspaceSummary",
});
```

## Adding a New Tool

1. Define input/output types in `src/types.ts`:

```ts
export interface MyToolInput {
  query: string;
}

export interface MyToolOutput {
  results: string[];
}
```

2. Write the handler function in `src/tools.ts`:

```ts
function handleMyTool(params?: Record<string, unknown>): MyToolOutput {
  const input = (params ?? {}) as MyToolInput;
  return { results: [`Found: ${input.query}`] };
}
```

3. Add the tool definition and register the handler in `createToolServer`:

```ts
// In the toolDefinitions array:
{
  name: "myTool",
  description: "Search for something",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "Search query" },
    },
  },
}

// In createToolServer():
server.registerHandler("myTool", handleMyTool);
```

4. Export any new types from `src/index.ts` if needed.

## Where Real Integrations Go

The mock data in `src/tools.ts` is intentionally simple. To connect real data sources:

- Replace `mockDocuments` with a database query or API call
- Replace `MOCK_NOW` with `new Date()`
- Add async operations in handlers (they already support `async`)
- Add a transport layer (HTTP, stdio, WebSocket) around `MCPServer.handleRequest` when you're ready to serve over a network
