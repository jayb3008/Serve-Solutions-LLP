import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

type Card = {
  id: string;
  title: string;
  year: string;
  tags: string[];
  cat: string;
  img: string;
  wide?: boolean;
};

const cards: Card[] = [
  {
    id: 'lendingflow',
    title: 'LendingFlow — card-issuing platform for the next million SMEs',
    year: '2025', tags: ['Fintech', 'Web + iOS'], cat: 'Fintech',
    img: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1400',
    wide: true,
  },
  {
    id: 'tailorpro',
    title: 'TailorPro — analytics and operations for boutique shops',
    year: '2025', tags: ['SaaS'], cat: 'SaaS',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'stillwood',
    title: 'Stillwood Co. — headless storefront for a heritage outdoor brand',
    year: '2024', tags: ['Commerce'], cat: 'Commerce',
    img: 'https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pelican',
    title: 'Pelican — an agentic copilot for legal review',
    year: '2024', tags: ['AI'], cat: 'AI',
    img: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'verbena',
    title: 'Verbena Care — a calmer way to manage chronic conditions',
    year: '2023', tags: ['Health'], cat: 'Health',
    img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'nordhavn',
    title: 'Nordhavn — B2B procurement platform for Nordic manufacturers',
    year: '2023', tags: ['SaaS', 'B2B'], cat: 'SaaS',
    img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'aurum',
    title: 'Aurum — luxury jewellery brand identity & digital presence',
    year: '2023', tags: ['Brand', 'Commerce'], cat: 'Commerce',
    img: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'traxis',
    title: 'Traxis — real-time logistics dashboard for last-mile delivery',
    year: '2022', tags: ['Fintech', 'Mobile'], cat: 'Fintech',
    img: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'lumio',
    title: 'Lumio — AI-powered lesson builder for K–12 educators',
    year: '2022', tags: ['AI', 'SaaS'], cat: 'AI',
    img: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'vaulter',
    title: 'Vaulter — crypto portfolio tracker with tax reporting',
    year: '2022', tags: ['Fintech', 'Mobile'], cat: 'Fintech',
    img: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const filters = ['All', 'Fintech', 'SaaS', 'Commerce', 'AI', 'Health'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const visible = cards.filter(c => active === 'All' || c.cat === active);

  return (
    <div>
      <SEO
        title="Portfolio — Products built with great teams"
        description="A curated selection of digital products built by Satvix Tech Solutions — from fintech platforms to AI copilots and headless storefronts."
        keywords="software portfolio India, digital product case studies, web app portfolio Gujarat, mobile app case studies India, fintech app development portfolio, SaaS case study India, AI product portfolio, headless commerce case study, startup product portfolio India, design engineering portfolio, software agency work India, tech company portfolio Gujarat, Satvix Tech Solutions projects, best software portfolio India"
        url="https://satvixtech.com/portfolio"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Portfolio', item: 'https://satvixtech.com/portfolio' },
        ]}
      />

      {/* Page hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Selected work
          </div>
          <h1>
            {(['Products built', 'with great', '<em>teams.</em>'] as const).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.07 }}
                  style={{ display: 'inline-block' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Work
            </div>
            <p>
              From zero-to-launch fintech apps to AI copilots and heritage brand identities — a decade of work we're proud to put our name on.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="wrap">
          <div className="filter-row">
            <div className="filter-chips">
              {filters.map(f => (
                <button
                  key={f}
                  className={`chip${active === f ? ' active' : ''}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="filter-count">
              {visible.length}&nbsp;project{visible.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="s" style={{ padding: '80px 0 120px' }}>
        <div className="wrap">
          <div className="arch-grid">
            {visible.map((c, i) => (
              <Link
                key={c.id}
                to={`/portfolio/${c.id}`}
                className={`arch reveal${c.wide ? ' wide' : ''}`}
                data-hover
                data-d={String(i % 3)}
              >
                <div
                  className="arch__bg"
                  style={{
                    background: `linear-gradient(rgba(10,8,6,0.48), rgba(10,8,6,0.48)), url(${c.img}) center/cover no-repeat`,
                  }}
                />
                <div className="arch__inner">
                  <div className="arch__top">
                    <div className="arch__meta">
                      <span>{c.year}</span>
                      {c.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <span className="arch__cat">{c.cat}</span>
                  </div>
                  <p className="arch__title">{c.title}</p>
                </div>
                <div className="arch__cta">↗</div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 13, marginTop: 48, textAlign: 'center', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="eyebrow reveal" style={{ color: 'rgba(255, 255, 255,.55)', justifyContent: 'center', marginBottom: 24 }}>
            Could your project sit here?
          </div>
          <h2 className="reveal" data-d="1">
            Let's build something <em>worth showing.</em>
          </h2>
          <a
            href="mailto:info@satvixtech.com"
            className="big-cta reveal"
            data-d="2"
            data-hover
          >
            info@satvixtech.com
            <span className="arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
