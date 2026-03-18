# PRD: TechFencing.com

## 1. Product overview

### 1.1 Document title and version

- PRD: TechFencing.com
- Version: 1.0

### 1.2 Product summary

TechFencing.com is a content-driven website that compiles PewDiePie’s teachings about taking control of your data, privacy, and digital life. Inspired by his coining of the term “tech fencing” in the “I Fixed YouTube!” video (March 2026), the site organizes his recommendations, tool choices, philosophy, and honest tradeoffs into a structured, beginner-friendly resource. The entire site is presented in a comical “ignorant (us) vs. savior (PewDiePie)” narrative voice, making dense technical topics approachable and entertaining.

The backbone of the site is a Three-Layer Framework: Layer 1 — OS (what software runs on your machine), Layer 2 — Services (what services handle your data), and Layer 3 — Behavior (how you interact with the digital world). These map directly to PewDiePie’s three main videos: “I installed Linux (so should you),” “I’m DONE with Google,” and “I Fixed YouTube!” Two pillars — Friction (slow down the autopilot) and Filtering (remove the noise) — define the core philosophy. A difficulty progression from Level 1 (5 minutes, switch your browser) through Level 5 (rice your desktop, fine-tune AI) gives visitors a clear, intentional path forward.

The site is designed as a static website hosted on CloudFlare with no backend required for MVP. PewDiePie’s content is the primary source; the site’s own recommendations are secondary and clearly labeled. Citations from PewDiePie’s videos are embedded throughout, and honest downsides are woven inline using his own quotes rather than siloed into separate disclaimers.

## 2. Goals

### 2.1 Business goals

- Establish TechFencing.com as the definitive community resource for PewDiePie’s digital privacy and control teachings.
- Drive organic traffic through search and social sharing from the Linux, privacy, and PewDiePie communities.
- Build a content foundation that can grow as PewDiePie publishes new videos or as the community contributes research.
- Demonstrate a “vibe-coded with intention” approach to building an informational site — accessible, honest, and well-structured.

### 2.2 User goals

- Understand what “tech fencing” means and why it matters, without needing prior technical knowledge.
- Find a clear starting point based on their comfort level (Level 1 through Level 5 difficulty progression).
- Access PewDiePie’s specific tool recommendations, citations, and honest tradeoffs in one organized place.
- Learn step-by-step how to take control of their operating system, services, and digital behavior.
- Quickly find relevant videos to watch via the curated “TL;DR — Just Watch These” page.

### 2.3 Non-goals

- The site will not host or embed PewDiePie’s videos directly (links to YouTube only).
- The site will not include a user account system, comments section, or community forum for MVP.
- The site will not be an exhaustive Linux or privacy wiki — it focuses specifically on PewDiePie’s journey and recommendations with limited supplementary references.
- The site will not provide affiliate links or monetize recommendations (sponsor disclosures are informational only).
- The site will not function as a real-time news aggregator for privacy or open-source developments.

## 3. User personas

### 3.1 Key user types

- PewDiePie fans curious about the tools and philosophy from his tech videos.
- Privacy-curious beginners who want actionable steps but are intimidated by technical wikis.
- Intermediate Linux or open-source users looking for a curated summary of PewDiePie’s specific setup.
- Casual visitors arriving via social media or search who want a quick overview or video recommendations.

### 3.2 Basic persona details

- **The Curious Fan**: A PewDiePie viewer who watched one of the tech videos and wants to actually follow through on the recommendations. Not technical, needs hand-holding and humor to stay engaged.
- **The Privacy Beginner**: Someone who’s heard about de-Googling or Linux but doesn’t know where to start. Wants a clear difficulty progression and honest assessments of tradeoffs.
- **The Intermediate Tinkerer**: Already uses Linux or self-hosts some services. Visits to see PewDiePie’s specific stack, compare setups, and find resources they missed.
- **The Quick Browser**: Lands on the site from a Reddit post or social share. Wants a fast overview or the “TL;DR” video list. May or may not dive deeper.

### 3.3 Role-based access

- **All Visitors**: Full read access to all pages, guides, glossary, and video references. No authentication required. The site is entirely public.

## 4. Functional requirements

