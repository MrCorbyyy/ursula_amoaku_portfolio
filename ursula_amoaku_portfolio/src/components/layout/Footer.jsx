import { site } from '../../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{site.name}</p>
          <p className="footer__title">{site.title}</p>
        </div>

        <div className="footer__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer__copy">
          © {year} {site.name}. Based in {site.location} ({site.timezone}).
        </p>
      </div>
    </footer>
  )
}
