"use client";
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { TextLoop } from '@/components/core/text-loop';

const Hero = () => {
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ankitjha1307' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/ankitjha1307' },
  ];

  return (
    <MinimalistHero
      logoText={
        <>
          Hey! I am{" "}
          <TextLoop
            className="overflow-y-clip text-yellow-400"
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 80,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
                filter: "blur(4px)",
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
                filter: "blur(4px)",
              },
            }}
          >
            <span>Ankit</span>
            <span>a Developer</span>
            <span>an Engineer</span>
            <span>a Learner</span>
          </TextLoop>
        </>
      }
      navLinks={navLinks}
      mainText="Computer Science engineering student building full-stack applications, exploring backend systems, and solving problems through code."
      readMoreId="about"
      imageSrc="Ankit Main.png"
      imageAlt="Meet the person behind the brand"
      overlayText={{
        part1: 'Curiosity',
        part2: 'Into',
        part3: 'Code'
      }}
      socialLinks={socialLinks}
      locationText="India, Open to opportunities"
    />
  );
};

export default Hero;