- **Landing page with hero section and core philosophy** (Priority: High)
    - Display the mission and vision of TechFencing.com in the comical savior narrative tone.
    - Present the two pillars (Friction and Filtering) and three layers (OS, Services, Behavior) visually.
    - Include the difficulty progression (Level 1 through Level 5) with links to corresponding guides.
    - Feature a PewDiePie-related visual element (green screen frame, keyframe, or illustration).
    - Include a prominent link to “TL;DR — Just Watch These” in the header and footer.
- **The Bible — Three-Layer Framework pages** (Priority: High)
    - Create a summary section on the landing page and three dedicated sub-pages, one per layer.
    - Each layer page includes: video summary, extracted lessons, PewDiePie citations, cross-references between layers, and links to relevant guides.
    - Layer 1 — OS maps to the Linux video. Layer 2 — Services maps to the de-Google video. Layer 3 — Behavior maps to the “I Fixed YouTube!” video.
- **Nine guide pages ordered by learning journey** (Priority: High)
    - Create individual pages for: Browsers, Linux, De-Google, Self-Hosting, Open-Source Alternatives, Fix YouTube, Control Your Phone, Own Your AI, and Ricing.
    - Each guide opens with PewDiePie’s citations and choices, followed by a more detailed walkthrough with referenced resources.
    - Each guide links to its relevant “TL;DR” video at the top.
    - Honest downsides and tradeoffs are woven inline using PewDiePie’s own quotes.
- **Our Savior’s Arsenal page** (Priority: High)
    - Single page listing everything PewDiePie actively uses: machines, software, rice setup, and sponsors he genuinely uses.
    - Present the current state of his setup (Arch Linux on desktop and Steam Deck), noting evolution from earlier videos (started with Linux Mint).
    - Cite PewDiePie’s own descriptions for each tool.
- **Our Savior’s Experiments page** (Priority: Medium)
    - Reference the three secondary videos (Supercomputer, STOP Using AI, I Trained My Own AI).
    - Frame the AI arc as aspirational for beginners: “You don’t need a supercomputer, but running AI locally is possible and keeps your data private.”
    - Highlight the full circle: his self-trained AI built the YouTube extension featured in “I Fixed YouTube!”
- **The Damned page** (Priority: Medium)
    - Thorough coverage of non-recommended apps, services, companies, and browsers.
    - Each entry includes PewDiePie’s own quotes, honest tradeoffs of switching, and community research.
    - Categories: Companies (Google, Microsoft, Adobe, Meta), Browsers (“OH HELL NO” tier), Services (Gmail, Google Drive, stock Android, YouTube Shorts), Content types (AI-generated shorts, algorithmic feeds).
    - Referenced inline by other pages when discussing non-recommended options.
- **TL;DR — Just Watch These page** (Priority: High)
    - Curated video list organized by category: gateway videos (PewDiePie’s three main videos), Linux explanations (distros, desktop environments, display servers), self-hosting truths, and privacy/de-Google deep dives.
    - Easily accessible from header and footer navigation.
- **Glossary with hover tooltips** (Priority: Medium)
    - Global glossary of jargon terms (distro, ricing, tiling window manager, self-hosting, DNS blocker, GrapheneOS, VPS, terminal, Proton, daemon, package manager, and others).
    - Keywords throughout the site display a subtle indicator; on hover (desktop) or tap (mobile), a tooltip shows a short, jargon-free explanation.
    - Glossary also exists as a standalone browseable page.
- **Browser blocking overlay** (Priority: Medium)
    - Detect Chrome, Edge, Opera, Opera GX, Puffin, and other “OH HELL NO” tier browsers via User-Agent string.
    - Show a comical overlay in the savior tone with the detected browser name.
    - Include a CTA linking to Firefox, Librewolf, or the Browsers guide.
    - Dismissible with a humorous button (“I know, I know, let me in anyway”).
    - Safari is treated as “platform-specific” (no overlay). Firefox, Librewolf, Tor, Waterfox, Mullvad, and Vivaldi are all approved.
- **Citations system** (Priority: High)
    - Inline citation references throughout the site linking to PewDiePie’s videos with timestamps where available.
    - Consistent citation format across all pages.
