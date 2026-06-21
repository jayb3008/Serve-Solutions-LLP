
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const budgets = ['< ₹5L', '₹5L – ₹15L', '₹15L – ₹40L', '₹40L +', 'Not sure yet'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmUK6mBWpFzkMUgzo3Afb-gswa8sqx_MglFhrcERGdICa3lpIDIPJ_4nVzAr7K3vBM/exec';

    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });

      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        mode: 'no-cors'
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', budget: '', message: '' });
    } catch (error) {
      console.error('Error!', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact — One inbox, one human, no funnel"
        description="Tell us what you’re building. We read every message and reply within a working day, usually with questions, sometimes with an honest ‘not us’."
        keywords="contact Satvix Tech Solutions, hire software agency India, digital product studio Gujarat, get a quote web development, software development inquiry India"
        url="https://satvixtech.com/contact"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Contact', item: 'https://satvixtech.com/contact' },
        ]}
        faq={[
          { question: 'How quickly will I hear back?', answer: 'A real person reads everything that comes in and replies within one working day — usually same day. If something is on fire, write “urgent” in the subject and email info@satvixtech.com directly.' },
          { question: 'Where are you?', answer: 'A single building in Anand, Gujarat. We work with teams in India, the US, the UK and the EU — fully remote, hybrid, or by getting on a plane when it matters.' },
          { question: 'What should I send in the first message?', answer: 'In order of usefulness: what you are building and why, who it is for, the rough timeline, and a budget range. Even three sentences is enough to start a real conversation.' },
          { question: 'Will you sign an NDA?', answer: 'Yes. Mention it in the first message and we will send a mutual NDA before anything sensitive is discussed.' },
        ]}
      />

      {/* Page Hero */}
      <section className="page-hero" style={{ overflow: 'hidden' }}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Inbox monitored by a real person
          </div>
          <h1>
            {(['Tell us what', 'you’re <em>building.</em>'] as const).map((line, i) => (
              <span key={i} className="row">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.1 }}
                  style={{ display: 'inline-block' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Contact
            </div>
            <p>
              Write a few sentences about the thing you want to make. We will read it, ask a couple of questions, and tell you — honestly — whether we are the right studio for it. No funnel, no sales call calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="s" style={{ paddingBottom: '120px' }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="s-head" style={{ marginBottom: 40 }}>
                <div>
                  <div className="eyebrow reveal">Three ways in</div>
                  <h2 className="s-title reveal" data-d="1" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                    Email, phone, <em>or a real door.</em>
                  </h2>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  { icon: Mail, label: "Write to us", value: "info@satvixtech.com", href: "mailto:info@satvixtech.com" },
                  { icon: Phone, label: "Call the studio", value: "+91 9904 055 986", href: "tel:+919904055986" },
                  { icon: MapPin, label: "Drop by", value: "Anand, Gujarat, India", isAddress: true }
                ].map((item, i) => (
                  <div key={i} className="reveal" data-d={String(i)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        background: 'var(--ink)',
                        color: 'var(--bg)',
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: 8
                      }}>
                        <item.icon size={18} />
                      </div>
                      <span style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        letterSpacing: '.12em',
                        color: 'var(--muted)'
                      }}>
                        {item.label}
                      </span>
                    </div>
                    {item.isAddress ? (
                      <p style={{
                        fontSize: 'clamp(20px, 2.5vw, 28px)',
                        fontWeight: 500,
                        fontFamily: 'var(--display)',
                        letterSpacing: '-.02em',
                        margin: 0
                      }}>
                        Anand, Gujarat<br />India, 388001
                      </p>
                    ) : (
                      <a href={item.href} style={{
                        fontSize: 'clamp(20px, 2.5vw, 28px)',
                        fontWeight: 500,
                        fontFamily: 'var(--display)',
                        letterSpacing: '-.02em',
                        color: 'var(--ink)'
                      }}>
                        {item.value}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="reveal" data-d="1">
                <form onSubmit={handleSubmit} style={{
                  background: 'var(--bg-2)',
                  padding: 'clamp(32px, 5vw, 64px)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Your name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="What should we call you?"
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid var(--line)',
                          padding: '12px 0',
                          fontSize: 16,
                          color: 'var(--ink)',
                          outline: 'none',
                          transition: 'border-color .3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--line)'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Where to reply</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@yourcompany.com"
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: '1px solid var(--line)',
                          padding: '12px 0',
                          fontSize: 16,
                          color: 'var(--ink)',
                          outline: 'none',
                          transition: 'border-color .3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--line)'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Company (if any)</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company, side project, or ‘just me’"
                        style={{
                          width: '100%', background: 'transparent', border: 'none',
                          borderBottom: '1px solid var(--line)', padding: '12px 0',
                          fontSize: 16, color: 'var(--ink)', outline: 'none', transition: 'border-color .3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--line)'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>What kind of work</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%', background: 'transparent', border: 'none',
                          borderBottom: '1px solid var(--line)', padding: '12px 0',
                          fontSize: 16, color: 'var(--ink)', outline: 'none', cursor: 'pointer'
                        }}
                      >
                        <option value="">Pick the closest one</option>
                        <option value="web">A web platform</option>
                        <option value="mobile">A mobile app</option>
                        <option value="ai-ml">An AI feature or product</option>
                        <option value="design">Product or UI/UX design</option>
                        <option value="brand">Brand or editorial</option>
                        <option value="hire">A dedicated team to embed</option>
                        <option value="other">Something else entirely</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div className="space-y-2 mb-8">
                    <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Rough budget — best guess is fine</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 6 }}>
                      {budgets.map((b) => {
                        const active = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData((f) => ({ ...f, budget: b }))}
                            data-hover
                            style={{
                              fontFamily: 'var(--mono)', fontSize: 12, padding: '9px 16px',
                              borderRadius: 999, cursor: 'pointer',
                              border: `1px solid ${active ? 'var(--ink)' : 'var(--line)'}`,
                              background: active ? 'var(--ink)' : 'transparent',
                              color: active ? 'var(--bg)' : 'var(--ink-2)',
                              transition: 'all .2s ease',
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 mb-12">
                    <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Tell us about it</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What you’re making, who it’s for, what’s in your head. Three sentences is plenty."
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--line)',
                        padding: '12px 0',
                        fontSize: 16,
                        color: 'var(--ink)',
                        outline: 'none',
                        resize: 'none',
                        transition: 'border-color .3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--line)'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-btn"
                    data-hover
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      background: 'var(--ink)',
                      color: 'var(--bg)',
                      padding: '20px 24px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{isSubmitting ? 'Sending…' : 'Send it over'}</span>
                    <ArrowRight size={18} />
                  </button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                          marginTop: 24,
                          padding: 16,
                          background: '#e7f5ed',
                          color: '#0a5d2c',
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 500,
                          textAlign: 'center'
                        }}
                      >
                        Thanks — your note is in the inbox. A real person will reply within one working day.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Inquiries */}
      <section className="s" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow reveal">Before you write</div>
              <h2 className="s-title reveal" data-d="1">
                Four answers, in <em>plain English.</em>
              </h2>
            </div>
          </div>

          <div className="pgrid">
            {[
              { q: "How long does a build take?", a: "Most web platforms take eight to fourteen weeks from kickoff to a live launch. Mobile apps usually add four. We will tell you what is realistic in the first call — not what sounds good." },
              { q: "How do you bill?", a: "Two ways. Fixed scope for short, well-defined projects; a small embedded team on a monthly rate for longer work. Either way, invoices arrive every two weeks and nothing is hidden." },
              { q: "What happens after launch?", a: "Most clients keep us on for at least a quarter. We monitor, patch, iterate, and help you hire the in-house team that takes over — when you want one." },
              { q: "What stack do you use?", a: "Mostly React and Next.js on the front, Node and Postgres on the back, native or React Native on mobile. We pick the boring one when the boring one will outlast the project." }
            ].map((faq, i) => (
              <div key={i} className="prin reveal" data-d={String(i % 2)}>
                <div className="prin__n">0{i + 1}</div>
                <div>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;