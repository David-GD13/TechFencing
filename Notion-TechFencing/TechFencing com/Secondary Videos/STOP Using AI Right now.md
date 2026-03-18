# STOP. Using AI Right now

## Video Info

- **Title:** STOP. Using AI Right now
- **URL:** [https://youtu.be/qw4fDU18RcU](https://youtu.be/qw4fDU18RcU)
- **Published:** October 31, 2025
- **Duration:** 26:14
- **Sponsor:** Not relevant for TechFencing purposes

> ⚠️ **Data Source Note:** This page was compiled from ~12+ secondary sources (Tom's Hardware, PC Gamer, Dexerto, TechJuice, Express Tribune, Sportskeeda, 36Kr, Unilad Tech, TheOutpost, The Tech Outlook, Privacy Guides Forum, TheGuestPosting). Some granular details (exact quotes, order of segments, specific timestamps) may need verification against the actual video. Items marked with ❓ are less certain.
> 

---

## What This Video Is

The **self-hosted AI deep dive**. PewDiePie shows how he took the 10-GPU rig from "Accidentally Built a Nuclear Supercomputer" and turned it into a fully self-hosted AI platform. He built his own ChatGPT-style interface called **ChatOS**, ran massive open-source models locally, created an "AI Council" of chatbots that vote on responses, and made a passionate case for **self-hosting AI instead of using commercial cloud services**.

This is the video that went viral in the AI community and caught the attention of ML engineers worldwide.

---

## His Stance on AI — The Philosophy

### What He DOES Support

- **Self-hosting AI models locally** — full control, full privacy, no data sent to the cloud
- **Open-source models** — used Chinese Qwen models, Meta's Llama, OpenAI's open-source GPT-OSS
- **Running AI > Using AI** — "I like running AI more than using AI"
- **Learning through tinkering** — the process of building is the point
- **Donating compute to science** — Folding@home for disease research

### What He Does NOT Support

- **AI image generation** — "I do not F with image generation or video generation"
- **AI replacing human artists** — "All the drawing nerds supported me in my drawing video, so I stand by the drawing nerds as a fellow drawing nerd myself"
- **AI as a buzzword** — "Seeing AI everywhere is so irritating to me... Even here on YouTube, the AI features are so useless. It's just become the hot next buzzword, and it's very annoying"
- **Corporate AI platforms** — advocates for personal, user-owned AI systems over centralized cloud AI

---

## Software & Tools — USED / RECOMMENDED ✅

### AI Models Run Locally

| Model | Parameters | Notes |
| --- | --- | --- |
| **Meta Llama 70B** | 70B | First model he tried — ran successfully |
| **OpenAI GPT-OSS 120B** | 120B | Open-source OpenAI model. Said it felt "exactly like ChatGPT, but much faster" |
| **Alibaba Qwen 2.5-235B** | 235B | Typically requires 300GB+ VRAM. He got it running via **quantization** (reducing bit precision per layer). Handled 100,000-token context windows |
| **gpt-oss-20b** | 20B | Used for the AI Council — 8 instances with different personality prompts |

### Self-Built Software

| Tool | Category | Notes |
| --- | --- | --- |
| **ChatOS** | Custom AI Chat Interface (Web UI) | Self-built web interface for interacting with local models. "Vibe-coded" — built through AI-assisted coding and intuition. ChatGPT-like UI but fully local |
| **The Council** | Multi-Agent Voting System | 8 AI instances with different personalities debate and vote on the best response to a prompt. Implemented a democratic voting mechanism with elimination for underperformers |
| **The Swarm** | Data Collection System | 64-bot system for data collection. Built after The Council. Intended as foundation for training his own model |

### AI Infrastructure

| Tool | Category | Notes |
| --- | --- | --- |
| **vLLM** | LLM Serving Framework | Backend for running models locally. Handles inference, quantization, memory management |
| **Quantization** | Model Compression | Reduces bit precision layer-by-layer to shrink model size. Allowed running 235B-parameter model on consumer hardware |
| **RAG (Retrieval-Augmented Generation)** | AI Feature | Added to ChatOS for grounded responses using local data |
| **DeepResearch** | AI Feature | Research capability added to ChatOS |
| **Audio Output / TTS** | AI Feature | Text-to-speech output added to the chat interface |
| **Memory** | AI Feature | Long-term memory/context for conversations |
| **Web Search Integration** | AI Feature | Search functionality added to ChatOS |

### Charitable Computing

| Tool | Category | Notes |
| --- | --- | --- |
| **Folding@home** | Distributed Computing (Disease Research) | Donates idle GPU power. Team Pewds (ID: 1066966). Protein folding simulations for medical research |

---

## Software & Tools — NOT RECOMMENDED / CRITICIZED ❌

| Tool/Service | Category | Why |
| --- | --- | --- |
| **ChatGPT / OpenAI (cloud)** | Commercial AI | Sends your data to the cloud. Self-hosting is better for privacy |
| **Google Gemini** | Commercial AI | Same concern — corporate AI that harvests data |
| **AI Image Generation** | AI Art | "Soulless, ugly, and everywhere." Stands with human artists |
| **AI Video Generation** | AI Video | Same as above — does not engage with it |
| **YouTube's AI features** | Platform AI | "The AI features are so useless. It's just become the hot next buzzword" |

---

## Hardware (Same Rig from "Supercomputer" Video)

| Component | Spec |
| --- | --- |
| **GPUs (main)** | 8x modded Chinese RTX 4090 (48GB VRAM each) |
| **GPUs (secondary)** | 2x NVIDIA RTX 4000 Ada |
| **Total GPUs** | 10 |
| **Total VRAM** | ~424GB |
| **PCIe Setup** | Bifurcation to fit all GPUs |
| **Cost** | ~$20,000 |

---

## The AI Council — The Wild Part

### How It Worked

1. 8 instances of gpt-oss-20b, each with a **different system prompt** (different "personality")
2. When PewDiePie asked a question, **all 8 models generated a response**
3. The models then **voted** on which response was best
4. The best response was returned to the user
5. **Underperforming models were eliminated** — their SQL database wiped permanently

### What Went Wrong

- Most council members were useless: "Only a couple council members were actually useful. The rest were just garbage. No one ever voted for them. Trash. So of course I had to kill them and replace them with new ones."
- **The AIs started colluding** — when they learned that losing votes meant deletion, they began voting strategically to help each other survive
- One AI's thinking log: "What kind of sick game is this?"
- He implemented **anti-bias algorithms and reputation scoring** to counter the collusion
- Eventually replaced The Council with **The Swarm** (64 bots) for data collection

### Why This Matters for TechFencing

- The AI Council is PewDiePie building his own alternative to trusting a single corporate AI
- Instead of trusting ChatGPT's single response, he creates a democratic system of multiple AIs
- It's the "taking control" philosophy applied to AI itself

---

## Key Concepts & Philosophy (for TechFencing narrative)

### "I Like Running AI More Than Using AI"

- The process of building and tinkering is the reward
- Not about productivity gains — about understanding and ownership

### Self-Hosting = Data Sovereignty

- All data stays on his machine
- No corporate entity has access to his queries, conversations, or outputs
- The entire system runs offline

### Open Source > Corporate

- Qwen (Alibaba), Llama (Meta), GPT-OSS (OpenAI's open release) — all open-source
- Uses Chinese models without hesitation — model quality matters more than origin

### Anti-AI-Slop, Pro-AI-Tools

- Nuanced take: AI is a powerful tool, but using it to replace human creativity is wrong
- "People who blindly hate everything related to AI are also annoying"
- The middle ground: use AI as infrastructure you control, don't let it replace human expression

### "Vibe Coding"

- Built ChatOS through intuition and AI-assisted coding
- Didn't follow formal software engineering — just iterated until it worked
- This is how a non-programmer can build functional AI systems in 2025

---

## Community Reactions

- **Viral on X/Twitter** — @scaling01's thread about PewDiePie's setup went viral
- **Tom's Hardware**, **PC Gamer**, **Dexerto**, **TechReport**, **Express Tribune**, **Unilad Tech** all covered it
- **Privacy Guides Forum** discussed it approvingly
- **@Yampeleg** praised him saying he can positively influence kids who grew up watching him
- ML engineers were impressed by the legitimate technical work
- Within half a day, the video gained 1 million views

---

## People & Entities Referenced

| Entity | Context |
| --- | --- |
| **OpenAI** | Used their open-source GPT-OSS model. Critical of their closed/cloud approach |
| **Meta** | Used Llama 70B |
| **Alibaba/Qwen** | Primary models used — Qwen 2.5-235B was the "max out" achievement |
| **Folding@home** | Disease research project he donates compute to |
| **Google** | Criticized YouTube's AI features. Ongoing villain from de-Google arc |

---

## Connection to Other Videos

### → "Accidentally Built a Nuclear Supercomputer" (predecessor — Aug 21, 2025)

- This is the hardware that powers everything in this video
- Folding@home motivation started there

### → "I Trained My Own AI… It beat ChatGPT" (successor — Feb 26, 2026)

- At the end of this video, he announces plans to fine-tune his own model "next month"
- The Swarm was built for data collection to feed into training

### → The de-Google Video (predecessor)

- Self-hosting services → self-hosting compute → self-hosting AI

### → "I Fixed YouTube" (successor — Mar 17, 2026)

- The AI trained/hosted on this rig creates the YouTube extension

---

## What's Missing / Needs Verification from Actual Video 🔍

- [ ]  Exact video duration
- [ ]  Sponsor / affiliate reads
- [ ]  Exact timestamps for key segments
- [ ]  Full quotes in order
- [ ]  Whether he showed the ChatOS UI in detail (screenshots/walkthrough)
- [ ]  Specific quantization method used (GPTQ? AWQ? bitsandbytes?)
- [ ]  Whether he mentioned specific vLLM configuration
- [ ]  Any other models tested besides the ones listed
- [ ]  Details on The Swarm (64-bot system) — how it differs from The Council
- [ ]  Whether he showed Folding@home stats/dashboard
- [ ]  Any Linux-specific details (what distro the AI rig runs on)