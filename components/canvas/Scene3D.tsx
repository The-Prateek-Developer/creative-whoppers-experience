"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/gsap";
import { isScrollPaused } from "@/lib/scroll-activity";

interface Scene3DProps {
  variant?: "hero" | "philosophy";
  className?: string;
  lazy?: boolean;
  density?: "full" | "home";
}

function DemandDriver({ active }: { active: boolean }) {
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let running = true;
    const loop = () => {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      if (!isScrollPaused()) invalidate();
    };
    raf = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, [active, invalidate]);
  return null;
}

function DepthParticles({ count = 90, color = "#F8D625" }: { count?: number; color?: string }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={color}
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AbstractGeometry({ variant }: { variant: "hero" | "philosophy" }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const scale = variant === "hero" ? 1.05 : 1.35;
  const positionOffset: [number, number, number] =
    variant === "hero" ? [2.5, -0.2, -1] : [0, 0, -1];
  const primaryColor = variant === "hero" ? "#F8D625" : "#B366FF";

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.07;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    groupRef.current.position.y =
      positionOffset[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.15;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.12;
      ring1Ref.current.rotation.x += delta * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.14;
      ring2Ref.current.rotation.z -= delta * 0.06;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={positionOffset} scale={scale}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial color={primaryColor} wireframe transparent opacity={0.28} />
      </mesh>

      <mesh>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.15} />
      </mesh>

      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 48]} />
        <meshBasicMaterial color={primaryColor} transparent opacity={0.4} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[3.4, 0.01, 16, 48]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

export default function Scene3D({
  variant = "hero",
  className = "",
  lazy = false,
  density = "full",
}: Scene3DProps) {
  const [ready, setReady] = useState(!lazy);
  const [inView, setInView] = useState(!lazy);
  const [lite, setLite] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    setLite(coarse || narrow);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReady(true);
        setInView(entry.isIntersecting);
      },
      { threshold: lazy ? 0.22 : 0.08, rootMargin: "0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    let timeoutId = 0;
    if (!lazy) {
      setReady(true);
    } else {
      timeoutId = window.setTimeout(() => setReady(true), 1200);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [lazy]);

  const home = density === "home";
  const particleCount = home
    ? variant === "hero"
      ? 80
      : 64
    : variant === "hero"
      ? 180
      : 220;
  const active = ready && inView;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {ready && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={home || lite ? 1 : [1, 1.25]}
          gl={{
            antialias: !home && !lite,
            alpha: true,
            powerPreference: home ? "low-power" : "high-performance",
            stencil: false,
            depth: true,
          }}
          frameloop="demand"
          events={undefined}
          style={{ pointerEvents: "none", width: "100%", height: "100%" }}
        >
          <DemandDriver active={active} />
          <ambientLight intensity={0.4} />
          <AbstractGeometry variant={variant} />
          {!lite && !(home && variant === "philosophy") && (
            <DepthParticles
              count={particleCount}
              color={variant === "hero" ? "#F8D625" : "#B366FF"}
            />
          )}
        </Canvas>
      )}
    </div>
  );
}
