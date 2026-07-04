# Satvix Website — Credibility & Positioning Update (Claude Code Prompt)

> Paste this into Claude Code with the `Serve-Solutions-LLP` repo open on branch `claude/beautiful-sagan-r2ul8r`. It references real files/lines. Anything marked **[CONFIRM]** needs a real answer from Jay before shipping — do not invent values to fill them.

---

## CONTEXT

This is the Satvix Tech Solutions marketing site (React + TS + Vite + Tailwind). Satvix is the brand of **Serve Solutions LLP** (the GitHub org). The site is well-built but currently contains fabricated trust signals that will fail verification by the international clients (US/UK/UAE/EU) we're targeting. Your job: make every public claim TRUE and verifiable, and reposition us as a **small, senior, AI-augmented studio** — without breaking the design system, animations, or layout.

**Golden rule:** every claim must survive a client asking "prove it" on a call. If a number, name, photo, award, or testimonial can't be backed up, remove it or replace it with something real. Keep the visual design, components, and motion intact — this is a content/copy integrity pass, not a redesign.

---

## TASK 1 — Team section (`src/pages/Home.tsx`, `teamMembers` array ~lines 256–317)

Currently 9 members; 8 are invented (Aarav, Priya, Rohan, Diya, Karan, Sneha, Arjun, Neel) with Pexels stock photos, plus "Jay" also on a stock photo.

- Reduce `teamMembers` to only real people. **[CONFIRM]** who is actually on the team and their real roles.
- Replace stock Pexels URLs with real photos placed in `public/images/team/`. If real photos aren't available yet, **[CONFIRM]** — either use a real founder photo for Jay only, or switch the section to a faceless "how we work" treatment (initials/monograms, no invented faces).
- Update any copy that implies a large team ("OUR STUDIO" default text is fine; anything claiming headcount is not).

## TASK 2 — Stats (`src/pages/Home.tsx`: `bandStats` ~319–324 AND the hero stats block ~540–557)

Current false claims: "120+ Products in the wild / Products shipped", "98% Clients who come back / Clients who renew", "40 Engineers, designers, makers", "6 yrs since 2020".

- Replace with honest, defensible proof points. **[CONFIRM]** real numbers. Safe honest alternatives if exact figures are unknown:
  - Real count of shipped products (use the actual number of real portfolio projects — see Task 5).
  - "Working demo every Friday" (process proof, not a number).
  - "Direct access to the engineers building your product."
  - Years operating **[CONFIRM]** actual founding year (code says 2020 — verify).
- Remove the "40" headcount stat entirely unless the team truly numbers 40 **[CONFIRM — almost certainly not]**.
- Keep the `CountUp` animation component; just feed it true numbers.

## TASK 3 — Client logo row (`src/pages/Home.tsx`, `clients` array ~328–337)

Current: LendingFlow, TailorPro, Stillwood, Pelican AI, Verbena, Nordhavn, Aurum, Traxis — invented.

- **[CONFIRM]** which are real clients who consent to being named. Remove all that aren't.
- If fewer than ~4 real named clients, remove the logo strip entirely (an empty/fake strip is worse than none) and replace with a single honest line, e.g. "Trusted by founders and operators across India and abroad."

## TASK 4 — Testimonials (`src/pages/Home.tsx` testimonial items ~377–396)

Current fabricated quotes: Aanya Krishnan / "LendingFlow, Mumbai" (50,000 active cards / RBI); Rohan Mehta / TailorPro; Maeve Donovan / "Stillwood Co." (Lighthouse 22→98). All must go.

