/**
 * Central site configuration.
 *
 * Edit the placeholders below with your real information. Everything the
 * portfolio renders (name, links, projects, skills, stats usernames, etc.)
 * is sourced from this single file so the UI code stays untouched.
 */

import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiLangchain,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                              Personal details                              */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  /** Full name displayed across the site. */
  name: "Your Name",
  /** Short handle used in the logo / footer. */
  shortName: "YN",
  /** Roles cycled through by the hero typing effect. */
  roles: [
    "Computer Science Engineering Student",
    "Full Stack Developer",
    "DSA Enthusiast",
    "AI Enthusiast",
  ],
  /** One-line tagline for metadata / hero. */
  tagline:
    "I build fast, accessible and delightful web experiences with a strong focus on DSA and AI.",
  location: "India",
  email: "your.email@example.com",
  /** Canonical production URL — used for SEO, sitemap and Open Graph. */
  url: "https://your-portfolio.vercel.app",
  /** Path (in /public) to the downloadable resume. */
  resumeUrl: "/resume.pdf",
  /** Path (in /public) to the profile image. */
  avatar: "/avatar.svg",
} as const;

/* -------------------------------------------------------------------------- */
/*                             External usernames                             */
/* -------------------------------------------------------------------------- */

export const usernames = {
  github: "octocat",
  leetcode: "leetcode",
  linkedin: "https://linkedin.com/in/your-handle",
} as const;

/* -------------------------------------------------------------------------- */
/*                                Social links                                */
/* -------------------------------------------------------------------------- */

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const socials: SocialLink[] = [
  { label: "GitHub", href: `https://github.com/${usernames.github}`, icon: SiGithub },
  { label: "LinkedIn", href: usernames.linkedin, icon: FaLinkedinIn },
  { label: "LeetCode", href: `https://leetcode.com/u/${usernames.leetcode}`, icon: SiLeetcode },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: FaEnvelope },
];

