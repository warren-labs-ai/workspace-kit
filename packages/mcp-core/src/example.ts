/**
 * Usage example — demonstrates how to create a tool server and call tools.
 *
 * Run with: npx tsx packages/mcp-core/src/example.ts
 */

import { createToolServer } from "./tools";

async function main() {
  const server = createToolServer();

  console.log(`Server: ${server.name}`);
  console.log(`Tools: ${server.tools.map((t) => t.name).join(", ")}\n`);

  // List all documents
  const allDocs = await server.handleRequest({ method: "listDocuments" });
  console.log("All documents:", JSON.stringify(allDocs.result, null, 2));

  // List only stale documents
  const staleDocs = await server.handleRequest({
    method: "listDocuments",
    params: { status: "stale" },
  });
  console.log("\nStale documents:", JSON.stringify(staleDocs.result, null, 2));

  // Get workspace summary
  const summary = await server.handleRequest({ method: "getWorkspaceSummary" });
  console.log("\nWorkspace summary:", JSON.stringify(summary.result, null, 2));

  // Call a method that doesn't exist
  const notFound = await server.handleRequest({ method: "deleteEverything" });
  console.log("\nUnknown method:", JSON.stringify(notFound, null, 2));
}

main();