- **About page** (Priority: Low)
    - Disclaimer explaining the site was vibe-coded with intention.
    - Acknowledge the creator is also learning (“an ignorant on his learning path”).
    - Explain the mission, note that PewDiePie’s way is the primary reference but not the only way, and that Linux is vast with many flavors.
- **Responsive design** (Priority: High)
    - Mobile-first layout with clean reading experience on all screen sizes.
    - Glossary tooltips work via tap on mobile.
- **Static site with CloudFlare hosting** (Priority: High)
    - No backend, no database, no user accounts for MVP.
    - Fast loading, SEO-friendly, and easy to maintain.

## 5. User experience

### 5.1 Entry points and first-time user flow

- Primary entry: landing page via direct URL, social media link, or search result for “tech fencing” or PewDiePie-related privacy queries.
- Secondary entry: individual guide or “The Damned” page via search results for specific tools (e.g., “PewDiePie browser tier list,” “PewDiePie Linux setup”).
- Header/footer link to “TL;DR — Just Watch These” catches visitors who prefer video over reading.
- Browser blocking overlay fires immediately for visitors on Chrome, Edge, Opera, Opera GX, or Puffin, setting the tone before any content loads.
- First-time visitors see the hero section establishing the mission, the two pillars, the three layers, and the difficulty progression, giving them an instant understanding of what the site is and where to start.

### 5.2 Core experience

- **Land on the homepage**: Visitor sees the hero section with the comical savior narrative, a PewDiePie-related visual, and the core philosophy (two pillars, three layers).
    - The tone immediately communicates this is fun, irreverent, and beginner-friendly — not a dry wiki.
- **Assess their level**: The difficulty progression (Level 1 through Level 5) is displayed prominently, each level linking to the relevant guides.
    - A beginner can see “Level 1: 5 minutes — switch your browser” and feel they can start immediately.
- **Read a guide**: Each guide opens with PewDiePie’s citations and choices, then walks through the topic with honest tradeoffs inline.
    - Glossary tooltips explain jargon on hover/tap. A “TL;DR” video link at the top lets quick learners jump to a video instead.
- **Explore The Bible**: The three-layer framework pages give deeper context on PewDiePie’s journey, with cross-references between layers and links to guides.
    - The structure helps visitors understand that OS, services, and behavior are three interconnected layers of control.
- **Check the Arsenal**: Visitors curious about PewDiePie’s exact setup visit “Our Savior’s Arsenal” for a straight-to-the-point reference of everything he actively uses.
    - Each tool is described with his own citations.
- **Browse The Damned**: Visitors can see why specific tools and companies are not recommended, with PewDiePie’s quotes and honest tradeoffs.
    - This page is referenced inline by guides when discussing alternatives.

### 5.3 Advanced features and edge cases

- Visitors on “OH HELL NO” tier browsers see the blocking overlay. If they dismiss it, the site functions normally — no content is withheld.
- Glossary terms that appear in multiple guides use a consistent global definition, not page-specific definitions.
- PewDiePie’s setup evolved across videos (e.g., Linux Mint to Arch). The Arsenal page presents the current state and notes the evolution to avoid confusion.
- Some tools PewDiePie uses were not named specifically in his videos (DNS blocker software, RSS software, Google Maps wrapper). The site presents his recommendation to use them plus community-sourced options (Pi-hole, AdGuard Home, FreshRSS, etc.) with clear labeling.
- Sponsors are handled carefully: Hostinger is included because PewDiePie genuinely uses it (hosts his website, recommends VPS). Incogni is excluded or listed separately with a clear sponsor disclaimer.
- Tools mentioned only in secondary coverage articles (NewPipe, Mastodon, PeerTube) and not by PewDiePie himself are not attributed to him.

### 5.4 UI/UX highlights

- Comical “ignorant vs. savior” tone throughout all copy, headers, CTAs, and error states.
- PewDiePie-related visual assets (green screen frames, keyframes) on the landing page to set the vibe. His brand waves black & red background (can create alternative palettes of that too, like black & grey or black & purple)
- Difficulty progression displayed as a visual path or ladder on the landing page.
- Glossary hover tooltips with subtle indicators (dotted underline or similar) that don’t clutter the page.
- Browser blocking overlay that is funny, not hostile — the dismiss button is clearly visible and humorous.
- Clean, fast-loading pages with minimal JavaScript. Content-first design prioritizing readability.
- Consistent navigation: header with links to The Bible, Guides, Arsenal, The Damned, TL;DR, About. Footer mirrors key links plus glossary.

