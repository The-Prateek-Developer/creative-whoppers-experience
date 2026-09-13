"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, gsapEase, prefersReducedMotion, refreshScrollTrigger, ScrollTrigger } from "@/lib/gsap";

export function useSectionReveal(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>("[data-reveal='heading']").forEach((heading) => {
        const items = heading.querySelectorAll("[data-reveal-item]");
        const targets = items.length > 0 ? items : [heading];

        gsap.set(targets, { y: 28, opacity: 0 });
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration: 0.82,
          stagger: 0.09,
          ease: gsapEase.outPremium,
          overwrite: "auto",
          scrollTrigger: {
            trigger: heading,
            start: "top 92%",
            once: true,
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            onRefresh(self) {
              if (self.progress > 0) {
                gsap.set(targets, { y: 0, opacity: 1, overwrite: true });
              }
            },
          },
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-reveal='card']"));
      if (cards.length > 0) {
        gsap.set(cards, { y: 32, opacity: 0 });
        ScrollTrigger.batch(cards, {
          interval: 0.1,
          batchMax: 4,
          start: "top 92%",
          once: true,
          onEnter: (elements) =>
            gsap.to(elements, {
              y: 0,
              opacity: 1,
              duration: 0.72,
              stagger: 0.08,
              ease: gsapEase.outPremium,
              overwrite: "auto",
            }),
        });
      }

      root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((layer) => {
        const distance = Number(layer.dataset.parallax) || -36;
        const trigger = layer.closest("[data-parallax-root]") ?? layer.parentElement ?? layer;

        gsap.fromTo(
          layer,
          { y: distance },
          {
            y: -distance,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, root);

    refreshScrollTrigger(140);

    return () => {
      ctx.revert();
    };
  }, [scopeRef]);
}
