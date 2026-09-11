import { FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/content';

const socialLinks = [
  {
    id: 'footer-linkedin',
    icon: <FiLinkedin size={18} />,
    href: site.linkedin,
    label: 'LinkedIn',
  },
  {
    id: 'footer-email',
    icon: <FiMail size={18} />,
    href: `mailto:${site.email}`,
    label: 'Email',
  },
  {
    id: 'footer-whatsapp',
    icon: <FaWhatsapp size={18} />,
    href: 'https://wa.me/',
    label: 'WhatsApp',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      role="contentinfo"
      style={{
        background: '#141211',
        color: '#9e958b',
        padding: '56px 24px 36px',
        borderTop: '1px solid #2d2824',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {/* Monogram in Caramel Gradient */}
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #c4956a 0%, #a67b52 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: '800',
            fontSize: '22px',
            boxShadow: '0 4px 16px rgba(196, 149, 106, 0.35)',
            userSelect: 'none',
          }}
        >
          U
        </div>

        {/* Name & Title */}
        <div>
          <p
            style={{
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '18px',
              marginBottom: '4px',
              letterSpacing: '-0.01em',
            }}
          >
            {site.name}
          </p>
          <p style={{ fontSize: '13.5px', color: '#a8a096' }}>
            {site.title}
          </p>
        </div>

        {/* Social Icons with Caramel Glow */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {socialLinks.map((social) => (
            <a
              key={social.id}
              id={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid #2d2824',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c8c2b9',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
                (e.currentTarget as HTMLElement).style.background = 'rgba(196, 149, 106, 0.25)';
                (e.currentTarget as HTMLElement).style.borderColor = '#c4956a';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(196, 149, 106, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#c8c2b9';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = '#2d2824';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: '#26221e' }} />

        {/* Copyright */}
        <p style={{ fontSize: '13px', color: '#7a7268', display: 'flex', alignItems: 'center', gap: '6px' }}>
          © {currentYear} {site.name}. Based in {site.location} ({site.timezone}). Made with{' '}
          <FiHeart size={13} color="#c4956a" style={{ display: 'inline', fill: '#c4956a' }} />
          {' '}for reliable remote teams.
        </p>
      </div>
    </footer>
  );
}
