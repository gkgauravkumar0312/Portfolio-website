"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { certificates } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeading
        eyebrow="Certificates"
        title="Certifications"
        description="Courses and credentials I've earned along the way."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert) => (
          <motion.div key={cert.title} variants={fadeUp}>
            <Link
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group block overflow-hidden rounded-2xl shadow-card transition-all hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white">
                    View <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
