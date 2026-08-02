# Modernization Assessment

Comparison of this codebase (last significant dependency updates ~3 years ago) against conventions found in current, widely-adopted React/TypeScript applications. Findings below are grounded in what's actually in this repo (`npm outdated`, `npm audit`, config files, source scan) as of 2026-08-02 — not assumptions.

Read this as a prioritized backlog, not a mandate to do everything at once. Several items below are breaking-change migrations that deserve their own branch and dedicated testing, not a drive-by bump.

## Priority summary

| Priority | Item |
|---|---|
| P0 — Critical | Move off Create React App; resolve 84 npm audit findings (5 critical, 41 high) |
| P0 — Critical | Remove/replace unused `redux-saga`; replace hand-rolled Redux with TanStack Query + Zustand (see §3) |
| P1 — High | Consolidate to one CSS-in-JS engine (drop the styled-components/MUI-emotion bridge) |
| P1 — High | Add a CI workflow that runs lint/typecheck/test/build on every PR |
| P1 — High | Introduce server-state caching (TanStack Query or RTK Query) instead of manual axios + Redux |
| P2 — Medium | Path aliases, TS strictness cleanup, error boundaries, expand test coverage |
| P3 — Low | File-naming consistency, env validation, Node version pinning |

---

## 1. Build tooling: Create React App is dead

`react-scripts@5.0.1` is the last CRA release (2022); the React team removed CRA from the official "Start a New React Project" docs in 2025, and the package is unmaintained. This is also the root cause of most of the audit findings below — CRA pins an old webpack-dev-server/svgo/postcss/nth-check chain that can't be patched without breaking `react-scripts` itself (`npm audit fix --force` would fork `react-scripts` to a broken version).

**Recommendation:** migrate to **Vite** (`vite` + `@vitejs/plugin-react`) for a like-for-like SPA replacement — same mental model (CRA env vars become `import.meta.env.VITE_*`), dramatically faster dev server/HMR, and no transitive CRA vulnerability chain. If SSR/routing conventions matter long-term, **React Router v7 in framework mode** (the Remix/React Router merger) is the popular alternative and pairs well with item 9 (data loaders).

This is the single highest-leverage change here — it resolves the security debt, the slow dev server, and unlocks path aliases/modern TS targets cleanly.

## 2. Dependency staleness & security

`npm audit` on this repo: **84 vulnerabilities — 5 critical, 41 high, 23 moderate, 15 low**, almost entirely in CRA's dev-tooling chain (`ws`, `yaml`, `word-wrap`, `websocket-driver`, etc. under `node_modules/react-scripts/...`). These aren't reachable from your app code, but they're real supply-chain exposure and the reason GitHub's Dependabot is flagging this repo. Resolved by item 1, not by patching individual leaves.

Runtime dependency drift (`npm outdated`, current → latest):

| Package | Current | Latest | Note |
|---|---|---|---|
| `react` / `react-dom` | 18.2.0 | 19.2.8 | React 19 is a breaking major (ref-as-prop, new hooks, removed legacy APIs) |
| `react-router-dom` | 6.11.2 | 7.18.2 | v7 changes routing model (data routers, framework mode) |
| `typescript` | 4.9.5 | 5.x+ | 4.9 predates `satisfies`, better inference, perf improvements |
| `@mui/material` | 5.13.0 | 9.2.0 | Multiple breaking majors behind |
| `styled-components` | 5.3.10 | 6.4.4 | v6 changes SSR/concurrent-mode behavior |
| `redux` | 4.2.1 | 5.0.1 | v5 is ESM-only, ties into item 3 |
| `axios` | 1.4.0 | 1.19.0 | Several CVE fixes landed since 1.4 |
| `uuid` | 9.0.0 | 14.0.1 | v10+ is ESM-only |
| `@testing-library/react` | 14.0.0 | 16.3.2 | — |
| `@types/node` | 16.18.30 | 26.1.2 | Targets a Node version far behind current LTS |

**Recommendation:** don't blind-bump. Sequence as: patch/minor bumps first (axios, testing-library, @types/*) → then the coordinated major migration (React 19 + MUI + styled-components + router) as one deliberate effort, since these interact (e.g., MUI v6+ requires React 18.3+, styled-components v6 changes theming APIs MUI's bridge depends on).

## 3. State management: replace hand-rolled Redux with TanStack Query + Zustand

Every slice (`cart`, `product`, `order`, `user`, etc.) is hand-rolled Redux: string-constant action types (`cart.types.ts`), manual action creators, switch-statement reducers, `legacy_createStore`. `@reduxjs/toolkit` is a `package.json` dependency but **nothing in `src/store` actually uses it** — this is exactly the boilerplate pattern the Redux team has told developers to stop writing since 2019.

`redux-saga` (v1.2.3) is also a dependency with **zero sagas defined anywhere** — pure dead weight.

