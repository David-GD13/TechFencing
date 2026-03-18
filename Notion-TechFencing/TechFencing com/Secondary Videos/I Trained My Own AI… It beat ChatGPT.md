# I Trained My Own AI… It beat ChatGPT

## Video Info

- **Title:** I Trained My Own AI… It beat ChatGPT
- **URL:** [https://www.youtube.com/watch?v=aV4j5pXLP-I](https://www.youtube.com/watch?v=aV4j5pXLP-I)
- **Published:** February 26, 2026
- **Duration:** 25:35
- **Sponsor:** Not relevant for TechFencing purposes

> ⚠️ **Data Source Note:** This page was compiled from ~10+ secondary sources (Fello AI, Dexerto, Sportskeeda, Express Tribune, Inkl, Medium, VeeFly, X/Twitter threads from @aakashgupta and @1littlecoder). Some granular details (exact quotes, order of segments, specific timestamps) may need verification against the actual video. Items marked with ❓ are less certain.
> 

---

## What This Video Is

The **model training deep dive**. PewDiePie documents months of work fine-tuning an open-source AI model (Qwen 32B) on coding benchmarks, including failures, data contamination crises, hardware meltdowns, and ultimately achieving a score of **39% on the Aider Polyglot benchmark** — beating GPT-4o (23.1%) and Gemini 2.0 Pro Exp (35.6%).

He is transparent that this is **fine-tuning, not training from scratch**: "I have not created my own AI. I have merely taken an AI model and trained it. It's like stealing a child on the street instead of birthing one myself. It's way more effective that way."

The video is titled on YouTube as something like: "I wish I never did this project" — documenting how painful the process was.

---

## What He Actually Did — Technical Summary

### The Goal

- Improve an existing open-source model's **coding performance** in a specific format used by AI coding agents
- Beat GPT-4o on a respected coding benchmark (Aider Polyglot)
- Learn how AI model training works through hands-on experimentation

### The Base Model

- **Qwen 32B** (Qwen2.5-32B-Instruct) — a 32-billion-parameter open-source model from Alibaba
- Already strong at coding, but not optimized for the specific output format needed
- Instruction-tuned variant (good for following code generation instructions)

### The Benchmark

- **Aider Polyglot** — tests AI coding ability across 225 challenging programming exercises from Exercism
- Covers **6 languages**: C++, Go, Java, JavaScript, Python, Rust
- Each model gets 2 attempts per problem
- Score = percentage of exercises where all tests pass
- Two output formats: **WHOLE** (rewrite entire file) vs **DIFF** (modify specific lines)
- PewDiePie chose **WHOLE** format for better alignment with his fine-tuning goal

---

## The Score Journey — From 8% to 39%

| Score | What Happened |
| --- | --- |
| **8%** | Base Qwen 32B tested in wrong output format. Model was capable but answers couldn't be evaluated correctly |
| **16%** | After switching to correct format + early fine-tuning on GitHub-scraped data. This matched his original GPT-4o target |
| **~19.6%** | One run hit this during experiments with Magicoder-style synthetic data. Briefly surpassed ChatGPT's score at the time. Could not be consistently reproduced |
| **4.4%** | **DISASTER.** Discovered he'd been training on the wrong base model AND his benchmark data was **contaminated** (training data overlapped with test data = memorization, not learning). Had to restart from scratch |
| **25.3%** | After fixing base model and retraining clean |
| **36%** | After running full benchmark correctly (one third hadn't been running before) |
| **39%** | Final score after post-training improvements using synthetic data from DeepSeek API |

---

## Software & Tools — USED / RECOMMENDED ✅

### AI Models & Training

| Tool | Category | Notes |
| --- | --- | --- |
| **Qwen 32B (Qwen2.5-32B-Instruct)** | Base Model | 32B-parameter open-source model from Alibaba. The foundation he fine-tuned |
| **DeepSeek API** | Synthetic Data Generation | Used to generate high-quality synthetic training data at scale. This was the breakthrough — read the Magicoder paper and applied its approach |
| **Magicoder paper** | Research Paper | Showed how to generate high-quality coding examples synthetically instead of scraping GitHub. Key insight that turned the project around |
| **Aider** | AI Coding Agent / Benchmark | The coding agent whose format he optimized for. Also the source of the Polyglot benchmark. He used Aider in a previous video to code his web UI |
| **Exercism** | Programming Exercise Platform | Source of the 225 exercises in the Aider Polyglot benchmark |
| **GitHub (scraped)** | Training Data Source | Early training data was scraped from GitHub repos |

### Hardware (Upgraded Rig)

| Component | Spec |
| --- | --- |
| **GPUs** | 8x modded RTX 4090 (48GB each) + 2x RTX 4000 Ada |
| **Total VRAM** | 424GB |
| **Estimated Total Cost** | ~$41,000 (upgraded from original $20,000 build) |
| **ChatOS** | Custom web interface for interacting with local models |

### Comparison Models Tested Against

| Model | Aider Polyglot Score | Result |
| --- | --- | --- |
| **GPT-5** | 88.0% | Current top tier — PewDiePie not competing at this level |
| **Gemini 2.5 Pro Preview** | 83.1% | Top tier |
| **GPT-4.1** | 52.4% | Above PewDiePie's model |
| **PewDiePie's model** | **39%** | **Qwen 32B fine-tune** |
| **Gemini 2.0 Pro Exp** | 35.6% | **BEATEN** |
| **DeepSeek 2.5** | ❓ | **BEATEN** (exact score unconfirmed) |
| **LLaMA 4 Maverick (Meta)** | ❓ | **BEATEN** (exact score unconfirmed) |
| **GPT-4o** | 23.1% | **BEATEN** — his primary target |
| **GPT-4o mini** | 3.6% | Beaten by huge margin |
| **Qwen 3** | ❓ | Newer model that scores higher — would need more work to stay competitive |

---

## Software & Tools — NOT RECOMMENDED / CRITICIZED ❌

| Tool/Concept | Why |
| --- | --- |
| **Benchmark gaming / overfitting** | Acknowledged that strong results on a single benchmark don't mean broad capability. "Benchmaxxing" |
| **Data contamination** | Training data that overlaps with test data produces fake results. He experienced this firsthand and had to restart |
| **Cloud-only AI development** | Entire project done locally — continues the self-hosting philosophy |

---

## Key Technical Problems Encountered

1. **Wrong output format** — Base model answered in DIFF format but benchmark expected WHOLE format. Switching nearly doubled the score.
2. **Data contamination** — Training data overlapped with benchmark test data. Scores looked impressive but were fake. Had to wipe and restart.
3. **Wrong base model version** — Initially fine-tuned the base pre-trained version instead of the coder-specialized variant. Classic mistake.
4. **Model version misalignment** — Versions getting confused during iterative training runs.
5. **Hardware failures** — One GPU failed during training. Power cables and electrical limits became ongoing issues due to high computational load. Power connectors almost set his house on fire.
6. **System crashes and overheating** — Had to repeatedly rebuild parts of the system.
7. **Inconsistent results** — The 19.6% score couldn't be reproduced, forcing deeper investigation.

---

## Key Concepts & Philosophy (for TechFencing narrative)

### "The Deed Is Done"

- "The deed is done. I can finally return to this channel 'cause I have done what I said I was going to do. I trained my own AI model."
- Delivered on the promise from the end of the previous video

### Learning Through Failure

- The entire video is a documentation of failure after failure
- Data contamination, wrong models, hardware meltdowns
- The point is not the result — it's that an individual can do this at all

### Fine-Tuning ≠ Training From Scratch

- Very transparent: "I have merely taken an AI model and trained it"
- Fine-tuning is the accessible path — you don't need millions of dollars
- Uses an analogy comparing it to adopting vs. birthing

### Open-Source Makes This Possible

- Qwen 32B is open-source (Alibaba)
- DeepSeek API is affordable
- Tools like vLLM, Aider, Exercism are all open
- The entire pipeline is reproducible by anyone with the hardware

### Benchmark Gaming ≠ Real Intelligence

- Acknowledged limitations: beating GPT-4o on one benchmark doesn't mean the model is generally better
- Strong self-awareness about the difference between narrow optimization and broad capability
- "Benchmaxxing" — his own term for what he did

### The Democratization of AI

- A YouTuber with no formal ML training produced a model that beat GPT-4o on a coding benchmark
- This would have been impossible even 2 years ago
- The tools, models, and knowledge are now accessible enough for motivated individuals

---

## Community Reactions

- **Massive viral moment** — sparked debate across X/Twitter about what "training your own AI" means
- **@aakashgupta** (X): Corrected the hype — "PewDiePie didn't 'train his own LLM.' He fine-tuned an existing open-source model on coding benchmarks." Called the underlying work legitimate but warned against overstating it
- **@1littlecoder** (X): Similar correction — "fine-tuned a pre-trained LLM" not "trained an AI model"
- **Medium articles** and **technical blog posts** appeared analyzing his ML pipeline
- **Dexerto**, **Sportskeeda**, **Express Tribune**, **Inkl** all covered it
- General ML community takeaway: the work is real and respectable, but the headline claims need context

---

## People & Entities Referenced

| Entity | Context |
| --- | --- |
| **Alibaba / Qwen** | Base model provider (Qwen 32B) |
| **DeepSeek** | API used for generating synthetic training data |
| **OpenAI / ChatGPT** | The target to beat. GPT-4o score was 23.1% |
| **Google / Gemini** | Gemini 2.0 Pro Exp (35.6%) also beaten |
| **Meta / LLaMA** | LLaMA 4 Maverick also beaten |
| **Magicoder** | Research paper that inspired the synthetic data approach |
| **Aider** | AI coding agent and benchmark source |
| **Exercism** | Programming exercise platform used in the benchmark |

---

## Connection to Other Videos

### → "Accidentally Built a Nuclear Supercomputer" (predecessor — Aug 21, 2025)

- The hardware foundation. Same rig, now upgraded to $41,000

### → "STOP. Using AI Right now" (predecessor — Oct 31, 2025)

- At the end of that video, he announced plans to fine-tune his own model. This video is the result
- The Swarm data collection system was built specifically to feed into this training

### → The de-Google Video (earlier in arc)

- Self-hosting philosophy extends from services → compute → AI models → actually training AI

### → "I Fixed YouTube" (successor — Mar 17, 2026)

- The AI capabilities built through this training are what power the YouTube extension

---

## What's Missing / Needs Verification from Actual Video 🔍

- [ ]  Exact video duration
- [ ]  Sponsor / affiliate reads
- [ ]  Exact timestamps for key segments
- [ ]  Full quotes in order
- [ ]  Specific training hyperparameters (learning rate, epochs, batch size, etc.)
- [ ]  Exact DeepSeek model version used for synthetic data
- [ ]  Whether he released the model weights or plans to
- [ ]  Specific hardware upgrades made since the Supercomputer video
- [ ]  Whether he discussed compute costs (electricity, time, etc.)
- [ ]  Any other benchmarks tested besides Aider Polyglot
- [ ]  The video's actual YouTube title (sources vary between "I Trained My Own AI... It beat ChatGPT" and "I wish I never did this project")