import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Squares from "../components/ui/squares";
import Magnetic from "../components/Magnetic";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const gallery = {
  main: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  s1: "https://images.pexels.com/photos/147413/twitter-facebook-together-sharing-147413.jpeg?auto=compress&cs=tinysrgb&w=700",
  s2: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=700",
};

const capabilities = [
  {
    num: "01",
    pre: "iOS",
    em: "development",
    tags: ["Swift", "SwiftUI", "Xcode"],
    desc: "Native iOS apps that feel like they were made by Apple. Fluid animations, proper haptics, and platform conventions that users expect.",
    list: [
      "Swift & SwiftUI",
      "UIKit for complex layouts",
      "Core Data & CloudKit",
      "HealthKit & CoreLocation",
      "ARKit & Vision",
      "TestFlight & App Store submission",
    ],
  },
  {
    num: "02",
    pre: "Android",
    em: "development",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    desc: "Modern Android apps built with Kotlin and Jetpack Compose — Material 3 design, adaptive layouts, and the full Google ecosystem.",
    list: [
      "Kotlin & Jetpack Compose",
      "Room & DataStore",
      "Google Maps & Location",
      "Firebase & Play Services",
      "Adaptive layouts & foldables",
      "Play Store submission & ASO",
    ],
  },
  {
    num: "03",
    pre: "React Native",
    em: "cross-platform",
    tags: ["Expo", "New Architecture", "OTA updates"],
    desc: "One codebase for iOS and Android without sacrificing native feel. Over-the-air updates mean you ship fixes without App Store review.",
    list: [
      "Expo & bare workflow",
      "React Navigation",
      "Native modules & bridges",
      "OTA updates via EAS",
      "Offline-first with MMKV",
      "Reanimated & Gesture Handler",
    ],
  },
  {
    num: "04",
    pre: "App Store &",
    em: "growth",
    tags: ["ASO", "Subscriptions", "Push"],
    desc: "Getting your app built is half the battle. We handle submission, App Store optimisation, and the revenue mechanics that make apps sustainable.",
    list: [
      "App Store & Play Store submission",
      "App Store optimisation (ASO)",
      "In-app purchases & subscriptions",
      "Push notification infrastructure",
      "A/B testing & store listing",
      "RevenueCat integration",
    ],
  },
];

