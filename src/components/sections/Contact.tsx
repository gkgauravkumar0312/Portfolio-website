"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig, socials } from "@/lib/data";
import { slideInLeft, slideInRight } from "@/lib/motion";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    if (!configured) {
      setStatus("error");
      setMessage(
        "Contact form isn't configured yet. Add your EmailJS keys to .env.local.",
      );
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      await emailjs.sendForm(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        formRef.current,
        { publicKey: PUBLIC_KEY as string },
      );
      setStatus("success");
      setMessage("Thanks! Your message has been sent. I'll get back to you soon.");
      formRef.current.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email me directly instead.");
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        description="Have an opportunity, a project idea, or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info column */}
        <motion.div variants={slideInLeft} className="space-y-5">
          <GlassCard interactive={false}>
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              I&apos;m currently open to internships and freelance work. Let&apos;s
              build something great together.
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <MapPin className="h-5 w-5" />
                </span>
                {siteConfig.location}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all hover:-translate-y-1 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Form column */}
        <motion.div variants={slideInRight}>
          <GlassCard interactive={false}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="form-input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className="form-input"
                  />
                </Field>
              </div>

              <Field label="Subject" htmlFor="subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Let's collaborate"
                  className="form-input"
                />
              </Field>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  className="form-input resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-white shadow-glow transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-400" role="status">
                  <CheckCircle2 className="h-4 w-4" /> {message}
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-rose-400" role="alert">
                  <AlertCircle className="h-4 w-4" /> {message}
                </p>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
