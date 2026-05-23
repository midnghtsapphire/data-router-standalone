# Data Router Standalone

Data Router Standalone is a full-stack data-routing platform that lets teams ingest, classify, and route data from multiple sources into operational destinations.

## What this repository does

- Serves a FastAPI backend for routing logic, webhook ingestion, and Stripe configuration endpoints.
- Hosts a React + Vite frontend for routing workflows, dashboards, admin, and account surfaces.
- Includes deployment components for auth, payments, affiliate features, and landing-page modules.

## How it can be used now

1. Start backend/frontend locally for feature development.
2. Run routing workflows from the dashboard UI.
3. Validate core standards with `npm test` and `npm run build` at the repository root.

## Website in Test (Vercel)

- **Test URL:** https://data-router-standalone.vercel.app
- **Deployment automation reference:** configure Vercel to deploy from this repository on each push to the main integration branch.

## Market and value snapshot

- Primary value: operational time savings by centralizing data routing into one UI/API system.
- Business target: support a path toward a **$10M annualized business within 3 years** through subscription tiers, integrations, and enterprise routing features.

## Quick start

```bash
# backend
cd backend
pip install -r requirements.txt
python -m uvicorn backend.main:app --reload --port 8002

# frontend
cd ../frontend
npm install
npm run dev
```

## Root validation commands

```bash
npm test
npm run build
```

## Research engines, suggestions, assets, and artifacts

- `RESEARCH_ENGINES.md` — front-to-back research engine map and output structure.
- `SUGGESTIONS.md` — prioritized implementation suggestions and rollout order.
- `ASSETS.md` — inventory of product, engineering, and GTM assets in this repository.
- `ARTIFACTS.md` — delivery artifacts, validation outputs, and release traceability.
