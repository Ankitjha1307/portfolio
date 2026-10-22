"use client";

import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ─── Types ───────────────────────────────────────────────────────────────────

type SocialIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface SocialLink {
  icon: SocialIcon;
  href: string;
  label: string;
}

interface ExperienceItem {
  title: string;
  type: string;
  period: string;
}

interface ProfileCardProps {
  badgeText: string;
  name: string;
  role: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  bioParagraphs: string[];
  skills: string[];
  experience: ExperienceItem[];
  socialLinks: SocialLink[];
  ctaText: string;
  ctaHref: string;
  className?: string;
}

// ─── Profile Card ────────────────────────────────────────────────────────────

export const ProfileCard = ({
  badgeText,
  name,
  role,
  tagline,
  imageSrc,
  imageAlt,
  bioParagraphs,
  skills,
  experience,
  socialLinks,
  ctaText,
  ctaHref,
  className,
}: ProfileCardProps) => {
  const resolvedImageSrc = imageSrc.startsWith("/") || /^https?:\/\//.test(imageSrc)
    ? imageSrc
    : `/${imageSrc}`;

  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 md:gap-8",
        className
      )}
    >
      {/* Left — Image Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col rounded-2xl border border-foreground/10 bg-card/50 p-5 backdrop-blur-sm"
      >
        {/* Image — full portrait visible, blurred copy fills the frame */}
        <div className="relative aspect-[5/8] overflow-hidden rounded-xl bg-charcoal md:aspect-auto md:h-[620px]">
          <Image
            src={resolvedImageSrc}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 90vw, 620px"
            className="scale-110 object-cover opacity-40 blur-2xl"
          />
          <Image
            src={resolvedImageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 90vw, 620px"
            className="z-10 object-contain"
          />
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute bottom-3 left-3 z-20 flex items-center gap-2 rounded-full bg-charcoal/90 px-3 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-foreground/80">
              Available to code
            </span>
          </motion.div>
        </div>

        {/* Name & Role */}
        <div className="mt-5">
          <h3 className="text-xl font-bold tracking-tight text-foreground">{name}</h3>
          <p className="mt-1 text-sm text-foreground/60">{role}</p>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              aria-label={link.label}
              nativeButton={false}
              render={
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                />
              }
              size="icon"
              className="h-10 w-10 rounded-lg"
            >
              <link.icon className="h-4 w-4" />
            </Button>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          nativeButton={false}
          render={
            <motion.a
              href={ctaHref}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            />
          }
          className="mt-5 w-full gap-2 rounded-xl py-3"
        >
          {ctaText}
          <GoArrowUpRight size={16} />
        </Button>
      </motion.div>

      {/* Right — Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-between gap-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 bg-charcoal px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="text-xs font-medium uppercase tracking-widest text-yellow-400">
            {badgeText}
          </span>
        </motion.div>

        {/* Tagline */}
        <p className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          {tagline}
        </p>

        {/* Bio */}
        <div className="space-y-3">
          {bioParagraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="text-sm leading-relaxed text-foreground/70"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-default rounded-full border border-yellow-400 bg-black px-3 py-1.5 text-xs font-medium tracking-wider text-yellow-400 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="space-y-0 divide-y divide-foreground/10 rounded-xl border border-foreground/10 bg-card/30"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-yellow-400/5"
            >
              <div>
                <h4 className="text-sm font-medium text-yellow-400 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-xs text-foreground/50">
                  {item.type}
                </p>
              </div>
              <span className="text-xs font-medium tracking-wider text-yellow-400">
                {item.period}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
