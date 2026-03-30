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
