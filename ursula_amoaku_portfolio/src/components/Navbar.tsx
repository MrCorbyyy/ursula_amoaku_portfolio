import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiPhone, FiMenu, FiX, FiMoon, FiSun, FiLayers, FiBriefcase } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', icon: <FiHome size={16} />, to: 'home' },
  { label: 'About Me', icon: <FiUser size={16} />, to: 'about' },
  { label: 'Skills', icon: <FiLayers size={16} />, to: 'skills' },
  { label: 'Work', icon: <FiBriefcase size={16} />, to: 'projects' },
  { label: 'Contact', icon: <FiPhone size={16} />, to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? (isDark ? 'rgba(28, 25, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)')
          : (isDark ? '#1c1917' : '#ffffff'),
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? (isDark ? '#3b352e' : '#e8e4df') : 'transparent'}`,
        boxShadow: scrolled
          ? (isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 16px rgba(45, 42, 38, 0.06)')
          : 'none',
        transition: 'all 0.3s ease',
        padding: '0 clamp(20px, 5vw, 48px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link
          id="nav-logo"
          to="home"
          smooth
          duration={600}
          style={{
            cursor: 'pointer',
            fontWeight: '800',
            fontSize: '18px',
            letterSpacing: '0.5px',
            userSelect: 'none',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: '#c4956a' }}>U.</span>
          <span style={{ color: 'var(--text-dark)' }}>AMOAKU</span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = active === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                spy
                onSetActive={() => setActive(item.to)}
                id={`nav-${item.to}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: isActive ? '600' : '500',
                  fontSize: '14px',
                  transition: 'all 0.25s ease',
                  color: isActive
                    ? (isDark ? '#d4a77d' : '#a67b52')
                    : (isDark ? '#c8c2b9' : '#5c5650'),
                  background: isActive
                    ? (isDark ? 'rgba(196, 149, 106, 0.15)' : 'rgba(196, 149, 106, 0.1)')
                    : 'transparent',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = '#c4956a';
                    (e.currentTarget as HTMLElement).style.background = isDark
                      ? 'rgba(196, 149, 106, 0.08)'
                      : 'rgba(196, 149, 106, 0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = isDark ? '#c8c2b9' : '#5c5650';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }
                }}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </Link>
            );
          })}

          {/* Dark / Light toggle */}
          <button
            id="theme-toggle"
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggle}
            style={{
              marginLeft: '8px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: `1.5px solid ${isDark ? '#3b352e' : '#e8e4df'}`,
              background: isDark ? '#24201d' : '#faf8f5',
              color: isDark ? '#d4a77d' : '#a67b52',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.12) rotate(20deg)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#c4956a';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(196, 149, 106, 0.25)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1) rotate(0deg)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = isDark ? '#3b352e' : '#e8e4df';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
            }}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile right side: toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-actions">
          <button
            id="theme-toggle-mobile"
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggle}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: `1.5px solid ${isDark ? '#3b352e' : '#e8e4df'}`,
              background: isDark ? '#24201d' : '#faf8f5',
              color: isDark ? '#d4a77d' : '#a67b52',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#a67b52',
              padding: '8px',
              borderRadius: '8px',
            }}
            className="mobile-nav-toggle"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          id="mobile-nav-menu"
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: isDark ? '#1c1917' : '#ffffff',
            borderBottom: `1px solid ${isDark ? '#3b352e' : '#e8e4df'}`,
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            boxShadow: isDark
              ? '0 12px 30px rgba(0, 0, 0, 0.5)'
              : '0 8px 24px rgba(45, 42, 38, 0.1)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              id={`mobile-nav-${item.to}`}
              onClick={() => { setMenuOpen(false); setActive(item.to); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: active === item.to ? '600' : '500',
                fontSize: '15px',
                color: active === item.to
                  ? (isDark ? '#d4a77d' : '#a67b52')
                  : (isDark ? '#c8c2b9' : '#5c5650'),
                background: active === item.to
                  ? (isDark ? 'rgba(196, 149, 106, 0.15)' : 'rgba(196, 149, 106, 0.1)')
                  : 'transparent',
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-actions { display: none !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
