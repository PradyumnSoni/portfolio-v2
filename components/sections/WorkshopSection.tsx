"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { workshop } from "@/content/talks";
import styles from "./WorkshopSection.module.scss";

export function WorkshopSection() {
  return (
    <section
      id="workshop"
      className={styles.section}
      aria-labelledby="workshop-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="workshop-heading" className={styles.heading}>
          {workshop.title}
        </h2>
        <p className={styles.date}>{workshop.date}</p>
        <p className={styles.description}>{workshop.description}</p>
        <ol className={styles.items} role="list">
          {workshop.items.map((item, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.itemImage} aria-hidden>
                Image {i + 1}
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  );
}
