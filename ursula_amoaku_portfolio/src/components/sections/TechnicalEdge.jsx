import { technicalEdge } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import TechBadge from '../ui/TechBadge'
import './TechnicalEdge.css'

export default function TechnicalEdge() {
  return (
    <section className="section" id="technical-edge" aria-labelledby="technical-edge-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Edge"
          title="A technical mindset behind the operations"
          intro={technicalEdge.intro}
        />
        <div className="technical-edge__grid">
          {technicalEdge.areas.map((area) => (
            <TechBadge key={area.label} label={area.label} detail={area.detail} />
          ))}
        </div>
      </div>
    </section>
  )
}
