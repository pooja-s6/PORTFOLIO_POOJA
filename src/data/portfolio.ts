export const profile = {
  name: 'Pooja S',
  displayName: 'Pooja S.',
  positioning: 'Backend & AI Developer',
  roles: ['Backend Developer', 'AI Systems Builder', 'Full-Stack Engineer'],
  tagline:
    'I build backend systems and AI applications, from RAG pipelines to real-time products used by real students.',
  currentLine: 'Backend Developer Intern at Hexaware · B.E. CSE (Data Science) · Chennai',
  footerLine: 'Backend & AI Developer building APIs, RAG systems, and the products around them.',
  photo: { webp: '/pooja.webp', jpg: '/pooja.jpg', alt: 'Portrait of Pooja S smiling outdoors' },
  resume: { href: '/assets/Pooja_S_Resume.pdf', fileName: 'Pooja_S_Resume.pdf' },
  heroChips: ['FastAPI', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Python'],
};

export const links = {
  email: 'pooja.cse.vec2023@gmail.com',
  github: { url: 'https://github.com/pooja-s6', handle: 'pooja-s6' },
  linkedin: { url: 'https://linkedin.com/in/pooja-s2006', handle: 'pooja-s2006' },
  leetcode: { url: 'https://leetcode.com/u/pooja_0606/', handle: 'pooja_0606' },
  skillrack: { url: 'https://www.skillrack.com/faces/ui/profile.xhtml?id=560723', handle: 'ID 560723' },
  // TODO: create a form at formspree.io and put its ID here (e.g. 'xyzabcd'); empty falls back to mailto.
  formspreeId: '',
};

export const navSections = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Recognition', href: '#recognition' },
];

export const highlights = [
  {
    title: 'Backend systems',
    text: 'REST APIs and microservices with FastAPI and Spring Boot, backed by PostgreSQL and Redis, shipped with Docker.',
  },
  {
    title: 'AI applications',
    text: 'RAG pipelines, LLM integration, and semantic search with pgvector and FAISS, built into real products.',
  },
  {
    title: 'Full-stack products',
    text: 'React and React Native front ends on top of my own APIs, deployed and supported in production.',
  },
];

