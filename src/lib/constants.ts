import type { LucideIcon } from "lucide-react";
import { FaGitAlt, FaReact } from "react-icons/fa";

import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
export const NAV_LINKS = [
  { href: "hero", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "certifications", label: "Certifications" },
  { href: "education", label: "Education" },
  { href: "contact", label: "Contact" },
];

export type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Databases"
  | "Tools";

export interface Skill {
  name: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  level?: string; // e.g., Proficient, Experienced
  category: SkillCategory;
}

export const SKILLS_DATA: Skill[] = [
  { name: "C", icon: FaCopyright, category: "Languages" },
  { name: "C++", icon: TbBrandCpp, category: "Languages" },
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "Java", icon: FaJava, category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { name: "HTML5", icon: SiHtml5, category: "Languages" },
  { name: "CSS3", icon: SiCss3, category: "Languages" },
  { name: "React", icon: FaReact, category: "Frameworks & Libraries" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frameworks & Libraries" },
  { name: "Node.js", icon: SiNodedotjs, category: "Frameworks & Libraries" },
  { name: "Express.js", icon: SiExpress, category: "Frameworks & Libraries" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frameworks & Libraries",
  },
  { name: "MongoDB", icon: SiMongodb, category: "Databases" },
  { name: "GitHub", icon: SiGithub, category: "Tools" },
  { name: "Git", icon: FaGitAlt, category: "Tools" },
  { name: "VS Code", icon: VscVscode, category: "Tools" },
  { name: "Google Colab", icon: SiGooglecolab, category: "Tools" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  githubUrl: string;
  liveDemoUrl?: string;
  tags: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "SustainBite",
    description:
      "A web platform connecting restaurants and NGOs together to reduce food waste. Users can donate surplus food, and NGOs can pick it up, ensuring that excess food reaches those in need.",
    imageUrl: "/SustainBite.jpg",
    imageAiHint: "food rescue website",
    githubUrl: "https://github.com/adityaranjan-091/ByteVerse_Pixel_Phantoms",
    liveDemoUrl: "https://sustainbitein.vercel.app/",
    tags: ["Next JS", "Next Auth", "MongoDB", "Tailwind", "Vercel"],
  },
  {
    id: "project-2",
    title: "Water Potability Prediction",
    description:
      "This is a machine learning model which predicts the potability of water using various features. It uses a dataset containing various water quality parameters to predict whether the water is potable or not.",
    imageUrl: "/Water-Potability.png",
    imageAiHint: "Machine learning model for water quality prediction",
    githubUrl:
      "https://github.com/adityaranjan-091/ML-Projects/blob/main/Water_Potability_Prediction.ipynb",
    liveDemoUrl: "#",
    tags: ["Numpy", "Pandas", "Google Colab", "Scikit Learn", "Matplotlib"],
  },
  {
    id: "project-3",
    title: "Todo List App",
    description:
      "A simple and intuitive todo list application that allows users to create, edit, and delete tasks. It features a clean UI and local storage support for task persistence.",
    imageUrl: "/Todo-App.png",
    imageAiHint: "Todo list application",
    githubUrl: "https://github.com/adityaranjan-091/To-do-List-App",
    liveDemoUrl: "https://adityaranjan-todo-app.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  icon: React.ComponentType<any>;
}

export const EDUCATION_DATA: EducationEntry[] = [
  {
    institution: "National Institute of Technology Patna",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "2024 - 2028",
    icon: LuGraduationCap,
  },
  {
    institution: "DAV Public School Patna",
    degree: "High School ",
    period: "2018 - 2023",
    icon: LuSchool,
  },
];

export const SOCIAL_LINKS = {
  email: "adityaranjan.work@gmail.com",
  github: "https://github.com/adityaranjan-091",
  linkedin: "https://linkedin.com/in/aditya-ranjan-783739324",
  twitter: "https://twitter.com/ranjanaditya091",
};

export const certifications = [
  {
    title: "Machine Learning Specialization",
    organization: "Coursera",
    date: "2025-06-12",
    skills:
      "Machine Learning, Data Analysis, Python, TensorFlow, Neural Networks",
    description:
      "Completed the Machine Learning Specialization on Coursera, covering key concepts and techniques in machine learning, including supervised and unsupervised learning, neural networks, and deep learning.",
    imageUrl: "/Coursera MPVRJ891U1CM_page-0001.jpg",
  },
  {
    title: "2nd Runner Up - ByteVerse 2025",
    organization: "HackSlash",
    date: "2025-06-03",
    skills:
      "Teamwork, Problem Solving, Web Development, UI/UX Design, Project Management",
    description:
      "Achieved 2nd Runner Up position in ByteVerse 2025 Hackathon organized by HackSlash, showcasing skills in web development and teamwork.",
    imageUrl: "/AdityaRanjan_byteverse.png",
  },
  {
    title: "Certificate of Participation - Code The Uncoded 2024",
    organization: "IEEE SB NITP",
    date: "2024-11-03",
    skills: "Problem Solving, Coding, Algorithms",
    description:
      "Participated in CODE THE UNCODED 2024 organized by IEEE SB NITP, demonstrating strong problem-solving and coding skills.",
    imageUrl: "/Participation Certificate-IEEE.png",
  },
];
