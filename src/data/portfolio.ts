export const profile = {
  name: 'Pooja S',
  displayName: 'Pooja S.',
  positioning: 'Backend & AI Developer',
  roles: ['Backend Developer', 'AI Systems Builder', 'Full-Stack Engineer'],
  tagline:
    'I build backend systems and AI applications, from RAG pipelines to real-time products used by real students.',
  location: 'Chennai, IN',
  footerLine: 'Backend & AI Developer building APIs, RAG systems, and the products around them.',
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

export const facts = [
  { label: 'Role', value: 'Backend Developer Intern, Hexaware Technologies' },
  { label: 'Studying', value: 'B.E. CSE (Data Science), Velammal Engineering College, 2027' },
  { label: 'Based', value: 'Chennai, India' },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  impact: string;
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
    impact: 'Building FastAPI + PostgreSQL services and AI workflows for an AI-powered education platform.',
    tags: ['FastAPI', 'PostgreSQL', 'REST APIs', 'AI workflows'],
    points: [
      'Developing scalable backend services for an **AI-powered education platform** using **FastAPI**, **PostgreSQL** and REST APIs.',
      'Designing and implementing backend modules with cross-functional teams in an **Agile** workflow.',
      'Integrating **AI workflows** into backend services; working on architecture, API design and **production debugging**.',
    ],
  },
  {
    id: 'flyhigh',
    company: 'FlyHigh Educational Institute',
    role: 'Full Stack Developer Intern',
    location: 'Remote',
    period: 'Oct 2025 – Jan 2026',
    impact: 'Built QuizFlow with React and Firebase, used by 200+ students.',
    tags: ['React', 'Firebase', 'Vercel'],
    points: [
      'Worked in a **three-member team** at an IIT professor-led startup to build **QuizFlow**, a real-time quiz platform used by **200+ students**.',
      'Built **React** frontend modules and the **Firebase** schema for concurrent real-time quiz sessions.',
      'Deployed on **Vercel**; handled debugging, feature enhancements and production support.',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Springboard',
    role: 'Java Developer Intern',
    location: 'Virtual',
    period: 'Nov 2025 – Jan 2026',
    impact: 'Built a role-based legal aid platform with Spring Boot, in a five-member Agile team.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    points: [
      'Built the **Legal Aid Matching Platform** in a **five-member Agile team**.',
      'Designed backend modules, **REST APIs** and a relational schema for **role-based** legal case management; used Git feature branches and resolved merge conflicts.',
      'Earned the **Java Foundation** certification.',
    ],
  },
  {
    id: 'ibm',
    company: 'IBM SkillsBuild',
    role: 'AI/ML Intern',
    location: 'Virtual',
    period: 'Jun – Jul 2025',
    impact: 'Built and compared KNN and Logistic Regression salary-prediction models.',
    tags: ['Python', 'scikit-learn', 'KNN', 'Logistic Regression'],
    points: [
      'Built an employee **salary prediction** model with supervised ML.',
      'Trained and compared **KNN** and **Logistic Regression**; covered data preprocessing, feature engineering and model evaluation.',
    ],
  },
  {
    id: 'avps',
    company: 'AVPS Technologies',
    role: 'Software Engineering Intern',
    location: 'Virtual',
    period: 'Dec 2024 – Sep 2025',
    impact: 'Ten months on a voice-enabled e-commerce platform (Whisper, Spring Boot, Flask, Docker, Playwright).',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Docker', 'Flask', 'Playwright'],
    points: [
      'Spent **ten months** building REST APIs for a **voice-enabled e-commerce** platform, integrating **Whisper** speech recognition with Flask and Spring Boot services.',
      'Worked with layered architecture and dependency injection; used **Docker** and JBoss/WildFly for deployments.',
      'Wrote **Playwright** automation tests and did manual testing and production support.',
    ],
  },
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  github: string;
  live: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Multi-Tenant RAG Platform',
    year: '2026',
    summary: 'Permission-scoped document Q&A with cited answers, Redis semantic caching and LLM routing.',
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'React', 'Docker'],
    github: 'https://github.com/pooja-s6/multitenant-rag',
    live: '',
    image: '', // TODO: add /projects/multitenant-rag.webp
  },
  {
    title: 'BugLens AI',
    year: '', // TODO: add the year
    summary: 'Bug classification, duplicate detection and root-cause help; BERT classifier at 88.33% accuracy, FAISS retrieval.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'BERT', 'FAISS', 'XGBoost'],
    github: '', // TODO: github.com/pooja-s6/BuglensAI returns 404; add the public repo URL
    live: 'https://buglens-ai-coral.vercel.app/',
    image: '/projects/buglens.webp',
  },
  {
    title: 'QuizFlow',
    year: '2025',
    summary: 'Real-time quiz rooms with live leaderboards for 200+ students.',
    stack: ['React', 'Firebase', 'Vercel'],
    github: 'https://github.com/FlyHighSkills/eduflex_final',
    live: 'https://eduflex-zeta.vercel.app/',
    image: '/projects/quizflow.webp',
  },
  {
    title: 'TutorX',
    year: '2026',
    summary: 'AI tutoring chatbot with FastAPI and React Native.',
    stack: ['FastAPI', 'React Native', 'PostgreSQL', 'OpenAI'],
    github: 'https://github.com/pooja-s6/pod3',
    live: '',
    image: '', // TODO: add /projects/tutorx.webp
  },
  {
    title: 'Legal Aid Matching Platform',
    year: '2025',
    summary: 'Role-based case matching across 3 user roles with an analytics dashboard.',
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/pooja-s6/legal-aid-matching-platform',
    live: '',
    image: '', // TODO: add /projects/legal-aid.webp
  },
  {
    title: 'VocalMart',
    year: '2025',
    summary: 'Voice-search e-commerce with the Web Speech API.',
    stack: ['Spring Boot', 'React', 'MongoDB'],
    github: 'https://github.com/pooja-s6/vocalmart',
    live: '',
    image: '', // TODO: add /projects/vocalmart.webp
  },
];

