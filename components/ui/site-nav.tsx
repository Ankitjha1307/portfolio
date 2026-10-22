"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaWrench,
  FaFileAlt,
  FaFileDownload,
  FaEnvelope,
  FaPlus,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { FaX } from "react-icons/fa6";
import { cn } from "@/lib/utils";

// ─── Types & Config ──────────────────────────────────────────────────────────

type NavIcon = IconType;

interface NavEntry {
  label: string;
  href?: string;
  icon: NavIcon;
}

const RESUME_URL = "/Ankit%20Jha%20Resume.pdf";
const RESUME_FILENAME = "Ankit Jha Resume.pdf";

const navItems: NavEntry[] = [
  { label: "Home", href: "#", icon: FaHome },
  { label: "About", href: "#about", icon: FaUser },
  { label: "Projects", href: "#projects", icon: FaLaptopCode },
  { label: "Skills", href: "#skills", icon: FaWrench },
  { label: "Resume", icon: FaFileAlt },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const scrollToSection = (href?: string) => {
  if (!href || href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const viewResume = () =>
  window.open(RESUME_URL, "_blank", "noopener,noreferrer");

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = RESUME_URL;
  link.download = RESUME_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

// ─── Site Navigation ──────────────────────────────────────────────────────────

export const SiteNav = ({ className }: { className?: string }) => {
  const [pastHero, setPastHero] = React.useState(false);
  const [resumeOpen, setResumeOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileResumeOpen, setMobileResumeOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setPastHero(window.scrollY > heroHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemClass =
    "flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-yellow-400 transition-colors hover:bg-charcoal";

  return (
    <div className={cn(className)}>
      {/* ── Desktop Pill Navbar ─────────────────────────────────────────── */}
      <motion.nav
        initial={false}
        animate={{
          y: pastHero ? 0 : 140,
          opacity: pastHero ? 1 : 0,
          x: "-50%",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed bottom-6 left-1/2 z-50 hidden md:block"
      >
        <div className="flex items-center gap-1 rounded-full border border-foreground/10 bg-black p-1.5 shadow-lg shadow-yellow-100/20 backdrop-blur-md hover:border-yellow-400">
          {navItems.map((item) =>
            item.label === "Resume" ? (
              <div key={item.label} className="relative">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setResumeOpen((v) => !v)}
                  aria-expanded={resumeOpen}
                  className={cn(itemClass, "cursor-pointer")}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.button>

                <AnimatePresence>
                  {resumeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                      transition={{ duration: 0.18 }}
                      className="absolute bottom-full left-1/2 mb-3 w-48 overflow-hidden rounded-2xl border border-foreground/10 bg-card/95 p-1.5 shadow-xl backdrop-blur-md"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          viewResume();
                          setResumeOpen(false);
                        }}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground/70 transition-colors hover:bg-yellow-400 hover:text-foreground"
                      >
                        <FaFileAlt className="h-4 w-4" />
                        View Resume
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          downloadResume();
                          setResumeOpen(false);
                        }}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-foreground/70 transition-colors hover:bg-yellow-400 hover:text-foreground"
                      >
                        <FaFileDownload className="h-4 w-4" />
                        Download Resume
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                key={item.label}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={itemClass}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.a>
            )
          )}
        </div>
      </motion.nav>

      {/* ── Mobile Radial Menu ──────────────────────────────────────────── */}
      <motion.div
        initial={false}
        animate={{
          y: pastHero ? 0 : 120,
          opacity: pastHero ? 1 : 0,
          x: "-50%",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed bottom-5 left-1/2 z-50 md:hidden"
      >
        <div className="relative flex h-14 w-14 items-center justify-center">
          <AnimatePresence>
            {mobileOpen &&
              navItems.map((item, index) => {
                const count = navItems.length;
                const angle = Math.PI - (index * Math.PI) / Math.max(count - 1, 1);
                const radius = 130;
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    aria-label={item.label}
                    initial={{ x: -20, y: -20, opacity: 0, scale: 0 }}
                    animate={{
                      x: Math.cos(angle) * radius - 20,
                      y: -Math.sin(angle) * radius - 20,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ x: -20, y: -20, opacity: 0, scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 26,
                      delay: index * 0.025,
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      if (item.label === "Resume") {
                        setMobileResumeOpen((v) => !v);
                        return;
                      }
                      scrollToSection(item.href);
                      setMobileOpen(false);
                      setMobileResumeOpen(false);
                    }}
                    className="absolute left-1/2 top-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400 bg-black text-yellow-400 shadow-lg backdrop-blur-md transition-colors active:bg-yellow-400"
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.button>
                );
              })}
          </AnimatePresence>

          <AnimatePresence>
            {mobileResumeOpen && mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-full left-1/2 mb-3 w-44 overflow-hidden rounded-2xl border border-foreground/10 bg-black p-1.5 shadow-xl backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => {
                    viewResume();
                    setMobileResumeOpen(false);
                    setMobileOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-yellow-400 transition-colors"
                >
                  <FaFileAlt className="h-4 w-4" />
                  View Resume
                </button>
                <button
                  type="button"
                  onClick={() => {
                    downloadResume();
                    setMobileResumeOpen(false);
                    setMobileOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-yellow-400 transition-colors"
                >
                  <FaFileDownload className="h-4 w-4" />
                  Download Resume
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileResumeOpen(false);
            }}
            animate={{ rotate: mobileOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-yellow-400 text-foreground shadow-xl shadow-yellow-400/20"
          >
            {mobileOpen ? (
              <FaX className="h-6 w-6" />
            ) : (
              <FaPlus className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
