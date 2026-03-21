# TechFencing.com — Roadmap & TODO

## Primary

### 1. Content Verification
- [x] Homepage — all sections reviewed and updated (hero, pillars, layers, getting started, extras, disclaimer, footer)
- [x] PewDiePie citations/quotes verified against transcripts
- [x] Experiments page deprecated and removed
- [ ] Re-check ALL information on remaining pages (Bible, Guides, Arsenal, Damned, Glossary, About, TL;DR)
- [ ] Verify cross-references between pages are accurate and working
- [ ] Check if any pages are missing content or incomplete

### 2. Reading Progress Feature
- [x] Add "completed" checkboxes to Bible pages (track reading/knowledge progress)
- [x] Add "completed" checkboxes to Guide pages
- [x] Persist completion state in localStorage
- [x] Show completion checkmarks in sidebar nav and navbar dropdowns

### 3. Light/Dark Mode
- [ ] Add accessibility light/dark mode toggle
- [ ] Add to navbar settings gear (alongside cinematic scroll toggle)

### 4. Glossary Hover Verification
- [ ] Verify glossary hover tooltips work across all pages
- [ ] Test on desktop (hover) and mobile (tap)
- [ ] **Note:** Do this AFTER content verification (item 1) is complete

### 6. Homepage Visitor Counter (Privacy Awareness Feature)
- [ ] Research Cloudflare analytics — does it track visitors? Do they respect privacy? (practice what we preach)
- [ ] If analytics data is available: show count of visitors who lack good tracker blockers/browser privacy on the homepage hero
- [ ] If the current user also lacks protection: show extra line like "you can benefit too, {browser name} ignorant user"
- [ ] This ties into the broader question: is Cloudflare a good host for a privacy-focused site?

### 8. Mobile Responsiveness Fix
- [ ] Audit all pages at mobile resolutions (375px, 390px, 428px)
- [ ] Fix layout/overflow issues on homepage
- [ ] Fix layout/overflow issues on content pages (Bible, Guides, Arsenal, etc.)
- [ ] Test footer, navbar, and glossary tooltips on mobile
- [ ] Verify on actual device after fixes

---

## Secondary

### 10. Juxtopposed Collaboration
- [ ] After publishing: contact juxtopposed (YouTube channel) about UI/UX collaboration review
- [ ] If collaboration happens: add "designed by @juxtopposed" credit in footer & top navbar
- [ ] Expect high traffic from this — ensure site can handle it

### 11. Color Blind Mode
- [ ] Add accessibility color blind mode
- [ ] Research which types to support (protanopia, deuteranopia, tritanopia)
- [ ] Add toggle to settings gear

---

## Completed
_(Move items here as they're done)_

### 5. Contact Email & About Page
- [x] Create custom domain email: contact@techfencing.com
- [x] Add contact email to footer
- [x] Add contact email to About page with message: "This site is open to contributions. If you spot an error, have a better alternative, or want to improve a guide — reach out."

### 7. Pre-Publish on Cloudflare
- [x] Deploy to .pages.dev using Cloudflare Pages (config ready: `.node-version`, build cmd set)
- [x] Test the deployment
- [x] Verify all features work in production

### 9. Google Stitch UI/UX Review
- [x] Use Google Stitch (UI/UX AI service) to review the website
- [x] Document the score and any recommendations
- [x] Address critical UX issues found
