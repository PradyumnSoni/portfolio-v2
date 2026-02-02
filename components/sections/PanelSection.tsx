"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { panel } from "@/content/talks";
import styles from "./PanelSection.module.scss";

export function PanelSection() {
  return (
    <section
      id="panel"
      className={styles.section}
      aria-labelledby="panel-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="panel-heading" className={styles.heading}>
          {panel.title}
        </h2>
        <p className={styles.date}>{panel.date}</p>
        <ul className={styles.items} role="list">
          {panel.items.map((item, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.itemImage}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.img}
                />
              </div>
              <p className={styles.itemTitle}>{item.title}</p>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
