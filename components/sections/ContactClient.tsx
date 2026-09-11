"use client";

import React, { useEffect, useRef, useState } from "react";
import FadeImage from "@/components/media/FadeImage";
import SocialIcon from "@/components/icons/SocialIcon";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import {
  ctaHover,
  ctaRest,
  ctaTap,
  ctaTransition,
  easings,
} from "@/lib/animations";
import { FLAGSHIPS, PILLARS } from "@/lib/services-tree";
import { SITE_IMAGES } from "@/lib/site-images";
import { NAP, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  ...PILLARS.map((item) => item.title),
  ...FLAGSHIPS.map((item) => item.title),
  "Something else",
];

type FormFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldKey = keyof FormFields;

const INITIAL_FORM: FormFields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const FIELD_LABELS: Record<FieldKey, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  service: "Service interested in",
  message: "Project brief",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.86.14.18 1.95 2.98 4.73 4.18 1.76.76 2.45.82 3.33.69.51-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM12.04 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97 1-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.23 9.82 9.82 0 0 1 9.81-9.8 9.76 9.76 0 0 1 6.94 2.88 9.78 9.78 0 0 1 2.87 6.93 9.82 9.82 0 0 1-9.82 9.82zm8.36-18.16A11.73 11.73 0 0 0 12.03 0C5.45 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.57-8.43z" />
    </svg>
  );
}

function validate(form: FormFields): Partial<Record<FieldKey, string>> {
  const errors: Partial<Record<FieldKey, string>> = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!form.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  const digits = form.phone.replace(/\D/g, "");
  if (!form.phone.trim()) errors.phone = "Enter a phone number.";
  else if (digits.length < 10) errors.phone = "Enter a phone number with at least 10 digits.";
  if (!form.service) errors.service = "Select the service you need.";
  if (!form.message.trim()) errors.message = "Tell us a little about the project.";
  else if (form.message.trim().length < 12) {
    errors.message = "Add a bit more detail so we can reply with a useful first note.";
  }
  return errors;
}

