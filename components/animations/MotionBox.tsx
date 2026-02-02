"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { fadeInUp } from "./variants";

type MotionBoxProps = HTMLMotionProps<"div"> & {
  variant?: "fadeInUp" | "none";
};

export function MotionBox({
  variant = "fadeInUp",
  initial,
  animate,
  ...props
}: MotionBoxProps) {
  const v = variant === "fadeInUp" ? fadeInUp : undefined;
  return (
    <motion.div
      initial={initial ?? v?.initial}
      animate={animate ?? v?.animate}
      exit={v?.exit}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      {...props}
    />
  );
}
