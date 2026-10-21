# Tesla Car Dealership

An Angular 21 storefront for an independent electric-vehicle dealership ("Volt Motors").

## Features

- **Home**: a long-scroll landing page (hero and key stats, model lineup, charging, performance with interactive drive modes, interior, ownership and pricing, buyer journeys, test-drive call to action). Sections live in `src/app/pages/home/sections/`; their copy is in `src/app/data/landing.ts` and figures are derived from `cars.ts`
- **Model configurator** (`/models/:id`): pick trim, paint and wheels with a live price and monthly-payment estimate
- **Inventory** (`/inventory`): filter in-stock vehicles by model, condition and max price, and sort them
- **Test drive booking** (`/test-drive`): a validated reactive form, pre-filled from model and inventory links
- Responsive layout with a mobile menu; one light visual system (Manrope, black / off-white / red accent) defined in `src/styles.scss`
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
