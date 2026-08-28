# Investment Calculator Toolkit

A production-oriented, SEO-first collection of six free investment planning calculators. Calculations are deterministic, run in the browser, and require no database, authentication, market feed, or paid API.

## Stack

- Next.js App Router, React, and strict TypeScript
- Lightweight custom CSS design system with no runtime styling dependency
- Vitest for calculation-engine unit tests
- Vercel-ready static/server rendering

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run lint`, `npm test`, and `npm run build` before deployment.

## Architecture

Financial formulas live in `lib/calculators/`, separate from the interactive React component. Shared validation, periodic-rate conversion, future-value logic, and schedules are in `lib/calculators/shared.ts`. Display formatters are in `lib/utils/`.

Calculator metadata and unique educational content live in `content/calculators.ts`. The statically generated route at `app/[slug]/page.tsx` uses that registry for metadata, canonical URLs, breadcrumbs, FAQ data, and related links. Important copy is server rendered. `app/sitemap.ts` automatically includes every registered calculator, and `app/robots.ts` references it.

## Add a calculator

1. Add a pure, validated calculation module and tests in `lib/calculators/` and `tests/`.
2. Add its key and unique content to `content/calculators.ts`.
3. Add inputs, defaults, and output labels to `components/Calculator.tsx`.
4. Confirm metadata, structured data, internal links, mobile behavior, and accessibility.

## Deployment

Import the repository into Vercel and use the detected Next.js settings. No services or secrets are required. Set `NEXT_PUBLIC_SITE_URL` to the production origin if it differs from `https://investmentcalculatortoolkit.com`, then deploy. Run `npm run build` locally or in CI first.

## Calculation conventions

Returns are hypothetical constant annual assumptions converted to equivalent periodic rates. Unless stated otherwise, contributions occur at period-end and results exclude taxes, inflation, and transaction costs. ETF fee estimates subtract the expense ratio from the gross return as a deliberately simplified model.
