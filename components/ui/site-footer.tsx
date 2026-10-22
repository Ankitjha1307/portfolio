"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FooterNavLink {
  label: string;
  href: string;
}

interface FooterSocial {
  label: string;
  href: string;
  icon: IconType;
}

interface SiteFooterProps {
  tagline: string;
  navLinks: FooterNavLink[];
  socials: FooterSocial[];
  email: string;
  location: string;
  className?: string;
}

// ─── Site Footer ─────────────────────────────────────────────────────────────

const COPYRIGHT_YEAR = 2026;

export const SiteFooter = ({
  tagline,
  navLinks,
  socials,
  email,
  location,
  className,
}: SiteFooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build-time constant: avoids an unstable prerender value (`new Date()`)
  // while still showing the current year to visitors.
  const year = COPYRIGHT_YEAR;

  return (
    <footer
      className={cn(
        "relative w-full overflow-hidden border-t border-foreground/10 bg-black px-6 pb-28 pt-20 font-sans text-foreground sm:px-10 md:pb-24 lg:px-16 xl:px-24",
        className
      )}
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative w-full">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16 xl:gap-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-yellow-400">great</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/60 xl:max-w-lg xl:text-base">
              {tagline}
            </p>

            <a
              href={`mailto:${email}`}
              className="group mt-6 inline-flex items-center gap-2 border-b border-foreground/20 pb-1 text-sm font-medium text-yellow-400 transition-colors hover:border-yellow-400"
            >
              <FaEnvelope className="h-4 w-4" />
              {email}
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Footer"
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:justify-self-end lg:text-right"
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
              Connect
            </h3>
            <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-muted-foreground bg-black text-yellow-400 transition-colors hover:border-yellow-400"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-foreground/50 lg:justify-end">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {location}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-foreground/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-foreground/50">
              © {year} Ankit Jha. All rights reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-foreground/60 transition-colors hover:text-yellow-400"
            >
              Back to top
              <FaArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
