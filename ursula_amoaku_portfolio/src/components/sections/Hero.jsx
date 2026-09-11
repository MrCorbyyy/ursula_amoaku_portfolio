import { site } from '../../data/content'
import Button from '../ui/Button'
import portrait from '../../assets/portrait.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">{site.heroGreeting}</p>
          <h1 className="hero__name">{site.name}</h1>
          <p className="hero__credentials">{site.heroCredentials}</p>
          <p className="hero__bio">{site.supportingStatement}</p>
          <div className="hero__actions">
            <Button href="#work" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="hero__portrait-wrap">
          <div className="hero__portrait-frame">
            <div className="hero__portrait-accent" aria-hidden="true" />
            <img
              src={portrait}
              alt={`${site.name}, ${site.title}`}
              className="hero__portrait"
              width={480}
              height={560}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
