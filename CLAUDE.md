# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TechFencing.com is a privacy-focused educational site built with **Astro 6** (requires Node.js >= 22.12.0). The active site lives in `base_version/`. The `ui-ux-pro-max-skill/` directory is a separate AI design toolkit — see its own CLAUDE.md.

## Commands

All commands run from `base_version/`:

```bash
cd base_version
npm run dev        # Dev server at localhost:4321
npm run build      # Production build to dist/
npm run preview    # Preview production build
```

No test framework or linter is configured.

## Architecture

### Layouts

- **BaseLayout** (`src/layouts/BaseLayout.astro`) — wraps every page with WavyShader background, Navbar, Footer, and global CSS imports
- **GuideLayout** (`src/layouts/GuideLayout.astro`) — extends BaseLayout for guide pages; adds sidebar nav, breadcrumbs, difficulty badge, and prev/next pagination

### Routing

Astro file-based routing in `src/pages/`:
- `/` — homepage (`index.astro`)
- `/bible/` — three-layer content (layer-1-os, layer-2-services, layer-3-behavior)
- `/guides/` — 9 step-by-step guides, each with a difficulty level (1-5)
- `/tldr`, `/arsenal`, `/damned`, `/glossary`, `/about`, `/experiments`

### Key Components

- **WavyShader** — canvas-based animated background (grain + wave effect via GSAP). Configured through data attributes: position, opacity, scale, rotation, grain, thickness, speed
- **GlitchText** — CSS glitch animation on text elements (clip-path based)
- **DifficultyBadge** — color-coded level indicator (1=Beginner through 5=Rabbit Hole)
- **BrowserBlocker** — detects and blocks unsupported browsers
- **GlossaryTerm** / `glossary-tooltip.ts` — inline glossary tooltips; term definitions are hardcoded in the script file

### Design System

Three global CSS files imported by BaseLayout:
1. **`src/styles/tokens.css`** — CSS custom properties: color palette (crimson/charcoal theme), typography (JetBrains Mono headings, Inter body), spacing (4px base), z-index scale, shadows, transitions
2. **`src/styles/global.css`** — reset, base typography, layout utilities
3. **`src/styles/effects.css`** — keyframe animations (glitch, flowing-line, tape, pulse-glow)

All colors and spacing use CSS custom properties from tokens.css. Components use scoped `<style>` blocks.

### Dependencies

Only runtime dependency beyond Astro is **GSAP** (animation library), used by WavyShader and ScrollProgressTrail.

## Conventions

- Components define props via TypeScript `interface Props` and destructure from `Astro.props`
- Use `class:list` for conditional CSS classes
- All animations respect `prefers-reduced-motion`
- Commit messages use conventional commits: `feat(scope):`, `fix(scope):`
