import { projects } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import './SelectedWork.css'

export default function SelectedWork() {
  return (
    <section className="section section--cream" id="work" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Experience highlights"
          intro="A selection of projects and engagements. Placeholder cards below will be replaced with your real project details."
        />
        <div className="selected-work__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
