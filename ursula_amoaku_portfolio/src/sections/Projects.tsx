import { motion } from 'framer-motion';
import {
  FiExternalLink,
  FiCheckCircle,
  FiBriefcase,
  FiTag,
  FiMail,
} from 'react-icons/fi';
import { Link } from 'react-scroll';

interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  description: string;
  tools: string[];
  outcome: string;
  gradient: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'project-app-qa',
    title: 'Mobile & Web App QA Testing',
    category: 'Software Testing & QA',
    role: 'Lead QA Tester & Usability Analyst',
    description:
      'Conducted end-to-end functional, UI responsiveness, and regression testing across distributed web and mobile platforms. Documented detailed bug reports with reproducible steps for developer handoff.',
    tools: ['Functional QA', 'Jira', 'Bug Tracking', 'Test Cases', 'Usability Audits'],
    outcome:
      'Reduced pre-release defects by 35% and expedited sprint validation cycles through structured test documentation.',
    gradient: 'linear-gradient(135deg, #c4956a 0%, #a67b52 100%)',
    featured: true,
  },
  {
    id: 'project-digital-ops',
    title: 'Digital Operations & User Support System',
    category: 'Operations & Tech Support',
    role: 'Remote Operations Specialist',
    description:
      'Architected user support routing, issue triage procedures, and troubleshooting workflows for a distributed software team. Coordinated issue resolution between end-users and engineering.',
    tools: ['AWS Fundamentals', 'Zendesk / Ticket Triage', 'SOPs', 'Async Workflow', 'Data Clean-up'],
    outcome:
      'Maintained a 98% first-response SLA and streamlined technical issue escalations across 3 time zones.',
    gradient: 'linear-gradient(135deg, #a67b52 0%, #8e633d 100%)',
    featured: true,
  },
  {
    id: 'project-outreach-growth',
    title: 'B2B Outreach & Digital Acquisition',
    category: 'Marketing & Growth Operations',
    role: 'Outbound Campaign Specialist',
    description:
      'Built targeted lead generation workflows, structured outbound email sequences, and monitored response analytics to acquire qualified prospects without bloated ad spends.',
    tools: ['Email Marketing', 'Lead Sourcing', 'CRM Routing', 'SEO Basics', 'Analytics'],
    outcome:
      'Generated consistent monthly qualified leads and established measurable attribution tracking for key campaigns.',
    gradient: 'linear-gradient(135deg, #d4a77d 0%, #b88659 100%)',
    featured: true,
  },
];

function TechBadge({ name }: { name: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 11px',
        background: 'rgba(196, 149, 106, 0.08)',
        border: '1px solid rgba(196, 149, 106, 0.25)',
        borderRadius: '99px',
        fontSize: '11.5px',
        fontWeight: '500',
        color: '#a67b52',
      }}
    >
      <FiTag size={10} style={{ opacity: 0.7 }} />
      {name}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Decorative gradient top banner */}
      <div
        style={{
          height: '160px',
          background: project.gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '24px',
          textAlign: 'center',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            top: '-25px',
            right: '-25px',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.12)',
          }}
        />

        <span
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '6px',
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#ffffff',
            maxWidth: '280px',
            lineHeight: '1.3',
          }}
        >
          {project.title}
        </h3>
      </div>

      {/* Content */}
      <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#a67b52' }}>
            {project.role}
          </span>
          {project.featured && (
            <span
              style={{
                fontSize: '10.5px',
                background: 'rgba(196, 149, 106, 0.12)',
                color: '#a67b52',
                border: '1px solid rgba(196, 149, 106, 0.35)',
                padding: '2px 9px',
                borderRadius: '99px',
                fontWeight: '700',
              }}
            >
              Featured Case
            </span>
          )}
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.65', flex: 1 }}>
          {project.description}
        </p>

        {/* Outcome Box */}
        <div
          style={{
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
          }}
        >
          <FiCheckCircle size={15} color="#c4956a" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '12.5px', color: 'var(--text)', lineHeight: '1.5' }}>
            <strong style={{ color: 'var(--text-dark)' }}>Impact:</strong> {project.outcome}
          </p>
        </div>

        {/* Tech / Tool Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '4px' }}>
          {project.tools.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: '8px' }}>
          <Link
            to="contact"
            smooth
            duration={600}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '13.5px', cursor: 'pointer' }}
          >
            <FiExternalLink size={14} />
            Inquire About Similar Work
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected Work & Engagements"
      style={{
        padding: '100px 0',
        background: 'var(--bg)',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p
            style={{
              color: '#a67b52',
              fontWeight: '700',
              fontSize: '13px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Selected Work
          </p>
          <h2
            id="projects-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800' }}
          >
            Experience Highlights
          </h2>
          <p style={{ marginTop: '20px', color: 'var(--text)', maxWidth: '540px', margin: '20px auto 0', fontSize: '15px' }}>
            Proven remote engagements demonstrating rigorous quality assurance, streamlined digital operations, and conversion support.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <Link
            to="contact"
            smooth
            duration={600}
            id="view-all-projects-btn"
            className="btn-secondary"
            style={{ padding: '13px 34px', fontSize: '15px', cursor: 'pointer' }}
          >
            <FiMail size={16} />
            Discuss A Project Scope
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
