"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import styles from "./Card.module.scss";

type CardProps = ComponentProps<typeof motion.div> & {
  children: React.ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <motion.div
      className={`${styles.card} ${className}`.trim()}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
