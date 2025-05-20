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
import { LuGraduationCap, LuSchool } from "react-icons/lu";
export const NAV_LINKS = [
  { href: "hero", label: "Home" },
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
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
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow custom SVGs too
  level?: string; // e.g., Proficient, Experienced
  category: SkillCategory;
}

export const SKILLS_DATA: Skill[] = [
  { name: "C", icon: FaCopyright, category: "Languages" },
  { name: "C++", icon: TbBrandCpp, category: "Languages" },
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { name: "HTML5", icon: SiHtml5, category: "Languages" },
  { name: "CSS3", icon: SiCss3, category: "Languages" },
  { name: "React", icon: FaReact, category: "Frameworks & Libraries" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frameworks & Libraries" },
  { name: "Node.js", icon: SiNodedotjs, category: "Frameworks & Libraries" },
  { name: "Express JS", icon: SiExpress, category: "Frameworks & Libraries" },
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
    liveDemoUrl: "https://nextjs-boilerplate-pi-nine-85.vercel.app/",
    tags: ["Next JS", "Next Auth", "MongoDB", "Tailwind"],
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
  email: "ranjanaditya091@gmail.com",
  github: "https://github.com/adityaranjan091",
  linkedin: "https://linkedin.com/in/aditya-ranjan-783739324",
  twitter: "https://twitter.com/ranjanaditya091",
};
