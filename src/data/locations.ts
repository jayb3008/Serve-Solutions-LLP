export interface LocationData {
  slug: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  city: string;
  overview: string;
  faqs: { question: string; answer: string }[];
}

export const locationsData: Record<string, LocationData> = {
  "software-development-company-anand": {
    slug: "software-development-company-anand",
    title: "Software Development Company in Anand | Satvix Tech Solutions",
    h1: "Software Development Company in Anand",
    description: "Looking for a software development company in Anand, Gujarat? Satvix Tech Solutions designs and builds high-quality web, mobile, and AI applications for startups and enterprises.",
    keywords: "software development company in Anand, software developers Anand, IT services Anand Gujarat, web development Anand, custom software Anand",
    city: "Anand, Gujarat",
    overview: "Satvix Tech Solutions is an independent digital product studio based in Anand, Gujarat. Since 2020, we have designed, built, and shipped over 120 web platforms, mobile apps, and AI/ML integrations for clients globally. We combine local accessibility with global development standards to deliver clean, scalable, and premium software.",
    faqs: [
      {
        question: "Why choose a software development company in Anand like Satvix?",
        answer: "Satvix Tech Solutions provides a unique blend of local presence in Anand with international standards. We offer highly collaborative development processes, daily updates, and transparent pricing without the bloated overhead of big city agencies."
      },
      {
        question: "What technologies does Satvix specialize in?",
        answer: "We specialize in modern web stacks (React, Next.js, Node.js), mobile development (React Native, iOS, Android), and advanced AI/ML integrations (large language models, RAG systems, agents)."
      },
      {
        question: "Can I meet the developers in person at Anand?",
        answer: "Yes, our primary engineering studio is located in Anand, Gujarat. Clients and partners are welcome to schedule a discovery meeting at our office to discuss project roadmaps."
      }
    ]
  },
  "it-company-anand": {
    slug: "it-company-anand",
    title: "IT Company in Anand | Custom Software & AI Solutions | Satvix Tech",
    h1: "IT Company in Anand",
    description: "Satvix Tech Solutions is a leading IT company in Anand, Gujarat, providing custom software development, mobile apps, DevOps, and AI/ML integrations.",
    keywords: "it company in anand, IT company Anand Gujarat, software agency Anand, tech company Anand, IT outsourcing Anand",
    city: "Anand, Gujarat",
    overview: "As a leading tech and IT company in Anand, Gujarat, we support startups, founders, and enterprises with end-to-end IT outsourcing, cloud infrastructure engineering, custom product design, and software consulting. We eliminate agency handoff delays by putting designers and engineers at the same table.",
    faqs: [
      {
        question: "What IT services does Satvix provide in Anand?",
        answer: "We provide web engineering, mobile app development, custom software consulting, UI/UX product design, DevOps automation, cloud architecture, and AI-driven workflow automation."
      },
      {
        question: "Do you serve clients outside of Anand, Gujarat?",
        answer: "Absolutely. While we are based in Anand, about half of our client base consists of fast-growing startups and enterprises across the United States, United Kingdom, and Europe."
      }
    ]
  },
  "mobile-app-development-gujarat": {
    slug: "mobile-app-development-gujarat",
    title: "Mobile App Development Company in Gujarat | iOS & Android | Satvix Tech",
    h1: "Mobile App Development Company in Gujarat",
    description: "Premium mobile app development company in Gujarat. We design and build native iOS, Android, and cross-platform React Native / Flutter apps.",
    keywords: "mobile app development company in Gujarat, app developers Gujarat, React Native app development India, Android app developer Gujarat, iOS developer Anand Ahmedabad",
    city: "Gujarat",
    overview: "We are a senior mobile app development team serving clients across Gujarat, including Anand, Ahmedabad, and Vadodara. We design and build native iOS and Android apps, cross-platform React Native codebases, and robust offline-first synchronization systems designed to run smoothly on real-world devices.",
    faqs: [
      {
        question: "Which is better for my project: native or cross-platform development?",
        answer: "We build native (Swift, Kotlin) for high-performance device integrations and React Native or Flutter for unified cross-platform codebases. We help you choose the best fit during our two-week discovery sprint."
      },
      {
        question: "Does Satvix handle App Store and Google Play Store submissions?",
        answer: "Yes. We manage the entire store deployment process, including certificate generation, review compliance audits, and post-launch optimization."
      }
    ]
  },
  "web-development-company-ahmedabad": {
    slug: "web-development-company-ahmedabad",
    title: "Web Development Company in Ahmedabad | Next.js & React | Satvix Tech",
    h1: "Web Development Company in Ahmedabad",
    description: "Looking for a top web development company in Ahmedabad? We build fast, scalable, and custom web platforms using React, Next.js, and Node.js.",
    keywords: "web development company in ahmedabad, web developers Ahmedabad, Next.js developers Gujarat, website development Ahmedabad, ecommerce web development Ahmedabad",
    city: "Ahmedabad, Gujarat",
    overview: "Based just outside Ahmedabad, Satvix Tech Solutions serves clients in Ahmedabad and Gandhinagar with high-performance web platforms. We build using React and Next.js, custom headless CMS architectures, headless commerce, and secure APIs designed to load in under a second and rank high on search engines.",
    faqs: [
      {
        question: "Why choose Satvix over other web development companies in Ahmedabad?",
        answer: "Many Ahmedabad agencies rely on heavy, slow legacy templates. Satvix builds lightweight, custom platforms optimized for performance (Core Web Vitals), clean code, and search engine optimization."
      },
      {
        question: "Do you specialize in Next.js and React?",
        answer: "Yes, React, Next.js, and TypeScript are our default tools for modern web applications. We also integrate headless CMS platforms like Sanity and Strapi for flexible content management."
      }
    ]
  },
  "ai-development-services-india": {
    slug: "ai-development-services-india",
    title: "AI Development Services India | LLMs, RAG & Agents | Satvix Tech",
    h1: "AI Development Services in India",
    description: "Empower your business with premium AI development services in India. We design and build custom LLM applications, RAG pipelines, and AI agents.",
    keywords: "ai development services india, AI agent development company India, RAG integration services India, machine learning company India, OpenAI developers India",
    city: "India",
    overview: "Satvix Tech Solutions offers premium custom AI development services in India. We help founders and enterprises integrate Large Language Models (LLMs), build custom Retrieval-Augmented Generation (RAG) pipelines, automate workflows with AI agents, and set up evaluation frameworks to ensure reliability, cost control, and security.",
    faqs: [
      {
        question: "What AI/ML services does Satvix provide?",
        answer: "We offer custom LLM fine-tuning, prompt engineering, RAG pipeline setup with vector search, AI agent development, and analytics/data engineering pipelines to support AI model training."
      },
      {
        question: "How do you control API usage and token costs?",
        answer: "We put hard cost caps, daily user budgets, caching layers, and fallback models in place so your API expenses remain predictable and secure from runway loops."
      }
    ]
  }
};
