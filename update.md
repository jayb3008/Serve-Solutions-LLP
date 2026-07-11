[Tool call: create_file]
description: Updated website rewrite prompt with Nine Finance, Glamour jewelry, and Charotar Soap Factory case studies integrated
file_text: # Satvix Tech Solutions — Website Credibility Rewrite Prompt (Updated with Case Studies)

> Paste this prompt into Claude Code (or Cursor) with your website codebase open. Fill in the `[VERIFY]` placeholders with real facts before running — the whole point of this rewrite is that every claim on the site becomes true and checkable.

---

## PROMPT

You are rewriting the marketing copy of **satvixtech.com**, the website of Satvix Tech Solutions — a small, senior, AI-augmented software studio based in Gujarat, India. The current site has strong voice and structure, but it contains inflated or fabricated trust signals that will fail verification by international clients (US/UK/EU/AU startups and agencies). Your job is to rewrite the trust-critical sections so the site is **100% verifiable, honest, and positioned to win foreign clients** — without losing the distinctive, confident voice.

### Core repositioning

Change the story from "we are a big established agency" to:

**"A small, senior, AI-augmented engineering studio. You talk directly to the engineers who build your product. No account managers, no juniors learning on your budget, no timezone black holes."**

This positioning is a _strength_ for foreign startups. Do not apologize for being small. Sell it.

### Ground-truth facts (verified)

- Founder: 7+ years full-stack experience (MERN: MongoDB, Express, React, Node)
- Team structure: founder-led studio with a network of vetted senior collaborators (fill in: actual current team size)
- Location: Anand, Gujarat, India
- Working hours overlap offered: 4+ hours overlap with US East Coast / full UK overlap
- Contact: hello@satvixtech.com (domain email — replace ALL instances of Gmail)

### Real case studies (use these verbatim in the site)

#### Case Study 1: Fintech Lending Platform

- **What:** A fintech lending platform where users borrow money and receive structured daily EMI (Equated Monthly Installment) payments. Two user types: borrower/owner and agent.
- **Stack:** React Native (mobile app) + Node.js backend
- **Timeline:** 2 weeks
- **Proof:** Screenshots available; product actively in use by client (confidential, non-disclosed)
- **Why it matters:** Demonstrates speed on regulated finance, mobile-first execution, multi-tenant user systems

**Copy for site:**

> Built a full fintech lending platform in 2 weeks. React Native mobile app for borrowers and agents, Node.js backend handling daily EMI calculations and reconciliation. Product is live and managing active loan portfolios. This shows our ability to move fast on regulated, mission-critical systems.

---

#### Case Study 2: Jewelry E-Commerce Platform

- **What:** Full-featured jewelry e-commerce platform with product catalog management, orders, inventory, and admin dashboard.
- **Stack:** React (frontend) + Node.js + Express (backend) + MongoDB (database)
- **Timeline:** 4 weeks
- **Proof:** Live at [CLIENT_WEBSITE_IF_PUBLIC, otherwise: "live and processing orders"]
- **Why it matters:** End-to-end full-stack, real payments/orders, inventory management, demonstrates e-commerce complexity

**Copy for site:**

> Shipped a complete jewelry e-commerce platform in 4 weeks. React frontend, Node.js + Express backend, MongoDB database. Live platform handling product catalog, customer orders, and admin management. Proves we can ship polished, transaction-heavy systems fast.

---

#### Case Study 3: Manufacturing Inventory & Sales Management (Proprietary Product)

- **What:** Inventory, production tracking, and sales order management system for soap manufacturing units. Built as an own-product that can be white-labeled or resold to other manufacturers.
- **Stack:** React + Next.js (frontend) + Node.js (backend)
- **Timeline:** 2 months (initial build)
- **Proof:** Proprietary product, available for white-label licensing or resale; can demo on request
- **Why it matters:** Demonstrates ability to build reusable, modular B2B SaaS; shows strategic thinking beyond one-off projects

**Copy for site:**

> Built a reusable inventory and manufacturing management system (Charotar Soap Factory). React + Next.js frontend, Node.js backend. Designed as a white-label product we can deploy to other manufacturers and distributors. Shows our ability to build systems that scale beyond one client.

---

### Section-by-section rewrite instructions

**1. Hero**

- Keep it punchy. Lead with outcome + differentiator, e.g.: "Senior engineers + AI-augmented delivery = ship in weeks, not quarters. Three real case studies. No account managers."
- Use one of the case study headlines as a proof point (e.g., "shipped a fintech platform in 2 weeks").

**2. Stats / counters**

- DELETE any counter that renders as "0+" or is fabricated.
- Replace with 3–4 honest, concrete proof points derived from case studies:
  - "Three shipped products in the last [timeframe]"
  - "Fastest delivery: 2 weeks (fintech lending platform)"
  - "Every project gets a working demo every Friday"
  - "Direct Slack/WhatsApp access to the engineer writing your code"

**3. Case Studies Section (NEW or EXPAND)**

