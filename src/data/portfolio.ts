export const profile = {
  name: 'Pooja S',
  positioning: 'Backend & AI Developer',
  status: 'Open to backend & AI roles · Graduating 2027',
  location: 'Based in Chennai, India',
  photo: { webp: '/pooja.webp', jpg: '/pooja.jpg', alt: 'Portrait of Pooja S smiling outdoors' },
  resume: { href: '/assets/Pooja_S_Resume.pdf', fileName: 'Pooja_S_Resume.pdf' },
};

export const links = {
  email: 'pooja.cse.vec2023@gmail.com',
  github: { url: 'https://github.com/pooja-s6', handle: 'pooja-s6' },
  linkedin: { url: 'https://linkedin.com/in/pooja-s2006', handle: 'pooja-s2006' },
  leetcode: { url: 'https://leetcode.com/u/pooja_0606/', handle: 'pooja_0606' },
  skillrack: { url: 'https://www.skillrack.com/faces/ui/profile.xhtml?id=560723', handle: '560723' },
  // TODO: create a form at formspree.io and put its ID here (e.g. 'xyzabcd'); empty falls back to mailto.
  formspreeId: '',
};

export const intro = [
  "I build the part of software most people never see: the **APIs, databases and AI pipelines** that make a product work. I'm a final-year **CSE (Honours in Data Science)** student at Velammal Engineering College, Chennai.",
  "Right now I'm a **Backend Developer Intern at Hexaware Technologies**, building FastAPI services for an AI education platform. Across **five internships** I've shipped a real-time quiz app used by **200+ students** and a role-based legal aid platform, and built a **multi-tenant RAG system** with permission-aware caching.",
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
    period: 'Feb 2026 – Present',
    current: true,
    tags: ['FastAPI', 'PostgreSQL', 'REST APIs'],
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
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
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
    tags: ['Java', 'Spring Boot', 'Flask', 'MongoDB', 'Docker', 'Playwright'],
    points: [
      'Spent **ten months** on a **voice-enabled e-commerce platform**, building REST APIs that integrate **Whisper** speech recognition with **Flask and Spring Boot**.',
      'Applied layered architecture and dependency injection, and deployed with **Docker on JBoss/WildFly**.',
      'Wrote **Playwright** automation tests, did manual testing and supported production issues.',
    ],
  },
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  details: string[];
  stack: string[];
  github: string;
  live: string;
  image?: string;
  imageCaption?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Multi-Tenant RAG Platform',
    year: '2026',
    summary: "Ask questions over private documents and get cited answers, with each tenant's data and permissions kept separate.",
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
    title: 'BugLens AI',
    year: '2026',
    summary: 'An AI assistant for bug triage that classifies reports, finds duplicates and suggests root causes.',
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
    title: 'QuizFlow',
    year: '2025',
    summary: 'Live quiz rooms with instant leaderboards, used by 200+ students.',
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
    title: 'TutorX',
    year: '2026',
    summary: 'An AI tutor that answers the question a student actually asked, on mobile.',
    details: [
      '**OpenAI**-powered chatbot for personalized academic guidance, served by a **FastAPI** backend.',
      '**React Native** mobile app, built with a team end to end.',
    ],
    stack: ['FastAPI', 'React Native', 'PostgreSQL', 'OpenAI'],
    github: 'https://github.com/pooja-s6/pod3',
    live: '',
  },
  {
    title: 'Legal Aid Matching Platform',
    year: '2025',
    summary: 'One place for citizens, NGOs and lawyers to match cases and follow them through.',
    details: [
      'Case-matching logic and **role-based access** workflows across **3 user roles**.',
      '**Analytics dashboard** for tracking case progress.',
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/pooja-s6/legal-aid-matching-platform',
    live: '',
  },
  {
    title: 'VocalMart',
    year: '2025',
    summary: 'Shop by speaking: voice search for an e-commerce store.',
    details: [
      'Voice-driven product search using the **Web Speech API**.',
      '**REST APIs** for products, cart and orders, with a **MongoDB** catalog.',
    ],
    stack: ['Spring Boot', 'React', 'MongoDB'],
    github: 'https://github.com/pooja-s6/vocalmart',
    live: '',
  },
];