## 6. Narrative

Alex is a 24-year-old who just watched PewDiePie’s “I Fixed YouTube!” video and felt a jolt of recognition — he catches himself opening Instagram without intending to, multiple times a day. He Googles “tech fencing” and lands on TechFencing.com, where the comical tone instantly puts him at ease. He sees the difficulty progression on the landing page: Level 1 is just switching his browser and search engine, something he can do in five minutes. He clicks through to the Browsers guide, reads PewDiePie’s tier list citations, and installs Firefox with Unhook before dinner. Over the next few weeks he works through Levels 2 and 3 — replacing Google apps, setting up a second phone profile, even trying Linux on an old laptop. He keeps coming back to TechFencing.com because the honest tradeoffs (“Maybe surveillance has its perks — PewDiePie was 30 minutes late”) make him trust the site, and the glossary tooltips explain every unfamiliar term without making him feel stupid. Alex hasn’t built a supercomputer or riced his desktop, but for the first time, his phone serves him instead of the other way around.

## 7. Success metrics

### 7.1 User-centric metrics

- Average time on site exceeds 3 minutes, indicating engaged reading rather than bounce.
- At least 40% of landing page visitors click through to a guide or The Bible.
- “TL;DR — Just Watch These” page receives at least 15% of total site traffic (measures gateway effectiveness).
- Browser overlay dismiss rate (percentage of “OH HELL NO” browser visitors who stay) exceeds 50%.
- Glossary tooltip engagement: at least 20% of visitors trigger at least one tooltip per session.

### 7.2 Business metrics

- Organic search traffic grows month-over-month for key terms: “tech fencing,” “PewDiePie Linux setup,” “PewDiePie browser tier list,” “de-Google guide.”
- At least 3 community mentions (Reddit, forums, blogs) within the first month of launch.
- Site receives inbound links from Linux or privacy community sites within the first quarter.

### 7.3 Technical metrics

- Lighthouse performance score of 90 or above on mobile and desktop.
- Time to First Contentful Paint under 1.5 seconds on a 4G connection.
- Zero critical accessibility violations (WCAG 2.1 AA compliance).
- 100% uptime via CloudFlare static hosting.

## 8. Technical considerations

### 8.1 Integration points

- CloudFlare for DNS, hosting, and CDN (domain already registered there).
- YouTube embed links or oEmbed for video references (no self-hosting of video content).
- A static site generator (e.g., Astro, Hugo, 11ty, or Next.js static export) for build-time rendering.
- Glossary data stored as a JSON or YAML file consumed at build time for tooltip generation.

### 8.2 Data storage and privacy

- No user data is collected, stored, or processed. No cookies, no analytics trackers by default.
- If analytics are added later, use a privacy-respecting solution (e.g., Plausible, Umami, or CloudFlare Web Analytics).
- No forms, no email collection, no user accounts for MVP.
- The site itself should embody the privacy principles it advocates.

### 8.3 Scalability and performance

- Static site architecture means near-infinite scalability via CloudFlare CDN with zero server-side load.
- All assets (images, fonts) should be optimized and served with cache headers.
- Minimal JavaScript: only what is needed for the browser blocking overlay, glossary tooltips, and any interactive difficulty progression UI.
- Content can grow (new guides, new videos, new Arsenal entries) without architectural changes.

### 8.4 Potential challenges

- PewDiePie’s setup evolves over time. The site needs a clear content update process when new videos are published or tool choices change.
- Some PewDiePie quotes and data were compiled from secondary sources (articles, reactions), not directly from the videos. Final content should be verified against the actual videos before launch.
- The comical tone must be consistent across all pages, which requires careful copywriting — a style guide or tone reference document may be needed.
- Browser User-Agent detection for the overlay is imperfect and can be spoofed. This is acceptable since the overlay is comical, not security-critical.
- Glossary tooltip behavior on mobile (tap vs. hover) requires careful UX testing to avoid interfering with link taps.
- Green screen PewDiePie assets (from the YouTube playlist) may raise copyright or fair use considerations. Evaluate whether to use them or create original illustrations inspired by the tone.