function briefText(form: FormFields) {
  return [
    `Hello Creative Whoppers,`,
    ``,
    `Name: ${form.name}`,
    form.company ? `Company: ${form.company}` : null,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Service: ${form.service}`,
    ``,
    form.message,
  ]
    .filter(Boolean)
    .join("\n");
}

function inputClass(invalid?: boolean) {
  return cn(
    "mt-2 w-full min-h-12 rounded-xl border bg-agency-white/[0.05] px-4 py-3 text-sm text-agency-white placeholder:text-agency-white/35 transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black",
    invalid
      ? "border-red-500/80"
      : "border-agency-border hover:border-agency-white/25"
  );
}

export default function ContactClient() {
  const reduceMotion = useReducedMotion();
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormFields>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failedSubmit, setFailedSubmit] = useState(0);

  const errorEntries = (Object.entries(errors) as [FieldKey, string][]).filter(
    ([, message]) => Boolean(message)
  );

  useEffect(() => {
    if (failedSubmit === 0) return;
    errorSummaryRef.current?.focus();
  }, [failedSubmit]);

  const update = (key: FieldKey, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFailedSubmit((count) => count + 1);
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Brief: ${form.service} — ${form.name}`);
    const body = encodeURIComponent(briefText(form));
    const mailto = `mailto:${NAP.emails[0]}?subject=${subject}&body=${body}`;
    window.setTimeout(() => {
      const mailLink = document.createElement("a");
      mailLink.href = mailto;
      mailLink.click();
      setSubmitted(true);
      setSending(false);
    }, 280);
  };

  const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(
    form.name || form.message
      ? briefText({ ...form, service: form.service || "General enquiry" })
      : "Hello Creative Whoppers — I’d like to start a project brief."
  )}`;

  const channels = [
    {
      href: whatsappHref,
      external: true,
      label: "WhatsApp",
      value: "Chat with a producer",
      icon: WhatsAppIcon,
    },
    {
      href: `tel:${NAP.phoneTel[1]}`,
      external: false,
      label: "Call",
      value: NAP.phones[1],
      icon: Phone,
    },
    {
      href: `mailto:${NAP.emails[0]}`,
      external: false,
      label: "Email",
      value: NAP.emails[0],
      icon: Mail,
    },
    {
      href: NAP.mapLink,
      external: true,
      label: "Studio",
      value: `${NAP.addressLocality}`,
      icon: MapPin,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden border-b border-agency-border px-6 pb-28 pt-24 sm:pb-32 lg:px-12">
        <div className="absolute inset-0">
          <FadeImage
            src={SITE_IMAGES.conference}
            alt="Audience at a professionally produced conference and stage experience"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-agency-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/55 to-agency-black/30" />
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-agency-yellow/15 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easings.outPremium }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-agency-yellow/30 bg-agency-black/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Get in touch
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium, delay: 0.05 }}
            className="page-heading mx-auto font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white"
          >
            Let’s start a brief
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: easings.outPremium, delay: 0.1 }}
            className="page-heading-lead mx-auto mt-8 font-sans text-base leading-relaxed text-agency-white/80 sm:text-lg"
          >
            Events, film, digital and brand work — tell us what you need and a producer
            will reply within one business day.
          </motion.p>
          <motion.ul
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easings.outPremium, delay: 0.16 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {["Reply in 1 business day", "Okhla, New Delhi", NAP.hours].map((item) => (
              <li
                key={item}
                className="rounded-full border border-agency-white/15 bg-agency-black/40 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-agency-white/80 backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-11 max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {})}
                className="group flex min-h-[5.5rem] cursor-pointer items-center gap-4 rounded-2xl border border-agency-border bg-agency-black p-4 transition-colors hover:border-agency-yellow/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-agency-yellow/30 bg-agency-yellow/10 text-agency-yellow">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-editorial-wide text-agency-white/50">
                    {channel.label}
                  </span>
                  <span className="mt-0.5 block truncate font-sans text-sm font-medium text-agency-white group-hover:text-agency-yellow">
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-agency-white/30 transition-colors group-hover:text-agency-yellow" aria-hidden />
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-12 lg:pb-10 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow">
              Enquiry form
            </p>
            <h2 className="section-heading mb-4 text-agency-white">
              Share the brief
            </h2>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-agency-white/65">
              Send the form and we&apos;ll open your email with the details filled in.
              Prefer chat? Use WhatsApp from the cards above.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: easings.outSnappy }}
                  className="rounded-3xl border border-agency-yellow/40 bg-agency-yellow/10 p-8 sm:p-10"
                  role="status"
                >
                  <CheckCircle2 className="h-8 w-8 text-agency-yellow" aria-hidden />
                  <p className="mt-4 font-display text-xl font-semibold uppercase text-agency-white">
                    Brief ready
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-agency-white/70">
                    If your mail app opened, send it through. If it didn&apos;t, write to{" "}
                    <a
                      href={`mailto:${NAP.emails[0]}`}
                      className="text-agency-yellow underline-offset-2 hover:underline"
                    >
                      {NAP.emails[0]}
                    </a>{" "}
                    or continue on WhatsApp.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-agency-yellow px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-agency-ink transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
                    >
                      Continue on WhatsApp
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL_FORM);
                        setErrors({});
                      }}
                      className="inline-flex min-h-12 cursor-pointer items-center rounded-full border border-agency-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-agency-white hover:border-agency-yellow hover:text-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
                    >
                      Send another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={handleSubmit}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-6"
                >
                  {errorEntries.length > 0 && (
                    <div
                      ref={errorSummaryRef}
                      role="alert"
                      tabIndex={-1}
                      aria-labelledby="contact-error-title"
                      className="rounded-2xl border border-red-500/40 bg-red-500/10 p-5 outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
                    >
                      <h3
                        id="contact-error-title"
                        className="font-display text-sm font-bold uppercase text-agency-white"
                      >
                        There is a problem
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {errorEntries.map(([key, message]) => (
                          <li key={key}>
                            <a
                              href={`#contact-${key}`}
                              className="text-agency-yellow underline-offset-2 hover:underline"
                            >
                              {message}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      id="contact-name"
                      label={FIELD_LABELS.name}
                      error={errors.name}
                      required
                    >
                      <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) => update("name", event.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={inputClass(Boolean(errors.name))}
                      />
                    </Field>
                    <Field id="contact-company" label={FIELD_LABELS.company}>
                      <input
                        id="contact-company"
                        name="company"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(event) => update("company", event.target.value)}
                        className={inputClass()}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      id="contact-email"
                      label={FIELD_LABELS.email}
                      error={errors.email}
                      required
                    >
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) => update("email", event.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={inputClass(Boolean(errors.email))}
                      />
                    </Field>
                    <Field
                      id="contact-phone"
                      label={FIELD_LABELS.phone}
                      error={errors.phone}
                      required
                    >
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(event) => update("phone", event.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                        className={inputClass(Boolean(errors.phone))}
                      />
                    </Field>
                  </div>

                  <fieldset aria-describedby={errors.service ? "contact-service-error" : undefined}>
                    <legend className="font-mono text-xs uppercase tracking-wider text-agency-white/55">
                      {FIELD_LABELS.service}
                      <span className="text-agency-yellow"> *</span>
                    </legend>
                    <div
                      id="contact-service"
                      className="mt-3 flex flex-wrap gap-2"
                    >
                      {SERVICE_OPTIONS.map((option) => {
                        const selected = form.service === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => update("service", option)}
                            className={cn(
                              "min-h-11 cursor-pointer rounded-full border px-4 py-2 text-left font-sans text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black",
                              selected
                                ? "border-agency-yellow bg-agency-yellow text-agency-ink"
                                : "border-agency-border bg-agency-white/[0.04] text-agency-white hover:border-agency-yellow/60"
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {errors.service && (
                      <p id="contact-service-error" className="mt-2 text-sm text-red-500">
                        {errors.service}
                      </p>
                    )}
                  </fieldset>

                  <Field
                    id="contact-message"
                    label={FIELD_LABELS.message}
                    error={errors.message}
                    required
                  >
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={(event) => update("message", event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      placeholder="Dates, venue, audience, deliverables — whatever you already know."
                      className={cn(inputClass(Boolean(errors.message)), "resize-y")}
                    />
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <motion.button
                      type="submit"
                      disabled={sending}
                      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-agency-yellow px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-agency-ink disabled:cursor-not-allowed disabled:opacity-70"
                      initial="rest"
                      animate="rest"
                      whileHover={reduceMotion || sending ? undefined : "hover"}
                      whileTap={reduceMotion || sending ? undefined : "tap"}
                      variants={{ rest: ctaRest, hover: ctaHover, tap: ctaTap }}
                      transition={ctaTransition}
                    >
                      {sending ? "Opening email…" : "Send enquiry"}
                      <Send className="h-4 w-4" aria-hidden />
                    </motion.button>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-agency-border px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-agency-white hover:border-agency-yellow hover:text-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp instead
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-agency-border">
              <div className="relative aspect-[16/10]">
                <FadeImage
                  src={SITE_IMAGES.handshake}
                  alt="Creative collaboration and partnership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold uppercase text-agency-white">
                  Studio details
                </h2>
                <p className="flex gap-3 text-sm leading-relaxed text-agency-white/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-agency-yellow" aria-hidden />
                  <span>
                    {NAP.name}
                    <br />
                    {NAP.streetAddress}
                    <br />
                    {NAP.addressLocality}, {NAP.addressRegion} {NAP.postalCode}
                  </span>
                </p>
                <p className="flex gap-3 text-sm">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-agency-yellow" aria-hidden />
                  <span className="space-y-1 font-mono">
                    {NAP.phones.map((phone, index) => (
                      <a
                        key={phone}
                        href={`tel:${NAP.phoneTel[index]}`}
                        className="block min-h-11 cursor-pointer py-1 hover:text-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
                      >
                        {phone}
                      </a>
                    ))}
                  </span>
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 shrink-0 text-agency-yellow" aria-hidden />
                  <a
                    href={`mailto:${NAP.emails[0]}`}
                    className="cursor-pointer hover:text-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
                  >
                    {NAP.emails[0]}
                  </a>
                </p>
                <p className="flex gap-3 text-sm text-agency-white/80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-agency-yellow" aria-hidden />
                  {NAP.hours}
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-display text-xl font-semibold uppercase text-agency-white">
                Connect
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {NAP.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 cursor-pointer items-center justify-between gap-2 rounded-xl border border-agency-border px-4 py-3 font-sans text-xs font-medium uppercase hover:border-agency-yellow hover:text-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
                  >
                    <span className="inline-flex items-center gap-2">
                      <SocialIcon name={item.name} />
                      {item.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-agency-white/30 group-hover:text-agency-yellow" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h2 className="section-heading text-agency-white">
              Find us
            </h2>
            <a
              href={NAP.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-agency-yellow hover:underline"
            >
              Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
          <div
            data-lenis-prevent
            className="overflow-hidden rounded-2xl border border-agency-border"
          >
            <iframe
              title="Creative Whoppers studio map"
              src={NAP.mapEmbed}
              className="h-72 w-full grayscale contrast-125 !pointer-events-auto sm:h-96 lg:h-[28rem] dark:invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-xs uppercase tracking-wider text-agency-white/55">
        {label}
        {required ? <span className="text-agency-yellow"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
