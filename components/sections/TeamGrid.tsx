"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FadeImage from "@/components/media/FadeImage";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { easings } from "@/lib/animations";

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
};

function TeamCard({
  person,
  featured = false,
  onOpen,
}: {
  person: TeamMember;
  featured?: boolean;
  onOpen: (person: TeamMember) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(person)}
      className="group w-full overflow-hidden rounded-2xl border border-agency-border bg-agency-black text-left transition-colors hover:border-agency-yellow/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
    >
      <div className="relative aspect-[5/6] overflow-hidden bg-[#eef1f4]">
        <FadeImage
          src={person.image}
          alt={person.name}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 25vw"}
          className="object-cover object-[center_40%] scale-[1.38] transition-transform duration-700 group-hover:scale-[1.46]"
        />
      </div>
      <div className={featured ? "p-4 sm:p-5" : "p-3.5 sm:p-4"}>
        <p className="font-sans text-[10px] font-medium uppercase tracking-wider text-agency-yellow">
          {person.experience}
        </p>
        <h3
          className={`mt-1.5 font-display font-semibold uppercase tracking-tight text-agency-white ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {person.name}
        </h3>
        <p className="mt-0.5 text-sm text-agency-white/55">{person.role}</p>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-agency-white/65 sm:text-sm">
          {person.bio}
        </p>
      </div>
    </button>
  );
}

function TeamLightbox({
  person,
  onClose,
}: {
  person: TeamMember | null;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!person) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [person, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {person && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${person.name} portrait`}
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easings.outSnappy }}
            onClick={onClose}
            className="absolute inset-0 bg-agency-black/92 backdrop-blur-md"
            aria-label="Close portrait"
          />
          <motion.figure
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.4, ease: easings.outPremium }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col items-center"
          >
            <button
              type="button"
              onClick={onClose}
              className="mb-4 self-end rounded-full border border-agency-border bg-agency-black/80 p-2.5 text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
              aria-label="Close portrait"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full overflow-hidden rounded-3xl border border-agency-border bg-[#f4f6f8]">
              <FadeImage
                src={person.image}
                alt={person.name}
                width={1400}
                height={1400}
                sizes="800px"
                className="relative mx-auto h-auto max-h-[78vh] w-full object-contain"
                priority
              />
            </div>
            <figcaption className="mt-5 text-center">
              <p className="font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
                {person.name}
              </p>
              <p className="mt-1 text-sm text-agency-white/55">{person.role}</p>
            </figcaption>
          </motion.figure>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function TeamGrid({ people }: { people: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const featured = people.filter(
    (person) => person.name === "Dilip Katariya" || person.name === "Khaalid Naik"
  );
  const featuredOrdered = [
    featured.find((person) => person.name === "Dilip Katariya"),
    featured.find((person) => person.name === "Khaalid Naik"),
  ].filter(Boolean) as TeamMember[];
  const rest = people.filter(
    (person) => person.name !== "Dilip Katariya" && person.name !== "Khaalid Naik"
  );

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredOrdered.map((person) => (
            <TeamCard key={person.name} person={person} featured onOpen={setSelected} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((person) => (
            <TeamCard key={person.name} person={person} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <TeamLightbox person={selected} onClose={() => setSelected(null)} />
    </>
  );
}