export const skillRows = [
  { label: 'Languages', items: ['Java', 'Python', 'C++', 'C'] },
  {
    label: 'Backend & AI',
    items: [
      'Spring Boot',
      'FastAPI',
      'Flask',
      'Node.js',
      'Express',
      'REST APIs',
      'Microservices',
      'RAG',
      'LLM Pipelines',
      'Vector Databases',
      'LangGraph',
      'Ollama',
      'OpenAI',
      'JWT',
    ],
  },
  {
    label: 'Frontend & Data',
    items: ['React', 'React Native', 'HTML5', 'CSS3', 'PostgreSQL', 'pgvector', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    label: 'Foundations & DevOps',
    items: [
      'DSA',
      'OOP',
      'OS',
      'DBMS',
      'Computer Networks',
      'System Design',
      'Docker',
      'AWS',
      'Git',
      'CI/CD',
      'Postman',
      'Playwright',
      'Maven',
    ],
  },
];

const skillUsedIn: Record<string, string[]> = {
  Java: ['Infosys Springboard', 'AVPS Technologies'],
  Python: ['IBM SkillsBuild', 'BugLens AI', 'Multi-Tenant RAG Platform'],
  'Spring Boot': ['Infosys Springboard', 'AVPS Technologies', 'Legal Aid Matching Platform', 'VocalMart'],
  FastAPI: ['Hexaware Technologies', 'Multi-Tenant RAG Platform', 'BugLens AI', 'TutorX'],
  Flask: ['AVPS Technologies'],
  'REST APIs': ['Hexaware Technologies', 'Infosys Springboard', 'AVPS Technologies'],
  RAG: ['Multi-Tenant RAG Platform'],
  'Vector Databases': ['Multi-Tenant RAG Platform', 'BugLens AI'],
  OpenAI: ['TutorX'],
  JWT: ['Multi-Tenant RAG Platform'],
  React: ['QuizFlow', 'Multi-Tenant RAG Platform', 'BugLens AI', 'Legal Aid Matching Platform', 'VocalMart'],
  'React Native': ['TutorX'],
  PostgreSQL: ['Hexaware Technologies', 'Multi-Tenant RAG Platform', 'BugLens AI', 'TutorX', 'Legal Aid Matching Platform'],
  pgvector: ['Multi-Tenant RAG Platform'],
  MongoDB: ['AVPS Technologies', 'VocalMart'],
  Firebase: ['QuizFlow'],
  Redis: ['Multi-Tenant RAG Platform'],
  Docker: ['AVPS Technologies', 'Multi-Tenant RAG Platform'],
  Git: ['Infosys Springboard'],
  Playwright: ['AVPS Technologies'],
};

export const skillUsage = (skill: string) => skillUsedIn[skill] ?? [];

export const certifications = [
  { name: 'Java Foundation', issuer: 'Infosys Springboard', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AI Fundamentals', issuer: 'IBM SkillsBuild', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AI/ML Internship', issuer: 'IBM SkillsBuild', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AWS Solutions Architecture Simulation', issuer: 'Forage', year: '2025', url: '' }, // TODO: credential URL
  { name: 'NLP and Deep Learning', issuer: 'NPTEL', year: '', url: '' }, // TODO: year and credential URL
  { name: 'Software Project Management', issuer: 'NPTEL', year: '', url: '' }, // TODO: year and credential URL
];

export const achievements = [
  // TODO: add the team count if known, e.g. '6th of N teams'.
  { title: '6th place, Debug Relay', detail: 'Team debugging event, REC College', year: '2026' },
  { title: 'Cognizant Hackathon', detail: 'Participant', year: '2026' },
  { title: 'Smart India Hackathon', detail: 'Internal round, Velammal Engineering College', year: '2025' },
  { title: 'Technical symposiums', detail: 'Across colleges', year: '2024 – 2026' },
];

export const sections = [
  { id: 'work', name: 'Work', heading: 'Work', note: 'five internships, newest first' },
  { id: 'featured', name: 'Projects', heading: 'Featured projects', note: 'my strongest work' },
  { id: 'projects', name: 'All projects', heading: 'All projects', note: 'with source code on GitHub' },
  { id: 'skills', name: 'Skills', heading: 'Skills', note: 'hover one to see where I used it' },
  { id: 'recognition', name: 'Recognition', heading: 'Recognition', note: 'small wins along the way' },
  { id: 'contact', name: 'Contact', heading: 'Say hi', note: '' },
];