export const skillRows = [
  { label: 'Languages', items: ['Java', 'Python', 'C++', 'C'] },
  {
    label: 'Backend & AI',
    items: [
      'Spring Boot',
      'FastAPI',
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

export const certifications = [
  { name: 'Java Foundation', issuer: 'Infosys Springboard', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AI Fundamentals', issuer: 'IBM SkillsBuild', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AI/ML Internship', issuer: 'IBM SkillsBuild', year: '2025', url: '' }, // TODO: credential URL
  { name: 'AWS Solutions Architecture Simulation', issuer: 'Forage', year: '2025', url: '' }, // TODO: credential URL
  { name: 'NLP and Deep Learning', issuer: 'NPTEL', year: '', url: '' }, // TODO: year and credential URL
  { name: 'Software Project Management', issuer: 'NPTEL', year: '', url: '' }, // TODO: year and credential URL
];

export const achievements = [
  { title: '6th place, Debug Relay (team event)', detail: 'REC College', year: '2026' },
  { title: 'Cognizant Hackathon', detail: 'Participant', year: '2026' },
  { title: 'Smart India Hackathon', detail: 'Internal round, VEC', year: '2025' },
  { title: 'Technical symposiums', detail: 'Across colleges', year: '2024 – 2026' },
];

export type Recommendation = {
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedin: string;
};

// Only add real recommendations (for example, copied from LinkedIn with permission).
export const recommendations: Recommendation[] = [];

export const about = {
  education: [
    {
      degree: 'B.E. Computer Science and Engineering (Honours in Data Science)',
      school: 'Velammal Engineering College, Chennai',
      period: '2023 – 2027',
      score: 'CGPA 8.64 / 10',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Sri Venkateshwara Matriculation Higher Secondary School',
      period: '2022 – 2023',
      score: '86%',
    },
  ],
  interests: ['Full-stack development', 'Backend design', 'UI/UX', 'Cloud deployment', 'Computer vision'],
  learning: ['Agentic AI', 'LangGraph', 'System Design'],
};

export const intro = [
  "I'm a **backend and AI developer** and a final-year CSE student at Velammal Engineering College, Chennai. I like the part of software most people never see: **APIs**, databases, and the pipelines that make AI features actually work.",
  "Right now I'm a backend intern at **Hexaware Technologies**, building FastAPI services for an AI education platform. Before that, I shipped **QuizFlow**, a real-time quiz app used by **200+ students**, across **five internships** in total.",
];

export const sections = [
  { id: 'work', name: 'Work', note: 'five internships, newest first' },
  { id: 'projects', name: 'Projects', note: 'things I built and shipped' },
  { id: 'skills', name: 'Skills', note: 'hover one to see where I used it' },
  { id: 'recognition', name: 'Recognition', note: 'small wins along the way' },
  { id: 'contact', name: 'Contact', note: 'say hi' },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9+#]/g, '');

export const skillUsage = (skill: string) => {
  const key = normalize(skill);
  const places = [
    ...experience.filter((item) => item.tags.some((tag) => normalize(tag) === key)).map((item) => item.company),
    ...projects.filter((item) => item.stack.some((tag) => normalize(tag) === key)).map((item) => item.title),
  ];
  return [...new Set(places)];
};
