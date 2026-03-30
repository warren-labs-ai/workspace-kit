# @warren/dashboard

Next.js app that showcases Workspace Kit packs. Currently demonstrates the Documentation Dashboard Pack.

## Running

```bash
# From the repo root
pnpm dev

# Or directly
cd apps/dashboard && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## How It Works

The page is a composition layer. It imports data, enriches it, and passes it to reusable components from `@warren/ui`:

```
mock-documents.ts → enrichment → SummaryCards
                                → AttentionPanel (x2)
                                → DocumentTable
```

No business logic lives in the page — it wires data to components.

## Files

```
app/
  page.tsx                    Page composition
  layout.tsx                  Root layout and metadata
  globals.css                 Tailwind imports
  data/
    mock-documents.ts         Demo data (8 documents, fixed reference date)
```

## Adding a New Pack Demo

1. Create a new route in `app/` (e.g. `app/metrics/page.tsx`)
2. Import components from `@warren/ui`
3. Import types from `@warren/shared`
4. Add mock data in `app/data/`
5. Compose in the page
