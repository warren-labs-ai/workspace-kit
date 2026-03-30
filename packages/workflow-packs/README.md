# @warren/workflow-packs

Reusable dashboard packs for Workspace Kit. Each pack is a combination of shared types, UI components, and a composition pattern that can be dropped into any app.

## Documentation Dashboard Pack

Tracks documentation freshness across a team. Shows which docs are current, which need review, and which are stale.

### Components Used

| Component | Package | Purpose |
|-----------|---------|---------|
| `SummaryCards` | `@warren/ui` | Stat cards showing fresh/warning/stale counts |
| `AttentionPanel` | `@warren/ui` | Filtered list of documents needing action |
| `DocumentTable` | `@warren/ui` | Full document table with status badges |
| `StatusBadge` | `@warren/ui` | Color-coded status indicator |

### Data Shape

Documents start as `Document` from `@warren/shared` and are enriched with computed fields:

```ts
// Input — your data source provides this
interface Document {
  id: string;
  title: string;
  owner: string;
  lastUpdated: string; // ISO date string, e.g. "2026-03-28"
}

// Enriched — computed at the app layer
interface EnrichedDocument extends Document {
  status: "fresh" | "warning" | "stale";
  days: number;
}
```

Staleness thresholds:
- **Fresh**: updated within the last 7 days
- **Warning**: not updated in 8–30 days
- **Stale**: not updated in over 30 days

### Enrichment

Use the helpers from `@warren/shared` to compute status and age:

```ts
import { getDocumentStatus, daysAgo } from "@warren/shared";

const enriched = documents.map((doc) => ({
  ...doc,
  status: getDocumentStatus(doc.lastUpdated),
  days: daysAgo(doc.lastUpdated),
}));
```

### Component Examples

**SummaryCards** — generic stat row, not document-specific:

```tsx
import { SummaryCards } from "@warren/ui";
import type { SummaryItem } from "@warren/ui";

const items: SummaryItem[] = [
  { label: "Fresh", count: 5, description: "Updated within 7 days", color: "green" },
  { label: "Needs Review", count: 3, description: "Not updated in 7–30 days", color: "amber" },
  { label: "Stale", count: 2, description: "Not updated in 30+ days", color: "red" },
];

<SummaryCards items={items} />
```

**AttentionPanel** — filtered document list with accent border:

```tsx
import { AttentionPanel } from "@warren/ui";

<AttentionPanel
  title="Stale Documents"
  documents={staleDocs}        // EnrichedDocument[]
  accentColor="red"
  emptyMessage="All docs are current."
/>
```

**DocumentTable** — full table with sortable-ready structure:

```tsx
import { DocumentTable } from "@warren/ui";

<DocumentTable documents={enriched} />  // EnrichedDocument[]
```

### Customizing Mock Data

Edit `apps/dashboard/app/data/mock-documents.ts` to change the demo data. The `MOCK_NOW` constant controls the reference date for staleness calculations, keeping the demo deterministic regardless of when you view it.

To connect real data, replace the mock import in your page with your own data source and run the same enrichment step.