## 9. Milestones and sequencing

### 9.1 Project estimate

- Medium-Large: 4–6 weeks for MVP (core pages, guides, features)

### 9.2 Team size and composition

- Small Team: 1–2 total people
    - 1 developer (static site build, browser overlay, glossary tooltips, responsive layout)
    - 1 content writer / product owner (guide content, citations, tone consistency, copywriting)
    - These roles may overlap if the project is solo.

### 9.3 Suggested phases

- **Phase 1 — Foundation and core pages** (2 weeks)
    - Key deliverables: Static site scaffolding, CloudFlare deployment, landing page with hero and difficulty progression, navigation structure, The Bible (three layer pages), “TL;DR — Just Watch These” page, citations system, responsive layout.
- **Phase 2 — Guides and reference pages** (2 weeks)
    - Key deliverables: All nine guide pages with content, “Our Savior’s Arsenal” page, “The Damned” page, glossary data file and standalone glossary page.
- **Phase 3 — Interactive features and polish** (1–2 weeks)
    - Key deliverables: Glossary hover tooltips (desktop and mobile), browser blocking overlay, “Our Savior’s Experiments” page, About page, SEO optimization, Lighthouse audit, final content review and citation verification.

## 10. User stories

### 10.1. View the landing page

- **ID**: US-001
- **Description**: As a visitor, I want to see a landing page with a hero section, core philosophy, and difficulty progression so that I immediately understand what TechFencing.com is and where to start.
- **Acceptance criteria**:
    - The landing page displays a hero section with the site’s mission in the comical savior narrative tone.
    - The two pillars (Friction, Filtering) and three layers (OS, Services, Behavior) are visually presented.
    - The difficulty progression (Level 1 through Level 5) is displayed with descriptions and links to corresponding guides.
    - A link to “TL;DR — Just Watch These” is visible in both the header and footer.
    - The page is responsive and loads in under 1.5 seconds on 4G.

### 10.2. Navigate the site

- **ID**: US-002
- **Description**: As a visitor, I want consistent navigation across all pages so that I can easily find The Bible, Guides, Arsenal, The Damned, TL;DR, and About sections.
- **Acceptance criteria**:
    - A persistent header navigation includes links to all major sections.
    - The footer mirrors key navigation links and includes a link to the glossary.
    - Navigation works correctly on mobile with a responsive menu.
    - The current page is visually indicated in the navigation.

### 10.3. Read a layer page in The Bible

- **ID**: US-003
- **Description**: As a visitor, I want to read a dedicated page for each of the three layers so that I understand PewDiePie’s journey and teachings for that layer in depth.
- **Acceptance criteria**:
    - Each layer page includes a video summary, extracted lessons, PewDiePie citations, cross-references to other layers, and links to relevant guides.
    - Layer 1 maps to the Linux video, Layer 2 to the de-Google video, and Layer 3 to the “I Fixed YouTube!” video.
    - Citations link to the relevant YouTube video.
    - The page is accessible from The Bible section on the landing page and from the main navigation.

### 10.4. Read a guide

- **ID**: US-004
- **Description**: As a visitor, I want to read a guide on a specific topic (e.g., Browsers, Linux, De-Google) so that I can learn what PewDiePie recommends and how to take action.
- **Acceptance criteria**:
    - The guide opens with PewDiePie’s citations and choices for that topic.
    - A link to the relevant “TL;DR” video appears at the top of the guide.
    - The guide provides a walkthrough with referenced resources and tools.
    - Honest downsides and tradeoffs are woven inline using PewDiePie’s own quotes, not in a separate section.
    - Glossary terms within the guide display tooltip indicators.

### 10.5. View Our Savior’s Arsenal

- **ID**: US-005
- **Description**: As a visitor, I want to see a single page listing everything PewDiePie actively uses so that I have a quick reference for his current setup.
- **Acceptance criteria**:
    - The page lists his machines (desktop, laptop, Raspberry Pi 5, Steam Deck, Google Pixel 9 with GrapheneOS).
    - The page lists all software he actively uses, organized by category.
    - His rice setup (Hyprland, Waybar, EWW, Rofi, nuclear reactor theme) is described.
    - Hostinger is noted as a sponsor he genuinely uses.
    - The evolution of his setup (Linux Mint to Arch) is noted.
    - Each entry includes PewDiePie’s own citations.

