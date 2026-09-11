import './ServiceCard.css'

export default function ServiceCard({ title, description, highlights, index }) {
  return (
    <article className="service-card">
      <span className="service-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <ul className="service-card__highlights">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
