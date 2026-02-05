"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import styles from "./AboutSection.module.scss";

export function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-body">
      <ScrollReveal className={styles.inner}>
        <p id="about-body" className={styles.body}>
          I&apos;m designing products for systems that don&apos;t have the
          luxury of being confusing. I work end-to-end from defining flows to
          interfaces and developing them for production, with a strong emphasis
          on systems thinking.
        </p>
      </ScrollReveal>
    </section>
  );
}