### 10.6. View Our Savior’s Experiments

- **ID**: US-006
- **Description**: As a visitor, I want to learn about PewDiePie’s secondary experiments (supercomputer, AI training) so that I understand the deeper possibilities of tech fencing.
- **Acceptance criteria**:
    - The page references the three secondary videos with summaries.
    - The connection to the main philosophy is explained: his self-trained AI built the YouTube extension.
    - The beginner framing is present: “You don’t need a supercomputer.”
    - Links to the “Own Your AI” guide are included.

### 10.7. View The Damned

- **ID**: US-007
- **Description**: As a visitor, I want to see which apps, services, and companies are not recommended and why, so that I understand the tradeoffs and alternatives.
- **Acceptance criteria**:
    - Entries are organized by category (Companies, Browsers, Services, Content types).
    - Each entry includes PewDiePie’s own quotes about why he avoids it.
    - Honest tradeoffs of switching are included (e.g., Google Maps: “Maybe surveillance has its perks”).
    - Community research backing up criticism is referenced where available.

### 10.8. View TL;DR — Just Watch These

- **ID**: US-008
- **Description**: As a visitor, I want a curated page of videos so that I can watch and learn instead of reading.
- **Acceptance criteria**:
    - Videos are organized by category: gateway (PewDiePie’s three main videos), Linux explanations, self-hosting truths, privacy and de-Google.
    - Each video has a title, link, approximate duration, and brief description of what it covers.
    - The page is accessible from the header and footer navigation.

### 10.9. Use glossary hover tooltips

- **ID**: US-009
- **Description**: As a visitor unfamiliar with technical jargon, I want to see short explanations of technical terms when I hover over them so that I can understand the content without leaving the page.
- **Acceptance criteria**:
    - Keywords with glossary definitions display a subtle visual indicator (e.g., dotted underline).
    - On desktop, hovering over the indicator shows a tooltip with a short, jargon-free explanation.
    - On mobile, tapping the indicator shows the tooltip without interfering with link navigation.
    - The tooltip disappears when the user moves away or taps elsewhere.
    - At least the following terms are defined: distro, ricing, tiling window manager, self-hosting, DNS blocker, GrapheneOS, VPS, terminal, Proton (Valve’s), daemon, package manager.

### 10.10. Browse the standalone glossary page

- **ID**: US-010
- **Description**: As a visitor, I want to browse a full glossary page so that I can look up any term used on the site.
- **Acceptance criteria**:
    - The glossary page lists all defined terms alphabetically.
    - Each term has a jargon-free explanation consistent with the tooltip definitions.
    - The page is accessible from the footer navigation.

### 10.11. See the browser blocking overlay

- **ID**: US-011
- **Description**: As a visitor using a non-recommended browser (Chrome, Edge, Opera, Opera GX, Puffin), I want to see a comical warning overlay so that I learn my browser is in the “OH HELL NO” tier.
- **Acceptance criteria**:
    - The overlay detects Chrome, Edge (Edg), Opera (OPR), Opera GX, and Puffin via User-Agent string.
    - The overlay displays the detected browser name in a comical savior-tone message.
    - A CTA links to Firefox, Librewolf, or the Browsers guide.
    - A clearly visible dismiss button reads “I know, I know, let me in anyway” or similar humorous text.
    - After dismissal, the site functions normally with no content withheld.
    - Safari does not trigger the overlay (treated as “platform-specific”).
    - Firefox, Librewolf, Tor, Waterfox, Mullvad, and Vivaldi do not trigger the overlay.

### 10.12. View the About page

- **ID**: US-012
- **Description**: As a visitor, I want to read about who made this site and why so that I understand the context and limitations.
- **Acceptance criteria**:
    - The page explains the site was vibe-coded with intention.
    - The creator acknowledges being a learner, not an expert.
    - The mission is stated: guidance toward taking control, primarily through PewDiePie’s approach.
    - A disclaimer notes that Linux has many flavors and this is one guide, not the definitive answer.