const useCases = [
  {
    title: "Consumer lifestyle apps",
    desc: "Habit trackers, fitness apps, and daily-use tools that earn a permanent spot on the home screen.",
    img: "https://images.pexels.com/photos/3987207/pexels-photo-3987207.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Fintech & payments",
    desc: "Secure, regulated mobile banking, wallets, and payment apps with biometric auth and fraud protection.",
    img: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Health & fitness",
    desc: "HealthKit and Fit integration, wearable support, and clinical-grade data handling.",
    img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Social & community",
    desc: "Real-time feeds, messaging, and social graphs — designed for engagement and retention.",
    img: "https://images.pexels.com/photos/147413/twitter-facebook-together-sharing-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Offline-first field tools",
    desc: "Apps for field workers that function without connectivity and sync reliably when back online.",
    img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "In-app subscriptions",
    desc: "Revenue mechanics — free trials, paywalls, and subscription management — done right.",
    img: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const techStack = [
  { name: "React Native", cat: "Cross-platform" },
  { name: "Expo", cat: "Toolchain" },
  { name: "Swift", cat: "iOS" },
  { name: "Kotlin", cat: "Android" },
  { name: "Firebase", cat: "Backend" },
  { name: "Supabase", cat: "Backend" },
  { name: "RevenueCat", cat: "Subscriptions" },
  { name: "Fastlane", cat: "CI/CD" },
  { name: "Reanimated", cat: "Animation" },
  { name: "MMKV", cat: "Storage" },
];

const process = [
  {
    n: "01",
    title: "UX discovery",
    body: "We map mobile-first user journeys and platform conventions before touching code. iOS and Android users have different expectations — we design for both.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "Interactive, testable mockup for stakeholder sign-off. We validate flows with real users before committing to a native build.",
  },
  {
    n: "03",
    title: "Native build",
    body: "Hardware integrations, permission flows, offline sync, and native animations — all the things that make a great mobile experience.",
  },
  {
    n: "04",
    title: "App Store ops",
    body: "CI/CD via Fastlane and EAS, beta distribution via TestFlight and Play Store, and full submission support for the first release.",
  },
];

const faqs = [
  {
    question: "How much does it cost to build a mobile application?",
    answer: "A custom mobile application build generally starts at ₹3,50,000 ($4,000 USD) for a single-platform app, or ₹4,50,000 ($5,500 USD) for cross-platform React Native. Pricing is determined by hardware integrations, backend infrastructure, offline syncing needs, and third-party APIs."
  },
  {
    question: "How long does mobile app development take?",
    answer: "An MVP takes between 8 and 12 weeks. Large-scale enterprise mobile applications with complex multi-role workflows, offline storage databases, and real-time synchronization pipelines can take 16 to 24 weeks."
  },
  {
    question: "Should I choose native (Swift/Kotlin) or cross-platform (React Native/Flutter)?",
    answer: "We recommend cross-platform (React Native) for 90% of business applications, because sharing a single codebase between iOS and Android halves development and maintenance overhead. However, we recommend native Swift/Kotlin if your app requires heavy hardware processing, low-level Bluetooth/IoT syncing, or GPU-heavy animations."
  },
  {
    question: "Do you handle App Store and Google Play Store submissions?",
    answer: "Yes, store submission is included in our mobile services. We manage the provisioning profiles, build certificates, coordinate internal TestFlight or Google Play Console beta tracks, and complete the store questionnaire audits to get your app approved."
  },
  {
    question: "How do you handle offline connectivity in mobile apps?",
    answer: "We implement local data persistence databases (SQLite, WatermelonDB, or MMKV). The app reads and writes instantly to the local cache, then syncs dynamically with the backend API servers once connectivity is restored, ensuring a smooth experience even on poor mobile connections."
  },
  {
    question: "What is your approach to mobile app UI/UX?",
    answer: "We design with target mobile systems in mind (Apple Human Interface Guidelines and Google Material Design). We prioritize thumb-reachable controls, interactive micro-animations, fast visual feedback, and clear font hierarchies designed specifically for small touch screens."
  },
  {
    question: "How do you manage mobile app testing?",
    answer: "We test against multiple target physical devices and screen sizes in our Anand studio. We write automated unit tests, integration tests for API channels, and run regression suites before releasing new build bundles."
  },
  {
    question: "Will you maintain the app after release?",
    answer: "Yes. iOS and Android update their core operating systems yearly, which introduces breaking changes. Under our mobile support retainers, we proactively test and update libraries to keep your app compatible with the latest OS versions."
  }
];

export default function MobileApps() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SEO
        title="Mobile app development — Satvix Tech Solutions, Anand"
        description="Satvix Tech Solutions builds iOS, Android, React Native and Flutter apps — designed for the long tail of real devices, shipped to the App Store and Play Store with paperwork done."
        keywords="Satvix Tech Solutions mobile, mobile app development company India, iOS app development Gujarat, Android app development India, React Native development company India, cross-platform app development India, Flutter development agency India, Swift iOS development India, Kotlin Android development India, mobile app agency Gujarat, mobile UX design India"
        url="https://satvixtech.com/mobile-app-development"
        faq={faqs}
        breadcrumb={[
          { name: "Home", item: "https://satvixtech.com" },
          { name: "Services", item: "https://satvixtech.com/services" },
          {
            name: "Mobile Apps",
            item: "https://satvixtech.com/mobile-app-development",
          },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
          <Squares
            squareSize={65}
            direction="diagonal"
            speed={0.15}
            borderColor="rgba(18, 21, 24, 0.08)"
            hoverFillColor="rgba(18, 21, 24, 0.03)"
          />
        </div>
        <div className="wrap relative z-10">
          {/* <div className="page-hero__eyebrow">
            <span className="ping" />
            Mobile Apps
          </div> */}
          <h1>
            {(
              ["Apps people keep", "on the home", "<em>screen.</em>"] as const
            ).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.07 }}
                  style={{ display: "inline-block" }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Services &nbsp;/&nbsp; Mobile
              Apps
            </div>
            <p>
              We design and build mobile apps for the long tail of devices
              people actually own. Native where it matters, React Native where
              it does not, App Store and Play Store paperwork done by us — and
              the first awkward week after launch handled by humans, not bots.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((i) => (
            <span key={i} className="marquee__item">
              iOS <span className="star">✦</span> Android <em>·</em> React
              Native <span className="star">✦</span> Expo <em>·</em> App Store{" "}
              <span className="star">✦</span> In-app purchases <em>·</em>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section
        style={{ padding: "80px 0", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <div className="grid md:grid-cols-3 gap-3" style={{ height: 480 }}>
            <div className="md:col-span-2 rounded-[18px] overflow-hidden h-[260px] md:h-auto">
              <img
                src={gallery.main}
                alt="Mobile app interface on smartphone screen"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s1}
                  alt="Multiple mobile devices showing app"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[18px] overflow-hidden">
                <img
                  src={gallery.s2}
                  alt="Person using mobile application"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="s"
        style={{ borderTop: "1px solid var(--line)", paddingTop: 0 }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Capabilities</div>
              <h2 className="s-title reveal" data-d="1">
                Four practices, <em>one mobile team.</em>
              </h2>
            </div>
          </div>
          {capabilities.map((c) => (
            <div key={c.num} className="pract reveal">
              <div className="pract__num">{c.num}</div>
              <div className="pract__head">
                <h2>
                  {c.pre} <em>{c.em}</em>
                </h2>
                <div className="meta">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="pract__body">
                <p>{c.desc}</p>
                <ul className="pract__list">
                  {c.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section
        className="s"
        style={{
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "120px 0",
        }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div
                className="eyebrow reveal"
                style={{ color: "rgba(255, 255, 255,.6)" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: "rgba(255, 255, 255,.4)",
                    flexShrink: 0,
                  }}
                />
                Use cases
              </div>
              <h2
                className="s-title reveal"
                data-d="1"
                style={{ color: "var(--bg)" }}
              >
                Apps that <em>earn their spot.</em>
              </h2>
            </div>
          </div>
          <div className="arch-grid" style={{ marginTop: 60 }}>
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="arch reveal"
                data-d={String(i % 3)}
                style={{ cursor: "default" }}
              >
                <div
                  className="arch__bg"
                  style={{
                    background: `linear-gradient(rgba(10,8,6,0.54), rgba(10,8,6,0.54)), url(${uc.img}) center/cover no-repeat`,
                  }}
                />
                <div className="arch__inner">
                  <div className="arch__top">
                    <div className="arch__meta">
                      <span>Use case</span>
                    </div>
                  </div>
                  <div>
                    <p className="arch__title">{uc.title}</p>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.5,
                        opacity: 0.75,
                        marginTop: 8,
                        maxWidth: "34ch",
                      }}
                    >
                      {uc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="s" style={{ padding: "120px 0" }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Technology</div>
              <h2 className="s-title reveal" data-d="1">
                Our mobile <em>stack.</em>
              </h2>
            </div>
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "32ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              We pick native or cross-platform based on your use case — not our
              convenience.
            </p>
          </div>
          <div className="stack-grid">
            {techStack.map((t, i) => (
              <div key={t.name} className="stk reveal" data-d={String(i % 5)}>
                <div className="stk__dot" />
                <h5>{t.name}</h5>
                <span>{t.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="s"
        style={{ borderTop: "1px solid var(--line)", paddingBottom: "120px" }}
      >
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">How we work</div>
              <h2 className="s-title reveal" data-d="1">
                From idea to <em>App Store.</em>
              </h2>
            </div>
          </div>
          <div className="tl-rows">
            {process.map((p, i) => (
              <div key={p.n} className="tl-row reveal" data-d={String(i)}>
                <div
                  className="tl-year"
                  style={{
                    fontSize: 20,
                    letterSpacing: ".04em",
                    fontFamily: "var(--mono)",
                    fontWeight: 400,
                    color: "var(--muted)",
                  }}
                >
                  {p.n}
                </div>
                <div className="tl-title">{p.title}</div>
                <div className="tl-body">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-10 sm:mb-16 flex items-center">
            <span className="w-12 h-[1px] bg-[var(--line)] mr-4" />
            05 Things people often ask
          </h2>
          <div className="border-t border-[var(--line)]">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="py-6 sm:py-8 border-b border-[var(--line)]"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 tracking-tight text-[var(--ink)]">
                  {f.question}
                </h3>
                <p className="text-[var(--ink-2)] leading-relaxed text-sm sm:text-base md:text-lg">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources / Internal Linking */}
      <section className="s" style={{ borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
            <div className="reveal" data-d="0">
              <div className="eyebrow" style={{ marginBottom: 20 }}>Related Case Study</div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 500, marginBottom: 12 }}>
                <Link to="/portfolio/tailorpro" style={{ color: "inherit", textDecoration: "none" }} data-hover>
                  TailorPro: Mobile business SaaS →
                </Link>
              </h4>
              <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.5 }}>
                See how we built a mobile-first business utility tool for managing measurements, orders, and customer history.
              </p>
            </div>
            <div className="reveal" data-d="1">
              <div className="eyebrow" style={{ marginBottom: 20 }}>From the Journal</div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 500, marginBottom: 12 }}>
                <Link to="/blog/react-native-new-arch" style={{ color: "inherit", textDecoration: "none" }} data-hover>
                  Migrating to React Native New Architecture →
                </Link>
              </h4>
              <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.5 }}>
                Read our technical walkthrough of migrating a 150k active user mobile app to the React Native JSI-enabled architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Squares
            squareSize={60}
            direction="up"
            speed={0.08}
            borderColor="#ffffff"
          />
        </div>
        <div className="wrap relative z-10" style={{ position: "relative" }}>
          <div
            className="eyebrow reveal"
            style={{
              color: "rgba(255, 255, 255,.55)",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            Let's build your next mobile product
          </div>
          <h2 className="reveal" data-d="1">
            Got an app worth <em>shipping?</em>
          </h2>
          <Magnetic>
            <a
              href="mailto:satvixtechsolutions@gmail.com"
              className="big-cta reveal"
              data-d="2"
              data-hover
            >
              satvixtechsolutions@gmail.com
              <span className="arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </Magnetic>
          <div style={{ marginTop: 48 }}>
            <Magnetic>
              <Link
                to="/services"
                className="btn-ghost reveal"
                data-d="3"
                data-hover
                style={{
                  color: "var(--bg)",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                }}
              >
                All services <span className="arr" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
