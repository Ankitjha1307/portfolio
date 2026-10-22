"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaEnvelope} from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceItem {
  title: string;
  description: string;
}

interface ContactSectionProps {
  badgeText: string;
  headingPrimary: string;
  headingAccent: string;
  services: ServiceItem[];
  email: string;
  socials: {
    label: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

// ─── Contact Section ─────────────────────────────────────────────────────────

export const ContactSection = ({
  badgeText,
  headingPrimary,
  headingAccent,
  services,
  email,
  socials,
  imageSrc,
  imageAlt,
  className,
}: ContactSectionProps) => {
  return (
    <section
      id="contact"
      className={cn(
        "relative overflow-hidden bg-charcoal px-6 py-24 font-sans text-foreground sm:px-10 md:py-32 lg:px-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/50 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="text-xs font-medium uppercase tracking-widest text-foreground/70">
            {badgeText}
          </span>
        </motion.div>

        <div className="mt-10 grid items-center gap-14 md:grid-cols-2 md:gap-16">
          {/* Left — Content */}
          <div>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {headingPrimary}{" "}
              <span className="text-yellow-400">{headingAccent}</span>
            </motion.h2>

            {/* Services */}
            <div className="mt-10 space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="border-b border-foreground/10 pb-6"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Email card */}
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group mt-8 flex items-center justify-between rounded-2xl border border-foreground/10 bg-black p-5 backdrop-blur-sm transition-colors hover:border-yellow-400"
            >
              <div>
                <p className="text-xs text-yellow-400 font-medium uppercase tracking-widest text-foreground/50">
                  Reach out via email
                </p>
                <p className="mt-1 text-sm text-yellow-400 font-medium text-foreground">
                  <FaEnvelope className="inline-block mr-2" /> {email}
                </p>
              </div>
              <FaLocationArrow className="h-5 w-5 text-yellow-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400" />
            </motion.a>

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {socials.map((social) => (
                <Button
                  key={social.label}
                  nativeButton={false}
                  render={
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  }
                  className="gap-2 rounded-full px-3 py-2.5 text-xs font-medium uppercase tracking-wider"
                >
                  <social.icon className="h-4 w-4" height="regular" />
                  {social.label}
                </Button>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-yellow-400/0 transition-colors duration-300 hover:bg-yellow-400/5" />
            </div>
            {/* Decorative ring */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-yellow-400/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
