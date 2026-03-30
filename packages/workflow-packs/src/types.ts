export interface WorkflowStep {
  id: string;
  name: string;
  tool: string;
  params?: Record<string, unknown>;
  dependsOn?: string[];
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
}
