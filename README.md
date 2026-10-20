# Tesla Car Dealership

An Angular 21 storefront for an independent electric-vehicle dealership ("Volt Motors").

## Features

- **Home**: a full-height showcase for each model with headline specs and calls to action
- **Model configurator** (`/models/:id`): pick trim, paint and wheels with a live price and monthly-payment estimate
- **Inventory** (`/inventory`): filter in-stock vehicles by model, condition and max price, and sort them
- **Test drive booking** (`/test-drive`): a validated reactive form, pre-filled from model and inventory links
- Responsive layout with a mobile menu, and light/dark theme via `prefers-color-scheme`
- Vector car illustrations tinted with the selected paint (no external image assets)

Vehicle and inventory data lives in `src/app/data/` and can be swapped for an API later.

## Development

```bash
npm install
npm start        # http://localhost:4200
npm run build    # production build in dist/
npm test         # unit tests (Vitest)
```

`.npmrc` sets `legacy-peer-deps=true` to work around an npm peer-resolution crash on jsdom's optional `canvas` peer.
