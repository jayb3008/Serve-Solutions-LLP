
import {
    HeartPulse,
    Scale,
    Truck,
    Banknote,
    GraduationCap,
    MessageSquareShare,
    Play,
    Umbrella,
    Plane,
    Factory,
    ShoppingBag,
    Signal,
    HardHat,
    Sparkles,
    Trophy,
    Zap,
    Store
} from 'lucide-react';

export const industriesData: Record<string, any> = {
    'healthcare': {
        title: "Healthcare",
        icon: HeartPulse,
        tagline: "Precision engineering for life-critical systems.",
        overview: "We develop secure, compliant healthcare platforms that prioritize patient data integrity and real-time clinical workflows.",
        keywords: "healthcare software development India, telemedicine app development India, EHR EMR system development India, HIPAA compliant software India, digital health platform India, health tech company Gujarat, patient management system India, hospital management software India, wearable health app India, telehealth platform development India, medical software company India, healthcare mobile app India, health analytics platform India, clinical workflow software India, healthcare IT company India",
        capabilities: [
            { title: "Telemedicine", desc: "Encrypted video consultation and remote monitoring." },
            { title: "EHR Systems", desc: "Interoperable electronic health record management." },
            { title: "Compliance", desc: "HIPAA and GDPR-aligned data architecture." },
            { title: "Health IoT", desc: "Wearable data integration and analysis." }
        ],
        image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'legal': {
        title: "Legal",
        icon: Scale,
        tagline: "Secure digital foundations for truth and justice.",
        overview: "Modernizing legal frameworks with automated document processing and highly secure case management environments.",
        keywords: "legal tech company India, law firm software development India, case management system India, contract management software India, e-discovery platform India, legal document automation India, law firm digital transformation India, legal AI tools India, compliance management software India, legal research platform India, court management software India, legal SaaS development India, attorney software India, RegTech development India, legal workflow automation India",
        capabilities: [
            { title: "Case Management", desc: "End-to-end legal workflow optimization." },
            { title: "E-Discovery", desc: "AI-powered legal document research and analysis." },
            { title: "Secure Vaults", desc: "Encrypted repositories for sensitive data." },
            { title: "Drafting Tools", desc: "Automation for contracts and legal filing." }
        ],
        image: "https://images.pexels.com/photos/6069550/pexels-photo-6069550.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'logistics': {
        title: "Logistics",
        icon: Truck,
        tagline: "Intelligent systems for moving the world.",
        overview: "Optimizing global supply chains through real-time visibility, automated routing, and data-driven fleet management.",
        keywords: "logistics software development India, fleet management software India, route optimisation algorithm India, warehouse management system India, supply chain visibility platform India, last mile delivery software India, freight management system India, 3PL software development India, real time fleet tracking India, dispatch management software India, logistics tech company Gujarat, transport management system India, cold chain monitoring software India, reverse logistics platform India, delivery tracking app India",
        capabilities: [
            { title: "Fleet Tracking", desc: "Real-time GPS and sensor-based logistics." },
            { title: "Route Optimization", desc: "Algorithm-based efficiency enhancement." },
            { title: "Warehouse Mgmt", desc: "Automated inventory and yard tracking." },
            { title: "Last-Mile Delivery", desc: "Customer-facing tracking and orchestration." }
        ],
        image: "https://images.pexels.com/photos/6169055/pexels-photo-6169055.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'finance': {
        title: "Finance",
        icon: Banknote,
        tagline: "Building the next generation of digital wealth.",
        overview: "Engineering robust fintech platforms that bridge traditional banking with modern, decentralized digital finance.",
        keywords: "fintech development company India, digital banking platform India, neobank development India, payment gateway integration India, wealthtech platform India, lending software development India, KYC AML compliance software India, fraud detection AI India, PCI DSS compliant fintech India, mobile banking app India, NBFC software India, UPI payment integration India, investment platform development India, digital wallet development India, fintech startup India Gujarat, card issuing platform India",
        capabilities: [
            { title: "Digital Banking", desc: "Core banking engines for the mobile era." },
            { title: "WealthTech", desc: "Automated investment and portfolio tracking." },
            { title: "Payment Rails", desc: "Low-latency transaction processing gateways." },
            { title: "Risk Engines", desc: "AI-driven fraud detection and credit scoring." }
        ],
        image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'education': {
        title: "Education",
        icon: GraduationCap,
        tagline: "Digital ecosystems that empower learning.",
        overview: "Transforming the educational journey through immersive LMS platforms and data-driven student engagement tools.",
        keywords: "edtech development company India, learning management system India, LMS development Gujarat, virtual classroom software India, e-learning platform development India, edtech startup India, student information system India, online exam platform India, adaptive learning software India, AI tutoring platform India, SCORM compliant LMS India, school management software India, higher education software India, corporate LMS development India, ed-tech mobile app India",
        capabilities: [
            { title: "Immersive LMS", desc: "Dynamic content delivery and assessment." },
            { title: "Virtual Class", desc: "Interactive, real-time remote learning tools." },
            { title: "Student CRM", desc: "Academic lifecycle and progress tracking." },
            { title: "Exam Engines", desc: "Secure, proctored digital assessment hubs." }
        ],
        image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'social-media': {
        title: "Social Media",
        icon: MessageSquareShare,
        tagline: "Connecting communities through advanced tech.",
        overview: "Building high-throughput social ecosystems designed for engagement, content virality, and massive scale.",
        keywords: "social media app development India, community platform development India, social network development India, content sharing app India, real time chat application India, social engagement analytics India, creator platform development India, forum community software India, user generated content platform India, influencer platform development India, social commerce app India, video sharing platform India, social media startup India, dating app development India, group chat application development India",
        capabilities: [
            { title: "Engagement Algo", desc: "Personalized content discovery systems." },
            { title: "Real-time Chat", desc: "Low-latency messaging architecture." },
            { title: "Media Processing", desc: "High-speed video and image transcoding." },
            { title: "Community Moderation", desc: "AI-based safety and reporting systems." }
        ],
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'media-ott': {
        title: "Media & OTT",
        icon: Play,
        tagline: "The future of digital entertainment.",
        overview: "Developing enterprise-grade streaming platforms and content distribution networks for global media consumption.",
        keywords: "OTT platform development India, video streaming platform India, live streaming app development India, SVOD AVOD platform India, content delivery network CDN India, DRM content protection India, video on demand platform India, media tech company Gujarat, OTT app development iOS Android India, HLS DASH streaming India, subscription video platform India, sports streaming app India, media entertainment tech India, content management system OTT India, low latency live streaming India",
        capabilities: [
            { title: "Video On Demand", desc: "Efficient content delivery and playback." },
            { title: "Live Streaming", desc: "Ultra-low latency live broadcasting." },
            { title: "CDN Integration", desc: "Global edge distribution for 4K assets." },
            { title: "DRM Systems", desc: "Digital rights management and piracy protection." }
        ],
        image: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'insurance': {
        title: "Insurance",
        icon: Umbrella,
        tagline: "Reimagining risk for the digital age.",
        overview: "Insurtech solutions that automate underwriting, streamline claims, and enhance policyholder experiences.",
        keywords: "insurtech development company India, insurance software development India, automated underwriting platform India, claims management software India, insurance fraud detection AI India, policyholder self-service portal India, insurance tech startup India, motor insurance software India, health insurance platform India, P2P insurance platform India, IRDAI compliant software India, general insurance software India, insurance CRM India, actuarial software India, insurance analytics platform India",
        capabilities: [
            { title: "Underwriting AI", desc: "Data-driven risk profile assessment." },
            { title: "Claims Engine", desc: "Rapid, automated claim processing workflows." },
            { title: "Customer Portal", desc: "Self-service policy adjustment and tracking." },
            { title: "Fraud Analytics", desc: "Detecting anomalies in claim submissions." }
        ],
        image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'travel': {
        title: "Travel",
        icon: Plane,
        tagline: "Orchestrating journeys across continents.",
        overview: "Technical systems for the travel industry, from massive booking engines to personalized concierge applications.",
        keywords: "travel tech development India, booking engine development India, travel itinerary app India, hotel booking software India, flight booking platform India, OTA platform development India, dynamic pricing travel India, travel loyalty program software India, tour operator software India, travel startup India, GDS API integration India, vacation rental platform India, travel mobile app development India, travel tech company Gujarat, tourism management software India",
        capabilities: [
            { title: "Booking Engines", desc: "GDS and hotel API integrations." },
            { title: "Itinerary MGMT", desc: "Real-time updates for global travelers." },
            { title: "Dynamic Pricing", desc: "Market-responsive inventory valuation." },
            { title: "Loyalty Engines", desc: "Program management and reward tracking." }
        ],
        image: "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'manufacturing': {
        title: "Manufacturing",
        icon: Factory,
        tagline: "Smart factories for industrial excellence.",
        overview: "Industry 4.0 solutions that integrate IoT data with production workflows for maximum operational efficiency.",
        keywords: "manufacturing software development India, industrial IoT solutions India, smart factory platform India, predictive maintenance software India, Industry 4.0 solutions India, ERP manufacturing software India, quality control software India, MES manufacturing execution system India, production planning software India, SCADA integration India, digital twin manufacturing India, factory automation software India, supply chain optimisation India, manufacturing analytics platform India, lean manufacturing software India",
        capabilities: [
            { title: "Industrial IoT", desc: "Real-time machine health monitoring." },
            { title: "Supply Chain", desc: "Raw material and inventory optimization." },
            { title: "Quality Control", desc: "Automated visual inspection systems." },
            { title: "Predictive Maint", desc: "Forecasting downtime before it happens." }
        ],
        image: "https://images.pexels.com/photos/190441/pexels-photo-190441.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'retail': {
        title: "Retail",
        icon: ShoppingBag,
        tagline: "Seamless commerce in a hyper-connected world.",
        overview: "Omni-channel retail platforms that bridge the gap between digital storefronts and physical experiences.",
        keywords: "retail tech company India, omnichannel retail platform India, retail software development India, POS system integration India, retail ecommerce India, D2C brand platform India, retail analytics software India, inventory management software India, customer loyalty program India, retail CRM development India, unified commerce platform India, retail mobile app India, click and collect platform India, fashion tech development India, FMCG distribution software India",
        capabilities: [
            { title: "E-Commerce", desc: "High-conversion digital storefronts." },
            { title: "POS Integration", desc: "Unified inventory across online & offline." },
            { title: "CRM & Loyalty", desc: "Data-driven customer retention tools." },
            { title: "Personalization", desc: "AI-driven product recommendation engines." }
        ],
        image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'it-telecom': {
        title: "IT & Telecom",
        icon: Signal,
        tagline: "Architecting the infrastructure of connectivity.",
        overview: "Backend systems for telecom giants and IT service providers that manage million-node networks.",
        keywords: "telecom software development India, BSS OSS development India, network management software India, 5G solutions India, IT infrastructure software India, telecom billing software India, network operations center software India, VoIP platform development India, IoT connectivity platform India, telecom startup India, carrier grade software development India, software defined networking India, OSS transformation India, digital BSS transformation India, telecom API management India",
        capabilities: [
            { title: "NOC Dashboards", desc: "Real-time network health observability." },
            { title: "BSS/OSS", desc: "Billing and operational support systems." },
            { title: "Virtualization", desc: "Software-defined network management." },
            { title: "5G Integration", desc: "Building apps for the ultra-fast edge." }
        ],
        image: "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'construction': {
        title: "Construction",
        icon: HardHat,
        tagline: "Technical precision for the built environment.",
        overview: "Project management and asset tracking platforms designed for the unique challenges of the job site.",
        keywords: "construction tech development India, construction management software India, BIM software development India, project management construction India, heavy equipment tracking India, construction ERP India, site safety management software India, construction mobile app India, building project control software India, construction analytics platform India, proptech construction India, civil engineering software India, RERA compliance software India, construction workforce management India, smart building software India",
        capabilities: [
            { title: "BIM Integration", desc: "Interacting with 3D model data." },
            { title: "Project Controls", desc: "Cost, schedule, and safety monitoring." },
            { title: "Asset Asset Mgmt", desc: "GPS tracking for heavy equipment." },
            { title: "Safety Tech", desc: "Real-time site incident reporting." }
        ],
        image: "https://images.pexels.com/photos/159306/construction-site-build-construction-structure-159306.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'beauty-lifestyle': {
        title: "Beauty & Lifestyle",
        icon: Sparkles,
        tagline: "Aesthetic digital experiences for luxury brands.",
        overview: "High-end mobile and web apps that capture the essence of lifestyle brands while driving conversion.",
        keywords: "beauty app development India, lifestyle app development India, virtual try-on AR India, luxury brand digital platform India, salon booking software India, personal stylist AI India, beauty ecommerce platform India, wellness app development India, beauty marketplace India, skincare recommendation AI India, spa management software India, beauty tech startup India, fashion lifestyle app India, influencer beauty platform India, D2C beauty brand website India",
        capabilities: [
            { title: "Virtual Try-on", desc: "AR-based product visualization." },
            { title: "Booking Systems", desc: "Concierge and appointment management." },
            { title: "Community Hubs", desc: "Social proof and influencer engagement." },
            { title: "Personal Stylist", desc: "Data-driven beauty recommendations." }
        ],
        image: "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'sports': {
        title: "Sports",
        icon: Trophy,
        tagline: "Engineering for peak performance and engagement.",
        overview: "From athlete tracking to massive fan engagement apps, we build for the high-intensity world of sports.",
        keywords: "sports tech development India, sports app development India, fan engagement platform India, sports analytics software India, athlete performance tracking India, fantasy sports platform India, sports ticketing platform India, sports management software India, live sports streaming India, fitness tracking app India, sports SaaS India, cricket app development India, IPL fantasy platform India, sports media platform India, sports tech company Gujarat",
        capabilities: [
            { title: "Stat Engines", desc: "Real-time performance data processing." },
            { title: "Fan Engagement", desc: "Gamified stadium and home experiences." },
            { title: "Ticketing", desc: "Scalable high-demand event transaction hubs." },
            { title: "Athlete Mgmt", desc: "Biometric and training history analysis." }
        ],
        image: "https://images.pexels.com/photos/163444/race-bike-cycling-marathon-163444.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'on-demand': {
        title: "On Demand",
        icon: Zap,
        tagline: "Speed of service through technical orchestration.",
        overview: "Powering the service economy with ultra-efficient dispatch and matching algorithms.",
        keywords: "on demand app development India, Uber like app development India, food delivery app development India, hyperlocal delivery platform India, on demand service app India, home services app development India, dispatch management software India, real time tracking app India, gig economy platform India, on demand startup India, service marketplace app India, courier app development India, grocery delivery app India, last mile delivery app India, on demand workforce management India",
        capabilities: [
            { title: "Dispatch Logic", desc: "Real-time demand/supply matching." },
            { title: "Hyper-local Tracking", desc: "Geo-fenced orchestration systems." },
            { title: "Wallet Systems", desc: "Integrated driver/vendor payment payout." },
            { title: "Queue Management", desc: "Predictive wait-time algorithms." }
        ],
        image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    'marketplace': {
        title: "Marketplace",
        icon: Store,
        tagline: "Connecting buyers and sellers at scale.",
        overview: "Multi-vendor platforms designed for high-volume transactions and complex governance.",
        keywords: "marketplace platform development India, multi-vendor marketplace India, B2B marketplace software India, online marketplace development India, vendor management system India, marketplace startup India, two-sided marketplace platform India, horizontal marketplace India, vertical marketplace India, B2C marketplace India, managed marketplace India, marketplace payment escrow India, marketplace SaaS India, marketplace analytics platform India, marketplace mobile app India",
        capabilities: [
            { title: "Vendor Portals", desc: "Self-service inventory and order mgmt." },
            { title: "Catalog Engines", desc: "Managing millions of unique SKUs." },
            { title: "Trust & Safety", desc: "Escrow payments and verification systems." },
            { title: "Revenue Sharing", desc: "Automated commission and tax logic." }
        ],
        image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
    }
};
