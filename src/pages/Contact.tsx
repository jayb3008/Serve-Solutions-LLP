
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
        title="Contact — Start a conversation with Satvix Tech Solutions"
        description="Ready to build your next digital product? Get in touch with Satvix Tech Solutions — an independent studio in Anand, Gujarat. We respond within one business day."
        keywords="contact Satvix Tech Solutions, hire software agency India, digital product studio Gujarat, get a quote web development, software development inquiry India"
        url="https://satvixtech.com/contact"
        breadcrumb={[
          { name: 'Home', item: 'https://satvixtech.com' },
          { name: 'Contact', item: 'https://satvixtech.com/contact' },
        ]}
        faq={[
          { question: 'How quickly does Satvix Tech Solutions respond to enquiries?', answer: 'We respond to all project enquiries within one business day. For urgent matters, you can reach us directly at info@satvixtech.com or +91-9904055986.' },
          { question: 'Where is Satvix Tech Solutions located?', answer: 'Our studio is based in Anand, Gujarat, India. We work with clients globally across India, the US, UK, and Europe — fully remote or hybrid depending on your needs.' },
          { question: 'What information should I prepare before reaching out?', answer: 'The more context the better — a brief description of what you\'re building, your target users, your timeline, and a rough budget range will help us give you the most useful first response.' },
          { question: 'Do you sign NDAs?', answer: 'Yes, we\'re happy to sign a mutual NDA before any detailed project discussions. Just mention it in your initial message.' },
        ]}
      />

      {/* Page Hero */}
      <section className="page-hero" style={{ overflow: 'hidden' }}>
        <div className="wrap">
          <div className="page-hero__eyebrow">
            <span className="ping" />
            Initiate Protocol
          </div>
          <h1>
            {(['Ready to', 'build <em>together?</em>'] as const).map((line, i) => (
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
              We're ready to engineer your digital future. Our team is on standby to discuss your architectural needs, from initial concept to global scale.
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
                  <div className="eyebrow reveal">Channels</div>
                  <h2 className="s-title reveal" data-d="1" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                    Communication <em>relay.</em>
                  </h2>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  { icon: Mail, label: "Email Relay", value: "info@satvixtech.com", href: "mailto:info@satvixtech.com" },
                  { icon: Phone, label: "Direct Line", value: "+91-9904055986", href: "tel:+919904055986" },
                  { icon: MapPin, label: "HQ Coordinates", value: "Anand, Gujarat, India", isAddress: true }
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
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Identity</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
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
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Communication</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
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
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Company (optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / organisation"
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
                      <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>I'm interested in</label>
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
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile Apps</option>
                        <option value="ai-ml">AI / ML</option>
                        <option value="design">Product / UI-UX Design</option>
                        <option value="brand">Brand & Strategy</option>
                        <option value="hire">Hire a dedicated team</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div className="space-y-2 mb-8">
                    <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Estimated budget</label>
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
                    <label style={{ fontFamily: 'var(--mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)' }}>Transmission</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Project details, technical requirements, or general inquiries..."
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
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
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
                        Transmission successful. We will respond shortly.
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
              <div className="eyebrow reveal">Knowledge Base</div>
              <h2 className="s-title reveal" data-d="1">
                Frequent <em>inquiries.</em>
              </h2>
            </div>
          </div>

          <div className="pgrid">
            {[
              { q: "Typical project timeline?", a: "Timelines vary by complexity. Standard web applications typically range from 4-12 weeks from architecture to deployment." },
              { q: "Engagement models?", a: "We offer fixed-cost project based engagements and dedicated team augmentation models for long-term scalability." },
              { q: "Post-launch support?", a: "Comprehensive maintenance packages are available, including server monitoring, security patches, and iterative updates." },
              { q: "Technology stack?", a: "We specialize in the React ecosystem, Node.js backends, and high-performance cloud infrastructure." }
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