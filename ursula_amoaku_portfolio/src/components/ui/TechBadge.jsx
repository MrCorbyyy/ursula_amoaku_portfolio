import './TechBadge.css'

export default function TechBadge({ label, detail }) {
  return (
    <div className="tech-badge">
      <span className="tech-badge__label">{label}</span>
      <span className="tech-badge__detail">{detail}</span>
    </div>
  )
}