/* -------------------------------------------------------------------------- */
/*                                Navigation                                  */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "DSA", href: "#dsa" },
  { label: "GitHub", href: "#github" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*                                   About                                    */
/* -------------------------------------------------------------------------- */

export const about = {
  intro:
    "I'm a Computer Science Engineering student who loves turning ideas into polished, production-grade products. I care deeply about clean architecture, delightful UX and writing code that scales.",
  objective:
    "To grow as a Full Stack Developer at a product-driven company where I can solve meaningful problems, learn from world-class engineers, and ship software used by millions.",
  learning:
    "Currently deep-diving into system design, advanced React patterns, and building AI-powered applications with LangChain and the OpenAI API.",
  passion:
    "Competitive programming and data structures & algorithms keep my problem-solving sharp — I enjoy the challenge of finding elegant, efficient solutions.",
  highlights: [
    { label: "Focus", value: "Full Stack + AI" },
    { label: "Problem Solving", value: "DSA Enthusiast" },
    { label: "Availability", value: "Open to Internships" },
    { label: "Based in", value: siteConfig.location },
  ],
};

export const education = [
  {
    school: "Your University / College",
    degree: "B.Tech in Computer Science Engineering",
    period: "2022 — 2026",
    detail: "Relevant coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks, AI/ML.",
    grade: "CGPA: 8.5 / 10",
  },
  {
    school: "Your Higher Secondary School",
    degree: "Senior Secondary (PCM + CS)",
    period: "2020 — 2022",
    detail: "Focused on Physics, Chemistry, Mathematics and Computer Science.",
    grade: "Percentage: 90%",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Skills                                    */
/* -------------------------------------------------------------------------- */

export type Skill = { name: string; icon: IconType };
export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "AI",
    icon: Brain,
    skills: [
      { name: "OpenAI API", icon: RiOpenaiFill },
      { name: "LangChain", icon: SiLangchain },
      { name: "Prompt Engineering", icon: Sparkles as unknown as IconType },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export const concepts = [
  "REST API",
  "Authentication",
  "Responsive Design",
  "OOP",
  "Data Structures",
  "Algorithms",
];

/* -------------------------------------------------------------------------- */
/*                                Experience                                  */
/* -------------------------------------------------------------------------- */

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Company Name",
    period: "Jun 2025 — Present",
    location: "Remote",
    points: [
      "Built and shipped responsive features with Next.js, TypeScript and Tailwind CSS.",
      "Collaborated with designers to translate Figma mockups into pixel-perfect UI.",
      "Improved page performance and Lighthouse scores through code-splitting and image optimization.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Another Company",
    period: "Jan 2025 — May 2025",
    location: "Hybrid",
    points: [
      "Developed reusable React components and a shared design system.",
      "Integrated REST APIs and implemented client-side state management.",
      "Wrote unit tests and participated in code reviews.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Projects                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  demo: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "HomeFeast",
    description:
      "A homemade food service platform connecting local home chefs with hungry customers, complete with ordering, payments and real-time order tracking.",
    image: "/projects/homefeast.svg",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    features: [
      "Browse and order from nearby home chefs",
      "Secure checkout & order tracking",
      "Chef dashboard with analytics",
    ],
    demo: "https://example.com",
    github: `https://github.com/${usernames.github}`,
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that reviews resumes against a job description and returns actionable, ATS-friendly feedback in seconds.",
    image: "/projects/resume-analyzer.svg",
    tech: ["Next.js", "OpenAI API", "LangChain", "Tailwind CSS"],
    features: [
      "ATS score & keyword matching",
      "Section-by-section AI suggestions",
      "Downloadable improvement report",
    ],
    demo: "https://example.com",
    github: `https://github.com/${usernames.github}`,
    featured: true,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app with rooms, typing indicators and presence, built on WebSockets for instant messaging.",
    image: "/projects/chat-app.svg",
    tech: ["React", "Node.js", "Socket.IO", "Express"],
    features: [
      "Real-time messaging & rooms",
      "Typing & online presence",
      "Persistent message history",
    ],
    demo: "https://example.com",
    github: `https://github.com/${usernames.github}`,
  },
  {
    title: "Expense Tracker",
    description:
      "A clean personal finance app to track income and expenses with beautiful charts and monthly budget insights.",
    image: "/projects/expense-tracker.svg",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    features: [
      "Add & categorize transactions",
      "Interactive spending charts",
      "Monthly budget insights",
    ],
    demo: "https://example.com",
    github: `https://github.com/${usernames.github}`,
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a premium, animated and fully responsive personal site built with the modern web stack.",
    image: "/projects/portfolio.svg",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    features: [
      "Glassmorphism UI & dark mode",
      "GitHub & LeetCode integrations",
      "SEO optimized & accessible",
    ],
    demo: siteConfig.url,
    github: `https://github.com/${usernames.github}`,
  },
];

/* -------------------------------------------------------------------------- */
/*                              DSA / Coding                                  */
/* -------------------------------------------------------------------------- */

export const codingProfiles = [
  { label: "LeetCode", href: `https://leetcode.com/u/${usernames.leetcode}` },
  { label: "GitHub", href: `https://github.com/${usernames.github}` },
  { label: "GeeksforGeeks", href: "https://auth.geeksforgeeks.org/user/your-handle" },
  { label: "CodeChef", href: "https://www.codechef.com/users/your-handle" },
];

/* -------------------------------------------------------------------------- */
/*                              Achievements                                  */
/* -------------------------------------------------------------------------- */

export type Achievement = {
  title: string;
  description: string;
  year: string;
};

export const achievements: Achievement[] = [
  {
    title: "500+ DSA Problems Solved",
    description: "Consistently solving problems across LeetCode, GFG and CodeChef.",
    year: "2025",
  },
  {
    title: "Hackathon Finalist",
    description: "Reached the finals of a national-level 36-hour hackathon.",
    year: "2024",
  },
  {
    title: "Open Source Contributor",
    description: "Merged pull requests into popular open-source repositories.",
    year: "2024",
  },
  {
    title: "Coding Contest Rank",
    description: "Achieved a top percentile rank in competitive programming contests.",
    year: "2023",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Certificates                                  */
/* -------------------------------------------------------------------------- */

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
};

export const certificates: Certificate[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/cert-1.svg",
    url: "https://example.com",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Udemy",
    date: "2024",
    image: "/certificates/cert-2.svg",
    url: "https://example.com",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    image: "/certificates/cert-3.svg",
    url: "https://example.com",
  },
  {
    title: "Cloud Practitioner",
    issuer: "AWS",
    date: "2023",
    image: "/certificates/cert-4.svg",
    url: "https://example.com",
  },
];
