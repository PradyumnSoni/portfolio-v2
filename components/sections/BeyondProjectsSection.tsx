"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { beyondCards } from "@/content/beyond";
import styles from "./BeyondProjectsSection.module.scss";

const iconMap: Record<string, string> = {
  community: "🤝",
  entrepreneurship: "🏢",
};

export function BeyondProjectsSection() {
  return (
    <section
      id="beyond-projects"
      className={styles.section}
      aria-labelledby="beyond-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="beyond-heading" className={styles.heading}>
          Beyond Projects
        </h2>
        <p className={styles.subtitle}>
          Community, culture, and helping businesses scale.
        </p>
        <div className={styles.grid}>
          {beyondCards.map((card) => (
            <article
              key={card.id}
              className={styles.card}
            >
              <span className={styles.icon} aria-hidden>
                {iconMap[card.icon] ?? "•"}
              </span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
