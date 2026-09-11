export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  role: string;
  tools: string[];
  outcome: string;
  link: string | null;
  isPlaceholder?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'project-1',
    name: 'Mobile & Web App QA Testing',
    description:
      'Conducted structured functional, UI responsiveness, and regression testing across distributed web and mobile platforms.',
    role: 'QA Specialist',
    tools: ['Functional QA', 'Jira', 'Bug Tracking', 'Test Cases'],
    outcome:
      'Reduced pre-release defects and accelerated release cycles through structured bug documentation.',
    link: null,
  },
  {
    id: 'project-2',
    name: 'Digital Operations & User Support',
    description:
      'Architected user support routing, issue triage procedures, and troubleshooting workflows for a software team.',
    role: 'Operations Specialist',
    tools: ['AWS Fundamentals', 'Support Triage', 'SOPs', 'Async Workflow'],
    outcome:
      'Maintained consistent response SLAs and streamlined technical escalations.',
    link: null,
  },
  {
    id: 'project-3',
    name: 'B2B Outreach & Growth Support',
    description:
      'Built targeted lead generation workflows and structured outbound email campaigns with performance analytics.',
    role: 'Outbound Specialist',
    tools: ['Email Marketing', 'Lead Sourcing', 'Analytics'],
    outcome:
      'Delivered qualified prospect pipelines with transparent tracking.',
    link: null,
  },
];
