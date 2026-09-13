"use client";

import React, { useEffect, useRef, useState } from "react";
import FadeImage from "@/components/media/FadeImage";
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SERVICE_OPTIONS = [
  ...PILLARS.map((item) => item.title),
  ...FLAGSHIPS.filter((item) => item.kind === "flagship").map((item) => item.title),
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

  const channels = [
    {
      href: WHATSAPP_URL,
      external: true,
      label: "WhatsApp",
      value: "Tell us about your project",
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
      label: "Location",
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
            Get in touch
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium, delay: 0.05 }}
            className="page-heading mx-auto font-display text-display-xl font-bold uppercase tracking-tight text-agency-white"
          >
            Let’s start a brief
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: easings.outPremium, delay: 0.1 }}
            className="page-heading-lead mx-auto mt-8 font-sans text-base leading-relaxed text-agency-white/80 sm:text-lg"
          >
            Have a project in mind? Share your brief with us, and let&apos;s explore how we
            can bring it to life.
          </motion.p>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-11 max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {})}
                className={cn(
                  "group flex min-h-[5.5rem] cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border border-agency-white/20 p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-colors hover:border-agency-yellow/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black sm:p-4",
                  index % 2 === 0 ? "bg-[#1c1c1c]" : "bg-[#111111]"
                )}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-agency-yellow/30 bg-agency-yellow/10 text-agency-yellow sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-agency-white/50">
                    {channel.label}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block font-medium leading-snug text-agency-white group-hover:text-agency-yellow",
                      channel.value.includes("@")
                        ? "break-all font-mono text-[11px] sm:text-xs"
                        : "font-sans text-sm"
                    )}
                  >
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-agency-white/30 transition-colors group-hover:text-agency-yellow" aria-hidden />
              </a>
            );
          })}
        </div>
      </section>

      <section
        id="share-the-brief"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-8 pt-16 lg:px-12 lg:pb-10 lg:pt-24"
      >
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
                    </a>
                    .
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${NAP.emails[0]}`}
                      className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-agency-yellow px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-agency-ink transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
                    >
                      Get in touch
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
                      placeholder="Dates, venue, audience, deliverables, whatever you already know."
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
                      href={`mailto:${NAP.emails[0]}`}
                      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-agency-border px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-agency-white hover:border-agency-yellow hover:text-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
                    >
                      <Mail className="h-4 w-4" />
                      Get in touch
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
                  Get in touch
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
          </aside>
        </div>
      </section>

      <section className="relative w-full pt-16 lg:pt-20">
        <a
          href={NAP.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-6 top-20 z-10 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-agency-border bg-agency-black/80 px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-agency-yellow backdrop-blur-sm hover:border-agency-yellow lg:right-12 lg:top-24"
        >
          Open in Google Maps
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
        <div data-lenis-prevent className="w-full overflow-hidden border-y border-agency-border">
          <iframe
            title="Creative Whoppers studio map"
            src={NAP.mapEmbed}
            className="h-[22rem] w-full grayscale contrast-125 !pointer-events-auto sm:h-[28rem] lg:h-[36rem] dark:invert"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