### 10.13. Navigate the difficulty progression

- **ID**: US-013
- **Description**: As a beginner visitor, I want to see a visual difficulty progression on the landing page so that I can pick a starting level that matches my comfort.
- **Acceptance criteria**:
    - Five levels are displayed: Level 1 (5 min), Level 2 (afternoon), Level 3 (weekend), Level 4 (ongoing), Level 5 (rabbit hole).
    - Each level has a brief description of what it involves.
    - Each level links to the relevant guide or set of guides.
    - The progression is visually clear (e.g., a ladder, path, or timeline).

### 10.14. Access the site on mobile

- **ID**: US-014
- **Description**: As a mobile visitor, I want the site to be fully readable and navigable on my phone so that I can use it anywhere.
- **Acceptance criteria**:
    - All pages render correctly on screens as small as 320px width.
    - Navigation collapses into a mobile-friendly menu.
    - Glossary tooltips work via tap.
    - The browser blocking overlay is fully functional and dismissible on mobile.
    - Images and visual elements scale appropriately.

### 10.15. View inline citations from PewDiePie’s videos

- **ID**: US-015
- **Description**: As a visitor, I want to see inline citations from PewDiePie’s videos throughout the site so that I can verify claims and watch the original source material.
- **Acceptance criteria**:
    - Citations appear as inline references (e.g., superscript numbers or linked markers).
    - Clicking or tapping a citation opens the relevant YouTube video link.
    - Timestamps are included where available so the viewer jumps to the relevant moment.
    - Citations are consistent in format across all pages.

### 10.16. Access guides from layer pages

- **ID**: US-016
- **Description**: As a visitor reading a layer page in The Bible, I want to see links to the related guides so that I can take action on what I’ve learned.
- **Acceptance criteria**:
    - Each layer page includes clearly labeled links to the guides it relates to.
    - Layer 1 (OS) links to Browsers, Linux, and Ricing guides.
    - Layer 2 (Services) links to De-Google, Self-Hosting, and Open-Source Alternatives guides.
    - Layer 3 (Behavior) links to Fix YouTube and Control Your Phone guides.

### 10.17. View sponsor disclosures

- **ID**: US-017
- **Description**: As a visitor, I want to know which tools mentioned on the site were also sponsors in PewDiePie’s videos so that I can factor that into my decisions.
- **Acceptance criteria**:
    - Hostinger is noted as a sponsor wherever it appears, with a brief note that PewDiePie genuinely uses it (hosts his website, recommends VPS).
    - Incogni is either excluded from guides or listed separately with a clear sponsor disclaimer.
    - Sponsor disclosures are informational and non-intrusive.

### 10.18. View cross-references between pages

- **ID**: US-018
- **Description**: As a visitor reading any page, I want to see cross-references to related pages so that I can explore connected topics.
- **Acceptance criteria**:
    - Guides reference The Damned page when discussing non-recommended tools.
    - Guides reference other guides when topics overlap (e.g., De-Google guide points to Self-Hosting and Open-Source Alternatives guides).
    - The Arsenal page links to relevant guides for each tool category.
    - Cross-references are clearly labeled and open the target page.

### 10.19. Experience fast page loads

- **ID**: US-019
- **Description**: As a visitor, I want pages to load quickly so that I can read content without delay.
- **Acceptance criteria**:
    - Lighthouse performance score is 90 or above on both mobile and desktop.
    - Time to First Contentful Paint is under 1.5 seconds on a 4G connection.
    - No render-blocking resources delay initial content display.
    - Images use modern formats (WebP or AVIF) with appropriate compression.

### 10.20. Understand the site’s tone from the first interaction

- **ID**: US-020
- **Description**: As a first-time visitor, I want the site’s comical “ignorant vs. savior” tone to be immediately apparent so that I know what kind of experience to expect.
- **Acceptance criteria**:
    - The hero section on the landing page uses the savior narrative voice.
    - Headers, CTAs, and section titles across the site maintain the comical tone.
    - The browser blocking overlay (if triggered) reinforces the tone through humor.
    - The tone is funny and self-aware, never hostile or gatekeeping.