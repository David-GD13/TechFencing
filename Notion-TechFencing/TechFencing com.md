# TechFencing.com

### **References**

<aside>
💫

[The Linux Video](TechFencing%20com/The%20Linux%20Video%203263e0266ebe8086aec9c599fa7474fc.md)

[The de-Google Video](TechFencing%20com/The%20de-Google%20Video%203263e0266ebe80f28bf9d8eb1340de03.md)

[The de-Algo Brain Video](TechFencing%20com/The%20de-Algo%20Brain%20Video%203273e0266ebe80b38135d7ac2dd8aae7.md)

[Secondary Videos](TechFencing%20com/Secondary%20Videos%203273e0266ebe80ad8fbfcc79dbada7b9.md)

</aside>

---

<aside>
💫

**Summary**

A website that compiles the teachings about taking control over your data & life from our savior: PewDiePie

I want a website that presents these teachings in a funny ignorant (us) ↔ savior (PewDiePie) narrative

This should contain EVERYTHING PewDiePie has learned. Every software, OS, mention of tools, hardware, etc… that he has used in his transition for taking control, plus contain everything that he doesn’t recommend.

Registered [techfencing.com](http://techfencing.com) on CloudFlare, because “tech fencing” is the word PewDiePie used to describe “taking control” by the end of his https://youtu.be/5nL-Eq1lpDU?si=UhdcGbpyc1cwK7W0 video.

[PRD: TechFencing.com](TechFencing%20com/PRD%20TechFencing%20com%203273e0266ebe80298f67c7644c0982b2.md)

</aside>

---

# Organizing the Information

<aside>
💫

**Principles:**

- This should be a website for beginners (and a bit of intermediate) & going very little in depth, just referencing resources.
- Beginners should be able to follow principles to know what actionable things they can do right now, from easy to hard.
    - The website information should be organized with intent.
- All of the main information should come from what our savior does (taking example of a public figure and his pros/cons). My own recommendations or references are secondary.
- The overall information presented should be in the same comical ignorant & savior dynamic speech.
- Citations EVERYWHERE. We need citations from PewDiePie’s video to validate everything shown or to come the idea come across better.
- Generally avoid the mentioned sponsors unless PewDiePie ACTUALLY uses them and mentions them in the video outside of the sponsored section.
    - Exception: Hostinger is a real tool he uses (hosts his website, recommends VPS for self-hosting/DNS). Mention in arsenal/guides with note it was also a sponsor.
- The Three-Layer Framework is the backbone of the site. PewDiePie’s journey maps to three layers of “taking control”:
    - **Layer 1 — OS** (Linux Video): What software runs on your machine
    - **Layer 2 — Services** (de-Google Video): What services handle your data
    - **Layer 3 — Behavior** (de-Algo Brain Video): How you interact with the digital world
- Difficulty Progression (Level 1–5) should be visible on the landing page:
    - **Level 1 (5 min):** Switch browser to Firefox/Librewolf, switch search engine to DuckDuckGo
    - **Level 2 (afternoon):** Replace Google apps with open-source alternatives, unfollow algorithmic feeds, install Unhook, set up RSS
    - **Level 3 (weekend):** Install Linux, flash GrapheneOS on phone, set up second phone profile
    - **Level 4 (ongoing):** Self-host services (Vaultwarden, Nextcloud, etc.), DNS blocker, local AI
    - **Level 5 (rabbit hole):** Rice your desktop, fine-tune AI, build custom tools, VPS hosting
- Guide ordering follows the learning journey (most important to understand first), not just difficulty:
    - Browsers → Linux → de-Google → Self-Hosting → Open-Source Alts → Fix YouTube → Control Phone → Own AI → Ricing
</aside>

## The First View (Landing Page & Header)

<aside>
💫

**From the first visit main header we must recognize two things:**

- You should take control and liberate yourself from evil companies (techfencing.com’s mission & vision)
- Our savior is here to liberate us from ignorance (PewDiePie)

**Easily accessible from the header/footer:**

- Link to “TL;DR — Just Watch These” (for people who’d rather watch than read)
</aside>

This is a comical way to put that this website is made for you to learn how to take control of your internet life & data privacy based off PewDiePie’s own learning & teachings.

Staying in the comical way of presenting the info, I’ve thought that this section should have a picture / keyframe / gif / video or something PewDiePie related of fencing off the tech-lords.

(I found these green-screen videos, maybe I can take them and get only the necessary frames & upscale: https://www.youtube.com/watch?v=AyjA1Ki3fcs&list=PL1l88PVKyDO3-DH4PiQw6FKDLJwBpTLzz&index=13 & playlist: https://youtube.com/playlist?list=PL1l88PVKyDO3-DH4PiQw6FKDLJwBpTLzz&si=PfgAtyZE9LiVJ7vh)

This stays as an idea of how the website could be done.

### Core Philosophy

A quick section that explains the core philosophy. The site self-defines “tech fencing” through context rather than a dictionary definition. The key PewDiePie quote anchors it: *“I think you owe it to yourself to take some time today and start building your tech fence.”*

**The two pillars** (reframed from the original Friction/Filtering concepts):

- **”You Are Not The Product”** — awareness that every “free” service has a cost (your data, attention, autonomy). The trade-off between control and convenience is real, but being aware of it lets you choose intentionally.
- **”Curing Algo Brain”** — using friction (slow down the autopilot) and filtering (remove the noise) as tools to break algorithm addiction. Friction and filtering are the practical mechanisms within this pillar.

**The three layers:**

- You are not the product (Layer 1: OS)
- Control vs convenience (Layer 2: Services)
- Cure the algo brain (Layer 3: Behavior)

### Where to Start (Getting Started)

A simplified “Getting Started” section on the homepage shows three entry-point guide cards (Browser, De-Google, Linux) with difficulty badges, plus a “See All 9 Guides” CTA linking to the Guides index page. This replaces the original Level 1-5 visual progression for a cleaner, less overwhelming entry point. The full difficulty spectrum is still represented across the nine guides.

### Homepage UX — Cinematic Scroll (Implemented)

The homepage uses a cinematic scroll-driven experience powered by GSAP ScrollTrigger:

- **WavyShader background**: Full-viewport WebGL animated shader (crimson topographic wavy lines on charcoal) with scroll-reactive momentum. Fixed behind all content.
- **Pinned sections**: Each homepage section pins in place while scroll-linked animations play. Headings slide in from the right, content reveals, then exits left on scroll.
- **Per-section dark backgrounds**: CSS `::before` pseudo-elements with gradient-to-transparent edges (top/bottom) create seamless transitions. No shared overlay — each section owns its own background.
- **Section spacers**: Empty 35vh divs between sections let the shader background “breathe” and be visible.
- **Progress trail**: Fixed right-side vertical dot navigation. Active dot glows crimson, visited dots fill solid, flowing gradient fill line tracks scroll progress. Dots are clickable (instant scroll). Hidden on mobile.
- **Cinematic mode toggle**: Navbar gear icon opens settings with a “Cinematic Scroll” toggle. When enabled, one scroll gesture auto-scrolls to the next section. When disabled, manual scroll scrubs animations freely. Preference persisted in localStorage.
- **Homepage sections** (in order): Hero → Two Pillars → Three Layers → Getting Started → Honest Disclaimer → Extras
- **Navigation**: Centered navbar with 3 dropdown items (The Bible, Guides, TL;DR). Hamburger on mobile. Settings gear on right. No brand logo in navbar.
- **Bible & Guides index pages**: `/bible/` and `/guides/` serve as overview/landing pages.

### Extras Section (Homepage)

A grid of cards at the bottom of the homepage linking to secondary pages: TL;DR, The Arsenal, The Damned, Experiments, Glossary, About.

---

## The “Bible” (Three-Layer Framework)

<aside>
💫

The three main videos are presented as three layers of “taking control” — not just a video list. This is the spine of the entire site.

- **Layer 1 — OS:** [I installed Linux (so should you)](https://youtu.be/pVI_smLgTY0?si=OGSu0jEMuJpEfV9u) — What software runs on your machine
- **Layer 2 — Services:** [I’m DONE with Google](https://youtu.be/u_Lxkt50xOg) — What services handle your data
- **Layer 3 — Behavior:** [I Fixed YouTube !](https://youtu.be/5nL-Eq1lpDU) — How you interact with the digital world
</aside>

There should be a summary section on the landing page, then each layer gets a dedicated page with: the video summary, extracted lessons, PewDiePie’s citations, cross-references between videos, and links to the relevant guides.

## Our Savior’s Arsenal

A single page that answers: “What does PewDiePie actually use right now?” Merges all three videos into one straight-to-the-point reference. Only things he actively uses — described with his own citations.

- **His machines:** Main PC (runs Arch Linux now), Arch Hyprland Laptop, Raspberry Pi 5, Steam Deck (Arch, doubles as server), Google Pixel 9 (GrapheneOS)
- **Every software choice:** Browser (Firefox), search (DuckDuckGo), self-hosted stack (Vaultwarden, Nextcloud, File Browser, Joplin, email, Kodi), AI (vLLM + ChatOS), terminal tools (Zsh, grep, Tmux, Btop)
- **His rice:** Hyprland, Waybar, EWW, Rofi, nuclear reactor theme, custom daemons
- **Sponsors he genuinely uses:** Hostinger (VPS, hosts his website) — noted as sponsor

Note: His setup evolved over the videos. The Linux video shows Linux Mint on his main PC; by the de-Google video he’s running Arch on both desktop and Steam Deck. Present the current state, note the evolution.

## Our Savior’s Experiments

A single page that references the secondary videos (Supercomputer, STOP Using AI, I Trained My Own AI) and how these connect to the main philosophy. The key message: PewDiePie doesn’t just use open-source tools — he builds his own. The AI he trained on his supercomputer literally produced the browser extension in the “I Fixed YouTube” video. That’s the full circle of tech fencing.

The framing for beginners: “You don’t need to build a supercomputer. But you should know that running your own AI locally is possible and keeps your data private.”

## The Guides (ordered by learning journey, not just difficulty)

Dedicated pages for understanding each concept. Ordered by **what’s most important to understand first** and **how each concept informs the next decision** — not purely by difficulty. Each guide opens with PewDiePie’s citations & choices, then provides a more referenced and detailed walkthrough. Each guide links to its relevant “TL;DR — Just Watch These” video at the top for quick learners. Honest downsides and tradeoffs should be woven inline (not siloed) — using PewDiePie’s own quotes about what sucked.

**The logic:** Browser first (everything runs through it) → Linux (OS foundation) → de-Google (opens the door to open-source & self-hosting) → Self-Hosting (how to own the replacements) → Open-Source Alts (the catalog) → Fix YouTube (now the philosophy behind it lands) → Control Phone (bigger commitment, hits harder after understanding everything) → Own AI (niche) → Ricing (niche passion project)

### 1. Browsers (Level 1 — first actionable step)

**Why first:** Everything else runs through your browser. Once you switch, all your browsing & research from here on happens in a privacy-respecting environment. This is the gateway.

- PewDiePie’s browser tier list as the anchor (screenshot from his video)
- Explain the tiers: GOATs (Librewolf, Firefox Hardened, Tor), Great, Solid, OH HELL NO
- How browsers work: Chromium-based vs. Firefox-based, why it matters for privacy
- Firefox privacy tweaks (Arch Wiki reference)
- Cross-reference: links to the browser blocking overlay feature (visitors on Chrome/Edge see a warning)

### 2. Linux (Level 3 difficulty, but foundational knowledge)

**Why second:** Understanding the OS layer is the foundation of the whole philosophy. Even if you don’t install Linux today, understanding what it is and why it matters informs every decision that follows.

- Citations on Linux from PewDiePie + his choices
- Going over main distros & their pros/cons (why users like them & dislike them)
    - Not making a tier list — your Linux distro is however you want to use it, tailored to your needs
    - Reference: “TL;DR — Just Watch These” distro video (Fireship)
- Going over desktop environments (opinionated vs customizable)
    - Honorable mentions: COSMIC (POP!_OS) & Hyprland
    - Reference: “TL;DR — Just Watch These” desktop environments video
- Explaining display servers (Wayland vs X11)
- Gaming on Linux: Proton, Steam, Wine, anti-cheat limitations
- Open-source software note (Adobe doesn’t work on Linux) → point to Open-Source Alternatives guide

### 3. De-Google (Level 2-3 — introduction to the open-source & self-hosting world)

**Why third:** Now that you understand the OS layer, this guide opens the door to the services layer. It’s the bridge between “I switched my browser” and “I own my entire digital life.” Introduces the concepts of open-source alternatives and self-hosting.

- Citations on the importance of de-googling from PewDiePie + his choices
- Section on Google services to replace & options (referencing to other guides if necessary)
- When talking about SaaS services, point to Self-Hosting guide and/or Open-Source Alternatives guide (e.g. when talking about Adobe)
- Honest downside: Google Maps alternative was so bad he was 30 min late

### 4. Self-Hosting (Level 4 — logical next step from de-Google)

**Why fourth:** De-Google introduced the idea; this guide shows you how to actually do it. You’ve learned what to replace, now learn how to own the replacements.

- PewDiePie’s citations on self-hosting (“I am not the product anymore. The things I use are mine.”)
- What he self-hosts: Vaultwarden, Nextcloud, File Browser, Joplin, email, Kodi, DNS blocker, RSS feed
- Hardware: Raspberry Pi 5, Steam Deck as server, VPS (Hostinger — noted as sponsor)
- DNS blockers: he recommends self-hosting one but doesn’t name a specific tool. Options: Pi-hole, AdGuard Home, Blocky
- RSS feeds: he self-hosts but doesn’t name specific software. Options: FreshRSS, Miniflux, Tiny Tiny RSS
- Honest downsides: Vaultwarden took 2 days, Joplin didn’t run on Pi (needed x86), self-hosting isn’t for everyone
- Reference: “TL;DR — Just Watch These” self-hosting truth videos

### 5. Open-Source Alternatives (Level 2-3 — logical companion to self-hosting)

**Why fifth:** By now you understand the philosophy and the infrastructure. This is the practical catalog: what replaces what. The shopping list for your new digital life.

- A recompilation of the most known open-source apps that directly replace Google’s, Microsoft’s, Adobe’s, Android’s, etc. apps & services
- Different from “Our Savior’s Arsenal”: this includes community recommendations beyond just what PewDiePie actively uses
- Organized by what they replace: Google Drive → Nextcloud, Photoshop → GIMP/PhotoGIMP, Chrome → Firefox, etc.

### 6. Fix YouTube (Level 1 difficulty, but placed here for understanding)

**Why sixth:** By this point you’ve developed an understanding of algo-brain, noise reduction, privacy, and owning your tools. Now when we say “install Unhook,” you understand *why* — it’s not just a browser trick, it’s filtering the noise. The philosophy lands harder here.

- PewDiePie’s citations on YouTube’s problems (Shorts everywhere, algorithmic homepage, buried comments)
- Install Unhook ([unhook.app](http://unhook.app)) — the extension he links in his video
- What the extension does: removes Shorts, redirects to Subscriptions, strips sidebar
- His side-by-side comparison watching Jacksepticeye

### 7. Control Your Phone (Level 3-4 — the commitment step)

**Why seventh:** Changing your phone OS and creating separate profiles is a bigger commitment than anything before. By now you understand the full philosophy, you’ve made easier changes, and the *why* behind phone control is deeply understood. This makes the leap feel worth it.

- PewDiePie’s citations on phone control (“Now my phone is what I want it to be — a device that serves me, NOT THE OTHER WAY AROUND”)
- The second profile strategy (5-6 seconds of friction breaks autopilot)
- GrapheneOS: what it is, how to flash it on a Pixel, per-app permission control (“Why does my keyboard need internet access?”)
- His honest admission: still uses Google Maps (“It’s too good”)

### 8. Own Your AI (Level 4-5 — niche but connected)

**Why eighth:** Niche, but by now you’re deep in. This shows the philosophy taken to its logical end: you can even own your AI. Accessible entry point (Ollama on a laptop) to inspiration (PewDiePie’s supercomputer).

- PewDiePie’s citations on AI philosophy (“I like running AI more than using AI”, anti-AI-slop, pro-self-hosted)
- The accessible entry point: running a local model with Ollama on a modern laptop (no supercomputer needed)
- The intermediate path: using self-hosted AI to build custom tools (like PewDiePie built his YouTube extension)
- The advanced path: vLLM, fine-tuning, the supercomputer arc — inspiration, not expectation
- What PewDiePie doesn’t support: AI image/video generation, AI slop, corporate cloud AI

### 9. Ricing / Customization (Level 5 — the deep rabbit hole)

**Why last:** Pure passion project. You’re already a Linux user, you’ve self-hosted, you understand the ecosystem. Now make it *yours*. This is aspirational — what makes Linux genuinely fun.

- PewDiePie’s citations on ricing (“Every Linux user should go through the ricing phase”)
- Explanation of what ricing is (the term comes from car modding culture — “tricking out your ride”)
- Desktop environments (GNOME, KDE) vs tiling window managers (Hyprland, i3, Sway)
- PewDiePie’s nuclear reactor rice as the case study
- Resources: r/unixporn for inspiration
- This is aspirational, not for beginners — but it’s what makes Linux fun

## The Damned

A page, thorough and in depth about the NON-RECOMMENDED apps and why. Each entry should highlight:

- **PewDiePie’s own quotes** on why he avoids it (e.g. Google: “Google is a big ad-company, not a tech company”, Adobe: “I have to pay to NOT use your software?”)
- **The honest tradeoffs** of switching away (e.g. Google Maps: “Maybe surveillance has its perks” — he was 30 min late)
- **Community research** from open-source communities to back up the criticism

Sections of this page are referenced inline by other pages when talking about non-recommended options.

Categories: Companies (Google, Microsoft, Adobe, Meta), Browsers (“OH HELL NO” tier from PewDiePie’s tier list: Chrome, Edge, Opera, Opera GX, Puffin), Services (Gmail, Google Drive, stock Android, YouTube Shorts), Content types (AI-generated shorts, algorithmic feeds).

## TL;DR — Just Watch These

<aside>
🎥

**Placement:** Easily accessible from the landing page header or footer. Always visible as a nav item. For people who’d rather watch than read. Each guide also links to its relevant video at the top.

</aside>

A curated page of short(ish) videos that give you a good understanding of what you’re diving into.

**The gateway drug (our savior’s videos):**

- [I installed Linux (so should you)](https://youtu.be/pVI_smLgTY0?si=OGSu0jEMuJpEfV9u) (22 min)
- [I’m DONE with Google](https://youtu.be/u_Lxkt50xOg) (24 min)
- [I Fixed YouTube !](https://youtu.be/5nL-Eq1lpDU) (18 min)

**Linux explanations:**

- **Distros:** https://youtu.be/DB5mk6bQt9A?si=ddQUQbcYalaNuWVj
- **Desktop Environments:** https://youtu.be/cnb_XGULKbc?si=nopsyEo0qBz66Z0X
    - Honorable mentions not on video: COSMIC (POP!_OS) & Hyprland (what PewDiePie uses)
- **Display Servers:** Wayland vs X11 — https://youtu.be/FksHyTvBUNs?si=ADFPwUFW4uc42aIz

**Self-hosting, the truths (brace for impact):**

- https://youtu.be/8eLJlLkyuMA?si=bv6P-_sNZspnbkeF
- Homelabbing from A-Z (long-form favorite): https://youtu.be/AtgCcMjtqF0?si=iANVntIFUuevLbgc

**Privacy & de-Google:**

- **Expand upon de-Googling (pro review):** https://youtu.be/XOcfMVXmkfM?si=NuKStCm2y-IS4fcC — Builds on PewDiePie’s de-Google approach with easier non-self-hosted alternatives for every step. Covers: search engines (DuckDuckGo, Startpage, Qwant), browsers (Firefox vs Chromium-based, Brave, Vanadium on GrapheneOS), email (Proton Mail, Tuta), GrapheneOS in depth (emphasizes how simple the install is), password managers (Bitwarden paid vs Vaultwarden self-hosted vs KeePass offline), note-taking (Standard Notes, Notesnook), cloud storage (Proton Drive, Ente for photos), local AI ([Jan.ai](http://Jan.ai), Open WebUI), maps (OsmAnd, Organic Maps with offline navigation + airplane mode trick). Key perspective for TechFencing: you can achieve the same privacy level as PewDiePie’s self-hosted setup using third-party encrypted services — critical for beginners who aren’t ready to self-host. Also a great resource for the de-Google guide (#3) and Open-Source Alternatives guide (#5).

---

## Site-Wide Features

### Glossary + Hover Tooltips

Keywords throughout the site get a subtle indicator. On hover (desktop) or tap (mobile), a tooltip appears with a short, jargon-free explanation. These terms come from a global glossary.

Example terms: *distro* (“a version of Linux, like a flavor of ice cream”), *ricing* (“customizing the look and feel of your Linux desktop — named after car modding culture”), *tiling window manager* (“a way to organize windows that automatically arranges them like tiles”), *self-hosting* (“running services on your own hardware instead of someone else’s servers”), *DNS blocker* (“a filter that blocks ads and trackers before they reach your device”), *GrapheneOS* (“a privacy-focused replacement OS for Pixel phones”), *VPS* (“a virtual private server — renting a computer in the cloud”), *terminal* (“a text-based way to control your computer”), *Proton* (“Valve’s tool that lets Windows games run on Linux”), *daemon* (“a background program that runs automatically”), *package manager* (“like an app store for Linux”)

The glossary also exists as a standalone browseable page.

### Browser Blocking Overlay (“The Damned” Detector)

When a visitor arrives using a browser from PewDiePie’s “OH HELL NO” tier (Chrome, Edge, Opera, Opera GX, Puffin, and other intrusive Chromium-based browsers), the site shows a comical overlay:

- Detects via User-Agent string (Chrome, Edg, OPR, Opera, Puffin)
- Overlay text in the savior tone: “Our savior senses a disturbance… You’re browsing with [Browser Name]. That’s in the ‘OH HELL NO’ tier.”
- CTA: “Switch to a browser our savior actually approves of” → links to Firefox, Librewolf, or the Browsers guide
- **Dismissible** (“I know, I know, let me in anyway” button) — comical, not hostile
- Safari is “Platform-specific” (not damned). Firefox, Librewolf, Tor, Waterfox, Mullvad, Vivaldi are all fine.

### Citations System

All claims on the site should be backed by citations from PewDiePie’s videos. Citations appear as inline references that link to the video (and ideally timestamp). This is a core principle of the site.

---

## About Page

There should be an about disclaimer page explaining that the website has been vibe-coded (although with intention and many iterations). That myself I’m an ignorant puny being who’s themselves learning about the open-source “taking control” way. This should also explain the mission of the website, giving guidance towards taking control. The guide mostly shows the PewDiePie way with some small own recommendations & references along the way, but in NO way should this be taken as be-all do-all, Linux is a very varied environment with too many flavors and this should just serve as a guide to take more informed decisions (and I’m not an expert either as I’m an ignorant currently on his learning path).