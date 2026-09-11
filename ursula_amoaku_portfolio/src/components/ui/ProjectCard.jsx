import Button from './Button'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { name, description, role, tools, outcome, link, isPlaceholder } = project

  return (
    <article className={`project-card ${isPlaceholder ? 'project-card--placeholder' : ''}`}>
      <div className="project-card__visual" aria-hidden="true">
        <div className="project-card__visual-inner">
          <span className="project-card__visual-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 12h8M8 8h5M8 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        {isPlaceholder && <span className="project-card__badge">Placeholder</span>}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{name}</h3>
        <p className="project-card__description">{description}</p>

        <dl className="project-card__meta">
          <div className="project-card__meta-item">
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div className="project-card__meta-item">
            <dt>Tools</dt>
            <dd>{tools.join(', ')}</dd>
          </div>
          <div className="project-card__meta-item">
            <dt>Outcome</dt>
            <dd>{outcome}</dd>
          </div>
        </dl>

        {link && (
          <Button variant="ghost" href={link} className="project-card__link">
            View project →
          </Button>
        )}
      </div>
    </article>
  )
}
