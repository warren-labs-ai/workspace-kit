import type { WorkflowDefinition } from "./types";

export const healthCheckWorkflow: WorkflowDefinition = {
  id: "health-check",
  name: "System Health Check",
  description: "Runs a basic health check across configured services",
  steps: [
    {
      id: "ping",
      name: "Ping services",
      tool: "http-check",
      params: { timeout: 5000 },
    },
    {
      id: "report",
      name: "Generate report",
      tool: "summarize",
      dependsOn: ["ping"],
    },
  ],
};
