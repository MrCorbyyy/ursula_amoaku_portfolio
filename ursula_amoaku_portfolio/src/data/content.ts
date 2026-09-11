export interface SiteContent {
  name: string;
  title: string;
  heroGreeting: string;
  heroCredentials: string;
  tagline: string;
  supportingStatement: string;
  email: string;
  linkedin: string;
  location: string;
  timezone: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface TechnicalEdgeArea {
  label: string;
  detail: string;
}

export const site: SiteContent = {
  name: 'Ursula Aseye Amoaku',
  title: 'Remote Digital Operations & Technology Professional',
  heroGreeting: "Hi, I'm",
  heroCredentials:
    'Remote Digital Operations & Technology Professional · App Testing · Digital Operations',
  tagline:
    'Remote digital operations support for businesses that need technical reliability without the overhead.',
  supportingStatement:
    'Helping businesses reduce operational overload through technology, digital operations, and reliable remote support.',
  email: 'ursulaaseyeamoaku@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ursula-aseye-amoaku',
  location: 'Ghana',
  timezone: 'GMT',
};

export const about = {
  paragraphs: [
    'I am a remote professional based in Ghana with hands-on experience across app testing, AI training, data-related work, software projects, and digital marketing. Much of my work has been done remotely with teams and clients in different locations.',
    'That background gives me a practical understanding of how technology, process, and communication need to work together — especially when teams are distributed and operational demands are high.',
    'Today, I help businesses with structured app testing, user support, and digital marketing focused on measurable outcomes. I am also building a technology-enabled remote services business, with an emphasis on reliable delivery rather than inflated claims.',
  ],
};

export const capabilities: CapabilityItem[] = [
  {
    id: 'testing',
    title: 'App Testing & QA',
    description:
      'Testing applications, identifying bugs and usability issues, documenting findings, and providing structured feedback to help teams improve quality before release.',
    highlights: [
      'Functional and usability testing',
      'Bug documentation and reporting',
      'Structured feedback for development teams',
    ],
  },
  {
    id: 'support',
    title: 'App & User Support',
    description:
      'Helping businesses manage user issues, support requests, feedback, and basic troubleshooting so customers get timely, clear responses.',
    highlights: [
      'User issue triage and follow-up',
      'Support request management',
      'Feedback collection and routing',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Customer Acquisition',
    description:
      'Helping businesses generate and convert opportunities through email marketing, lead generation, outbound outreach, advertising, SEO, and performance tracking.',
    highlights: [
      'Email marketing and campaign support',
      'Lead generation and outreach',
      'SEO, advertising, and analytics tracking',
    ],
  },
];

export const technicalEdge = {
  intro:
    'I bring a technical mindset to digital operations — not just task execution, but structured thinking about quality, data, and reliable remote delivery.',
  areas: [
    {
      label: 'AWS',
      detail: 'AWS Certified — cloud fundamentals and practical application',
    },
    {
      label: 'Software Testing',
      detail: 'Structured QA, bug reporting, and usability feedback',
    },
    {
      label: 'AI',
      detail: 'AI training and data-related project experience',
    },
    {
      label: 'Data',
      detail: 'Data handling, organization, and analysis support',
    },
    {
      label: 'Digital Technologies',
      detail: 'Software and technology project experience',
    },
    {
      label: 'Remote Collaboration',
      detail: 'Distributed teams, async communication, and reliable delivery',
    },
  ],
};
