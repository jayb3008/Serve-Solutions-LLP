
import {
    Code2,
    Smartphone,
    Cpu,
    Palette,
    Infinity,
    ShieldCheck,
    Wifi,
    TrendingUp,
    Database,
    Shield,
    ShoppingBag,
    Boxes
} from 'lucide-react';

export const servicesData: Record<string, any> = {
    'web-development': {
        title: "Web Development",
        icon: Code2,
        tagline: "Sites and platforms that quietly hold up — even on a Diwali Saturday.",
        overview: "We build web platforms that age well. Strong defaults, real performance budgets, and the boring patterns that make a codebase still readable two years after we hand it over.",
        keywords: "web development company India, full stack development Gujarat, React Next.js development agency India, Node.js backend development, custom web application development India, SaaS web development company, headless CMS development India, API development company Gujarat, TypeScript development India, cloud web architecture AWS Azure, enterprise web application India, web app development Anand Gujarat, scalable web platform development India, progressive web app PWA development, server side rendering Next.js India, web engineering agency Gujarat, custom software development India",
        capabilities: [
            { title: "React & Next.js", desc: "Building immersive, lightning-fast interfaces." },
            { title: "Node.js Backends", desc: "Scalable server environments for high throughput." },
            { title: "Cloud Architecture", desc: "AWS and Azure infrastructure design and management." },
            { title: "API Development", desc: "Robust REST and GraphQL integrations." }
        ],
        workflow: [
            { step: "01", title: "Technical Audit", desc: "Analyzing existing infrastructure and requirements." },
            { step: "02", title: "Architecture", desc: "Designing scalable system patterns." },
            { step: "03", title: "Development", desc: "Agile sprints with continuous integration." },
            { step: "04", title: "Optimization", desc: "Performance tuning for sub-second loads." }
        ],
        tech: ["React", "TypeScript", "Next.js", "Node.js", "Postgres", "AWS"],
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'mobile-apps': {
        title: "Mobile Apps",
        icon: Smartphone,
        tagline: "Apps that feel native on the phone people actually own.",
        overview: "We design and build mobile apps for the long tail of real Android devices and the people whose data plans are not unlimited. Native where it matters, React Native where it does not, App Store paperwork included.",
        keywords: "mobile app development company India, iOS app development Gujarat, Android app development India, React Native development agency, cross platform mobile app India, Flutter development India, mobile app development Anand Gujarat, custom mobile application India, enterprise mobile app development, offline first mobile apps India, mobile UX design India, app store optimization India, mobile app agency Gujarat, fintech mobile app India, healthcare mobile app development India, React Native agency India",
        capabilities: [
            { title: "React Native", desc: "Unified codebases for iOS and Android." },
            { title: "Offline-First", desc: "Local data persistence for uninterrupted use." },
            { title: "Device APIs", desc: "Deep integration with cameras, GPS, and sensors." },
            { title: "Push Infrastructure", desc: "Scalable real-time notification systems." }
        ],
        workflow: [
            { step: "01", title: "UX Discovery", desc: "Defining mobile-first user journeys." },
            { step: "02", title: "Prototype", desc: "Interactive high-fidelity mockups." },
            { step: "03", title: "Native Bridge", desc: "Building hardware-level integrations." },
            { step: "04", title: "App Store Ops", desc: "CI/CD for seamless deployments." }
        ],
        tech: ["React Native", "Swift", "Kotlin", "Firebase", "SQLite"],
        image: "https://images.pexels.com/photos/147413/twitter-facebook-together-sharing-147413.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'ai-ml': {
        title: "AI / ML",
        icon: Cpu,
        tagline: "Useful AI — not a demo, not a pitch deck.",
        overview: "We embed LLMs and machine learning into products people already use. Retrieval that actually retrieves, evaluations that catch regressions, and guardrails for the day the model decides to be strange.",
        keywords: "AI ML development company India, artificial intelligence solutions Gujarat, machine learning agency India, LLM integration services India, RAG implementation India, GPT API integration, custom AI model development India, natural language processing India, computer vision solutions India, predictive analytics company India, AI chatbot development India, generative AI development Gujarat, AI product development India, OpenAI LangChain development India, intelligent automation India, AI consulting company Gujarat",
        capabilities: [
            { title: "Predictive Analytics", desc: "Forecasting trends based on historical data." },
            { title: "Nlp Systems", desc: "Natural language processing for smarter interfaces." },
            { title: "Computer Vision", desc: "Automating visual data analysis and recognition." },
            { title: "LLM Integration", desc: "Customizing large language models for specific needs." }
        ],
        workflow: [
            { step: "01", title: "Data Strategy", desc: "Identifying and cleaning training datasets." },
            { step: "02", title: "Model Design", desc: "Architecting neural networks or ML pipelines." },
            { step: "03", title: "Training", desc: "Heavily iterative model training and validation." },
            { step: "04", title: "Deployment", desc: "Integrating models into production environments." }
        ],
        tech: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'ui-ux-consultancy': {
        title: "UI/UX Consultancy",
        icon: Palette,
        tagline: "Interfaces people reach for without thinking.",
        overview: "We design products one screen at a time, and design systems one decision at a time. Tokens, components, and a written rationale your engineers can still find next April.",
        keywords: "UI UX design company India, UX consultancy Gujarat, product design agency India, Figma design services India, design system development India, user experience design company India, interaction design agency Gujarat, UX research company India, SaaS product design India, mobile UX design India, accessibility design WCAG India, design sprint agency, UI design company Gujarat, creative digital agency India, prototype user testing India, product design studio India",
        capabilities: [
            { title: "Component Labs", desc: "Reusable, documented UI building blocks." },
            { title: "Brand Identity", desc: "Digital-first visual language development." },
            { title: "Micro-interactions", desc: "Polished animations that guide users." },
            { title: "User Testing", desc: "Data-backed design validation." }
        ],
        workflow: [
            { step: "01", title: "Audit", desc: "Identifying inconsistencies and gaps." },
            { step: "02", title: "Foundation", desc: "Defining typography, colors, and grids." },
            { step: "03", title: "Library", desc: "Building the core component repository." },
            { step: "04", title: "Documentation", desc: "Technical guidelines for implementation." }
        ],
        tech: ["Figma", "Storybook", "React", "Framer Motion", "Tailwind"],
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'devops': {
        title: "DevOps",
        icon: Infinity,
        tagline: "Pipelines, infrastructure and on-call runbooks — quietly automated.",
        overview: "We build the deploy pipeline you would have wanted on day one. Reproducible infra, sensible monitoring, and a 3am playbook that someone other than the original author can follow.",
        keywords: "DevOps consulting India, CI CD pipeline automation India, Kubernetes orchestration services India, Docker containerization India, Terraform infrastructure as code India, cloud DevOps AWS Azure India, DevOps agency Gujarat, site reliability engineering SRE India, platform engineering India, GitHub Actions CI CD India, cloud cost optimisation India, GitOps implementation India, DevSecOps consulting India, observability monitoring setup India, DevOps transformation consulting India, DevOps company Gujarat",
        capabilities: [
            { title: "CI/CD Pipelines", desc: "Automated testing and deployment workflows." },
            { title: "IaC Implementation", desc: "Managing infrastructure via code (Terraform)." },
            { title: "Containerization", desc: "Orchestration with Docker and Kubernetes." },
            { title: "Security Ops", desc: "Integrated security scanning and monitoring." }
        ],
        workflow: [
            { step: "01", title: "Env Audit", desc: "Assessing current infrastructure bottlenecks." },
            { step: "02", title: "Automation", desc: "Building the deployment orchestration layer." },
            { step: "03", title: "Optimization", desc: "Fine-tuning resource allocation and costs." },
            { step: "04", title: "Monitoring", desc: "Establishing real-time observability protocols." }
        ],
        tech: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS"],
        image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'qa': {
        title: "QA",
        icon: ShieldCheck,
        tagline: "Tests that catch the things a tired engineer would miss.",
        overview: "We treat QA as a design discipline. Automated suites for the journeys that matter, exploratory testing for everything else, and the kind of bug reports your engineers will actually want to read.",
        keywords: "QA testing company India, software quality assurance Gujarat, automated testing agency India, Playwright Cypress testing India, end to end test automation India, API testing services India, performance load testing India, accessibility testing WCAG India, mobile app QA testing India, regression testing services India, QA consulting company India, test automation framework India, Selenium testing company India, continuous testing CI CD India, software testing outsourcing India, QA agency Gujarat",
        capabilities: [
            { title: "E2E Automation", desc: "Full-flow testing with Playwright or Cypress." },
            { title: "API Testing", desc: "Validation of data integrity and endpoint security." },
            { title: "Performance", desc: "Load and stress testing for critical systems." },
            { title: "Accessibility", desc: "Ensuring compliance with global WCAG standards." }
        ],
        workflow: [
            { step: "01", title: "Test Plan", desc: "Defining coverage and technical requirements." },
            { step: "02", title: "Automation Setup", desc: "Scripting and CI integration." },
            { step: "03", title: "Execution", desc: "Parallel testing across devices and browsers." },
            { step: "04", title: "Release Sign-off", desc: "Final validation and defect reporting." }
        ],
        tech: ["Playwright", "Jest", "Selenium", "Postman", "Cypress"],
        image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'iot': {
        title: "IoT",
        icon: Wifi,
        tagline: "Devices, the cloud, and the wire between them.",
        overview: "We design embedded systems, real-time data pipelines, and the boring fleet-management tools you only notice when one of the devices stops behaving on a Sunday afternoon.",
        keywords: "IoT development company India, Internet of Things solutions Gujarat, embedded systems development India, IoT platform development India, MQTT protocol implementation India, AWS IoT Core integration India, smart device development India, industrial IoT solutions India, IoT sensor network development India, connected device development India, edge computing India, IoT data pipeline India, Raspberry Pi Arduino development India, fleet IoT management India, smart factory IoT India, IoT consulting company Gujarat",
        capabilities: [
            { title: "Embedded Systems", desc: "Low-level programming for specialized hardware." },
            { title: "MQTT Protocols", desc: "Lightweight messaging for real-time telemetry." },
            { title: "Fleet Management", desc: "Monitoring and updating devices at scale." },
            { title: "Data Ingestion", desc: "High-volume stream processing from sensor networks." }
        ],
        workflow: [
            { step: "01", title: "Prototyping", desc: "Hardware and firmware validation." },
            { step: "02", title: "Connectivity", desc: "Establishing secure device-to-cloud tunnels." },
            { step: "03", title: "Scalability", desc: "Optimizing for thousands of edge nodes." },
            { step: "04", title: "Security", desc: "Hardening devices against physical and network threats." }
        ],
        tech: ["C++", "MQTT", "AWS IoT Core", "Node-RED", "Raspberry Pi"],
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'marketing': {
        title: "Marketing",
        icon: TrendingUp,
        tagline: "Growth without the buzzwords (and without burning the budget).",
        overview: "Technical SEO, conversion work, and a careful experimentation habit. We treat marketing as engineering — measured, versioned, and honest about what actually moved the number.",
        keywords: "digital marketing agency India, growth marketing company Gujarat, technical SEO services India, conversion rate optimisation agency India, data driven marketing India, performance marketing India, analytics setup GA4 GTM India, A/B testing services India, content marketing agency Gujarat, email marketing automation India, PPC campaign management India, marketing analytics consulting India, growth hacking startup India, SEO agency Gujarat Anand, digital growth strategy India, ROI marketing India",
        capabilities: [
            { title: "Technical SEO", desc: "Performance-focused search engine optimization." },
            { title: "CRO Labs", desc: "A/B testing for funnel optimization." },
            { title: "Data Modeling", desc: "Custom attribution for complex journeys." },
            { title: "Growth Loops", desc: "Building sustainable viral and referral mechanics." }
        ],
        workflow: [
            { step: "01", title: "Market Audit", desc: "Data-driven competitive landscape analysis." },
            { step: "02", title: "Strategy", desc: "Defining high-leverage growth experiments." },
            { step: "03", title: "Execution", desc: "Multi-channel technical campaign deployment." },
            { step: "04", title: "Attribution", desc: "Measuring true business impact and ROI." }
        ],
        tech: ["GA4", "GTM", "SEMrush", "Hotjar", "Google Ads"],
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'blockchain': {
        title: "Blockchain & Web3",
        icon: Boxes,
        tagline: "Smart contracts and on-chain products, written like real software.",
        overview: "We design and ship Solidity and Rust smart contracts, dApps and tokenomics — with audits, tests and a rollback plan, because the chain has a long memory.",
        keywords: "blockchain development company India, smart contract development Gujarat, Web3 development agency India, DApp development services India, Ethereum Solana development India, DeFi platform development India, NFT marketplace development India, crypto exchange development India, tokenomics design India, blockchain consulting company India, Solidity Rust development India, decentralized application development India, blockchain audit services India, Web3 startup India Gujarat, crypto wallet development India, blockchain agency India",
        capabilities: [
            { title: "Smart Contracts", desc: "Secure, audited contracts for Ethereum and Solana." },
            { title: "DApp Development", desc: "User-friendly interfaces for decentralized protocols." },
            { title: "DeFi Solutions", desc: "Building next-gen financial tools and platforms." },
            { title: "Tokenomics", desc: "Designing sustainable economic models for projects." }
        ],
        workflow: [
            { step: "01", title: "Tokenomics", desc: "Designing the economic and incentive layer." },
            { step: "02", title: "Contract Dev", desc: "Writing and local testing of smart contracts." },
            { step: "03", title: "Security Audit", desc: "Rigorous testing for vulnerabilities and bugs." },
            { step: "04", title: "Mainnet Launch", desc: "Coordinated deployment and monitoring." }
        ],
        tech: ["Solidity", "Rust", "Ethers.js", "Hardhat", "Polygon"],
        image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'cybersecurity': {
        title: "Cybersecurity",
        icon: Shield,
        tagline: "Pen tests, audits, and the controls you should have written months ago.",
        overview: "We audit your stack, model the threats that actually apply to your business, and harden what we find — quietly, and with paperwork the auditor will accept.",
        keywords: "cybersecurity company India, penetration testing services Gujarat, security audit consulting India, VAPT services India, web application security testing India, network security consulting India, GDPR HIPAA compliance India, zero trust architecture India, ISO 27001 compliance India, cloud security consulting AWS Azure India, incident response services India, DevSecOps consulting India, cybersecurity agency Gujarat, data protection consulting India, vulnerability assessment India, cybersecurity startup India",
        capabilities: [
            { title: "Penetration Testing", desc: "Identifying vulnerabilities before attackers do." },
            { title: "Compliance Audits", desc: "Ensuring adherence to GDPR, HIPAA, and ISO." },
            { title: "Zero Trust", desc: "Implementing modern, identity-based security models." },
            { title: "Incident Response", desc: "Coordinated action plans for security breaches." }
        ],
        workflow: [
            { step: "01", title: "Vulnerability Scan", desc: "Automated and manual assessment of risks." },
            { step: "02", title: "Threat Modeling", desc: "Identifying likely attack vectors and targets." },
            { step: "03", title: "Hardening", desc: "Implementing security controls and patches." },
            { step: "04", title: "Monitoring", desc: "Setting up real-time threat detection systems." }
        ],
        tech: ["Kali Linux", "Burp Suite", "Wireshark", "Metasploit", "Cloudflare"],
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'data-engineering': {
        title: "Data Engineering",
        icon: Database,
        tagline: "Pipelines you can trust, dashboards your CEO will actually read.",
        overview: "We build the data plumbing nobody sees and the dashboards everyone uses. Warehouses, ETL, dbt, observability — the unsexy backbone that turns log files into decisions.",
        keywords: "data engineering company India, data pipeline development Gujarat, ETL ELT development India, data warehousing Snowflake BigQuery India, dbt data transformation India, analytics engineering India, big data solutions company India, Apache Airflow Kafka India, real time data streaming India, business intelligence development India, data lake architecture India, Looker Power BI integration India, data platform engineering India, data ops consulting India, ML data infrastructure India, data engineering agency Gujarat",
        capabilities: [
            { title: "ETL Pipelines", desc: "Automating data movement and transformation." },
            { title: "Data Warehousing", desc: "Centralizing data for fast, reliable querying." },
            { title: "Real-time Analytics", desc: "Streaming data processing for instant insights." },
            { title: "BI Integration", desc: "Connecting data to powerful visualization tools." }
        ],
        workflow: [
            { step: "01", title: "Data Audit", desc: "Mapping sources and defining data requirements." },
            { step: "02", title: "Pipeline Design", desc: "Architecting ETL/ELT flows and schemas." },
            { step: "03", title: "Implementation", desc: "Building and testing the data infrastructure." },
            { step: "04", title: "Visualization", desc: "Setting up dashboards and reporting tools." }
        ],
        tech: ["Python", "SQL", "Snowflake", "dbt", "Airflow", "Looker"],
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'ecommerce': {
        title: "E-commerce",
        icon: ShoppingBag,
        tagline: "Storefronts built for the cart-add, not the case study.",
        overview: "Headless and Shopify, payments and checkout, search and stock. We build commerce sites that survive the campaign weekend and a finance team that can still read the books.",
        keywords: "ecommerce development company India, headless commerce development India, Shopify Plus development India, custom ecommerce solutions Gujarat, WooCommerce development India, payment gateway integration India, Stripe Razorpay integration India, multi-vendor marketplace India, ecommerce performance optimisation India, ecommerce UX design India, omnichannel retail platform India, ecommerce SEO India, D2C brand website India, checkout optimisation agency India, ecommerce mobile app development India, ecommerce agency Gujarat",
        capabilities: [
            { title: "Headless Commerce", desc: "Decoupled frontends for ultimate flexibility." },
            { title: "Custom Checkouts", desc: "Optimized payment flows for higher conversion." },
            { title: "Omni-channel", desc: "Seamless shopping across web, mobile, and social." },
            { title: "Inventory Sync", desc: "Real-time management across multiple warehouses." }
        ],
        workflow: [
            { step: "01", title: "Store Audit", desc: "Analyzing conversion bottlenecks and UX." },
            { step: "02", title: "Architecture", desc: "Selecting the right platform and integrations." },
            { step: "03", title: "Development", desc: "Building custom features and themes." },
            { step: "04", title: "Launch Ops", desc: "Load testing and final payment verification." }
        ],
        tech: ["Shopify", "React", "Stripe", "Sanity", "Algolia"],
        image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
    }
};
