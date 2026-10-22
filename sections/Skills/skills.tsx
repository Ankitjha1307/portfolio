"use client";
import { SkillsSection } from "@/components/ui/skills-section";
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiThealgorithms,
  SiJavascript,
  SiTypescript,
  SiJsonwebtokens,
  SiVercel,
  SiC,
  SiPython
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; 
import { FaBrain, FaDatabase, FaJava, FaWindows } from "react-icons/fa";

const groups = [
  {
    title: "Frontend",
    skills: [
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiCss, name: "CSS3" },
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      {icon: SiJsonwebtokens, name: "JWT"},
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { icon: FaJava, name: "Java" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiC, name: "C" },
      { icon: SiPython, name: "Python" }
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: SiGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: VscVscode, name: "VS Code" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
];

const learningSkills = [
  { icon: SiThealgorithms, name: "Data Structures & Algorithms" },
  { icon: FaBrain, name: "AI & ML" },
  { icon: FaWindows, name: "Operating Systems" },
  { icon: FaDatabase, name: "Database Management Systems" },
];

export default function Skills() {
  return (
    <SkillsSection
      groups={groups}
      learningTitle="Currently Drooling Over...."
      learningSkills={learningSkills}
    />
  );
}
