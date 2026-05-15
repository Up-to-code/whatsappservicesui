# WhatsApp Services UI

Copied from the existing extended dashboard UI and trimmed into a frontend-only Next.js app.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` or the port printed by Next.js.

## What Was Kept

- Existing dashboard pages, layouts, components, Arabic/English UI structure, and styling.
- Local mock data and mock actions under `src/mock/` so screens can render without a backend.
- Frontend-only auth/session behavior for previewing the UI.

## What Was Removed

- Backend function files and deployment config.
- Backend CLI scripts and backend runtime dependencies.
- Live backend client initialization.

## Structure

- `src/app/` - Next.js routes.
- `src/components/` - Shared UI components.
- `src/contexts/` - Frontend state providers.
- `src/mock/` - Local data/actions used by the copied UI.
- `src/hooks/` and `src/lib/` - UI helpers preserved from the copied app.