**Given the willingness to do a full rewrite of state management, the recommended replacement is TanStack Query + Zustand, not Redux/RTK.** Rationale for each piece:

- **Zustand** for the genuinely client-owned state — `cart`, `user` (auth/session), `wishlist`. No boilerplate (no action types/creators/reducers, no `<Provider>` wrapping), stores are just hooks (`useCartStore((s) => s.cart)`), components only re-render on the slice they select (no `reselect` needed), and a `persist` middleware replaces `redux-persist` with far less setup.
- **TanStack Query** for everything server-fetched — see §4. Together these two fully replace Redux, `redux-persist`, `redux-thunk`, `redux-saga`, and `reselect` as dependencies.
- If a full rewrite turns out **not** to be in scope later, `@reduxjs/toolkit`'s `createSlice` (already installed) is the fallback — mechanical, lower-risk, migrate one slice at a time. But given the stated appetite for a complete rewrite, Zustand is the more appropriate target: it's less code, no store-wiring boilerplate, and there's no reason to adopt RTK's ceremony only to have TanStack Query own most of what used to live in `src/store`.

**Recommendation:** remove `redux-saga`, `redux-thunk`, `redux-persist`, `reselect`, `redux`, `react-redux`, and `@reduxjs/toolkit` once migrated; replace `src/store/*` with `src/stores/*.store.ts` Zustand stores for `cart`, `user`, `wishlist`.

## 4. No server-state layer — manual fetch/cache logic instead of TanStack Query

Data fetching is hand-orchestrated: `src/apis/*.api.js` (bare axios calls) → `*.controller.ts` (manual "is it already in Redux, else refetch" branching, see `product-details.controller.ts`) → dumped into Redux reducers. This is the pattern the ecosystem moved away from once React Query (now TanStack Query) normalized separating **server cache state** (fetched, cached, revalidated, deduped automatically) from **client/UI state** (cart contents, form state).

The current approach means every "have we already fetched this?" check is hand-written and easy to get subtly wrong — `product-details.controller.ts` has three near-duplicate branches doing this for product/related-products/reviews.

**Recommendation:** introduce **TanStack Query** for all `GET` data (products, reviews, related products, orders) — the standard choice here specifically because it is a pure data-fetching/caching library, not a general state manager, so it composes cleanly with Zustand owning the rest (see §3) rather than overlapping with it. This deletes the manual caching logic in the `.controller.ts` files outright: `product-details.controller.ts` collapses from three near-duplicate "check state, else fetch" branches down to three `useQuery` calls with query keys, since TanStack Query does the dedup/cache-or-fetch check internally.

## 5. Styling: two competing CSS-in-JS engines

The app runs **both** `styled-components` (component `*.styles.js` files) **and** MUI/Emotion, bridged via `@mui/styled-engine-sc`. MUI's own docs describe this bridge as a migration shim for teams moving *off* styled-components, not a steady-state architecture. Symptom visible in the code: heavy `!important` usage in `button.styles.js` and similar files, which is the classic sign of two styling systems fighting over specificity.

**Recommendation:** pick one and delete the other:
- **Stay on MUI's native styling** (`sx` prop / `styled` from `@mui/material/styles`) and drop `styled-components` + the bridge package — least churn since MUI is already the component library, and removes a whole dependency + the `!important` workarounds.
- Or, if the design system is moving away from MUI generally, standardize on **Tailwind CSS**, the most common choice in current popular React repos, and drop both CSS-in-JS engines.

## 6. TypeScript rigor

- `tsconfig.json` targets `es5`. With Vite/current bundlers and no IE11 requirement, `es2020`+ is standard — smaller output, no unnecessary polyfill helpers.
- `strict: true` is set (good), but it's being undermined: **53 explicit `: any` usages** across `src`, plus `// @ts-ignore` comments in `product-details.controller.ts` suppressing real type errors instead of fixing the underlying shape (e.g., indexing `relatedProducts[productID]` on an array-typed value).
- Style files are `.js`, not `.ts`/`.tsx` (`button.styles.js`, `cart.styles.js`, etc.), so `styled(...)` calls and theme token usage get no type checking at all. Not part of the strict-mode contract the rest of the codebase claims to follow.

**Recommendation:** rename `*.styles.js` → `*.styles.ts`, type the theme tokens in `src/styles/`, and burn down the `any`/`@ts-ignore` count opportunistically as files are touched rather than as a big-bang pass.

## 7. No path aliases — deep relative imports everywhere

No `baseUrl`/`paths` in `tsconfig.json`. **181 files** import via `../../` (or deeper) relative paths. Every current React starter (Vite templates, Next.js, CRA itself via `NODE_PATH` in later years) configures `@/` (or similar) aliases so imports read `@/store/cart/cart.selector` instead of `../../../store/cart/cart.selector`, and don't break when files move.

