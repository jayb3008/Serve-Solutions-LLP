
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
        tagline: "Sculpting modern, dynamic web applications for a digital-first world.",
        overview: "We engineer resilient, scalable web architectures that serve as the backbone for modern businesses. Our approach prioritizes performance, security, and exceptional user experience.",
        keywords: "react development, next.js development, node.js backend, cloud architecture, aws, azure, rest api, graphql, full stack development india",
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
        tagline: "Designing high-performing mobile apps for a connected future.",
        overview: "Building native-parity mobile applications that leverage modern cross-platform technologies. We focus on performance, haptics, and platform-specific design patterns.",
        keywords: "react native apps, ios development, android development, cross platform mobile apps, mobile ui ux, app store optimization",
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
        tagline: "Leveraging AI & ML to Deliver innovative solutions.",
        overview: "Integrating intelligence into your digital ecosystem. We build custom machine learning models and AI integrations that automate complexity and provide predictive insights.",
        keywords: "artificial intelligence, machine learning india, predictive analytics, natural language processing, computer vision, llm integration, tensorflow, pytorch",
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
        tagline: "Enhancing experience with intuitive and user-centric design services.",
        overview: "Creating comprehensive design systems that ensure visual consistency across all touchpoints while maintaining high-efficiency development workflows.",
        keywords: "ui ux design, product design, figma prototyping, design systems, user experience consultancy, creative digital agency",
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
        tagline: "Streamlined Processes and Collaboration for code lifecycle.",
        overview: "Bridging the gap between development and operations. We build technical bridges that automate deployment pipelines and ensure 99.99% uptime for enterprise systems.",
        keywords: "devops consulting, ci cd automation, kubernetes orchestration, docker, terraform iac, cloud monitoring, aws devops",
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
        tagline: "Delivering excellence with robust automated and manual QA.",
        overview: "Ensuring zero-defect deployments through rigorous technical testing. We combine automated regression suites with manual exploratory testing to guarantee quality.",
        keywords: "software quality assurance, automated testing, playwright, cypress, selenium, regression testing, load testing",
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
        tagline: "Leveraging the device ecosystems to build a connected world.",
        overview: "Connecting the physical world to the digital cloud. We specialize in embedded systems and real-time data streaming for connected device networks.",
        keywords: "iot solutions, internet of things development, embedded systems, mqtt protocol, aws iot core, sensor networks",
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
        tagline: "Crafting result-driven strategies to propel your business forward.",
        overview: "Technical growth marketing that blends data science with creative strategy. We focus on conversion optimization and technical SEO for measurable ROI.",
        keywords: "growth marketing, technical seo, conversion rate optimization, data driven marketing, analytics,ROI focused marketing",
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
        tagline: "Building decentralized futures with secure blockchain solutions.",
        overview: "We architect and develop decentralized applications and smart contracts that prioritize security, transparency, and scalability in the Web3 ecosystem.",
        keywords: "blockchain development, smart contracts, ethereum, solana, dapps, web3 agency, crypto solutions, nft marketplace",
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
        tagline: "Fortifying your digital assets against evolving threats.",
        overview: "Providing comprehensive security audits and implementation strategies to protect your infrastructure, data, and users from malicious actors.",
        keywords: "cybersecurity consulting, penetration testing, security audit, data protection, network security, zero trust architecture",
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
        tagline: "Transforming raw data into actionable business intelligence.",
        overview: "Building robust data pipelines and warehousing solutions that empower your organization to make data-driven decisions with confidence.",
        keywords: "data engineering, big data solutions, data pipelines, etl processes, data warehousing, snowflake, dbt, analytics engineering",
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
        tagline: "Scalable digital storefronts for modern retail excellence.",
        overview: "Crafting high-conversion shopping experiences using cutting-edge headless commerce and traditional platforms, optimized for speed and user engagement.",
        keywords: "ecommerce development, headless commerce, shopify plus, custom shopping carts, payment integration, omni channel retail",
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
