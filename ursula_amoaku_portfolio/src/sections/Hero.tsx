import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiBriefcase, FiChevronDown, FiShield } from 'react-icons/fi';
import { site } from '../data/content';
import portraitImg from '../assets/portrait.png';

const roles = [
  'QA & App Testing Specialist',
  'Digital Operations Professional',
  'Technical Support Specialist',
  'Growth & Outreach Specialist',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      aria-label="Introduction hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glows in warm caramel */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 149, 106, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '-5%',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 167, 125, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
          width: '100%',
          paddingTop: '40px',
          paddingBottom: '60px',
        }}
      >
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Welcome status pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            id="hero-welcome-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '99px',
              background: 'rgba(196, 149, 106, 0.12)',
              border: '1px solid rgba(196, 149, 106, 0.3)',
              color: '#a67b52',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '20px',
              letterSpacing: '0.4px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#c4956a',
                boxShadow: '0 0 8px #c4956a',
              }}
            />
            <span>{site.heroGreeting} {site.name}</span>
          </motion.div>

          {/* Main headline with Typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            id="hero-headline"
            style={{
              fontSize: 'clamp(34px, 4.5vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.18',
              marginBottom: '22px',
              letterSpacing: '-0.02em',
            }}
          >
            Delivering Reliable <br />
            <span style={{ color: '#c4956a' }}>Remote Operations </span>
            <br />
            <span style={{ color: '#a67b52', whiteSpace: 'nowrap' }}>
              &amp; {displayedText}
              <span className="typewriter-cursor" aria-hidden="true" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            id="hero-description"
            style={{
              fontSize: '16px',
              lineHeight: '1.75',
              marginBottom: '32px',
              maxWidth: '520px',
              color: 'var(--text)',
            }}
          >
            {site.tagline} {site.supportingStatement}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link
              to="contact"
              smooth
              duration={600}
              id="hero-hire-btn"
              className="btn-primary"
              style={{ cursor: 'pointer' }}
              aria-label="Work With Me"
            >
              <FiBriefcase size={17} />
              Work With Me
            </Link>
            <Link
              to="projects"
              smooth
              duration={600}
              id="hero-projects-btn"
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              Selected Work
              <FiArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Location and Credentials badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              marginTop: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <FiShield color="#c4956a" size={15} />
              AWS Certified &amp; QA Trained
            </span>
            <span>•</span>
            <span>Based in {site.location} ({site.timezone})</span>
          </motion.div>
        </motion.div>

        {/* Right: Portrait with my-portfolio shape and caramel frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              width: 'clamp(300px, 32vw, 440px)',
              height: 'clamp(370px, 38vw, 520px)',
              maxWidth: '100%',
            }}
          >
            {/* Decorative shape in Caramel with glow */}
            <div
              className="decorative-shape"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '32px',
                left: '-28px',
                bottom: '-16px',
                right: '30px',
                backgroundColor: '#c4956a',
                borderRadius: '28px 0 0 210px',
                zIndex: 1,
                pointerEvents: 'none',
                boxShadow: '0 16px 36px rgba(196, 149, 106, 0.28)',
              }}
            />

            {/* Inner image container */}
            <div
              className="image-container"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                borderRadius: '24px 0 0 185px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-subtle)',
                border: '3px solid #c4956a',
                boxShadow: '0 18px 40px rgba(45, 42, 38, 0.12), 0 4px 14px rgba(196, 149, 106, 0.18)',
              }}
            >
              <img
                src={portraitImg}
                alt={`${site.name} — ${site.title}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
        }}
      >
        <Link to="about" smooth duration={600} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px', fontWeight: '600' }}>SCROLL</span>
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
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          #home [style*="flexWrap"] {
            justify-content: center !important;
          }
          #home [style*="marginTop: 28px"] {
            justify-content: center !important;
          }
          .hero-image-wrapper {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
