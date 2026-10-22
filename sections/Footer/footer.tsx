"use client";
import { SiteFooter } from "@/components/ui/site-footer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/ankitjha1307", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankitjha1307/", icon: FaLinkedin },
  { label: "Email", href: "mailto:mrankitjha007@gmail.com", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <SiteFooter
      tagline="Computer Science engineering student building full-stack applications, exploring backend systems, and solving problems through code."
      navLinks={navLinks}
      socials={socials}
      email="mrankitjha007@gmail.com"
      location="India, Open to opportunities"
    />
  );
}
