# Contributing to TechFencing

Thanks for wanting to help make the internet a more private place! Here's how to contribute.

## Getting Started

1. **Fork** this repository
2. **Clone** your fork locally
3. **Install dependencies:**
   ```bash
   cd site
   npm install
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The site runs at `http://localhost:4321`

## Making Changes

1. Create a branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test locally with `npm run build` to ensure the production build succeeds
4. Commit using [conventional commits](https://www.conventionalcommits.org/):
   - `feat(scope): add new feature`
   - `fix(scope): fix a bug`
   - `docs(scope): update documentation`
   - `style(scope): formatting, no code change`

## Submitting a Pull Request

- **Target the `develop` branch**, not `master`
- Fill out the PR template
- Keep PRs focused — one feature or fix per PR
- Include screenshots for any visual changes

## What Can I Contribute?

- New guides or improvements to existing ones
- Bug fixes and accessibility improvements
- Performance optimizations
- Translations (coming soon)
- Design improvements

## Code Style

- Components use Astro's `.astro` format with scoped styles
- CSS custom properties are defined in `site/src/styles/tokens.css`
- All animations must respect `prefers-reduced-motion`

## Questions?

Open an issue or email contact@techfencing.com.