- Remove every testimonial that can't survive a reference call.
- **[CONFIRM]** any real client quotes (with permission). Replace with those, verbatim and attributed truthfully. If none exist yet, remove the testimonial slider from Home OR replace it with a "What working with us is like" section describing the real process (Friday demos, direct engineer access, IP ownership) — no invented quotes.
- Keep `TestimonialSlider.tsx` component; just pass real `items` (or don't render it).

## TASK 5 — Portfolio projects (`src/pages/Home.tsx` work array ~150–255, and `src/pages/Portfolio.tsx` / `ProjectDetail.tsx`)

Real (have local screenshots in `public/images/`): **Glamour Jewelry** (`/images/glamour-jewelry.png`), **SD Photography** (`/images/sd-photography.png`), **SK Consultant** (`/images/sk-consultant.png`).
Uncertain (using Pexels stock as the thumbnail): Nivas Realty, TableTrack, Clickly, TailorPro, Proposal Generator.

- **[CONFIRM]** per project: real, or aspirational/demo? For each real one, replace the Pexels `img` with a real screenshot in `public/images/`. Remove or clearly reframe any that aren't real client work.
- Add the fintech project Jay built: **[CONFIRM]** name + use the anonymized showcase image `satvix_fintech_showcase.png` (add to `public/images/`). Since the underlying client is confidential and the app was built under Serve Solutions LLP, present it as "Fintech lending platform (built by Serve Solutions LLP) — React Native + Node.js, daily-EMI collection, borrower & agent portals, shipped in 2 weeks."
- Any project thumbnail that stays as generic stock should be visually distinguishable from real screenshots, or removed. Don't present stock photos as our product UI.

## TASK 6 — Awards section (`src/components/AwardsSection.tsx` + its usage)

Entirely fabricated (the file comment admits the names are placeholders), including "4.9 / 5 from 120+ projects delivered worldwide."

- Remove the fabricated awards data and the "4.9/5 from 120+ projects" line.
- Either delete the section and its import/usage (search the codebase for `AwardsSection`), OR repurpose it into a real "Recognition" band containing only true items **[CONFIRM]**: genuine certifications, open-source work, verifiable partner statuses, or published writing. If none exist yet, remove the section cleanly (also remove the import and JSX usage so the build stays clean).

## TASK 7 — Contact details (everywhere)

Gmail `satvixtechsolutions@gmail.com` appears in `src/components/Footer.tsx`, `src/pages/Contact.tsx`, and the FAQ answer in `src/pages/Home.tsx` (~439).

- Replace all instances with a domain email **[CONFIRM: hello@satvixtech.com]**. A Gmail address is the single biggest instant-credibility loss for foreign clients.
- Verify the phone `+91-9904055986` is correct **[CONFIRM]**.
- Footer brand line: consider "Satvix Tech Solutions — a studio by Serve Solutions LLP" so the brand/entity relationship is explicit and consistent with how projects are credited.

## TASK 8 — Overstated copy

- `src/pages/Home.tsx` FAQ (~439): "Around half of our clients are startups and enterprises in the US, UK, and Europe" — **[CONFIRM]**; if not literally true today, soften to intent, e.g. "We work with founders in India and increasingly abroad, and we're set up for US/UK/EU collaboration (USD invoicing, timezone overlap)."
- `src/data/blog.ts`: "150,000 monthly users" migration story (~148) and "forty people" design-system line (~102) — **[CONFIRM]**; if illustrative, reframe as clearly generic ("a live app with a large user base") rather than specific invented figures.

## TASK 9 — Add AI-augmented positioning (NEW section on Home)

Add one dedicated section (matching the existing design system — reuse the `.s`, `.wrap`, `.s-head`, `.reveal` patterns already in `Home.tsx`) that frames the AI-augmented workflow as a client benefit, not a gimmick:

- Headline idea: "Senior engineers, AI-augmented delivery."
- Body: we use tools like Claude Code and Cursor to move faster, and **every line of AI-assisted code is reviewed by a senior engineer before it reaches your repo** — that's how we ship in weeks without cutting corners. Client benefits: faster delivery, lower cost, senior review on everything.
- This is the answer to "why trust a small studio over a big agency." Place it near the process/stats section.

---

## CONSTRAINTS

- Keep the design system, tokens (`--ink`, `--bg`, `--accent`, etc.), components, and animations intact. Content/copy integrity only.
- After edits, run the build and the nav test (`scripts/nav.test.mjs`) to confirm nothing broke; remove now-unused imports (e.g. if `AwardsSection` is deleted).
- Do NOT introduce new fabricated content while "fixing" — if a real value is unknown, leave a clearly-marked `TODO(jay):` comment rather than inventing.

## OUTPUT

Work file by file. For each change, briefly state what was removed/replaced and why. At the end, output two lists: (1) every fabricated element removed, and (2) every **[CONFIRM]** / `TODO(jay):` item still needing Jay's real input before launch.
