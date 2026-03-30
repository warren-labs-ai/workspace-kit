import { Button, Card, Chart } from "@warren/ui";
import type { MetricPoint, WorkflowStatus } from "@warren/shared";

const sampleMetrics: MetricPoint[] = [
  { timestamp: "Mon", value: 12 },
  { timestamp: "Tue", value: 19 },
  { timestamp: "Wed", value: 15 },
  { timestamp: "Thu", value: 28 },
  { timestamp: "Fri", value: 24 },
  { timestamp: "Sat", value: 31 },
  { timestamp: "Sun", value: 22 },
];

const recentWorkflows: WorkflowStatus[] = [
  { id: "1", name: "Health Check", state: "completed", startedAt: new Date() },
  { id: "2", name: "Data Sync", state: "running", startedAt: new Date() },
];

const stateColors: Record<WorkflowStatus["state"], string> = {
  idle: "text-gray-500",
  running: "text-blue-600",
  completed: "text-green-600",
  failed: "text-red-600",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Workspace Kit</h1>
        <p className="mt-2 text-gray-600">
          MCP-powered workspace dashboard
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Workflows">
          <ul className="space-y-2">
            {recentWorkflows.map((w) => (
              <li key={w.id} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{w.name}</span>
                <span className={`font-medium ${stateColors[w.state]}`}>
                  {w.state}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button size="sm">View all</Button>
          </div>
        </Card>

        <Card title="Agents">
          <p className="text-sm text-gray-600">No agents configured</p>
          <div className="mt-4">
            <Button variant="secondary" size="sm">Configure</Button>
          </div>
        </Card>

        <Card title="Status">
          <p className="text-sm text-gray-600">All systems idle</p>
          <div className="mt-4">
            <Button variant="ghost" size="sm">Refresh</Button>
          </div>
        </Card>
      </div>

      <div className="mt-10">
        <Card title="Activity">
          <Chart data={sampleMetrics} />
        </Card>
      </div>
    </main>
  );
}
