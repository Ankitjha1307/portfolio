'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FaHome } from 'react-icons/fa';
import { TextScramble } from '@/components/core/text-scramble';

type SocialIconComponent = React.ComponentType<{ className?: string }>;

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: React.ReactNode;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreId?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
    part3: string;
  };
  socialLinks: {
    icon: SocialIconComponent;
    href: string;
  }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground transition-colors hover:text-yellow-400"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: SocialIconComponent;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex text-yellow-400 bg-black transition-colors"
    whileHover={{ scale: 1.25, y: -2, rotate: -4 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 14 }}
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreId = "about",
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const rightTextRef = React.useRef<HTMLDivElement>(null);
  const isRightTextInView = useInView(rightTextRef, {
    once: true,
    amount: 0.6,
    margin: '0px 0px -15% 0px',
  });
  const [entranceDelayDone, setEntranceDelayDone] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setEntranceDelayDone(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const scrambleReady = isRightTextInView && entranceDelayDone;

  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-charcoal p-8 font-sans md:h-screen md:min-h-0 md:p-12',
        className
      )}
    >
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 content-center items-center gap-12 py-12 md:grid-cols-3 md:gap-0 md:py-0">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-3 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground md:mx-0">{mainText}</p>
          <a href={`#${readMoreId}`} className="mt-4 inline-block text-sm font-medium text-yellow-400 underline decoration-from-font">
            Read More
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 flex h-auto items-center justify-center py-8 md:order-2 md:h-full md:py-0">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[300px] w-[300px] rounded-full bg-yellow-400 md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            ></motion.div>
            <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://cdn.21st.dev/assets/mirror/69/69f133c713200aa29789f9f07a83f105cc28793926179eb4a224b0454a743a00.svg`;
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          ref={rightTextRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-2 flex items-center justify-center text-center md:order-3"
        >
          <h1
            aria-label={`${overlayText.part1} ${overlayText.part2} ${overlayText.part3}`}
            className="whitespace-nowrap text-2xl font-bold text-foreground md:whitespace-normal md:text-3xl lg:text-6xl"
          >
            <TextScramble as="span" className="inline md:block" trigger={scrambleReady}>
              {overlayText.part1}
            </TextScramble>{" "}
            <TextScramble as="span" className="inline md:block" trigger={scrambleReady}>
              {overlayText.part2}
            </TextScramble>{" "}
            <TextScramble as="span" className="inline md:block" trigger={scrambleReady}>
              {overlayText.part3}
            </TextScramble>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4 px-4 py-2 rounded-full"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex items-center gap-1.5 text-xs text-yellow-400 font-medium md:text-sm"
        >
          <FaHome className="h-3 w-3 md:h-3.5 md:w-3.5" />
          <span>{locationText}</span>
        </motion.div>
      </footer>
    </div>
  );
};
