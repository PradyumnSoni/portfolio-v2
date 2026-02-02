"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { talksIntro } from "@/content/talks";
import styles from "./TalksSection.module.scss";

export function TalksSection() {
  return (
    <section
      id="talks"
      className={styles.section}
      aria-labelledby="talks-heading"
    >
      <ScrollReveal className={styles.inner}>
        <p className={styles.label}>{talksIntro.label}</p>
        <h2 id="talks-heading" className={styles.heading}>
          {talksIntro.title}
        </h2>
        <p className={styles.description}>{talksIntro.description}</p>
        <div className={styles.imageWrap} aria-hidden>
          <div className={styles.imagePlaceholder}>
            Speaker image (Pradyumn at whiteboard) – add image
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
