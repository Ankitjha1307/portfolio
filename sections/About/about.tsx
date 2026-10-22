"use client";
import { ProfileCard } from "@/components/ui/profile-card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ankitjha1307", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/ankitjha1307", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:mrankitjha007@gmail.com", label: "Email" },
];

const experience = [
  { title: "B.Tech CSE Student", type: "Learning", period: "2024–Present" },
  { title: "MERN & AI Developer", type: "Personal", period: "2025–Present" },
  { title: "Literature Society Head", type: "Personal", period: "2026–Present" },
  { title: "Technical Lead, Google Developer Groups, GCET", type: "Professional", period: "2026–Present" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-charcoal px-6 py-24 font-sans text-foreground sm:px-10 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Know Who <span className="text-yellow-400">I Am</span>
          </h2>
        </div>

        <ProfileCard
          badgeText="Full Stack Developer"
          name="Ankit Jha"
          role="Full Stack Developer"
          tagline="Building scalable web applications and exploring AI-driven solutions."
          imageSrc="Imagery.png"
          imageAlt="Ankit Jha"
          bioParagraphs={[
            "I am a Full Stack Developer passionate about building scalable web applications and AI-powered systems.",
            "I specialize in modern technologies like React, Next.js, Express.js, Node.js, and MongoDB, and I enjoy solving real-world problems through clean and efficient code.",
            "Currently, I am focused on developing AI-driven applications and full-stack systems that are fast, reliable, and user-centric.",
          ]}
          skills={[
            "Backend Development",
            "REST APIs",
            "MERN Stack",
            "Database Design",
            "Generative AI",
            "Operating Systems",
          ]}
          experience={experience}
          socialLinks={socialLinks}
          ctaText="Contact Now"
          ctaHref="mailto:mrankitjha007@gmail.com"
        />
      </div>
    </section>
  );
}
