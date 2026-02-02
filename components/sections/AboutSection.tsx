"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import styles from "./AboutSection.module.scss";

export function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <ScrollReveal className={styles.inner}>
        <h2 id="about-heading" className={styles.heading}>
          About
        </h2>
        <p className={styles.body}>
          UX designer focused on user-centered products and clear, accessible
          interfaces. I combine research, prototyping, and visual design to ship
          experiences that work across desktop and mobile.
        </p>
      </ScrollReveal>
    </section>
  );
}
