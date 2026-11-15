export const profile = {
  name: 'Pooja S',
  positioning: 'Backend & AI Developer',
  status: 'Backend & AI roles · Graduating 2027',
  photoCaption: 'Chennai, 2026',
  lastUpdated: 'Nov 2026',
  photo: { webp: '/pooja.webp', jpg: '/pooja.jpg', alt: 'Portrait of Pooja S smiling outdoors' },
  resume: { href: '/assets/Pooja_S_Resume.pdf', fileName: 'Pooja_S_Resume.pdf' },
};

export const links = {
  email: 'poojasuku0606@gmail.com',
  github: { url: 'https://github.com/pooja-s6', handle: 'pooja-s6' },
  linkedin: { url: 'https://linkedin.com/in/pooja-s2006', handle: 'pooja-s2006' },
  leetcode: { url: 'https://leetcode.com/u/pooja_0606/', handle: 'pooja_0606' },
  skillrack: { url: 'https://www.skillrack.com/faces/ui/profile.xhtml?id=560723', handle: '560723' },
  // TODO: create a form at formspree.io and put its ID here (e.g. 'xyzabcd'); empty falls back to mailto.
  formspreeId: '',
};

export const intro = [
  "I build the part of software most people never see: the **APIs, databases and AI pipelines** that make a product work. I'm a final-year CSE (Honours in Data Science) student at Velammal Engineering College, Chennai, and a **Backend Developer Intern at Hexaware Technologies**, building FastAPI services for an AI education platform.",
  "Across five internships I've shipped a real-time quiz app used by **200+ students**, a role-based legal aid platform, and a multi-tenant RAG system with permission-aware caching.",
];

export const exploring = ['Agentic AI', 'LangGraph', 'System design'];

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  tags: string[];
  points: string[];
};

