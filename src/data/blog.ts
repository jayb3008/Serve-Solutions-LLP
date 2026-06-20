export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  date: string;
  read: string;
  cat: string;
  featured?: boolean;
  bg: string;
  content: Block[];
};

export const posts: Post[] = [
  {
    slug: 'llm-production-checklist',
    title: 'The LLM production checklist: 12 things we check before every AI launch',
    excerpt:
      "Streaming, cost caps, fallback models, eval harnesses — what we've learned shipping AI features that actually hold up under real traffic.",
    author: 'Jay Sarvaiya',
    role: 'Founder & CEO',
    date: 'May 2025',
    read: '9 min',
    cat: 'AI',
    featured: true,
    bg: 'bg-violet',
    content: [
      { type: 'p', text: 'Shipping a demo with a large language model takes an afternoon. Shipping one that survives real users, real cost pressure, and real edge cases takes a lot more discipline. After putting LLM features into production across fintech, legal, and education products, we boiled our pre-launch ritual down to a checklist. Here it is.' },
      { type: 'h2', text: '1. Stream everything the user waits on' },
      { type: 'p', text: 'Perceived latency kills AI products faster than actual latency. If a response takes four seconds, streaming the first token in under 500ms changes the entire experience. We stream by default and only fall back to blocking responses when the output feeds a downstream system rather than a human.' },
      { type: 'h2', text: '2. Put a hard cost cap on every request path' },
      { type: 'p', text: 'A runaway agent loop or an unbounded context window can turn a ₹2 request into a ₹200 one. We set per-request token ceilings, per-user daily budgets, and a global circuit breaker. None of these are optional once you have real traffic.' },
      { type: 'h2', text: '3. Always have a fallback model' },
      { type: 'p', text: 'Providers have outages. Rate limits trip. A good architecture degrades gracefully: primary model, secondary model, and a deterministic non-AI fallback for the critical path so the product never simply breaks.' },
      { type: 'h2', text: '4. Build the eval harness before the feature' },
      { type: 'p', text: 'You cannot improve what you cannot measure. We write a small evaluation set — real inputs with graded expected behaviour — before writing the prompt. Every prompt change runs against it. This is the single highest-leverage habit in AI engineering.' },
      { type: 'quote', text: 'A prompt without an eval set is a vibe, not a feature.' },
      { type: 'h2', text: 'The rest of the list' },
      { type: 'list', items: [
        'Log every prompt and completion (with PII redaction) so you can debug production.',
        'Make outputs traceable to sources when the user is trusting the answer.',
        'Surface confidence, and design the UI for when the model is wrong.',
        'Rate-limit per user, not just per IP.',
        'Cache aggressively — identical inputs should not pay twice.',
        'Red-team for prompt injection before launch, not after.',
        'Version your prompts like code, with a rollback path.',
        'Decide your data-retention policy before the first request, not after the first audit.',
      ] },
      { type: 'p', text: 'None of this is glamorous. All of it is the difference between an AI feature that earns trust and one that quietly gets switched off three weeks after launch.' },
    ],
  },
  {
    slug: 'rag-architecture-patterns',
    title: 'RAG architecture patterns: when to chunk, when to chunk differently',
    excerpt:
      'Document structure, token budgets, and re-ranking — the decisions that separate a janky chatbot from a reliable knowledge assistant.',
    author: 'Rahul Patel',
    role: 'Head of Engineering',
    date: 'Apr 2025',
    read: '11 min',
    cat: 'AI',
    bg: 'bg-indigo',
    content: [
      { type: 'p', text: 'Retrieval-augmented generation is deceptively simple in theory: find relevant text, stuff it into the prompt, ask the model. In practice, the quality of a RAG system lives and dies on retrieval — and retrieval lives and dies on how you chunk.' },
      { type: 'h2', text: 'Chunking is a modelling decision, not a config value' },
      { type: 'p', text: 'Teams treat chunk size as a number to tune. It is really a question about your documents. Dense legal contracts want small, overlapping chunks anchored on clause boundaries. Long-form articles want larger semantic chunks. Tables and structured data should not be chunked as prose at all.' },
      { type: 'h2', text: 'Hybrid retrieval beats pure vector search' },
      { type: 'p', text: 'Dense embeddings are great at meaning and terrible at exact matches like part numbers, names, and acronyms. Combining dense vector search with sparse keyword search (BM25) and then re-ranking the merged set consistently outperforms either approach alone.' },
      { type: 'h2', text: 'Re-ranking is where the magic is' },
      { type: 'p', text: 'Retrieve broadly, then re-rank tightly. Pulling the top 50 candidates and re-ranking them down to the best 5 with a cross-encoder routinely lifts answer quality more than any prompt change. It costs a little latency and pays for itself in accuracy.' },
      { type: 'quote', text: 'Most "the AI is hallucinating" bugs are actually "the retrieval gave it nothing useful" bugs.' },
      { type: 'h2', text: 'A practical default' },
      { type: 'list', items: [
        'Chunk on natural boundaries (headings, clauses) with 10–15% overlap.',
        'Store metadata per chunk so you can filter before you search.',
        'Run hybrid dense + sparse retrieval.',
        'Re-rank the merged candidates with a cross-encoder.',
        'Always cite the source chunks back to the user.',
      ] },
      { type: 'p', text: 'Start there, measure with a real eval set, and only add complexity when the numbers tell you to.' },
    ],
  },
  {
    slug: 'design-system-at-scale',
    title: 'Building a design system that survives a team of 40',
    excerpt:
      'Token architecture, decision logs, and the governance model that keeps 40 engineers from accidentally forking your UI.',
    author: 'Priya Mehta',
    role: 'Design Lead',
    date: 'Apr 2025',
    read: '7 min',
    cat: 'Design',
    bg: 'bg-mint',
    content: [
      { type: 'p', text: 'A design system is easy to start and hard to keep alive. The hard part is not the components — it is the governance that stops forty people from quietly forking the button six different ways.' },
      { type: 'h2', text: 'Tokens first, components second' },
      { type: 'p', text: 'Every durable system we have built starts with tokens: colour, type scale, spacing, radius, motion. Components consume tokens; they never hard-code values. When the brand evolves, you change the tokens and the whole product follows.' },
      { type: 'h2', text: 'Write decisions down' },
      { type: 'p', text: 'The most underrated artefact in a design system is the decision log. Why does the primary button look like this? Why this spacing scale? A short written rationale prevents the same debate from happening every quarter and onboards new designers in hours instead of weeks.' },
      { type: 'h2', text: 'Make the right thing the easy thing' },
      { type: 'p', text: 'Governance fails when compliance is harder than improvisation. Ship the system as a well-documented package, with linting that flags off-system values, and adoption takes care of itself.' },
      { type: 'quote', text: 'A design system is a product. Its users are your own engineers.' },
      { type: 'p', text: 'Treat it like one — with a roadmap, a changelog, and someone who owns it — and it will outlast any single redesign.' },
    ],
  },
  {
    slug: 'nextjs-app-router-lessons',
    title: "Six months with Next.js App Router: what we'd do differently",
    excerpt:
      'Server components, caching gotchas, and the moment we realised our mental model was entirely wrong. Real project lessons.',
    author: 'Rahul Patel',
    role: 'Head of Engineering',
    date: 'Mar 2025',
    read: '10 min',
    cat: 'Engineering',
    bg: 'bg-sky',
    content: [
      { type: 'p', text: 'We moved several production apps to the Next.js App Router over six months. It is a genuine step forward — and it will also happily let you build something slow and confusing if you bring your old mental model with you.' },
      { type: 'h2', text: 'Server components change where data lives' },
      { type: 'p', text: 'The biggest unlearning: data fetching belongs on the server, close to the component that needs it, not hoisted into a single top-level loader. Once that clicked, our components got smaller and our client bundles got dramatically lighter.' },
      { type: 'h2', text: 'Caching is the footgun' },
      { type: 'p', text: 'The App Router caches aggressively by default across four different layers. Most of our early bugs were really caching bugs — stale data that looked like logic errors. Learn the cache model early and be explicit about revalidation.' },
      { type: 'h2', text: 'Keep client components at the leaves' },
      { type: 'p', text: 'Interactivity should live at the edges of the tree. Pushing "use client" as far down as possible keeps the server-rendered core fast and the interactive islands small.' },
      { type: 'quote', text: 'If your whole page is a client component, you are using a server framework to ship a single-page app.' },
      { type: 'p', text: 'Used with its grain, the App Router produces fast, SEO-friendly apps with very little client JavaScript. Used against it, you get the worst of both worlds.' },
    ],
  },
  {
    slug: 'react-native-new-arch',
    title: 'Migrating a 150k-user app to the React Native new architecture',
    excerpt:
      'What broke, what got faster, and the one bridging bug that took three days to find.',
    author: 'Karan Joshi',
    role: 'Mobile Lead',
    date: 'Mar 2025',
    read: '8 min',
    cat: 'Mobile',
    bg: 'bg-coffee',
    content: [
      { type: 'p', text: 'Migrating a live app with 150,000 monthly users to the React Native new architecture was equal parts exciting and nerve-wracking. Here is the honest account.' },
      { type: 'h2', text: 'What got faster' },
      { type: 'p', text: 'Startup time and list scrolling both improved noticeably. The new renderer and the synchronous native interface remove a class of jank that used to show up on lower-end Android devices — which, for an Indian user base, is most devices.' },
      { type: 'h2', text: 'What broke' },
      { type: 'p', text: 'Older third-party native modules were the main pain. Anything that had not been updated for the new architecture needed a shim or a replacement. We budgeted a full sprint just for dependency triage and were glad we did.' },
      { type: 'h2', text: 'The three-day bug' },
      { type: 'p', text: 'A subtle threading difference in how native events were dispatched caused an intermittent crash that only appeared under fast navigation. The fix was one line; finding it took three days of careful instrumentation. The lesson: invest in good native crash reporting before you migrate, not after.' },
      { type: 'quote', text: 'Migrate behind a flag, roll out to 1% first, and watch your crash-free rate like a hawk.' },
      { type: 'p', text: 'We shipped to 100% over two weeks with no rollback. Worth it.' },
    ],
  },
  {
    slug: 'discovery-sprint-template',
    title: 'Our discovery sprint template: two weeks that save six months',
    excerpt:
      'The exact artefacts, interviews, and decisions we make in week one before a single line of code gets written.',
    author: 'Nisha Desai',
    role: 'Product Manager',
    date: 'Feb 2025',
    read: '6 min',
    cat: 'Product',
    bg: 'bg-sand',
    content: [
      { type: 'p', text: 'The most expensive code is the code you build for the wrong problem. A focused two-week discovery sprint is the cheapest insurance you can buy against six months of misdirected engineering.' },
      { type: 'h2', text: 'Week one: understand' },
      { type: 'p', text: 'Stakeholder interviews, user interviews, a competitive teardown, and a brutal prioritisation of what actually matters for the first release. The output is a shared, written understanding of the problem — not the solution.' },
      { type: 'h2', text: 'Week two: shape' },
      { type: 'p', text: 'Now we shape a solution: user flows, a clickable prototype of the riskiest path, a technical architecture sketch, and a scoped roadmap. We test the prototype with real users before committing to a build.' },
      { type: 'h2', text: 'The deliverables' },
      { type: 'list', items: [
        'A one-page problem statement everyone agrees on.',
        'A prioritised feature list for v1 (and an explicit "not now" list).',
        'A clickable prototype of the core journey.',
        'An architecture and effort estimate.',
        'A roadmap with milestones, not just a backlog.',
      ] },
      { type: 'quote', text: 'Slow down at the start so you can move fast for the rest of the project.' },
      { type: 'p', text: 'Every project we have regretted skipped this. Every project we are proud of started here.' },
    ],
  },
  {
    slug: 'supabase-at-scale',
    title: 'Supabase at scale: what no one tells you about row-level security',
    excerpt:
      'Performance traps, policy debugging, and the indexing strategy that dropped our p99 from 800ms to 40ms.',
    author: 'Dev Agarwal',
    role: 'Backend Engineer',
    date: 'Feb 2025',
    read: '12 min',
    cat: 'Engineering',
    bg: 'bg-deep-green',
    content: [
      { type: 'p', text: 'Supabase is a joy to build on — until your row-level security policies meet real data volume. Then the same feature that protects your data quietly becomes your biggest performance bottleneck.' },
      { type: 'h2', text: 'RLS runs on every row' },
      { type: 'p', text: 'A policy is a WHERE clause the database applies to every candidate row. If your policy calls a function or joins another table, that work multiplies across your result set. The convenience hides the cost.' },
      { type: 'h2', text: 'Index for your policies' },
      { type: 'p', text: 'The fix that took our p99 from 800ms to 40ms was not clever code — it was indexing the columns our policies filtered on, and rewriting one policy to avoid a per-row function call. Read the query plan; it will tell you exactly where the time goes.' },
      { type: 'h2', text: 'Debugging policies' },
      { type: 'p', text: 'Test policies as the actual roles, not as the service key. Half of all "it works locally" bugs are someone bypassing RLS in development without realising it.' },
      { type: 'quote', text: 'Row-level security is not free. Budget for it like any other query cost.' },
      { type: 'p', text: 'Supabase scales beautifully once you respect how RLS actually executes. Go in with that knowledge and you will avoid the 2am performance incident.' },
    ],
  },
  {
    slug: 'brand-for-b2b',
    title: 'Brand strategy for B2B SaaS: why boring loses deals',
    excerpt:
      'Positioning, voice, and visual identity advice for founders who think branding is for consumer apps.',
    author: 'Sneha Trivedi',
    role: 'Brand Strategy',
    date: 'Jan 2025',
    read: '5 min',
    cat: 'Brand',
    bg: 'bg-rose',
    content: [
      { type: 'p', text: 'Founders often treat brand as a consumer luxury — something to worry about after product-market fit. In B2B, that is exactly backwards. When five vendors can solve the same problem, brand is frequently the tiebreaker.' },
      { type: 'h2', text: 'Positioning is a choice, not a tagline' },
      { type: 'p', text: 'Strong positioning means being legibly different, not vaguely better. Pick the segment you serve best and the alternative you are replacing, and say it plainly. Trying to be for everyone reads as being for no one.' },
      { type: 'h2', text: 'Voice builds trust' },
      { type: 'p', text: 'A clear, confident, human voice signals competence. Buyers infer how you build software from how you write your homepage. Corporate mush signals risk; clarity signals control.' },
      { type: 'h2', text: 'Design is a credibility shortcut' },
      { type: 'p', text: 'Right or wrong, buyers judge your engineering by your interface. A considered visual identity buys you the benefit of the doubt in the first ten seconds — and in enterprise sales, those ten seconds decide whether there is an eleventh.' },
      { type: 'quote', text: 'In a crowded category, the clearest brand wins the deal the best demo would have lost.' },
      { type: 'p', text: 'Brand is not paint on top of the product. It is part of the product experience — and in B2B, it compounds.' },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
export const blogSlugs = posts.map((p) => p.slug);
