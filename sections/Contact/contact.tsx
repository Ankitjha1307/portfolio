"use client";
import { ContactSection } from "@/components/ui/contact-section";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const services = [
  {
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications with React, Next.js, Node.js, and MongoDB — from responsive interfaces to secure APIs and database-driven features.",
  },
  {
    title: "Backend & API Engineering",
    description:
      "Designing REST APIs, implementing JWT authentication and role-based access control, and building structured backend systems that power real-world applications.",
  },
];

const socials = [
  {
    label: "Explore GitHub",
    href: "https://github.com/ankitjha1307",
    icon: FaGithub,
  },
  {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ankitjha1307/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <ContactSection
      badgeText="Let's Connect"
      headingPrimary="Let's Build"
      headingAccent="Something Together"
      services={services}
      email="mrankitjha007@gmail.com"
      socials={socials}
      imageSrc="Ankit2.png"
      imageAlt="Contact"
    />
  );
}