**Recommendation:** add `"baseUrl": "src"` + `"paths": {"@/*": ["*"]}` to `tsconfig.json` (and mirror in Vite's `resolve.alias` if you migrate per item 1).

## 8. No CI quality gate

The only workflow (`.github/workflows/autopr-release-to-dev.yml`) auto-opens a PR from `release/*` branches — it doesn't run tests, lint, typecheck, or build. There is no automated gate preventing a broken build or failing test from merging. Popular repos treat "PR triggers lint + typecheck + test + build" as table stakes.

Also missing: no Husky/lint-staged pre-commit hook, so nothing locally enforces the ESLint/Prettier setup the README advertises — there's in fact no `.eslintrc*`/`.prettierrc*` file in the repo at all; the project relies entirely on CRA's baked-in `react-app` ESLint preset with zero customization or Prettier config to back the "Prettier" badge in the README.

**Recommendation:** add a `ci.yml` running `npm ci && npm run build && npm test -- --watchAll=false` (plus a typecheck step, `tsc --noEmit`) on every PR; add Husky + lint-staged for pre-commit formatting; add an actual `.prettierrc`.

## 9. Testing coverage is thin, and there's no E2E on the money path

Only **4 test files** exist for **67 components** (`email-input`, `password-input`, `product-card`, `username-input`) — no coverage for reducers, selectors, the API layer, or the `.controller.ts` orchestration logic, all of which are cheap to unit-test since they're mostly pure functions. There is also no end-to-end test (Cypress/Playwright) covering checkout/Stripe payment — the highest-value flow in an e-commerce app to protect against regression, and currently the least tested.

**Recommendation:** prioritize unit tests for `src/store/**/*.reducer.ts` and `*.selector.ts` (pure, trivial to test, currently zero coverage), then add a Playwright smoke test for the cart → checkout → confirmation flow.

## 10. Error handling gaps

- No `ErrorBoundary` anywhere in the codebase, despite using `React.lazy` + `Suspense` for route-level code splitting in `App.tsx` — current best practice pairs lazy-loaded routes with an error boundary to catch chunk-load failures gracefully instead of a blank screen.
- Error handling in the data layer is inconsistent: `fetchProduct` in `product-details.controller.ts` catches and `console.error`s; the other fetch helpers in the same file (`fetchRelatedProductIDs`, `fetchMultipleProducts`, `fetchReviews`) don't catch at all, so a failed request there throws unhandled.
- 13 leftover `console.log` calls in `src` with no logging abstraction — fine for local dev, but nothing strips them for production builds.

**Recommendation:** add a top-level `ErrorBoundary` around the router's `Suspense` boundaries; make the fetch-helper error handling in the controllers consistent (all-or-none, not one-off).

## 11. Routing pattern

`react-router-dom` v6 is used with plain `<Route element={...}>` + component-level `useEffect` data-fetching (via the `.controller.ts` files). The now-standard pattern (react-router v6.4+ data routers, and the default in v7) is `createBrowserRouter` with route `loader`/`action` functions, which colocates data-fetching with the route definition and lets `Suspense`/error boundaries key off it directly. Not urgent on its own, but worth doing *together with* item 4 (TanStack Query) and item 1 (router version bump), since loaders are where a query-client integration naturally lives.

## 12. Smaller consistency items

- **File naming**: components inconsistently use `index.component.tsx` vs `<name>.component.tsx` for the same role across directories (already flagged in `CLAUDE.md`) — pick one convention.
- **`lodash` full-import**: `import _ from "lodash"` (whole-library import) appears throughout instead of per-function imports (`lodash-es` or native `Array`/`Object` methods, which now cover most of what's used here without a dependency at all) — affects bundle size.
- **No env validation**: `process.env.REACT_APP_*` values are used directly with no schema/startup validation (e.g., `zod`-parsed env module) — a missing `REACT_APP_STRIPE_PUBLISHABLE_KEY` currently fails silently at the point of use rather than at boot.
- **No Node version pinning**: no `engines` field in `package.json`, no `.nvmrc`/`.node-version` — minor, but standard in current repos for reproducible installs.

---

## Suggested sequencing

1. **Security/tooling reset**: migrate CRA → Vite (resolves the audit findings, enables path aliases + modern TS target in one pass).
2. **State rewrite**: introduce TanStack Query for all server-fetched data, Zustand for `cart`/`user`/`wishlist`; remove `redux`, `react-redux`, `@reduxjs/toolkit`, `redux-persist`, `redux-thunk`, `redux-saga`, `reselect` once `src/store/*` is fully replaced by `src/stores/*.store.ts` + query hooks.
3. **Styling consolidation**: pick MUI-native or Tailwind, remove the other engine.
4. **Guardrails**: CI workflow, Husky/lint-staged, expand test coverage, error boundaries.
5. **Major dependency bumps** (React 19, router v7, MUI v6+, styled-components v6/removal) as a dedicated, tested migration once 1–4 give you a safety net to catch regressions.
