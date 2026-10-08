import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Instagram, Github, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import RevealText from "../components/ui/reveal-text";
import Faq from "../components/Faq";
import Magnetic from "../components/Magnetic";
import { social } from "../data/social";

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

const contactFaqs = [
  {
    question: "How long does a build take?",
    answer:
      "Depends on the scope. A tightly-scoped MVP can ship in two to four weeks (Nine Finance was two, Glamour was four). A larger multi-tenant SaaS is closer to two months. We tell you what is realistic before you commit — not what sounds good.",
  },
  {
    question: "How do you bill?",
    answer:
      "Fixed scope for defined MVPs, monthly retainer for ongoing product work, or staff augmentation where we embed with your team. Invoices in USD, GBP or INR — every two weeks, nothing hidden.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You own the code from day one — full repo access, no lock-in. Most clients keep us on for a quarter or more to iterate. When you want an in-house team we help you hand it over cleanly.",
  },
  {
    question: "What stack do you use?",
    answer:
      "React and Next.js on the front, Node.js on the back, MongoDB or Postgres, React Native on mobile. We use Claude Code and Cursor to move fast — with senior review on every diff before it lands.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );

  const budgets = [
    "< $3k",
    "$3k – $12k",
    "$12k – $30k",
    "$30k +",
    "Not sure yet",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwmUK6mBWpFzkMUgzo3Afb-gswa8sqx_MglFhrcERGdICa3lpIDIPJ_4nVzAr7K3vBM/exec";

    try {
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        mode: "no-cors",
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error!", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Satvix Tech Solutions — Get in Touch with Our Team"
        description="Contact Satvix Tech Solutions. Write to hello@satvixtech.com and our team will reply within one business day. Based in Anand, Gujarat; working with clients in the US, UK, EU and Australia."
        keywords="contact Satvix Tech Solutions, hire software development agency, senior engineer for hire India, offshore React Native Node.js team, hello@satvixtech.com, MERN engineer for US UK startups"
        url="https://www.satvixtech.com/contact"
        breadcrumb={[
          { name: "Home", item: "https://www.satvixtech.com" },
          { name: "Contact", item: "https://www.satvixtech.com/contact" },
        ]}
        faq={[
          {
            question: "How quickly will I hear back?",
            answer:
              "A senior engineer reads every message and replies within one business day — often same day. If it is urgent, write \"urgent\" in the subject and email hello@satvixtech.com directly.",
          },
          {
            question: "What's the timezone overlap?",
            answer:
              "Four-plus hours overlap with US East Coast, full working-day overlap with the UK and EU. Daily async updates on Slack or email, so nothing waits for a call.",
          },
          {
            question: "Who owns the code?",
            answer:
              "You do — 100%, from day one. Full repository access, no escrow, no vendor lock-in. Handover includes documentation, recorded walkthroughs and transition support.",
          },
          {
            question: "How do you handle contracts and invoicing?",
            answer:
              "We invoice in USD, GBP or INR. Standard SaaS/dev contracts, NDA-friendly, wire or Wise for payment. Fixed-scope for defined MVPs, monthly retainer for ongoing product work, or staff augmentation for embedded engineering.",
          },
        ]}
      />

      {/* Page Hero */}
      <section
        className="page-hero relative overflow-hidden"
        style={{ overflow: "hidden" }}
      >
        <div className="wrap relative z-10">
          {/* <div className="page-hero__eyebrow">
            <span className="ping" />
            Inbox monitored by a real person
          </div> */}
          <h1>
            {(["Tell us what", "you’re <em>building.</em>"] as const).map(
              (line, i) => (
                <span key={i} className="row">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.1 }}
                    style={{ display: "inline-block" }}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </span>
              ),
            )}
          </h1>
          <div className="page-hero__sub">
            <div className="breadcrumb">
              Satvix Tech Solutions &nbsp;/&nbsp; Contact
            </div>
            <p>
              A few sentences is enough. A senior engineer reads every message
              and replies within one business day. No funnel, no calendar
              link, no account manager in between.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="s" style={{ paddingBottom: "120px" }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="s-head" style={{ marginBottom: 40 }}>
                <div>
                  <div className="eyebrow reveal">Three ways in</div>
                  <h2
                    className="s-title reveal"
                    data-d="1"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                  >
                    <RevealText>Email, phone, <em>or a real door.</em></RevealText>
                  </h2>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  {
                    icon: Mail,
                    label: "Write to us",
                    value: "hello@satvixtech.com",
                    href: "mailto:hello@satvixtech.com",
                  },
                  {
                    icon: Phone,
                    label: "Call the agency",
                    value: "+91 70164 27729",
                    href: "tel:+917016427729",
                  },
                  {
                    icon: MapPin,
                    label: "Drop by",
                    value: "Anand, Gujarat, India",
                    isAddress: true,
                  },
                ].map((item, i) => (
                  <div key={i} className="reveal" data-d={String(i)}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          background: "var(--ink)",
                          color: "var(--bg)",
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 8,
                        }}
                      >
                        <item.icon size={18} />
                      </div>
                      <span
                        style={{ fontWeight: 500,
                          fontSize: 13,
                          letterSpacing: "-0.005em",
                          color: "var(--muted)",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    {item.isAddress ? (
                      <p
                        style={{
                          fontSize: "clamp(20px, 2.5vw, 28px)",
                          fontWeight: 500,
                          fontFamily: "var(--display)",
                          letterSpacing: "-.02em",
                          margin: 0,
                        }}
                      >
                        Anand, Gujarat
                        <br />
                        India, 388001
                      </p>
                    ) : (
                      <a
                        href={item.href}
                        style={{
                          fontSize: "clamp(20px, 2.5vw, 28px)",
                          fontWeight: 500,
                          fontFamily: "var(--display)",
                          letterSpacing: "-.02em",
                          color: "var(--ink)",
                          display: "inline-block",
                          padding: "10px 0",
                          minHeight: 44,
                        }}
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {(social.linkedin || social.instagram || social.github || social.calendly) && (
                <div className="reveal" data-d="3" style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
                  <div
                    style={{ fontWeight: 500,
                      fontSize: 13,
                      letterSpacing: "-0.005em",
                      color: "var(--muted)",
                      marginBottom: 16,
                    }}
                  >
                    Or reach out directly
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {[
                      { url: social.calendly, Icon: Calendar, label: "Book a 30-min call" },
                      { url: social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                      { url: social.instagram, Icon: Instagram, label: "Instagram" },
                      { url: social.github, Icon: Github, label: "GitHub" },
                    ]
                      .filter((s) => s.url)
                      .map(({ url, Icon, label }) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-hover
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "12px 18px",
                            border: "1px solid var(--line)",
                            borderRadius: 999,
                            fontFamily: "var(--sans)",
                            fontSize: 13,
                            color: "var(--ink)",
                            textDecoration: "none",
                            background: "var(--bg)",
                          }}
                        >
                          <Icon size={16} />
                          {label}
                        </a>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="reveal" data-d="1">
                <form
                  onSubmit={handleSubmit}
                  className="beam"
                  style={{
                    background: "var(--bg-2)",
                    padding: "clamp(32px, 5vw, 64px)",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label
                        style={{ fontWeight: 500,
                          fontSize: 13,
                          letterSpacing: "-0.005em",
                          color: "var(--muted)",
                        }}
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="What should we call you?"
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--line)",
                          padding: "12px 0",
                          fontSize: 16,
                          color: "var(--ink)",
                          outline: "none",
                          transition: "border-color .3s ease",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "var(--line)")
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        style={{ fontWeight: 500,
                          fontSize: 13,
                          letterSpacing: "-0.005em",
                          color: "var(--muted)",
                        }}
                      >
                        Where to reply
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@yourcompany.com"
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--line)",
                          padding: "12px 0",
                          fontSize: 16,
                          color: "var(--ink)",
                          outline: "none",
                          transition: "border-color .3s ease",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "var(--line)")
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label
                        style={{ fontWeight: 500,
                          fontSize: 13,
                          letterSpacing: "-0.005em",
                          color: "var(--muted)",
                        }}
                      >
                        Company (if any)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company, side project, or ‘just me’"
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--line)",
                          padding: "12px 0",
                          fontSize: 16,
                          color: "var(--ink)",
                          outline: "none",
                          transition: "border-color .3s ease",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "var(--line)")
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        style={{ fontWeight: 500,
                          fontSize: 13,
                          letterSpacing: "-0.005em",
                          color: "var(--muted)",
                        }}
                      >
                        What kind of work
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--line)",
                          padding: "12px 0",
                          fontSize: 16,
                          color: "var(--ink)",
                          outline: "none",
                          cursor: "pointer",
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
                    <label
                      style={{ fontWeight: 500,
                        fontSize: 13,
                        letterSpacing: "-0.005em",
                        color: "var(--muted)",
                      }}
                    >
                      Rough budget — best guess is fine
                    </label>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        paddingTop: 6,
                      }}
                    >
                      {budgets.map((b) => {
                        const active = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() =>
                              setFormData((f) => ({ ...f, budget: b }))
                            }
                            data-hover
                            style={{
                              fontFamily: "var(--sans)",
                              fontSize: 12,
                              padding: "9px 16px",
                              borderRadius: 999,
                              cursor: "pointer",
                              border: `1px solid ${active ? "var(--ink)" : "var(--line)"}`,
                              background: active ? "var(--ink)" : "transparent",
                              color: active ? "var(--bg)" : "var(--ink-2)",
                              transition: "all .2s ease",
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 mb-12">
                    <label
                      style={{ fontWeight: 500,
                        fontSize: 13,
                        letterSpacing: "-0.005em",
                        color: "var(--muted)",
                      }}
                    >
                      Tell us about it
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What you’re making, who it’s for, what’s in your head. Three sentences is plenty."
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid var(--line)",
                        padding: "12px 0",
                        fontSize: 16,
                        color: "var(--ink)",
                        outline: "none",
                        resize: "none",
                        transition: "border-color .3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "var(--line)")
                      }
                    ></textarea>
                  </div>

                  <Magnetic style={{ width: "100%" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-btn"
                      data-hover
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                        background: "var(--ink)",
                        color: "var(--bg)",
                        padding: "20px 24px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <span>{isSubmitting ? "Sending…" : "Send it over"}</span>
                      <ArrowRight size={18} />
                    </button>
                  </Magnetic>

                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                          marginTop: 24,
                          padding: 16,
                          background: "#e7f5ed",
                          color: "#0a5d2c",
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        Thanks — your note is in the inbox. A real person will
                        reply within one working day.
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
      <Faq
        faqs={contactFaqs}
        eyebrow="Before you write"
        title={
          <>
            Four answers, in <em>plain English.</em>
          </>
        }
        sectionStyle={{ background: "var(--bg-2)" }}
      />
    </div>
  );
};

export default Contact;
