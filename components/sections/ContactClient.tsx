"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { FLAGSHIPS, PILLARS } from "@/lib/services-tree";
import { NAP } from "@/lib/site";

const SERVICE_OPTIONS = [
  ...PILLARS.map((item) => item.title),
  ...FLAGSHIPS.map((item) => item.title),
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-8 lg:px-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
        Get in touch
      </p>
      <h1 className="mb-4 font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white">
        Contact Us
      </h1>
      <p className="mb-16 max-w-2xl font-sans text-base leading-relaxed text-agency-white/65">
        Talk to the Creative Whoppers team about your next event, campaign or digital project —
        we&apos;ll respond within one business day.
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="mb-6 font-display text-xl font-bold uppercase text-agency-white">Enquiry form</h2>
          {submitted ? (
            <div className="rounded-2xl border border-agency-yellow/40 bg-agency-yellow/10 p-10">
              <p className="font-display text-2xl font-bold uppercase text-agency-white">Thank you</p>
              <p className="mt-3 text-sm text-agency-white/70">
                Your enquiry is in. A producer will reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block text-xs font-mono uppercase text-agency-white/55">
                  Name
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-lg border border-agency-border bg-agency-white/[0.06] px-4 py-3 text-sm text-agency-white outline-none focus:border-agency-yellow"
                  />
                </label>
                <label className="block text-xs font-mono uppercase text-agency-white/55">
                  Company
                  <input
                    name="company"
                    className="mt-2 w-full rounded-lg border border-agency-border bg-agency-white/[0.06] px-4 py-3 text-sm text-agency-white outline-none focus:border-agency-yellow"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block text-xs font-mono uppercase text-agency-white/55">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-lg border border-agency-border bg-agency-white/[0.06] px-4 py-3 text-sm text-agency-white outline-none focus:border-agency-yellow"
                  />
                </label>
                <label className="block text-xs font-mono uppercase text-agency-white/55">
                  Phone
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-agency-border bg-agency-white/[0.06] px-4 py-3 text-sm text-agency-white outline-none focus:border-agency-yellow"
                  />
                </label>
              </div>
              <label className="block text-xs font-mono uppercase text-agency-white/55">
                Service interested in
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-lg border border-agency-border bg-agency-black px-4 py-3 text-sm text-agency-white outline-none focus:border-agency-yellow"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs font-mono uppercase text-agency-white/55">
                Message / project brief
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-2 w-full resize-none rounded-lg border border-agency-border bg-agency-white/[0.06] px-4 py-3 text-sm text-agency-white outline-none focus:border-agency-yellow"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-agency-yellow px-8 py-4 font-display text-xs font-bold uppercase tracking-wider text-agency-black"
              >
                Send enquiry
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-8 lg:col-span-5">
          <div className="rounded-2xl border border-agency-border p-8">
            <h2 className="mb-6 font-display text-xl font-bold uppercase text-agency-white">
              Contact details
            </h2>
            <div className="space-y-5 text-sm">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-agency-yellow" />
                <span>
                  {NAP.name}
                  <br />
                  {NAP.streetAddress}
                  <br />
                  {NAP.addressLocality}, {NAP.addressRegion} {NAP.postalCode}
                </span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-agency-yellow" />
                <span className="space-y-1 font-mono">
                  {NAP.phones.map((phone, index) => (
                    <a key={phone} href={`tel:${NAP.phoneTel[index]}`} className="block hover:text-agency-yellow">
                      {phone}
                    </a>
                  ))}
                </span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-agency-yellow" />
                <a href={`mailto:${NAP.emails[0]}`} className="hover:text-agency-yellow">
                  {NAP.emails[0]}
                </a>
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-agency-yellow" />
                {NAP.hours}
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-xl font-bold uppercase text-agency-white">Location</h2>
            <div className="overflow-hidden rounded-2xl border border-agency-border">
              <iframe
                title="Creative Whoppers studio map"
                src={NAP.mapEmbed}
                className="h-64 w-full grayscale invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-xl font-bold uppercase text-agency-white">
              Connect with us
            </h2>
            <div className="flex flex-wrap gap-3">
              {NAP.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-agency-border px-4 py-2 font-mono text-xs uppercase hover:border-agency-yellow hover:text-agency-yellow"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <p className="text-sm text-agency-white/55">
            Join our team or partner with us — write to{" "}
            <a href={`mailto:${NAP.emails[0]}`} className="text-agency-yellow hover:underline">
              {NAP.emails[0]}
            </a>{" "}
            with the subject “Careers” or “Collaborate”.
          </p>
        </aside>
      </div>
    </div>
  );
}
