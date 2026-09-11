import { capabilities } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import './Capabilities.css'

export default function Capabilities() {
  return (
    <section className="section" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="How I help businesses operate more efficiently"
          intro="Three core areas where I support teams remotely — with structure, reliability, and a technical mindset."
        />
        <div className="capabilities__grid">
          {capabilities.map((capability, index) => (
            <ServiceCard key={capability.id} {...capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