export const about = {
  heading: 'Backend, AI, and the product around them',
  story:
    'I am a Computer Science undergraduate (Honours in Data Science) at Velammal Engineering College. For nearly two years I have worked in internships building backend services, RAG and LLM systems, and full-stack apps. I enjoy the part after the demo: making software reliable in production.',
  bullets: [
    'Nearly two years of internship experience across 5 companies',
    'Built REST APIs, microservices and RAG pipelines with FastAPI and Spring Boot',
    'Strong in DSA, OOP, OS, DBMS and Computer Networks',
    'Comfortable with Agile, Git workflows, testing and Docker deployments',
  ],
  stats: [
    { value: '5', label: 'internships' },
    { value: '6', label: 'projects' },
    { value: '8.64', label: 'CGPA' },
    { value: '200+', label: 'students using QuizFlow' },
  ],
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
  learning: ['Agentic AI', 'LangGraph', 'Vector Databases', 'System Design'],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  tags: string[];
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'Backend Developer Intern',
    company: 'Hexaware Technologies',
    location: 'Remote',
    period: 'Feb 2026 – Present',
    current: true,
    tags: ['FastAPI', 'PostgreSQL', 'REST APIs', 'AI workflows'],
    points: [
      'Developing scalable backend services for an AI-powered education platform using FastAPI, PostgreSQL and RESTful APIs.',
      'Designing and implementing backend modules with cross-functional teams in an Agile workflow.',
      'Integrating AI-powered workflows into backend services; working on architecture, API design and production debugging.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'FlyHigh Educational Institute',
    location: 'Remote',
    period: 'Oct 2025 – Jan 2026',
    tags: ['React', 'Firebase', 'Vercel'],
    points: [
      'Worked in a three-member team in an IIT professor-led startup to build QuizFlow, a real-time quiz platform used by 200+ students.',
      'Built React frontend modules and the Firebase schema for concurrent real-time quiz sessions.',
      'Deployed on Vercel; handled debugging, feature enhancements and production support.',
    ],
  },
  {
    role: 'Java Developer Intern',
    company: 'Infosys Springboard',
    location: 'Virtual',
    period: 'Nov 2025 – Jan 2026',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    points: [
      'Built the Legal Aid Matching Platform in a five-member Agile team.',
      'Designed backend modules, REST APIs and a relational schema for role-based legal case management; used Git feature branches and resolved merge conflicts.',
      'Earned the Java Foundation certification.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'IBM SkillsBuild',
    location: 'Virtual',
    period: 'Jun 2025 – Jul 2025',
    tags: ['Python', 'scikit-learn', 'KNN', 'Logistic Regression'],
    points: [
      'Built an employee salary prediction model with supervised ML.',
      'Trained and compared KNN and Logistic Regression; covered data preprocessing, feature engineering and model evaluation.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'AVPS Technologies',
    location: 'Virtual',
    period: 'Dec 2024 – Sep 2025 (10 months)',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Docker', 'Flask', 'Playwright'],
    points: [
      'Built REST APIs for a voice-enabled e-commerce platform, integrating Whisper speech recognition with Flask and Spring Boot services.',
      'Worked with layered architecture and dependency injection; used Docker and JBoss/WildFly for deployments.',
      'Wrote Playwright automation tests and did manual testing and production support.',
    ],
  },
];

export type Project = {
  title: string;
  featured?: boolean;
  problem: string;
  built: string;
  stack: string[];
  github: string;
  live: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Multi-Tenant RAG Platform',
    featured: true,
    problem:
      'Teams need Q&A over private documents without leaking data between tenants or paying for repeated LLM calls.',
    built:
      'Multi-tenant document Q&A with semantic search, cited answers, JWT auth and role-based document permissions. Permission-scoped semantic caching in Redis and complexity-based LLM routing cut inference cost, with automated tests for auth, permissions and caching.',
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'React', 'Docker'],
    github: 'https://github.com/pooja-s6/multitenant-rag',
    live: '',
    image: '', // TODO: add /projects/multitenant-rag.webp
  },
  {
    title: 'BugLens AI',
    featured: true,
    problem: 'Triaging bug reports by hand is slow, and duplicates pile up.',
    built:
      'AI bug analysis with classification, duplicate detection, semantic retrieval and AI-assisted root-cause analysis with guardrails. A fine-tuned BERT classifier reaches 88.33% test accuracy, and FAISS finds similar reports.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'BERT', 'FAISS', 'XGBoost'],
    github: '', // TODO: github.com/pooja-s6/BuglensAI returns 404; add the public repo URL
    live: 'https://buglens-ai-coral.vercel.app/',
    image: '/projects/buglens.webp',
  },
  {
    title: 'QuizFlow',
    problem: 'Teachers needed live quizzes with instant results.',
    built:
      'Real-time quiz rooms with a live leaderboard and score updates, plus session control and analytics for educators. Used by 200+ students.',
    stack: ['React', 'Firebase', 'Vercel'],
    github: 'https://github.com/FlyHighSkills/eduflex_final',
    live: 'https://eduflex-zeta.vercel.app/',
    image: '/projects/quizflow.webp',
  },
  {
    title: 'TutorX',
    problem: 'Students need guidance that answers the question they actually asked.',
    built: 'An AI tutoring chatbot using OpenAI with a FastAPI backend and a React Native app, delivered with a team.',
    stack: ['FastAPI', 'React Native', 'PostgreSQL', 'OpenAI'],
    github: 'https://github.com/pooja-s6/pod3',
    live: '',
    image: '', // TODO: add /projects/tutorx.webp
  },
  {
    title: 'Legal Aid Matching Platform',
    problem: 'Citizens, NGOs and lawyers needed one place to match cases and follow them through.',
    built: 'Role-based case matching, access workflows and an analytics dashboard across 3 user roles.',
    stack: ['React', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/pooja-s6/legal-aid-matching-platform',
    live: '',
    image: '', // TODO: add /projects/legal-aid.webp
  },
  {
    title: 'VocalMart',
    problem: 'Shoppers wanted hands-free product search.',
    built:
      'Voice-driven product search with the Web Speech API, REST APIs for products, cart and orders, and a MongoDB catalog.',
    stack: ['Spring Boot', 'React', 'MongoDB'],
    github: 'https://github.com/pooja-s6/vocalmart',
    live: '',
    image: '', // TODO: add /projects/vocalmart.webp
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'C++', 'C'] },
  {
    title: 'Backend & AI Systems',
    items: [
      'Spring Boot',
      'FastAPI',
      'Node.js',
      'Express.js',
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
  { title: 'Frontend', items: ['React.js', 'React Native', 'HTML5', 'CSS3'] },
  { title: 'Databases & Caching', items: ['PostgreSQL', 'pgvector', 'MongoDB', 'Firebase', 'Redis'] },
  {
    title: 'AI / ML',
    items: [
      'LLM Integration',
      'RAG',
      'Prompt Engineering',
      'Generative AI',
      'Neural Networks & Deep Learning',
      'Time Series Analysis',
      'Model Evaluation',
    ],
  },
  {
    title: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design'],
  },
  { title: 'Cloud & DevOps', items: ['Docker', 'Docker Compose', 'AWS', 'Git', 'GitHub', 'CI/CD'] },
  { title: 'Tools', items: ['Postman', 'IntelliJ IDEA', 'VS Code', 'Maven', 'Playwright'] },
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
  '6th Place, Debug Relay (Team Event), REC College, 2026',
  'Cognizant Hackathon participant, 2026',
  'Smart India Hackathon internal round, Velammal Engineering College, 2025',
  'Participant in technical symposiums across colleges, 2024 – 2026',
];
