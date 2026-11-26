# Octalbees — UI Design Concepts

A collection of 9 standalone landing page UI concepts for **Octalbees** (E-Commerce, ERP & CRM, Custom Software, Web Development & Technical SEO).

Open the root [`index.html`](./index.html) to browse all designs from a single gallery page, or jump directly into any concept below.

## Design Concepts

| # | Concept | Folder | Style & Highlights |
|---|---|---|---|
| 01 | **Aurora Night** | [`design-1-aurora-night/`](./design-1-aurora-night/) | Dark obsidian theme with glowing violet aurora gradients and amber accents |
| 02 | **Amber Blocks** | [`design-2-amber-blocks/`](./design-2-amber-blocks/) | Bold modular color-blocking led by Octalbees golden amber |
| 03 | **Studio Bento** | [`design-3-studio-bento/`](./design-3-studio-bento/) | Clean product-studio bento grid for fast service & metric scanning |
| 04 | **Ledger Editorial** | [`design-4-ledger-editorial/`](./design-4-ledger-editorial/) | Executive editorial layout with crisp ruled columns and structured typography |
| 05 | **Signal Console** | [`design-5-signal-console/`](./design-5-signal-console/) | Developer-console aesthetic with monospace telemetry and dark UI panels |
| 06 | **Honey Ledger** | [`design-6-honey-ledger/`](./design-6-honey-ledger/) | Full-bleed Swiss 1px ledger grid, interactive Live Scope Ledger, and master-detail spec sheet |
| 07 | **Octal Studio** | [`design-7-octal-studio/`](./design-7-octal-studio/) | Rounded white canvas, electric violet hero, interactive Octalbees OS + IDE mockups |
| 08 | **Axis Prism** | [`design-8-axis-prism/`](./design-8-axis-prism/) | Serif + sans editorial luxury, glassmorphic pill nav, isometric prism pipeline, instant scope Q&A |
| 09 | **Sunset Atelier** | [`design-9-sunset-atelier/`](./design-9-sunset-atelier/) | Warm parchment & espresso craft aesthetic, interactive studio dossier, comparison grid, 12-tile wall |

## Local Preview

Each design is pure static HTML, CSS, and vanilla JS with zero build steps. Open `index.html` directly in a browser or serve the repo locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Deploying to GitHub Pages

```bash
git add .
git commit -m "Add Octalbees UI design gallery and concepts"
git push -u origin main

# Enable GitHub Pages from the repo root
USER=$(gh api user -q .login)
gh api "repos/$USER/octalbees-designs/pages" \
  -X POST \
  -f build_type=legacy \
  -f source[branch]=main \
  -f source[path]=/
```
