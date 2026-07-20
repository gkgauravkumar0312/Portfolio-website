"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { projects } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've Built"
        description="A selection of projects showcasing my work across full stack and AI."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="glass group flex flex-col overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-glow"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {project.featured && (
                <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </span>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3 pt-2">
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:text-primary"
                >
                  <Github className="h-4 w-4" /> Code
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
