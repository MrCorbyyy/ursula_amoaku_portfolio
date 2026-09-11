import './SectionHeading.css'

export default function SectionHeading({ eyebrow, title, intro, align = 'left' }) {
  return (
    <header className={`section-heading-block section-heading-block--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
