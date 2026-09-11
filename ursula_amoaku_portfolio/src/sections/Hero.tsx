import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaStar, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/content';
import portraitImg from '../assets/portrait.png';

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '90px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient warm glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 149, 106, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '440px',
          height: '440px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 167, 125, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container hero-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 480px) 1.15fr',
          gap: 'clamp(36px, 5vw, 68px)',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: Rounded Portrait Photo with Overlaid Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hero-image-column"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            className="hero-photo-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              height: 'clamp(420px, 48vw, 540px)',
              borderRadius: '36px',
              overflow: 'hidden',
              boxShadow: '0 20px 48px rgba(45, 42, 38, 0.14), 0 4px 16px rgba(196, 149, 106, 0.12)',
              border: '1px solid rgba(196, 149, 106, 0.25)',
              backgroundColor: 'var(--bg-subtle)',
            }}
          >
            <img
              src={portraitImg}
              alt={`${site.name} — ${site.title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
              }}
            />

            {/* Overlaid Floating Credential Badge (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hero-floating-badge"
              style={{
                position: 'absolute',
                bottom: '22px',
                left: '20px',
                maxWidth: 'calc(100% - 40px)',
                width: '310px',
                borderRadius: '18px',
                padding: '14px 18px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 14px 34px rgba(0, 0, 0, 0.14), 0 4px 12px rgba(196, 149, 106, 0.15)',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(196, 149, 106, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c4956a',
                    flexShrink: 0,
                  }}
                >
                  <FaStar size={14} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '13.5px',
                      fontWeight: '700',
                      color: '#2d2a26',
                      lineHeight: '1.25',
                    }}
                  >
                    Digital Operations Specialist
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#a67b52',
                      marginTop: '2px',
                    }}
                  >
                    BSc. Graduate · AWS Certified
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: '11.5px',
                  lineHeight: '1.45',
                  color: '#6e675f',
                  marginTop: '8px',
                  marginBottom: 0,
                }}
              >
                Turning technical reliability into seamless remote operations.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text & Details Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="hero-content-column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Main Name Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1
              id="hero-name"
              style={{
                fontSize: 'clamp(38px, 4.4vw, 56px)',
                fontWeight: '800',
                lineHeight: '1.12',
                letterSpacing: '-0.025em',
                marginBottom: '4px',
                color: 'var(--text-dark)',
              }}
            >
              Ursula Aseye
            </h1>
            <div
              style={{
                fontSize: 'clamp(38px, 4.4vw, 56px)',
                fontWeight: '800',
                lineHeight: '1.12',
                letterSpacing: '-0.025em',
                color: '#c4956a',
                marginBottom: '18px',
              }}
            >
              Amoaku
            </div>
          </motion.div>

          {/* Role Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div
              id="hero-role-pill"
              style={{
                display: 'inline-block',
                background: '#231f1c',
                color: '#ffffff',
                padding: '7px 18px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '22px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
              }}
            >
              DIGITAL OPERATIONS / QA SPECIALIST
            </div>
          </motion.div>

          {/* Bio / Story Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            id="hero-bio"
            style={{
              fontSize: '16px',
              lineHeight: '1.75',
              color: 'var(--text)',
              marginBottom: '28px',
              maxWidth: '590px',
            }}
          >
            Ursula is a remote digital operations and software QA professional based in Ghana, with hands-on experience supporting distributed teams across software projects, app testing, and digital outreach. Driven by structured thinking and high operational standards, she transforms complex requirements into dependable, efficient outcomes. Ursula is known for her attention to detail, proactive communication, and ability to ensure every workflow and user touchpoint feels seamless, reliable, and exceptional.
          </motion.p>

          {/* Highlights / Features (Side by side with Star icons) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: 'flex',
              gap: 'clamp(20px, 4vw, 44px)',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            {/* Feature 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(196, 149, 106, 0.16)',
                  color: '#c4956a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FaStar size={15} />
              </div>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.2' }}>
                  QA &amp; App Testing
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#c4956a', marginTop: '2px' }}>
                  Structured &amp; Thorough
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(196, 149, 106, 0.16)',
                  color: '#c4956a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FaStar size={15} />
              </div>
              <div>
                <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.2' }}>
                  Digital Operations
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#c4956a', marginTop: '2px' }}>
                  Reliable Remote Support
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Icons (WhatsApp & LinkedIn) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '34px',
            }}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/?text=Hi%20Ursula,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Ursula on WhatsApp"
              className="hero-social-btn"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                background: '#25D366',
                boxShadow: '0 6px 16px rgba(37, 211, 102, 0.32)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                textDecoration: 'none',
              }}
            >
              <FaWhatsapp size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Ursula on LinkedIn"
              className="hero-social-btn"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                background: '#0A66C2',
                boxShadow: '0 6px 16px rgba(10, 102, 194, 0.32)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                textDecoration: 'none',
              }}
            >
              <FaLinkedinIn size={20} />
            </a>
          </motion.div>

          {/* Primary Action Button (Caramel/Warm color matching portfolio, NOT blue) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              to="projects"
              smooth
              duration={600}
              id="hero-view-work-btn"
              className="hero-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 34px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #c4956a 0%, #a67b52 100%)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(196, 149, 106, 0.38)',
                transition: 'all 0.25s ease',
                border: 'none',
              }}
            >
              <span>View Full Experience &amp; Story</span>
              <FiArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
        }}
      >
        <Link
          to="about"
          smooth
          duration={600}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}
        >
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1.2px', fontWeight: '600' }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: '#c4956a' }}
          >
            <FiChevronDown size={18} />
          </motion.div>
        </Link>
      </motion.div>

      <style>{`
        .hero-social-btn:hover {
          transform: translateY(-3px) scale(1.08) !important;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22) !important;
        }
        .hero-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(196, 149, 106, 0.5) !important;
          background: linear-gradient(135deg, #b88355 0%, #94693f 100%) !important;
        }
        [data-theme="dark"] .hero-floating-badge {
          background: rgba(36, 32, 29, 0.94) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.4) !important;
        }
        [data-theme="dark"] .hero-floating-badge div:first-child > div:last-child > div:first-child {
          color: #fcf9f6 !important;
        }
        [data-theme="dark"] .hero-floating-badge p {
          color: #b0a89e !important;
        }
        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-image-column {
            order: -1;
          }
          .hero-content-column {
            align-items: center;
          }
          .hero-content-column p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-content-column [style*="display: flex"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
