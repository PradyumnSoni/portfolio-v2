"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "./variants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  once = true,
  amount = 0.2,
  initial,
  transition,
  ...props
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotionContext();
  const defaultTransition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <motion.div
      initial={initial ?? fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once, amount }}
      transition={reducedMotion ? { duration: 0 } : (transition ?? defaultTransition)}
      {...props}
    />
  );
}