- Feature the three case studies in Problem → Approach → Outcome format.
- Include screenshots for the fintech (client confidential) and jewelry (live link if shareable).
- For manufacturing system: "Available for white-label licensing — ask for a demo."
- Keep each to 3–4 sentences; let visuals do heavy lifting.

**4. Team section ("Forty people, one room")**

- Remove all stock photos (they are reverse-image-searchable and instantly kill trust).
- Rewrite as founder-led studio: real photo of Jay, real bio ("7+ years MERN, AI-augmented workflow"), real location ("Anand, Gujarat").
- If collaborators exist, describe the model honestly ("a small bench of senior specialists we've worked with for years").
- Tone: confident, not apologetic. "Small by design" framing.

**5. Testimonials & Social Proof**

- Remove any testimonial that cannot survive a reference call. A fake testimonial discovered = deal dead + reputation gone.
- If no real testimonials yet, replace with case study proof (live links, screenshots, timelines).
- Consider adding: "Ask us for a reference call with any case study client. We encourage it."

**6. Process section**

- Emphasize the rituals that reduce foreign-client anxiety:
  - Weekly Friday demo (working code, not slides)
  - Daily async updates (Slack/email, no daily standup tax)
  - Shared project board (Jira/Linear, full visibility)
  - Staging environment access from week one
  - Full repository access from day one (you own the code)

**7. AI-augmented positioning**

- One dedicated section: how the studio uses Claude Code, Cursor, and agentic workflows to move faster — framed as _client benefit_ (faster delivery, lower cost, senior review on all AI-generated code), not as a gimmick.
- Example: "Every line of AI-generated code is reviewed by a senior engineer before it reaches your repo. This is how we ship fintech in 2 weeks without cutting corners."

**8. Pricing & FAQ**

- Keep the pricing-transparency FAQ — it's a genuine differentiator.
- Add international framing: USD/GBP indicative ranges, engagement models (fixed-scope, monthly retainer, staff augmentation).
- Add FAQ entries foreign clients actually ask:
  - Timezone overlap? (answer: "4+ hours overlap with US East, full overlap with UK")
  - Communication cadence? (answer: "Daily async updates, Friday demos, direct Slack access to engineers")
  - IP ownership? (answer: "100% yours from day one. Full repo access, no escrow.")
  - Contracts/invoicing? (answer: "Happy to invoice in USD/GBP, standard SaaS/dev contracts, NDA-friendly")
  - Code handover? (answer: "Full documentation, recorded walkthroughs, transition support included")

**9. Contact & footer**

- Replace satvixtechsolutions@gmail.com with hello@satvixtech.com everywhere.
- Add: response-time promise ("we reply within one business day"), Calendly/booking link placeholder, LinkedIn, GitHub if public work exists.
- Add: "Based in Anand, Gujarat. Working directly with founders and agencies in the US, UK, EU, and Australia."

### Voice & style rules

- Keep the existing distinctive, direct voice — short sentences, concrete nouns, no agency jargon ("synergy", "cutting-edge", "world-class" are banned).
- Every claim must pass the test: _"Would this survive a client asking 'prove it' on a call?"_ If not, cut it or make it true.
- Write for a skeptical US startup founder skimming on mobile.
- Use the case studies as your _proof_, not adjectives.

### Output format

For each section, output:

1. **Before** (current copy, one line summary)
2. **After** (full rewritten copy, ready to paste)
3. **Why** (one sentence)

Then output a final checklist of every fabricated element removed and every `[VERIFY]` item still needing Jay's input.

---

## Additional notes for Jay

- **Screenshots:** For Nine Finance (fintech), host anonymously on your site (e.g., `/case-studies/fintech-lending/`). For Glamour (jewelry), link directly if client allows, or use a proxy screenshot.
- **White-label positioning:** The soap manufacturing system is your strongest recurring-revenue play. Consider a dedicated "White-Label SaaS" section positioning it as a turnkey solution for other manufacturers.
- **Reference calls:** Foreign clients _will_ ask for references. Decide now: will your real clients (Nine Finance, Glamour, Charotar) do a quick call with a prospect? If yes, mention it on the site. If no, don't promise it — just say "we'd rather show code."

path: /mnt/user-data/outputs/satvix-website-rewrite-prompt-updated.md
File created successfully: /mnt/user-data/outputs/satvix-website-rewrite-prompt-updated.md
[Tool call: present_files]
filepaths: ["/mnt/user-data/outputs/satvix-website-rewrite-prompt-updated.md"]
[local_resource]
Here's your updated rewrite prompt with all three case studies baked in: **Nine Finance** (fintech lending, 2 weeks, React Native + Node.js), **Glamour** (jewelry e-commerce, 4 weeks, React + Node + MongoDB, live), and **Charotar Soap Factory** (your own white-label manufacturing system, 2 months, React + Next.js + Node).

The prompt now treats these as your _real proof points_ — no more inflated stats or fake testimonials. Each case study gets a Problem → Approach → Outcome write-up, and the manufacturing system is positioned as a recurring-revenue white-label product you can resell.

Run this through Claude Code, fill in any remaining blanks (team size, exact contact details), and you'll have a site that actually converts foreign clients because every claim is defensible.
