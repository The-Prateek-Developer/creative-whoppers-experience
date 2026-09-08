"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { subscribeScrollPause } from "@/lib/scroll-activity";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
};

const ACCENT = { r: 248, g: 214, b: 37 };
const LINK_DIST = 108;
const MOUSE_RADIUS = 150;
const FRAME_MS = 1000 / 30;

interface ParticleFieldProps {
  count?: number;
  className?: string;
  lazy?: boolean;
}

export default function ParticleField({
  count = 40,
  className,
  lazy = false,
}: ParticleFieldProps) {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(!lazy);

  useEffect(() => {
    if (reduceMotion) {
      setEnabled(false);
      return;
    }

    const fine = window.matchMedia("(pointer: fine)");
    const hover = window.matchMedia("(hover: hover)");
    const desktop = window.matchMedia("(min-width: 768px)");

    const sync = () => {
      setEnabled(fine.matches && hover.matches && desktop.matches);
    };

    sync();
    fine.addEventListener("change", sync);
    hover.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      hover.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;

    if (!lazy) {
      setMounted(true);
      return;
    }

    const wrap = wrapRef.current;
    if (!wrap) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true);
      },
      { threshold: 0.22, rootMargin: "0px" }
    );
    io.observe(wrap);

    const timeoutId = window.setTimeout(() => setMounted(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, [enabled, lazy]);

  useEffect(() => {
    if (!enabled || !mounted) return;

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const particleCount = Math.min(50, Math.max(30, count));
    const particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    const flags = { paused: false, inView: false, running: true };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let lastDraw = 0;
    let bounds = { left: 0, top: 0 };

    const setPaused = (value: boolean) => {
      flags.paused = value;
      wrap.dataset.particlesPaused = value ? "true" : "false";
      if (!value) {
        const rect = wrap.getBoundingClientRect();
        bounds = { left: rect.left, top: rect.top };
        if (flags.inView && flags.running && !raf) {
          raf = requestAnimationFrame(draw);
        }
      }
    };

    const spawn = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: 0.9 + Math.random() * 1.5,
          alpha: 0.16 + Math.random() * 0.18,
        });
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      bounds = { left: rect.left, top: rect.top };
      dpr = 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particles.length === 0) spawn();
    };

    const draw = (time: number) => {
      if (!flags.running) return;

      if (!flags.inView || flags.paused) {
        raf = 0;
        return;
      }

      raf = requestAnimationFrame(draw);
      if (time - lastDraw < FRAME_MS) return;
      lastDraw = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_RADIUS && dist > 0.5) {
            const falloff = (1 - dist / MOUSE_RADIUS) ** 2;
            const nx = dx / dist;
            const ny = dy / dist;
            p.vx += nx * falloff * 0.62;
            p.vy += ny * falloff * 0.62;
            p.vx += -ny * falloff * 0.2;
            p.vy += nx * falloff * 0.2;
          }
        }

        p.vx += (Math.random() - 0.5) * 0.012;
        p.vy += (Math.random() - 0.5) * 0.012;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -8) p.x = width + 8;
        else if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        else if (p.y > height + 8) p.y = -8;
      }

      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DIST) continue;
          const opacity = (1 - dist / LINK_DIST) * 0.12;
          ctx.strokeStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
      mouse.active =
        mouse.x >= -40 &&
        mouse.y >= -40 &&
        mouse.x <= width + 40 &&
        mouse.y <= height + 40;
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);

    const visibility = new IntersectionObserver(
      ([entry]) => {
        flags.inView = entry.isIntersecting;
        wrap.dataset.particlesOffscreen = entry.isIntersecting ? "false" : "true";
        if (entry.isIntersecting && !flags.paused && flags.running && !raf) {
          raf = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.08, rootMargin: "0px" }
    );
    visibility.observe(wrap);

    const unsubPause = subscribeScrollPause(setPaused);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });

    return () => {
      flags.running = false;
      cancelAnimationFrame(raf);
      raf = 0;
      resizeObserver.disconnect();
      visibility.disconnect();
      unsubPause();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [count, enabled, mounted]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      data-particles="on"
      data-particles-paused="false"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [contain:strict]",
        className
      )}
    >
      {mounted ? <canvas ref={canvasRef} className="h-full w-full" /> : null}
    </div>
  );
}
