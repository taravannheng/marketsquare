# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketsquare is the frontend of a full-stack e-commerce site (React + TypeScript), bootstrapped with Create React App (`react-scripts`). It talks to a separate backend at [marketsquare-backend](https://github.com/taravannheng/marketsquare-backend) via `REACT_APP_BASE_URL`. Payments go through Stripe.

## Commands

- `npm start` — run the dev server (CRA default, port 3000)
- `npm run build` — production build
- `npm test` — run tests in watch mode (Jest via `react-scripts test`)
- `npm test -- --watchAll=false` — run tests once (CI-style)
- `npm test -- <pattern>` — run a single test file/suite, e.g. `npm test -- product-card`
- No lint script is defined; ESLint runs via the CRA `react-app` config during `start`/`build`.

Environment variables (see `.env.sample`): `REACT_APP_BASE_URL`, `REACT_APP_STRIPE_PUBLISHABLE_KEY`.

## Architecture

### State management

Redux (classic, not Redux Toolkit despite it being a dependency) with `redux-persist` (localStorage) and `redux-logger` in development. Store setup: `src/store/store.ts` → `src/store/root.reducer.ts`, which combines one reducer per domain slice (`cart`, `product`, `order`, `orderList`, `user`, `review`, `userReview`, `wishlist`, `relatedProduct`).

Each slice under `src/store/<slice>/` follows a consistent 3-4 file pattern:
- `<slice>.types.ts` — action type string constants
- `<slice>.action.ts` — plain action-object helpers / pure state-transform functions (present where the reducer needs them, e.g. `cart.action.ts`)
- `<slice>.reducer.ts` — switch-based reducer over the action types
- `<slice>.selector.ts` — selector functions consumed via `useSelector`

`redux-saga` is a listed dependency but is not currently wired into the store or used anywhere — don't assume sagas exist.

### Routing & auth gating

Routes are centralized as path strings in `src/utils/constants.ts` (`ROUTES`) and wired up in `src/App.tsx` with `react-router-dom` v6. Protected routes use a wrapper-component pattern: `src/pages/<page>/<page>.private.tsx` reads the `user` slice via `selectUser`, and renders `<Outlet />` if the user is authenticated or `<Navigate>` to sign-in (with a `redirectUrl` query param) otherwise. Heavier pages (confirmation, profile, wishlist, orders, reviews) are lazy-loaded with `React.lazy` + `Suspense` and nested inside their private-route wrapper.

### API layer

`src/apis/<domain>/<domain>.api.js` — one file per backend resource, each creating its own `axios.create({ baseURL: process.env.REACT_APP_BASE_URL })` instance and exporting thin request functions (no shared axios client). Pages/controllers call these directly and handle the response shape themselves (backend responses are typically arrays, e.g. `response.data[0]`).

### Page data-fetching controllers

Some pages have a `<page>.controller.ts` alongside the component (e.g. `src/pages/product-details/product-details.controller.ts`) that orchestrates multiple API calls, prefers already-loaded Redux state over refetching, and returns the combined data to the page component. This is the pattern to follow for new pages with non-trivial data dependencies rather than putting fetch orchestration directly in the component.

### Components

Every component lives in its own directory under `src/components/<name>/` with a fixed file split:
- `<name>.component.tsx` (or `index.component.tsx`) — the component itself
- `<name>.interface.ts` — the props interface, default-exported
- `<name>.style.js` / `<name>.styles.js` — `styled-components` definitions, imported as `*SC` (e.g. `PrimaryButtonSC`), wrapping MUI primitives (`@mui/material`) styled via the shared design tokens
- `<name>.test.tsx` — optional, Testing Library tests (not every component has one)

Naming for the primary file (`index.component.tsx` vs `<name>.component.tsx`) is inconsistent across the codebase — check the sibling directory before assuming which convention a given component uses. `src/pages/` follows the same per-directory split, plus the optional `.controller.ts` and `.private.tsx` files described above.

### Design tokens

`src/styles/` holds shared design tokens (`colors.js`, `typography.js`, `spacing.js`, `border-radius.js`, `shadows.js`, `breakpoints.js`), re-exported through `src/styles/styles.js`. Components should pull `COLORS`, `typography`, `space`, etc. from there rather than hardcoding values. `src/styles/globalstyles.js` is mounted once in `App.tsx`.

### Sample/mock data

`src/sample/` contains hardcoded sample data (products, carts, orders, menus, slideshows) used for local development/testing fixtures — check here before inventing new mock shapes.

### Testing

Tests use React Testing Library + Jest. Use `renderWithProvider` from `src/utils/test/test.util.js` to render components wrapped in a fresh Redux store (`createStore(rootReducer, initialState)`) and `MemoryRouter` — prefer this over ad hoc `Provider`/`Router` wrapping in new tests.
