import { useState, useEffect } from 'react'
import { navLinks } from '../../data/navigation'
import Button from '../ui/Button'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-accent">U.</span>
          <span className="header__logo-text">Amoaku</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`header__nav-link ${activeSection === id ? 'header__nav-link--active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="header__nav-cta">
            <Button href="#contact" variant="primary" onClick={closeMenu}>
              Work With Me
            </Button>
          </div>
        </nav>

        <div className="header__actions">
          <Button href="#contact" variant="primary" className="header__cta-desktop">
            Work With Me
          </Button>
          <button
            type="button"
            className={`header__menu-toggle ${menuOpen ? 'header__menu-toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
