import { about } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import './About.css'

export default function About() {
  return (
    <section className="section section--cream" id="about" aria-labelledby="about-heading">
      <div className="container about">
        <div className="about__grid">
          <SectionHeading
            eyebrow="About"
            title="Remote experience across technology and digital operations"
          />
          <div className="about__content">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
