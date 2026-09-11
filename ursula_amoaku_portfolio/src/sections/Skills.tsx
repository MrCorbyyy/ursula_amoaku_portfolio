import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiCheckCircle,
  FiLayout,
  FiFileText,
  FiClipboard,
  FiRefreshCw,
  FiCheckSquare,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiBookOpen,
  FiSettings,
  FiMail,
  FiTarget,
  FiSend,
  FiSearch,
  FiBarChart2,
  FiTrendingUp,
  FiUsers,
  FiMessageSquare,
  FiClock,
  FiShield,
  FiZap,
} from 'react-icons/fi';
import { FaAws, FaSlack, FaJira } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

interface SkillItem {
  name: string;
  icon: ReactNode;
}

interface Category {
  id: string;
  title: string;
  icon: ReactNode;
  color: string;
  bg: string;
  border: string;
  skills: SkillItem[];
}

const skillCategories: Category[] = [
  {
    id: 'testing',
    title: 'App Testing & Quality Assurance',
    icon: <FiCheckSquare size={20} />,
    color: '#a67b52',
    bg: 'rgba(196, 149, 106, 0.08)',
    border: 'rgba(196, 149, 106, 0.28)',
    skills: [
      { name: 'Functional Testing', icon: <FiCheckCircle size={13} /> },
      { name: 'Usability Testing', icon: <FiLayout size={13} /> },
      { name: 'Bug Documentation', icon: <FiFileText size={13} /> },
      { name: 'Test Cases & Plans', icon: <FiClipboard size={13} /> },
      { name: 'Regression Testing', icon: <FiRefreshCw size={13} /> },
      { name: 'Developer Feedback', icon: <FiMessageSquare size={13} /> },
    ],
  },
  {
    id: 'operations',
    title: 'Digital Operations & Cloud Tech',
    icon: <FiCloud size={20} />,
    color: '#8e633d',
    bg: 'rgba(142, 99, 61, 0.08)',
    border: 'rgba(142, 99, 61, 0.26)',
    skills: [
      { name: 'AWS Cloud Fundamentals', icon: <FaAws size={13} /> },
      { name: 'AI Training & Annotation', icon: <FiCpu size={13} /> },
      { name: 'Data Organization', icon: <FiDatabase size={13} /> },
      { name: 'Technical Support', icon: <FiSettings size={13} /> },
      { name: 'Process SOPs', icon: <FiBookOpen size={13} /> },
      { name: 'Troubleshooting', icon: <FiShield size={13} /> },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Acquisition',
    icon: <FiTrendingUp size={20} />,
    color: '#c4956a',
    bg: 'rgba(196, 149, 106, 0.08)',
    border: 'rgba(196, 149, 106, 0.3)',
    skills: [
      { name: 'Email Marketing', icon: <FiMail size={13} /> },
      { name: 'Lead Generation', icon: <FiTarget size={13} /> },
      { name: 'Outbound Outreach', icon: <FiSend size={13} /> },
      { name: 'SEO Fundamentals', icon: <FiSearch size={13} /> },
      { name: 'Performance Analytics', icon: <FiBarChart2 size={13} /> },
      { name: 'Campaign Support', icon: <FiZap size={13} /> },
    ],
  },
  {
    id: 'collaboration',
    title: 'Remote Delivery & Tooling',
    icon: <FiUsers size={20} />,
    color: '#785536',
    bg: 'rgba(120, 85, 54, 0.08)',
    border: 'rgba(120, 85, 54, 0.25)',
    skills: [
      { name: 'Async Collaboration', icon: <FiClock size={13} /> },
      { name: 'Jira Tracking', icon: <FaJira size={13} /> },
      { name: 'Notion Documentation', icon: <SiNotion size={13} /> },
      { name: 'Slack Workflows', icon: <FaSlack size={13} /> },
      { name: 'Feedback Routing', icon: <FiMessageSquare size={13} /> },
      { name: 'Distributed Teams', icon: <FiUsers size={13} /> },
    ],
  },
];

const highlights = [
  {
    icon: <FiCheckSquare size={22} />,
    title: 'Structured QA',
    desc: 'Uncovering edge cases, reproducible bug logs, and structured feedback for devs.',
  },
  {
    icon: <FiCloud size={22} />,
    title: 'AWS Certified',
    desc: 'Certified cloud understanding applied directly to operational stability.',
  },
  {
    icon: <FiShield size={22} />,
    title: 'Reliable Support',
    desc: 'Dependable user issue triage, ticket resolution, and swift problem escalation.',
  },
  {
    icon: <FiClock size={22} />,
    title: 'Async Mindset',
    desc: 'Clear, concise documentation that keeps remote teams aligned without meeting drag.',
  },
  {
    icon: <FiDatabase size={22} />,
    title: 'Data & AI Training',
    desc: 'Rigorous attention to detail in data handling, categorization, and AI datasets.',
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Growth Operations',
    desc: 'Outreach and marketing execution oriented toward real, measurable conversions.',
  },
];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="card"
      style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: category.bg,
            border: `1px solid ${category.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: category.color,
            flexShrink: 0,
          }}
        >
          {category.icon}
        </div>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)' }}>
          {category.title}
        </h3>
      </div>

      {/* Skill pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + i * 0.04, duration: 0.35 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 13px',
              background: category.bg,
              border: `1px solid ${category.border}`,
              borderRadius: '99px',
              fontSize: '12.5px',
              fontWeight: '500',
              color: category.color,
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ opacity: 0.85 }}>{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      aria-label="Skills & Capabilities section"
      style={{
        padding: '100px 0',
        background: 'var(--bg-subtle)',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
            Capabilities &amp; Expertise
          </p>
          <h2
            id="skills-heading"
            className="section-title center"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800' }}
          >
            Core Competencies
          </h2>
          <p style={{ marginTop: '20px', color: 'var(--text)', maxWidth: '560px', margin: '20px auto 0', fontSize: '15px' }}>
            A structured view of how I help technology and business teams eliminate operational bottlenecks with quality and reliability.
          </p>
        </motion.div>

        {/* Category cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '22px',
            marginBottom: '72px',
          }}
        >
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-dark)' }}>
            What I Bring to Your Team
          </h3>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card"
              style={{ padding: '28px 22px', textAlign: 'center' }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(196, 149, 106, 0.1)',
                  border: '1px solid rgba(196, 149, 106, 0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a67b52',
                  margin: '0 auto 16px',
                }}
              >
                {item.icon}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
