// All editable website content lives here. Replace placeholders in [BRACKETS].

export const contact = {
  email: "[YOUR EMAIL]",
  linkedin: "[YOUR LINKEDIN URL]",
  github: "[YOUR GITHUB URL]",
};

export const isPlaceholder = (v: string) => v.startsWith("[");

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "interests", label: "Interests" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  number: string;
  title: string;
  tags: string[];
  status: "Academic Project" | "In Progress";
  description: string;
  objectives: string;
  role: string;
  approach: string;
  tools: string;
  learnings: string;
  links: { demo: string; github: string; document: string };
  screenshots: string[];
};

const TBD = "[To be added]";

export const projects: Project[] = [
  {
    number: "01",
    title: "Indoor Crime Scene Investigation",
    tags: ["Forensic Science", "Academic Practical"],
    status: "Academic Project",
    description:
      "An academic practical exploring indoor crime scene investigation, evidence observation, scene documentation, and the systematic presentation of findings.",
    objectives: "[Add the objectives of this practical]",
    role: "[Describe your role in this practical]",
    approach: "[Describe the steps you followed]",
    tools: "[List tools or materials used]",
    learnings: "[Share what you learned]",
    links: { demo: "", github: "", document: "" },
    screenshots: [],
  },
  {
    number: "02",
    title: "Biotechnology Academic Projects",
    tags: ["Biotechnology", "Academic Learning"],
    status: "In Progress",
    description:
      "A collection of coursework, scientific concepts, practical assignments, and learning activities undertaken as part of my biotechnology studies.",
    objectives: TBD,
    role: TBD,
    approach: TBD,
    tools: TBD,
    learnings: TBD,
    links: { demo: "", github: "", document: "" },
    screenshots: [],
  },
  {
    number: "03",
    title: "AI Tools & Digital Productivity",
    tags: ["Artificial Intelligence", "Digital Literacy"],
    status: "In Progress",
    description:
      "Exploring AI-powered tools for research, productivity, website creation, assignment workflows, and digital problem-solving.",
    objectives: TBD,
    role: TBD,
    approach: TBD,
    tools: TBD,
    learnings: TBD,
    links: { demo: "", github: "", document: "" },
    screenshots: [],
  },
  {
    number: "04",
    title: "Scientific Presentations & Communication",
    tags: ["Research Communication", "Presentations"],
    status: "Academic Project",
    description:
      "Academic presentation projects focused on organising information, communicating scientific or technical concepts, and making complex topics easier to understand.",
    objectives: TBD,
    role: TBD,
    approach: TBD,
    tools: TBD,
    learnings: TBD,
    links: { demo: "", github: "", document: "" },
    screenshots: [],
  },
];

export const journey = [
  {
    year: "2026",
    title: "Beginning My Biotechnology Journey",
    text: "Started pursuing B.Sc. Biotechnology at JECRC University, Jaipur, with an interest in exploring science, technology, and interdisciplinary opportunities.",
  },
  {
    year: "2026",
    title: "Exploring Technology & AI",
    text: "Developing digital literacy and learning to use AI-powered tools for academic productivity, creative projects, and practical problem-solving.",
  },
  {
    year: "2026",
    title: "Student Engagement & Collaboration",
    text: "Exploring student organisation opportunities, teamwork, communication, and professional development through university activities, including my involvement in the IAESTE LC JECRC selection process.",
  },
];

export const skills = {
  academic: [
    "Biotechnology fundamentals",
    "Biological sciences",
    "Forensic science fundamentals",
    "Scientific research and information gathering",
    "Scientific communication",
  ],
  digital: [
    "AI-powered productivity tools",
    "No-code website creation",
    "Digital literacy",
    "Presentation design",
    "Communication and collaboration",
    "Business and strategic thinking",
  ],
  exploring: [
    "Bioinformatics",
    "Data analysis",
    "AI applications in life sciences",
    "GitHub and version control",
    "Entrepreneurship and consulting fundamentals",
  ],
};

// Add future events, workshops, certificates, volunteering here.
export const activities = [
  {
    title: "IAESTE LC JECRC — Student Organisation Engagement",
    type: "Student Organisation",
    text: "Exploring opportunities for international exposure, teamwork, professional development, and collaboration through the student selection process.",
  },
];

export const learning: { item: string; status: "Learning" | "Exploring" | "Building" }[] = [
  { item: "Biotechnology foundations", status: "Learning" },
  { item: "AI tools and digital workflows", status: "Exploring" },
  { item: "Website development using no-code tools", status: "Building" },
  { item: "Scientific presentation and communication", status: "Learning" },
  { item: "Business strategy and problem-solving", status: "Exploring" },
];
