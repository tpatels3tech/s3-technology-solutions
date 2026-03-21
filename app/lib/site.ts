export const site = {
  name: 'S3 Technology Solutions',
  shortName: 'S3 Tech',
  domain: 's3tech.co',
  tagline: 'AI strategy, agentic workflow design, implementation support, and cyber risk guidance for growing organizations.',
  description:
    'S3 Technology Solutions helps teams plan, deliver, and govern AI, agentic, and modern technology initiatives with clear communication and practical execution.',
  contact: {
    calendlyUrl: 'https://outlook.office.com/book/S3TechnologySolutions@s3tech.co/',
    email: 'tpatel@s3tech.co',
    linkedInUrl: 'https://www.linkedin.com/in/tejpatel1',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  home: {
    eyebrow: 'Technology consulting for AI, agentic systems, operations, and risk',
    title: 'A clearer path from AI ambition to governed agentic execution.',
    intro:
      'We help leadership teams turn AI ideas into practical operating models, agentic workflows, and measurable outcomes without drowning projects in jargon.',
    supportingPoints: [
      'Plain-language recommendations your team can act on',
      'Agentic offerings designed around orchestration, oversight, and business value',
      'Execution support that stays aligned with security and governance',
    ],
    primaryCta: { href: '/contact', label: 'Start a conversation' },
    secondaryCta: { href: '/services', label: 'See services' },
  },
  trustPoints: [
    {
      title: 'Business-first thinking',
      description: 'AI and agentic recommendations tied to priorities, constraints, and the decisions leaders actually need to make.',
    },
    {
      title: 'Readable communication',
      description: 'Clear summaries, practical plans, and fewer dense buzzwords so teams can move faster together around fast-moving AI initiatives.',
    },
    {
      title: 'Controls that fit delivery',
      description: 'Security, governance, human review, and risk considerations built into agentic delivery instead of bolted on at the end.',
    },
  ],
  agenticOfferings: [
    {
      title: 'Agentic strategy and use-case design',
      description: 'Identify where autonomous or semi-autonomous workflows can reduce drag, accelerate teams, and still stay within acceptable control boundaries.',
    },
    {
      title: 'Copilot and workflow orchestration',
      description: 'Design internal copilots, multi-step agent workflows, and tool-connected operating patterns that map to real business processes.',
    },
    {
      title: 'Governed AI operations',
      description: 'Introduce escalation paths, human-in-the-loop checkpoints, logging, and policy guardrails so teams can scale AI responsibly.',
    },
  ],
  services: [
    {
      slug: 'ai-strategy',
      name: 'AI strategy and roadmapping',
      summary: 'Shape an AI strategy with clear priorities, governance models, sequencing, and ROI tied to business strategy.',
      details:
        'We help leadership teams shape an AI strategy that aligns to business priorities, identify the right use cases, define governance framework models, and build a roadmap with measurable ROI, operating ownership, and practical execution milestones.',
      outcomes: [
        'AI strategy aligned to enterprise priorities and growth goals',
        'Prioritized use cases with business cases and ROI hypotheses',
        'Governance framework models for responsible AI adoption',
        'Phased roadmap with realistic next steps across data, people, and platforms',
        'Agentic operating-model recommendations, ownership, and human review points',
      ],
      bestFor:
        'Organizations that want to move beyond experimentation and make disciplined AI investment decisions tied to business strategy, governance, and measurable returns.',
    },
    {
      slug: 'implementation',
      name: 'Implementation support',
      summary: 'Hands-on help delivering data, cloud, integration, copilots, and agentic initiatives in a structured way.',
      details:
        'We support execution across planning, architecture, and delivery so teams can launch AI-enabled products, copilots, and agentic workflows without losing sight of quality, accountability, or operating constraints.',
      outcomes: [
        'Implementation planning and delivery support',
        'Practical architecture and integration guidance',
        'Agent orchestration and tool-connection patterns',
        'Operating rhythms, metrics, and decision checkpoints',
        'Human oversight where risk or complexity requires it',
      ],
      bestFor: 'Teams that need experienced delivery support to move AI and agentic work forward while keeping stakeholders aligned.',
    },
    {
      slug: 'cyber-risk',
      name: 'Cyber risk assessment',
      summary: 'Translate technical, operational, and AI-agent risk into a business-readable view of priorities and exposure.',
      details:
        'We review current-state risk, controls, dependencies, and AI-adjacent exposure so leadership has a sharper picture of where to focus and what to address first.',
      outcomes: [
        'Risk posture review and executive summary',
        'Third-party, model, and platform dependency considerations',
        'Control and compliance readiness observations',
        'Prioritized remediation roadmap',
        'Agentic oversight and monitoring recommendations',
      ],
      bestFor: 'Leaders who need a practical picture of technology, AI, and automation risk with a clear path to improvement.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Understand the situation',
      description: 'We start with goals, constraints, stakeholders, and what is already in motion.',
    },
    {
      step: '02',
      title: 'Recommend a practical path',
      description: 'You get a focused plan with tradeoffs, priorities, agentic opportunities, and the work needed to move forward.',
    },
    {
      step: '03',
      title: 'Support delivery',
      description: 'We help teams execute clearly, launch AI and agentic capabilities responsibly, communicate progress, and keep risk in view as the work evolves.',
    },
  ],
  about: {
    title: 'Straightforward guidance for complex technology work.',
    intro:
      'S3 Technology Solutions is built around a simple idea: AI and technology consulting should be easier to understand, easier to act on, and easier to maintain over time.',
    principles: [
      {
        title: 'Clarity over noise',
        description: 'We favor concise recommendations, readable deliverables, and direct communication.',
      },
      {
        title: 'Progress over theater',
        description: 'The goal is useful momentum, not impressive-looking complexity.',
      },
      {
        title: 'Risk-aware execution',
        description: 'Security, governance, human review, and practical controls are part of good delivery, not a separate stream of work.',
      },
    ],
  },
  contactPage: {
    title: 'Let’s talk through what you need and what would actually help.',
    intro:
      'If you are evaluating an initiative, trying to untangle delivery, or want a second opinion on risk and priorities, we can start with a short conversation.',
  },
};

export type SiteContent = typeof site;