export const experience: Experience[] = [
  {
    id: 'hexaware',
    company: 'Hexaware Technologies',
    role: 'Backend Developer Intern',
    location: 'Remote',
    period: 'Feb 2026 – Sep 2026',
    current: false,
    tags: ['FastAPI', 'PostgreSQL', 'REST APIs', 'LLM Pipelines'],
    points: [
      'Building backend services for an **AI-powered education platform** with **FastAPI, PostgreSQL and REST APIs**.',
      'Designing and implementing backend modules with cross-functional teams in **Agile sprints**, including **production debugging**.',
      'Integrating **AI workflows** into backend services while keeping the architecture clean and maintainable.',
    ],
  },
  {
    id: 'flyhigh',
    company: 'FlyHigh Educational Institute',
    role: 'Full Stack Developer Intern',
    location: 'Remote',
    period: 'Oct 2025 – Jan 2026',
    tags: ['React', 'Firebase', 'Vercel'],
    points: [
      'Built **QuizFlow** with a **three-member team** at an IIT professor-led startup: a real-time quiz platform now used by **200+ students**.',
      'Designed the **Firebase** schema and **React** modules that keep leaderboards and scores in sync across **concurrent live sessions**.',
      'Deployed on **Vercel** and handled debugging, feature requests and production support.',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Springboard',
    role: 'Java Developer Intern',
    location: 'Virtual',
    period: 'Nov 2025 – Jan 2026',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'REST APIs', 'Git'],
    points: [
      'Built the **Legal Aid Matching Platform** with a **five-member Agile team** using **Java, Spring Boot and PostgreSQL**.',
      'Designed the **REST APIs**, backend modules and relational schema behind role-based case management across **3 user roles**.',
      'Worked in a **Git feature-branch** workflow, resolving merge conflicts along the way.',
      'Earned the **Java Foundation** certification.',
    ],
  },
  {
    id: 'ibm',
    company: 'IBM SkillsBuild',
    role: 'AI/ML Intern',
    location: 'Virtual',
    period: 'Jun – Jul 2025',
    tags: ['Python'],
    points: [
      'Built an employee **salary prediction** model using supervised machine learning.',
      'Trained and compared **KNN and Logistic Regression**, covering preprocessing, feature engineering and evaluation.',
    ],
  },
  {
    id: 'avps',
    company: 'AVPS Technologies',
    role: 'Software Engineering Intern',
    location: 'Virtual',
    period: 'Dec 2024 – Sep 2025',
    tags: ['Java', 'Spring Boot', 'Flask', 'MongoDB', 'Docker', 'Playwright', 'Microservices', 'React', 'REST APIs'],
    points: [
      'Spent **ten months** on a **voice-enabled e-commerce platform**, building REST APIs that integrate **Whisper** speech recognition with **Flask and Spring Boot**.',
      'Applied layered architecture and dependency injection, and deployed with **Docker on JBoss/WildFly**.',
      'Wrote **Playwright** automation tests, did manual testing and supported production issues.',
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  summary: string;
  details: string[];
  problem: string;
  stack: string[];
  github: string;
  live: string;
  image?: string;
  imageCaption?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'multitenant-rag',
    title: 'Multi-Tenant RAG Platform',
    year: '2026',
    summary: "Ask questions over private documents and get cited answers, with each tenant's data and permissions kept separate.",
    problem: 'Teams need private document Q&A without leaking data across tenants or roles.',
    details: [
      '**JWT authentication** and role-based, per-document permissions.',
      'Permission-scoped **semantic caching in Redis** plus complexity-based **LLM routing**, to cut cost and avoid redundant inference.',
      'Tenant-aware vector retrieval with **pgvector**, backed by automated tests for auth, permissions and caching.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'React', 'Docker'],
    github: 'https://github.com/pooja-s6/multitenant-rag',
    live: '',
    image: '/projects/multitenant-rag.webp',
    featured: true,
  },
  {
    id: 'buglens',
    title: 'BugLens AI',
    year: '2026',
    summary: 'An AI assistant for bug triage that classifies reports, finds duplicates and suggests root causes.',
    problem: 'Bug reports pile up faster than teams can triage them by hand.',
    details: [
      'Fine-tuned a **BERT** classifier to **88.33% test accuracy**.',
      '**FAISS** vector search to retrieve similar past bug reports.',
      'Modular pipeline from parsing to classification, retrieval and AI-assisted root-cause analysis, with guardrails and **PostgreSQL** persistence.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'BERT', 'FAISS', 'XGBoost'],
    github: '', // TODO: no public BugLens repo under github.com/pooja-s6; add the repo URL
    live: 'https://buglens-ai-coral.vercel.app/',
    image: '/projects/buglens.webp',
    featured: true,
  },
  {
    id: 'quizflow',
    title: 'QuizFlow',
    year: '2025',
    summary: 'Live quiz rooms with instant leaderboards, used by 200+ students.',
    problem: 'Educators needed live quizzes that stay in sync for every student in the room.',
    details: [
      '**Real-time sync** of scores and leaderboards across concurrent sessions.',
      'Session control, performance tracking and an **analytics view** for educators.',
    ],
    stack: ['React', 'Firebase', 'Vercel'],
    github: 'https://github.com/FlyHighSkills/eduflex_final',
    live: 'https://eduflex-zeta.vercel.app/',
    image: '/projects/quizflow.webp',
    featured: true,
  },
  {
    id: 'tutorx',
    title: 'TutorX',
    year: '2026',
    summary: 'An AI tutor that answers the question a student actually asked, on mobile.',
    problem: 'Students need academic help on their phones, not another desktop chatbot.',
    details: [
      '**OpenAI**-powered chatbot for personalized academic guidance, served by a **FastAPI** backend.',
      '**React Native** mobile app, built with a team end to end.',
    ],
    stack: ['FastAPI', 'React Native', 'PostgreSQL', 'OpenAI'],
    github: 'https://github.com/pooja-s6/pod3',
    live: '',
  },
  {
    id: 'legal-aid',
    title: 'Legal Aid Matching Platform',
    year: '2025',
    summary: 'One place for citizens, NGOs and lawyers to match cases and follow them through.',
    problem: 'Citizens, NGOs and lawyers had no shared place to match and track legal cases.',
    details: [
      'Case-matching logic and **role-based access** workflows across **3 user roles**.',
      '**Analytics dashboard** for tracking case progress.',
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/pooja-s6/legal-aid-matching-platform',
    live: '',
  },
  {
    id: 'vocalmart',
    title: 'VocalMart',
    year: '2025',
    summary: 'Shop by speaking: voice search for an e-commerce store.',
    problem: 'Browsing an online store is hard when your hands are busy.',
    details: [
      'Voice-driven product search using the **Web Speech API**.',
      '**REST APIs** for products, cart and orders, with a **MongoDB** catalog.',
    ],
    stack: ['Spring Boot', 'React', 'MongoDB'],
    github: 'https://github.com/pooja-s6/vocalmart',
    live: '',
  },
];

export type SkillKind = 'primary' | 'also';

export type SkillItem = {
  name: string;
  kind: SkillKind;
  usedIn: string[];
};

export type SkillLayer = {
  id: string;
  number: string;
  title: string;
  skills: SkillItem[];
};

export const skillLayers: SkillLayer[] = [
  {
    id: 'api',
    number: '01/05',
    title: 'Build the API',
    skills: [
      { name: 'FastAPI', kind: 'primary', usedIn: ['Hexaware Technologies', 'Multi-Tenant RAG Platform', 'BugLens AI', 'TutorX'] },
      { name: 'Spring Boot', kind: 'primary', usedIn: ['Infosys Springboard', 'AVPS Technologies', 'Legal Aid Matching Platform', 'VocalMart'] },
      { name: 'REST APIs', kind: 'primary', usedIn: ['Hexaware Technologies', 'Infosys Springboard', 'AVPS Technologies'] },
      { name: 'Flask', kind: 'also', usedIn: ['AVPS Technologies'] },
      { name: 'Microservices', kind: 'also', usedIn: ['AVPS Technologies'] },
    ],
  },
  {
    id: 'data',
    number: '02/05',
    title: 'Store the data',
    skills: [
      { name: 'PostgreSQL', kind: 'primary', usedIn: ['Hexaware Technologies', 'Infosys Springboard', 'Multi-Tenant RAG Platform', 'BugLens AI', 'TutorX', 'Legal Aid Matching Platform'] },
      { name: 'Redis', kind: 'primary', usedIn: ['Multi-Tenant RAG Platform'] },
      { name: 'pgvector', kind: 'also', usedIn: ['Multi-Tenant RAG Platform'] },
      { name: 'MongoDB', kind: 'also', usedIn: ['AVPS Technologies', 'VocalMart'] },
      { name: 'Firebase', kind: 'also', usedIn: ['FlyHigh Educational Institute', 'QuizFlow'] },
    ],
  },
  {
    id: 'ai',
    number: '03/05',
    title: 'Make it intelligent',
    skills: [
      { name: 'RAG', kind: 'primary', usedIn: ['Multi-Tenant RAG Platform'] },
      { name: 'LLM Pipelines', kind: 'primary', usedIn: ['Multi-Tenant RAG Platform', 'Hexaware Technologies'] },
      { name: 'Vector Databases', kind: 'also', usedIn: ['Multi-Tenant RAG Platform', 'BugLens AI'] },
      { name: 'LangGraph', kind: 'also', usedIn: ['Multi-Tenant RAG Platform'] },
      { name: 'Ollama', kind: 'also', usedIn: ['Multi-Tenant RAG Platform'] },
      { name: 'OpenAI', kind: 'also', usedIn: ['TutorX'] },
      { name: 'BERT / FAISS', kind: 'also', usedIn: ['BugLens AI'] },
    ],
  },
  {
    id: 'ui',
    number: '04/05',
    title: 'Show it to people',
    skills: [
      {
        name: 'React',
        kind: 'primary',
        usedIn: [
          'FlyHigh Educational Institute',
          'Infosys Springboard',
          'AVPS Technologies',
          'QuizFlow',
          'Multi-Tenant RAG Platform',
          'BugLens AI',
          'Legal Aid Matching Platform',
          'VocalMart',
        ],
      },
      { name: 'React Native', kind: 'also', usedIn: ['TutorX'] },
    ],
  },
  {
    id: 'ship',
    number: '05/05',
    title: 'Ship and test it',
    skills: [
      { name: 'Docker', kind: 'primary', usedIn: ['AVPS Technologies', 'Multi-Tenant RAG Platform'] },
      { name: 'AWS', kind: 'also', usedIn: ['AWS Solutions Architecture Simulation (Forage)'] },
      { name: 'Git', kind: 'also', usedIn: ['Infosys Springboard'] },
      { name: 'Playwright', kind: 'also', usedIn: ['AVPS Technologies'] },
    ],
  },
];

export const languageSkills = {
  primary: [
    { name: 'Python', usedIn: ['IBM SkillsBuild', 'BugLens AI', 'Multi-Tenant RAG Platform'] },
    { name: 'Java', usedIn: ['Infosys Springboard', 'AVPS Technologies'] },
  ],
  also: [{ name: 'C++', usedIn: [] as string[] }, { name: 'C', usedIn: [] as string[] }],
};

export const foundationsLine =
  'Strong foundations in DSA, OOP, operating systems, DBMS, computer networks and system design.';

export const allSkills = [
  ...skillLayers.flatMap((layer) => layer.skills),
  ...languageSkills.primary,
  ...languageSkills.also,
];

export type PlaceRef = {
  label: string;
  year: string;
  targetId: string;
  kind: 'work' | 'project' | 'recognition';
};

const placeCatalog: PlaceRef[] = [
  ...experience.map((item) => ({
    label: item.company,
    year: item.period.match(/\d{4}/g)?.at(-1) || item.period,
    targetId: item.id,
    kind: 'work' as const,
  })),
  ...projects.map((item) => ({
    label: item.title,
    year: item.year,
    targetId: item.id,
    kind: 'project' as const,
  })),
  {
    label: 'AWS Solutions Architecture Simulation (Forage)',
    year: '2025',
    targetId: 'recognition',
    kind: 'recognition',
  },
];

export const resolvePlace = (label: string) => placeCatalog.find((place) => place.label === label);

export type Highlight = {
  id: string;
  title: string;
  detail: string;
  year: string;
  outOf?: string; // TODO: Debug Relay team count, e.g. '48'
  built?: string; // TODO: one-line "what I built"; hidden when empty
};

export const highlights: Highlight[] = [
  {
    id: 'debug-relay',
    title: '6th place, Debug Relay',
    detail: 'Team debugging event, REC College',
    year: '2026',
    // TODO: outOf: 'N',
    // TODO: built: '...',
  },
  {
    id: 'sih',
    title: 'Smart India Hackathon',
    detail: 'Internal round, Velammal Engineering College',
    year: '2025',
  },
  {
    id: 'cognizant',
    title: 'Cognizant Hackathon',
    detail: 'Participant',
    year: '2026',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url: string;
};

export const certifications: Certification[] = [
  { name: 'Java Foundation', issuer: 'Infosys Springboard', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AI Fundamentals', issuer: 'IBM SkillsBuild', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AWS Solutions Architecture Simulation', issuer: 'Forage', year: '2025', url: '' }, // TODO: credential URL
  { name: 'NLP and Deep Learning', issuer: 'NPTEL', year: '', url: '' }, // TODO: year and credential URL
  { name: 'Software Project Management', issuer: 'NPTEL', year: '', url: '' }, // TODO: year and credential URL
];

export const certificationGroups = [
  { issuer: 'Infosys Springboard', items: certifications.filter((item) => item.issuer === 'Infosys Springboard') },
  { issuer: 'IBM SkillsBuild', items: certifications.filter((item) => item.issuer === 'IBM SkillsBuild') },
  { issuer: 'Forage', items: certifications.filter((item) => item.issuer === 'Forage') },
  { issuer: 'NPTEL', items: certifications.filter((item) => item.issuer === 'NPTEL') },
];

export const alsoRecognition = 'Additional: technical symposiums across colleges, 2024 – 2026.';

export const sections = [
  { id: 'work', name: 'Work', heading: 'Work', note: 'Five internships · reverse chronological' },
  { id: 'featured', name: 'Projects', heading: 'Featured projects', note: 'Selected work with demos' },
  { id: 'projects', name: 'All projects', heading: 'All projects', note: 'Source available on GitHub' },
  { id: 'skills', name: 'Skills', heading: 'Skills', note: 'Select a skill to see where it was used' },
  { id: 'recognition', name: 'Recognition', heading: 'Recognition', note: 'Hackathons and certifications' },
  { id: 'contact', name: 'Contact', heading: 'Contact', note: '' },
];
