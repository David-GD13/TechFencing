# TechFencing.com — Roadmap & TODO

## Primary

### 1. Content Verification
- [x] Homepage — all sections reviewed and updated (hero, pillars, layers, getting started, extras, disclaimer, footer)
- [x] PewDiePie citations/quotes verified against transcripts
- [x] Experiments page deprecated and removed
- [x] About page — rewritten to singular voice, fixed factual inaccuracies, added vibecoded disclaimer, updated analytics transparency
- [x] Browser Blocker — reviewed
- [x] Bible pages (all 3 layers) — content verified and styling unified
- [x] Guides main page — redesigned from grid to cinematic timeline
- [x] Glossary page — reviewed
- [x] Guide sub-pages (all 9) — content verified, links added, layout overhauled:
  - [x] Removed right sidebar (navbar handles navigation)
  - [x] Added per-step completion checkboxes with bidirectional hero sync
  - [x] Converted all Honest Downsides to DownsidesSection component (consistent with Bible)
  - [x] Added flowing-line dividers and content-block spacing
  - [x] Fixed breadcrumb link to /guides
  - [x] Browsers: Mozilla/Google disclaimer, 4 browser cards with download links, uBlock/Unhook per-browser install links
  - [x] Linux: Added Zorin, Pop!_OS, CachyOS, Tuxedo OS distros with links, USB tools, dual-boot encryption, commands tutorial, DE links
  - [x] De-Google: Added Tuta, Ente, OpenOffice, single-provider risk warning, all service links
  - [x] Self-Hosting: Added all tool links (Pi, Vaultwarden, Pi-Hole, File Browser, Tailscale, Cloudflare Tunnel)
  - [x] Open-Source: Added all tool links, OpenOffice, AFFiNE, Plex (with skepticism), Tuta
  - [x] Fix YouTube: Added RSS reader links, FreeTube/NewPipe/Invidious links
  - [x] Control Your Phone: Added GrapheneOS/NetGuard links, OEM unlocking glossary, Obtainium malware disclaimer
  - [x] Own Your AI: DownsidesSection + flowing-line dividers
  - [x] Ricing: PewDiePie dotfiles link, all tool links (Hyprland, i3, Sway, Waybar, Rofi, EWW, Kitty, Alacritty, WezTerm)
  - [x] Glossary terms added: snap, flatpak, system snapshots, backup, OEM unlocking
- [ ] Re-check remaining pages: TL;DR, Arsenal, The Damned
- [ ] Verify cross-references between pages are accurate and working

### 3. Light/Dark Mode
- [ ] Add accessibility light/dark mode toggle
- [ ] Add to navbar settings gear (alongside cinematic scroll toggle)

### 4. Glossary Hover Verification
- [ ] Verify glossary hover tooltips work across all pages
- [ ] Test on desktop (hover) and mobile (tap)
- [ ] **Note:** Do this AFTER content verification (item 1) is complete

### 8. Mobile Responsiveness Fix
- [ ] Audit all pages at mobile resolutions (375px, 390px, 428px)
- [ ] Fix layout/overflow issues on homepage
- [ ] Fix layout/overflow issues on content pages (Bible, Guides, Arsenal, etc.)
- [ ] Test footer, navbar, and glossary tooltips on mobile
- [ ] Verify on actual device after fixes

### 12. Consider making GitHub public
- I want to know if theres risk in making the git repo public, however, I do want to be transparent in my use of AI and the process of making the page. Also, if we want people to contribute maybe git is the best option? Manually approve PR's? Still, dont approve PRs directly to our master branch, approve on a separate develop branch. Is this safe? How to setup?

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

### 2. Reading Progress Feature
- [x] Add "completed" checkboxes to Bible pages (track reading/knowledge progress)
- [x] Add "completed" checkboxes to Guide pages
- [x] Persist completion state in localStorage
- [x] Show completion checkmarks in sidebar nav and navbar dropdowns

### 5. Contact Email & About Page
- [x] Create custom domain email: contact@techfencing.com
- [x] Add contact email to footer
- [x] Add contact email to About page with message: "This site is open to contributions. If you spot an error, have a better alternative, or want to improve a guide — reach out."

### 6. Homepage Visitor Counter (Privacy Awareness Feature)
- [x] Research Cloudflare analytics — cookie-free, no PII, auto-injected on Pages (can't disable). Acceptable for privacy site.
- [x] Implement aggregate counter: detects bad browsers (Chrome/Edge/Opera/Puffin) via user agent, counts with Cloudflare KV
- [x] Display "X of Y visitors came here using a browser that tracks them" on homepage hero + browser blocker
- [x] Updated About page disclaimer to be transparent about Cloudflare Web Analytics and the counter
- [-] **Note:** Free tier limit ~500 homepage visitors/day (1,000 KV writes). Upgrade to $5/mo Workers plan if traffic spikes (Juxtopposed collab)

### 7. Pre-Publish on Cloudflare
- [x] Deploy to .pages.dev using Cloudflare Pages (config ready: `.node-version`, build cmd set)
- [x] Test the deployment
- [x] Verify all features work in production

### 9. Google Stitch UI/UX Review
- [x] Use Google Stitch (UI/UX AI service) to review the website
- [x] Document the score and any recommendations
- [x] Address critical UX issues found
