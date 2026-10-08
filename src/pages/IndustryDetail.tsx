import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '../data/industries';
import { buildDescription } from '../lib/meta';
import { industryPath } from '../data/routes';
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import Faq from '../components/Faq';
import SectionHead from '../components/ui/section-head';
import { rise } from '../lib/motion';
import MarqueeCta from '../components/ui/marquee-cta';

const IndustryDetail = ({ industryId }: { industryId?: string } = {}) => {
    const { id } = useParams();
    const activeId = industryId || id;

    const industry = industriesData[activeId as string] || industriesData['healthcare'];

    // Canonical URL for the vertical. Shared with routes.ts so the prerender
    // list, the redirects and this canonical can never disagree.
    const getSeoPath = industryPath;

    const faqs = [
        {
            question: `How do you actually work with ${industry.title.toLowerCase()} teams?`,
            answer: `${industry.overview} In day-to-day terms, that usually means ${industry.capabilities.map((c: { title: string }) => c.title).join(', ')}.`,
        },
        {
            question: `What sort of ${industry.title.toLowerCase()} products have you built?`,
            answer: industry.capabilities.map((c: { title: string; desc: string }) => `${c.title} — ${c.desc}`).join(' '),
        },
        {
            question: `Do you only work with Indian ${industry.title.toLowerCase()} clients?`,
            answer: `No. Based in Anand, working with founders and agencies in the US, UK, EU and Australia. Four-plus hours overlap with US East Coast and full working-day overlap with the UK.`,
        },
        {
            question: `Why pick Satvix for ${industry.title.toLowerCase()}?`,
            answer: `We are a premium digital product and software engineering agency. We combine senior developers, UI/UX designers, and dedicated QA with structured project delivery. We shipped a fintech lending platform in two weeks and an e-commerce build in four. Reference calls and demos on request.`,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeId]);

    return (
        <div className="overflow-x-hidden">
            <SEO
                title={industry.title}
                description={industry.metaDescription ?? buildDescription(industry.tagline, industry.overview)}
                keywords={industry.keywords}
                url={`https://www.satvixtech.com${getSeoPath(activeId as string)}`}
                breadcrumb={[
                    { name: "Home", item: "https://www.satvixtech.com" },
                    { name: "Industries", item: "https://www.satvixtech.com/industries" },
                    { name: industry.title, item: `https://www.satvixtech.com${getSeoPath(activeId as string)}` }
                ]}
                faq={faqs}
            />
            {/* Page hero */}
            <section className="page-hero">
                <div className="wrap relative z-10">
                    <div className="page-hero__eyebrow">
                        <span className="ping" />
                        <industry.icon className="w-4 h-4 text-[var(--muted)]" />
                        An industry we know
                    </div>
                    <h1>
                        <span className="row">
                            <motion.span
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1], delay: 0.3 }}
                                style={{ display: 'inline-block' }}
                            >
                                {industry.title} <em>expertise.</em>
                            </motion.span>
                        </span>
                    </h1>
                    <div className="page-hero__sub">
                        <div className="breadcrumb">
                            Satvix Tech Solutions &nbsp;/&nbsp; Industries &nbsp;/&nbsp; {industry.title}
                        </div>
                        <p>{industry.tagline}</p>
                    </div>
                </div>
            </section>

            {/* Strategic overview */}
            <section className="s">
                <div className="wrap">
                    <motion.div {...rise()}>
                        <div className="eyebrow">The angle we take</div>
                        <p className="mt-7 max-w-5xl text-[clamp(26px,3.4vw,48px)] font-semibold leading-[1.12] tracking-[-0.04em] text-[var(--ink)]">
                            {industry.overview}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industry capabilities */}
            <section className="s bg-[var(--bg-2)]">
                <div className="wrap">
                    <SectionHead
                        eyebrow="What we have done before"
                        title={<>Built for {industry.title.toLowerCase()}, <em>not adapted to it.</em></>}
                    />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {industry.capabilities.map((cap, i) => (
                            <motion.div key={cap.title} {...rise(i)} className="cap-card">
                                <span className="tile-icon">
                                    <ShieldCheck size={20} />
                                </span>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual callout */}
            <section className="photo-band">
                <div
                    className="photo-band__img"
                    style={{ backgroundImage: `url(${industry.image})` }}
                />
                <div className="wrap relative z-10">
                    <motion.h2 {...rise()} className="photo-band__title">
                        Software the {industry.title.toLowerCase()} team <em>can actually use.</em>
                    </motion.h2>
                </div>
            </section>

            {/* FAQ */}
            <Faq faqs={faqs} eyebrow="Things people often ask" />

            {/* CTA */}
            <MarqueeCta
                label="One working day to reply"
                words={`${industry.title} · Satvix · `}
                title={<>Build the <em>next one</em> with us.</>}
                note={<>Tell us what you are trying to make in {industry.title.toLowerCase()}. We will reply within a working day — usually with two or three questions, sometimes with an honest ‘not us’.</>}
            >
                <Link to="/contact" className="mcta__btn" data-hover>
                    Send us a note
                    <span className="mcta__btn-arrow">
                        <ArrowUpRight size={18} />
                    </span>
                </Link>
                <nav className="mcta__links" aria-label="More from Satvix">
                    <Link to="/industries" data-hover>
                        <ArrowLeft size={15} /> Back to industries
                    </Link>
                    <Link to="/portfolio" data-hover>See the work</Link>
                    <Link to="/services" data-hover>What we do</Link>
                </nav>
            </MarqueeCta>
        </div>
    );
};

export default IndustryDetail;
