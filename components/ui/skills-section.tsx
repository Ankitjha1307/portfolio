"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaGraduationCap } from "react-icons/fa";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Skill {
  icon: IconType;
  name: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  groups: SkillGroup[];
  learningTitle: string;
  learningSkills: Skill[];
  className?: string;
}

// ─── Skill Card ──────────────────────────────────────────────────────────────

const SkillCard = ({ icon: Icon, name, index }: { icon: IconType; name: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-foreground/10 bg-black p-5 backdrop-blur-sm transition-colors hover:border-yellow-400"
    >
      <div className="flex h-12 w-12 items-center justify-center text-yellow-400 transition-colors group-hover:text-yellow-400">
        <Icon className="h-8 w-8" />
      </div>
      <span className="text-xs font-medium tracking-wider text-foreground/60">
        {name}
      </span>
    </motion.div>
  );
};

// ─── Skills Section ───────────────────────────────────────────────────────────

export const SkillsSection = ({
  groups,
  learningTitle,
  learningSkills,
  className,
}: SkillsSectionProps) => {
  return (
    <section
      id="skills"
      className={cn(
        "relative overflow-hidden bg-charcoal px-6 py-24 font-sans text-foreground sm:px-10 md:py-32 lg:px-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My Technical <span className="text-yellow-400">Playground</span>
          </h2>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12 py-16 md:py-20">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              {/* Group label */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-4 w-0.5 bg-yellow-400" />
                <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
                  {group.title}
                </h3>
              </motion.div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.skills.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-dashed border-foreground/20 bg-black/30 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20 text-foreground/70">
              <FaGraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground/70">
              {learningTitle}
            </h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {learningSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex cursor-default items-center gap-2 rounded-full border border-foreground/15 bg-black px-4 py-2 text-xs font-medium tracking-wider text-foreground transition-colors hover:border-yellow-400 hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-yellow-400" />
                  {skill.name}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
