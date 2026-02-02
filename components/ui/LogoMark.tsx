"use client";

import styles from "./LogoMark.module.scss";

type LogoMarkProps = {
  className?: string;
  size?: "sm" | "md";
};

export function LogoMark({ className = "", size = "md" }: LogoMarkProps) {
  return (
    <span
      className={`${styles.mark} ${styles[size]} ${className}`.trim()}
      aria-hidden
    >
      P
    </span>
  );
}
