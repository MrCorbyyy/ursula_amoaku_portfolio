import { site } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section section--cream" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__wrapper">
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            intro="Whether you need structured app testing, user support, or help with digital marketing — I'd like to hear about your project. Based in Ghana, working with clients remotely."
          />

          <div className="contact__panel">
            <div className="contact__methods">
              <div className="contact__method">
                <span className="contact__method-label">Email</span>
                <a href={`mailto:${site.email}`} className="contact__method-value">
                  {site.email}
                </a>
              </div>
              <div className="contact__method">
                <span className="contact__method-label">LinkedIn</span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__method-value"
                >
                  linkedin.com/in/ursula-aseye-amoaku
                </a>
              </div>
              <div className="contact__method">
                <span className="contact__method-label">Location</span>
                <span className="contact__method-value contact__method-value--plain">
                  {site.location} ({site.timezone})
                </span>
              </div>
            </div>

            <div className="contact__actions">
              <Button href={`mailto:${site.email}`} variant="primary">
                Send an Email
              </Button>
              <Button href={site.linkedin} variant="secondary">
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
