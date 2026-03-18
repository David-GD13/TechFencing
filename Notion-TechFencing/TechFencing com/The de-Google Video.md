# The de-Google Video

## Video Info

- **Title:** I'm DONE with Google
- **URL:** [https://youtu.be/u_Lxkt50xOg](https://youtu.be/u_Lxkt50xOg)
- **Published:** June 26, 2025
- **Duration:** 23:39
- **Sponsor:** Not relevant for TechFencing purposes

> ⚠️ **Data Source Note:** This page was compiled from ~8+ secondary sources (PC Gamer, TechIssuesToday, KnowYourMobile, HackYourMom, Lemmy, Privacy Guides Forum, Techlore Forum, CasualDigitals). Some granular details (exact quotes, order of segments, specific timestamps) may need verification against the actual video. Items marked with ❓ are less certain.
> 

---

## Why He De-Googled — Four Reasons

1. **Privacy** — "Being tracked with literally everything I do just feels kind of odd." After Googling himself, he realized how much data Google had collected without his consent. "It honestly pisses me off how much Google knows about me. I never agreed to this."
2. **Control** — Dislikes how Google decides what you can do with your own data. Wants control over his software and devices. "I realised there's always an open source alternative, and a lot of times they're better, they just don't have a billion budget to market themselves."
3. **Cost** — "I realized I don't want to pay 20 bucks a year for 100GB of storage. Not happening."
4. **Fun** — "It felt like I was finally breaking out of the matrix." The nerd dopamine of running your own services kept him going.

---

## The De-Google Stack — What Replaced What

| Google Service | Replacement | Category | Notes |
| --- | --- | --- | --- |
| **Google Search** | **DuckDuckGo** | Search Engine | "It just works." Urged viewers to change their default search engine in two minutes flat |
| **Google Chrome** | **Firefox** | Web Browser | Called it "B-tier" but tweakable for privacy. Considered **Brave** but stuck with Firefox for its open-source cred |
| **Android (stock)** | **GrapheneOS** | Mobile OS | Installed on his **Google Pixel 9**. Can lock down app permissions granularly and control per-app internet access. "Why does my keyboard need internet access?" |
| **Gmail** | **Self-hosted email server** | Email | Set up his own email server with a custom domain. Proton Mail publicly responded trying to recruit him |
| **Google Passwords / Chrome Password Manager** | **Vaultwarden** (self-hosted) | Password Manager | Self-hosted Bitwarden-compatible password manager. Took him two days staring at a "spinny circle" to get it working |
| **Google Drive** | **File Browser** (self-hosted) | Cloud Storage / File Sharing | Self-hosted open-source file manager at [filebrowser.org](http://filebrowser.org) |
| **Google Keep / Google Docs (notes)** | **Joplin** (self-hosted) | Note-Taking App | Requires x86 CPU support so couldn't run on Raspberry Pi — runs on his **Steam Deck** instead. "Notes app running beautifully" |
| **Google Drive / overall cloud** | **Nextcloud** | Self-Hosted Cloud Platform | Acts as a hub for easier access to all self-hosted products + increases security. [nextcloud.com](http://nextcloud.com) |
| **Google Maps** | **Privacy-friendly alternative** ❓ | Maps / Navigation | Was 30 minutes late to an appointment because the alternative wasn't as good. "Maybe surveillance has its perks." *(Specific app name unclear from sources — possibly Organic Maps or OsmAnd)* |
| **Google TV / Chromecast** | **Privacy-friendly alternative** ❓ | TV / Streaming Device | Replaced with **Kodi** ([kodi.tv](http://kodi.tv)) — open-source media center |
| **Google AI (Gemini etc.)** | **Local AI models** | AI Assistant | Runs AI models locally using **vLLM** ([github.com/vllm-project/vllm](http://github.com/vllm-project/vllm)) on his 10-GPU rig. Detailed in the "STOP. Using AI Right now" video |
| **YouTube** | **Nothing — still uses YouTube** | Video Platform | "I literally can't escape." Acknowledges the irony but views it as a necessary compromise |

---

## Hardware Used

| Hardware | Role | Notes |
| --- | --- | --- |
| **Raspberry Pi 5** | Self-Hosting Server | Runs self-hosted services (Vaultwarden, File Browser, Nextcloud, email, etc.). His preferred note-taking app (Joplin) didn't work on it because it requires x86 CPU (Pi is ARM) |
| **Steam Deck** | Secondary Server + Gaming | Clean install of **Arch Linux** (not SteamOS). Runs Joplin (note-taking) because it needs x86. Added ethernet extension for lower power consumption. Uses the display for monitoring with **Tmux** and **Btop**. "It's like this weird home lab abomination at this point, but I love it." Only uses 2% of CPU for server tasks — can still game on it |
| **Google Pixel 9** | Phone | Flashed with **GrapheneOS** to replace stock Android |
| **Desktop PC** | Main Computer | Runs **Arch Linux** (same as in the Linux video) |

---

## Software & Tools — USED / RECOMMENDED ✅

### Search & Browser

| Tool | Category | Notes |
| --- | --- | --- |
| **DuckDuckGo** | Search Engine | Direct replacement for Google Search. "It just works" |
| **Firefox** | Web Browser | "B-tier" but tweakable for privacy. Open-source. Chosen over Brave |

### Mobile

| Tool | Category | Notes |
| --- | --- | --- |
| **GrapheneOS** | Mobile OS | Privacy-first Android fork. Granular permission control, per-app internet access control. Installed on Pixel 9 |

### Self-Hosted Stack

| Tool | Category | Notes |
| --- | --- | --- |
| **Vaultwarden** | Password Manager (self-hosted) | Unofficial Bitwarden server implementation in Rust. Self-hosted. Took 2 days to set up ("spinny circle") |
| **File Browser** | Cloud Storage (self-hosted) | Open-source file manager. Replaces Google Drive. [filebrowser.org](http://filebrowser.org) |
| **Joplin** | Note-Taking (self-hosted) | Open-source note-taking app. Requires x86 so runs on Steam Deck, not Raspberry Pi |
| **Nextcloud** | Cloud Platform (self-hosted) | Hub for all self-hosted services. File sync, calendar, contacts, etc. [nextcloud.com](http://nextcloud.com) |
| **Self-hosted email** | Email Server | Custom domain email. Full self-hosted replacement for Gmail. Specific mail server software not mentioned in the video. Proton Mail mentioned but he says he hasn't tried it |

### Operating System & Monitoring

| Tool | Category | Notes |
| --- | --- | --- |
| **Arch Linux** | Desktop + Steam Deck OS | Runs on both his desktop and his Steam Deck (clean install, not SteamOS) |
| **Tmux** | Terminal Multiplexer | Used on Steam Deck display for monitoring. "It looks so cool" |
| **Btop** | System Monitor | Used on Steam Deck display for monitoring alongside Tmux |

### Other Mentioned Alternatives

> *Clarified: Only ProtonMail was actually mentioned in the video (he said he hasn't tried it). NewPipe, Mastodon, and PeerTube were NOT mentioned by PewDiePie — they come from coverage articles only.*
> 

| Tool | Category | Notes |
| --- | --- | --- |
| **Brave** | Web Browser | Considered but not chosen — stuck with Firefox for open-source cred |
| **NewPipe** ❓ | YouTube Frontend (Android) | Mentioned in HackYourMom article — may have been a passing mention or recommendation |
| **ProtonMail** ❓ | Email | HackYourMom article lists it as a recommendation. Proton Mail also publicly responded to PewDiePie on X/Twitter trying to convince him to use their service instead of self-hosting |
| **Mastodon** ❓ | Social Media | Mentioned in HackYourMom article as a recommended alternative |
| **PeerTube** ❓ | Video Platform | Mentioned in HackYourMom article. Someone even re-uploaded the video to PeerTube for archival |
| **Local AI models** ❓ | AI Assistant | Replaced commercial AI. Specific software/model unclear (possibly Ollama) |

---

## Software & Tools — NOT RECOMMENDED / CRITICIZED ❌

| Tool/Company | Category | Why It Sucks |
| --- | --- | --- |
| **Google** (company) | Tech Company | "Google is a big ad-company, not a tech company." Collects and sells your data to advertisers. "It honestly pisses me off how much Google knows about me" |
| **Google Search** | Search Engine | Tracks all your searches, profiles you. Replaced with DuckDuckGo |
| **Google Chrome** | Web Browser | Google's tracking tentacle. Replaced with Firefox |
| **Gmail** | Email | Google reads your email content and sells that info to advertisers |
| **Google Drive** | Cloud Storage | "I don't want to pay 20 bucks a year for 100GB of storage." Replaced with self-hosted File Browser |
| **Android (stock)** | Mobile OS | Owned by Google. Apps request invasive permissions. "Why does my keyboard need internet access?" |
| **Google Maps** | Navigation | Tracking. Though admitted the replacement was painful — was 30 min late to an appointment |
| **Google TV** | TV Platform | Ditched for a privacy-friendly alternative |
| **Google's "privacy settings"** | N/A | "Don't call it privacy if the settings don't do anything. That's a toddler toy, not security" |

---

## Key Concepts & Philosophy (for TechFencing narrative)

### "I'm Finally Free"

- "The past couple of weeks I've completely deGoogled. I don't use any of Google's so-called free services. Except YouTube, I literally can't escape."
- "I'm finally free."

### Privacy as a Starting Point, Fun as the Engine

- "This all started because of privacy concerns. Being tracked with literally everything I do just feels kind of odd."
- But the nerd dopamine of running your own services kept him going. Self-hosting is fun.

### Open Source > Big Tech

- "I realised there's always an open source alternative, and a lot of times they're better, they just don't have a billion budget to market themselves."
- Continues the philosophy from the Linux video

### Use Whatever You Have

- Steam Deck as a server, Raspberry Pi as a homelab — "if you want to deGoogle, you can use whatever you have at your disposal"
- Encourages repurposing old devices — install Linux, set up a home server, try self-hosted tools

### The "I'm an Idiot" Approachability

- Strong "I'm an idiot, and if I can do it you can do it" energy
- Two days to set up Vaultwarden (password manager)
- 30 minutes late because Google Maps alternative sucked
- This is reassuring for people intimidated by the idea

### The YouTube Irony

- He can't leave YouTube. He knows it. He admits it openly and laughs about it
- "I literally can't escape" — views it as a necessary compromise
- Community discussion: he could spin up a PeerTube instance, but YouTube is where his audience is

### Don't Be Lazy — Start Small

- "Don't be lazy." Pushing for small changes even if you can't go full de-Google
- Changing a search engine or browser is a start

### Google's "Privacy" Settings Are Theater

- "Don't call it privacy if the settings don't do anything. That's a toddler toy, not security."

---

## The Honest Downsides

- **Password manager took 2 days** — stared at a "spinny circle" the whole time
- **Google Maps alternative was bad** — was 30 minutes late to an appointment. "Maybe surveillance has its perks"
- **Joplin didn't run on Raspberry Pi** — needed x86, had to use Steam Deck as a workaround
- **Self-hosting isn't for everyone** — multiple sources noted that his approach is aimed at techies/hobbyists, not the average user
- **Still on YouTube** — he can't fully escape Google

---

## Community Reactions & Notable Responses

### Proton Mail's Public Response

- Proton Mail posted a video on X/Twitter thanking PewDiePie for raising awareness about the DeGoogle movement and trying to convince him to use Proton Mail instead of self-hosting email

### Brave Software

- Brave shared the video on LinkedIn

### Reddit Reactions

- r/degoogle: "PewDiePie degoogles himself — huge W for the movement"
- r/firefox: "PewDiePie just recommended Firefox. This is massive!"
- r/linux: "PewDiePie picks a fight against Google, installs GrapheneOS"

### PeerTube Archival

- Someone re-uploaded the video to [PeerTube.wtf](http://PeerTube.wtf) "for archival in case YouTube takes it down as Google is actively censoring vids like this on YT"

### LTT Connection

- Multiple sources note this follows LinusTechTips' "De-Google Your Life" videos from the prior year, the second part of which YouTube actually pulled because it showed how to go ad-free on YouTube without Premium

---

## People & Entities Referenced

| Entity | Context |
| --- | --- |
| **Google** | The villain. "Ad company, not a tech company." Controls everything, tracks everything |
| **YouTube** | The one Google product he can't escape. Acknowledges the irony |
| **Proton Mail** | Responded publicly, trying to recruit him. Privacy-focused email alternative |
| **Brave Software** | Shared the video. Browser he considered but didn't choose |
| **LinusTechTips** | Predecessor in the de-Google movement — LTT's second de-Google video was pulled by YouTube |

---

## The Tinfoil Hat Opening

- Video opens with PewDiePie wearing a literal tinfoil hat, poking fun at the stereotype of privacy-obsessed people while simultaneously making a serious point
- "The tech overlords are listening" — said with a grin
- Sets the tone: funny, self-aware, but genuinely serious underneath

---

## Connection to Previous Videos

### → The Linux Video (predecessor)

- Already running Arch Linux on desktop and laptop
- Already using Firefox, already anti-Microsoft/Windows
- The de-Google video is the natural next step: he fixed his OS, now he's fixing his services/ecosystem

### → "I Fixed YouTube" Video

- This is where PewDiePie coined the term **"tech fencing"** — the concept of taking back control of your digital life
- [TechFencing.com](http://TechFencing.com) domain was registered on CloudFlare because of this

---

## ✅ Verified / Resolved

- [x]  **Duration:** 23:39
- [x]  **Sponsor:** Not relevant for TechFencing
- [x]  **Google Maps replacement:** Not specifically named. He used a wrapper for Google Maps but Google banned it. In the "I Fixed YouTube" video he admits: "Full transparency, I still use Google Maps. It's too good." — cite his own words on this
- [x]  **Google TV replacement:** **Kodi** ([kodi.tv](http://kodi.tv)) — open-source media center
- [x]  **Email server software:** Not mentioned in the video. Only **Proton Mail** is mentioned but he says he hasn't tried it. He self-hosts email but doesn't name the specific server software
- [x]  **Local AI setup:** **vLLM** ([github.com/vllm-project/vllm](http://github.com/vllm-project/vllm)) — detailed in the "STOP. Using AI Right now" video
- [x]  **NewPipe, Mastodon, PeerTube:** NOT directly recommended by PewDiePie — only from coverage articles. **Only ProtonMail** was actually mentioned in the video (but he said he hasn't tried it)
- [x]  **Quotes:** We have enough quotes, exact order not needed
- [x]  **Other tools/timestamps:** Not needed, we have the base info

### Extra Reference: Browser Tier List

PewDiePie made a separate browser tier list video: [https://www.youtube.com/watch?v=j5r6jFE8gic](https://www.youtube.com/watch?v=j5r6jFE8gic)

**PewDiePie's Browser Tier List (from video screenshot):**

- **Goats (Best):** Librewolf, Firefox Hardened, Tor Browser
- **Great:** Waterfox, Mullvad Browser, Vivaldi
- **Solid:** Firefox (standard), DuckDuckGo Browser
- **There are better options:** Brave, Floorp, (+ possibly Pale Moon)
- **Not ideal for a normal human:** (privacy-extreme browsers), Ungoogled Chromium
- **Platform-specific:** Various platform-bound browsers (Safari, GNOME Web, Chromium, Orion, etc.)
- **OH HELL NO (⚠️ THE DAMNED):** Edge, Chrome, Opera, Opera GX, Puffin, + others
- **What are even this?:** Various obscure browsers including Mulch

> ⚠️ Note: Some icons in the tier list screenshot are hard to identify precisely. Verify against the actual video. The "OH HELL NO" tier maps directly to the **browser blocking overlay** feature planned for [TechFencing.com](http://TechFencing.com) — visitors using Edge, Chrome, Opera, or other browsers from this tier should see a warning.
> 

Browser Tier List shown on video

![image.png](The%20de-Google%20Video/image.png)