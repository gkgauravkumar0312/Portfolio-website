"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, socials } from "@/lib/data";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export function Hero() {
  const typed = useTypingEffect(siteConfig.roles);

  return (
    <section
      id="home-hero"
      className="relative flex min-h-[100svh] items-center justify-center px-5 pt-28 sm:px-8"
    >
      <motion.div
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]"
      >
        {/* Text column */}
        <div className="text-center md:text-left">
          <motion.span
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for internships & opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex min-h-[2.5rem] items-center justify-center gap-1 text-xl font-semibold text-foreground/90 sm:text-2xl md:justify-start"
          >
            <span aria-live="polite">{typed}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary sm:h-7" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:mx-0"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Button href="#contact" size="lg">
              Hire Me <Mail className="h-4 w-4" />
            </Button>
            <Button href="#projects" size="lg" variant="secondary">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={siteConfig.resumeUrl}
              size="lg"
              variant="ghost"
              download
            >
              Download Resume <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-3 md:justify-start"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all hover:-translate-y-1 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Avatar column */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 animate-blob rounded-full bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/30 blur-2xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-2 border-primary/30 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            >
              <Image
                src={siteConfig.avatar}
                alt={`Portrait of ${siteConfig.name}`}
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -right-2 top-8 rounded-2xl px-4 py-2 text-sm font-semibold shadow-card"
            >
              💻 Full Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -left-4 bottom-10 rounded-2xl px-4 py-2 text-sm font-semibold shadow-card"
            >
              🧠 DSA & AI
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
