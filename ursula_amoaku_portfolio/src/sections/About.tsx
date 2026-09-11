import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckCircle, FiMail, FiDownloadCloud } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { about, site } from '../data/content';
import portraitImg from '../assets/portrait.png';

const traits = [
  'Structured app testing, rigorous bug tracking, and clear developer feedback',
  'AWS Certified with solid cloud, data handling, and technical fundamentals',
  'Remote-first mindset: proactive, asynchronous, and milestone-driven communication',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      aria-label="About section"
      style={{
        padding: '100px 0',
        background: 'var(--bg)',
        overflow: 'hidden',
      }}
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="about-card-container"
          style={{  
            background: 'var(--bg-subtle)',
            borderRadius: '36px',
            border: '1px solid var(--border)',
            padding: 'clamp(32px, 5vw, 64px)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Left: Profile with rotating animated border beam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="profile-beam-wrapper">
              <div className="profile-beam-inner">
                <img
                  src={portraitImg}
                  alt={`${site.name} — Remote Digital Operations`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative & stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              style={{
                color: '#a67b52',
                fontWeight: '700',
                fontSize: '13px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              About Me
            </p>

            <h2
              id="about-heading"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 42px)',
                fontWeight: '800',
                lineHeight: '1.2',
                color: 'var(--text-dark)',
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Remote Reliability{' '}
              <span style={{ color: '#c4956a' }}>Without</span> The Overhead
            </h2>

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {about.paragraphs.map((p: string, idx: number) => (
                <p key={idx} style={{ color: 'var(--text)', lineHeight: '1.7', fontSize: '15px' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core traits checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {traits.map((trait) => (
                <div key={trait} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FiCheckCircle size={17} color="#c4956a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.5' }}>{trait}</span>
                </div>
              ))}
            </div>

            {/* Key stats counter */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(20px, 3.5vw, 44px)',
                marginBottom: '32px',
                flexWrap: 'wrap',
                paddingTop: '18px',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div>
                <div style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1' }}>
                  AWS
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500', marginTop: '6px' }}>
                  Certified Cloud Practitioner
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1' }}>
                  100%
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500', marginTop: '6px' }}>
                  Remote Ready &amp; Async
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1' }}>
                  3+
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500', marginTop: '6px' }}>
                  Core Service Pillars
                </div>
              </div>
            </div>

            {/* CTA button with animated moving beam */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div className="cv-button-wrapper">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  className="cv-button-inner"
                  style={{ textDecoration: 'none' }}
                >
                  <FiMail size={16} />
                  <span>Start A Project</span>
                </Link>
              </div>

              <a
                href={`mailto:${site.email}?subject=Inquiry regarding Remote Operations / QA`}
                className="btn-secondary"
                style={{ borderRadius: '999px', padding: '12px 26px', fontSize: '14px' }}
              >
                <FiDownloadCloud size={16} />
                <span>Contact Directly</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-card-container {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            padding: 32px 20px !important;
          }
          .about-card-container [style*="justify-content"] {
            justify-content: center !important;
          }
          .about-card-container [style*="borderTop"] {
            justify-content: center !important;
          }
          .about-card-container [style*="flexDirection: column"] {
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
