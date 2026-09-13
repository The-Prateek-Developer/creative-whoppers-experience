"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_HREF, NAP, NAV_LINKS, SITE_DESCRIPTION } from "@/lib/site";
import SocialIcon from "@/components/icons/SocialIcon";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Footer() {
  const pathname = usePathname();
  const hideCta = pathname === "/contact-us";

  return (
    <footer className="relative w-full overflow-hidden border-t border-agency-border bg-agency-black">
      {!hideCta && (
      <div className="border-b border-agency-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-agency-border bg-agency-black p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center rounded-full border border-agency-yellow/30 bg-agency-yellow/10 px-3 py-1 font-mono text-xs text-agency-yellow">
                  <span>Have a brief in mind?</span>
                </div>
                <h2 className="section-heading mb-4 text-agency-white">
                  Let’s Create Together.
                </h2>
                <p className="font-sans text-sm leading-relaxed text-agency-white/55 sm:text-base">
                  Events, film, digital experiences and brand marketing under one creative agency roof.
                </p>
              </div>

              <div className="flex w-full flex-col items-stretch gap-3 lg:w-auto lg:min-w-[17rem]">
                <Link
                  href={CONTACT_HREF}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-agency-yellow px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-agency-ink transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(248,214,37,0.35)] active:scale-[0.98]"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={CONTACT_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-agency-border bg-agency-black px-6 py-4 font-mono text-xs uppercase tracking-wider text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
                >
                  <Mail className="h-4 w-4 text-agency-yellow" />
                  <span>Email Direct</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 gap-10 border-b border-agency-border pb-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Creative Whoppers home" className="mb-5 block leading-none">
              <BrandLogo size="nav" />
            </Link>
            <p className="max-w-md font-sans text-sm leading-relaxed text-agency-white/55">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 text-xs font-medium uppercase tracking-wider text-agency-white/55">
              Site
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-agency-white/80 transition-colors hover:text-agency-yellow"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h4 className="mb-6 text-xs font-medium uppercase tracking-wider text-agency-white/55">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-agency-white/80">
              {NAP.emails.map((email) => (
                <li key={email} className="min-w-0">
                  <Link
                    href={CONTACT_HREF}
                    className="group flex min-w-0 items-start gap-2 transition-colors hover:text-agency-yellow"
                  >
                    <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-agency-yellow" />
                    <span className="break-all">{email}</span>
                  </Link>
                </li>
              ))}
              {NAP.phones.map((phone, index) => (
                <li key={phone}>
                  <a
                    href={`tel:${NAP.phoneTel[index]}`}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-agency-yellow"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0 text-agency-yellow" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-agency-yellow" />
                <span>
                  {NAP.addressLocality}, {NAP.addressRegion}
                </span>
              </li>
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-3">
            <h4 className="mb-6 text-xs font-medium uppercase tracking-wider text-agency-white/55">
              Social
            </h4>
            <ul className="flex flex-col gap-3">
              {NAP.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 font-sans text-sm text-agency-white/80 transition-colors hover:text-agency-yellow"
                  >
                    <SocialIcon name={item.name} />
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-agency-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-agency-yellow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 font-mono text-xs text-agency-white/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {NAP.legalName}. All Right Reserved.
          </p>
          <p>
            {NAP.addressLocality}, {NAP.addressRegion}
          </p>
        </div>
      </div>
    </footer>
  );
}
