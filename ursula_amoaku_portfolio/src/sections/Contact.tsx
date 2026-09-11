import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiLinkedin,
  FiClock,
  FiUser,
  FiMessageSquare,
  FiShield,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/content';

const contactInfo = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'ursula-aseye-amoaku',
    href: site.linkedin,
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Location',
    value: `${site.location} (${site.timezone})`,
    href: null,
  },
  {
    icon: <FiClock size={18} />,
    label: 'Availability',
    value: 'Full-time / Part-time Remote',
    href: null,
  },
];

type FormState = { name: string; email: string; subject: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';
type SendVia = 'email' | 'whatsapp';

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: 'App Testing & QA',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [sendVia, setSendVia] = useState<SendVia>('email');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (sendVia === 'whatsapp') {
      const text = `Hi Ursula, I am ${form.name} (${form.email}).\nService: ${form.subject}\nMessage: ${form.message}`;
      const encoded = encodeURIComponent(text);
      // Opens WhatsApp direct chat
      window.open(`https://wa.me/?text=${encoded}`, '_blank');
      setStatus('success');
      return;
    }

    // Direct email submission (mailto fallback)
    setStatus('sending');
    setTimeout(() => {
      const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(
        `[${form.subject}] Inquiry from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nService Interested: ${form.subject}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatus('success');
    }, 400);
  }

  return (
    <section
      id="contact"
      aria-label="Contact section"
      style={{
        padding: '100px 0',
        background: 'var(--bg-subtle)',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p
            style={{
              color: '#a67b52',
              fontWeight: '700',
              fontSize: '13px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800' }}
          >
            Let's Work Together
          </h2>
          <p style={{ marginTop: '20px', color: 'var(--text)', maxWidth: '520px', margin: '20px auto 0', fontSize: '15px' }}>
            Whether you need structured QA testing, customer operations support, or help scaling outbound campaigns — let's discuss your goals.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: 'clamp(28px, 4vw, 48px)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div className="card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
                Contact Information
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.65', marginBottom: '24px' }}>
                Based in Ghana (GMT) and operating seamlessly across distributed remote teams. Fast responses guaranteed within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(196, 149, 106, 0.1)',
                        border: '1px solid rgba(196, 149, 106, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a67b52',
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: 'var(--text-dark)',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#c4956a')}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dark)')}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div
              className="card"
              style={{
                padding: '24px',
                background: 'rgba(196, 149, 106, 0.08)',
                border: '1px solid rgba(196, 149, 106, 0.25)',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
              }}
            >
              <FiShield size={22} color="#a67b52" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>
                  Reliable Collaboration
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: '1.5' }}>
                  Transparent communication, strict NDA adherence, and milestone-tracked deliverables for high-integrity remote partnerships.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="card" style={{ padding: 'clamp(28px, 4vw, 40px)' }}>
              {/* Channel switcher */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <button
                  type="button"
                  onClick={() => setSendVia('email')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: `1.5px solid ${sendVia === 'email' ? '#c4956a' : 'var(--border)'}`,
                    background: sendVia === 'email' ? 'rgba(196, 149, 106, 0.12)' : 'transparent',
                    color: sendVia === 'email' ? '#a67b52' : 'var(--text-muted)',
                  }}
                >
                  <FiMail size={15} />
                  <span>Send via Email</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSendVia('whatsapp')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: `1.5px solid ${sendVia === 'whatsapp' ? '#25D366' : 'var(--border)'}`,
                    background: sendVia === 'whatsapp' ? 'rgba(37, 211, 102, 0.12)' : 'transparent',
                    color: sendVia === 'whatsapp' ? '#25D366' : 'var(--text-muted)',
                  }}
                >
                  <FaWhatsapp size={15} />
                  <span>Quick WhatsApp</span>
                </button>
              </div>

              {status === 'success' ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(196, 149, 106, 0.15)',
                      border: '2px solid #c4956a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a67b52',
                    }}
                  >
                    <FiCheck size={28} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)' }}>
                    Message Prepared!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text)', maxWidth: '340px', lineHeight: '1.6' }}>
                    Thank you for reaching out. Your message is on its way to Ursula Amoaku.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setForm({ name: '', email: '', subject: 'App Testing & QA', message: '' });
                    }}
                    className="btn-secondary"
                    style={{ marginTop: '8px', padding: '10px 24px', fontSize: '13.5px' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--text-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      <FiUser size={13} color="#a67b52" />
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text-dark)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#c4956a')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--text-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      <FiMail size={13} color="#a67b52" />
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text-dark)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#c4956a')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--text-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      <FiShield size={13} color="#a67b52" />
                      Primary Need
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text-dark)',
                        fontSize: '14px',
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#c4956a')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    >
                      <option value="App Testing & QA">App Testing &amp; Quality Assurance</option>
                      <option value="App & User Support">App &amp; User Operations Support</option>
                      <option value="Digital Marketing & Lead Gen">Digital Marketing &amp; Lead Generation</option>
                      <option value="General Remote Partnership">General Remote Partnership</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--text-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      <FiMessageSquare size={13} color="#a67b52" />
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me briefly about your project, timeline, or current operational challenge..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text-dark)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#c4956a')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '13px',
                      fontSize: '15px',
                      marginTop: '4px',
                    }}
                  >
                    {status === 'sending' ? (
                      'Preparing...'
                    ) : (
                      <>
                        <FiSend size={16} />
                        {sendVia === 'whatsapp' ? 'Connect on WhatsApp' : 'Send Message'}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
