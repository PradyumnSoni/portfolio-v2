"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { useRef, useCallback } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { featuredWorkCards } from "@/content/projects";
import { useModal } from "@/contexts/ModalContext";
import styles from "./FeaturedWorkSection.module.scss";

export function FeaturedWorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  const scroll = useCallback((direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85; // ~1 card + gap
    const amount = direction === "next" ? cardWidth : -cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  return (
    <section
      id="featured-work"
      className={styles.section}
      aria-labelledby="featured-heading"
    >
      <ScrollReveal className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="featured-heading" className={styles.heading}>
              Selected Projects
            </h2>
            <p className={styles.subtitle}>
              Real-world products, experiments, and explorations across domains.
            </p>
          </div>
          <div className={styles.nav} role="group" aria-label="Carousel navigation">
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scroll("prev")}
              aria-label="Previous projects"
            >
              <Icon
                path={mdiChevronLeft}
                className={styles.navArrowIcon}
              />
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scroll("next")}
              aria-label="Next projects"
            >
              <Icon
                path={mdiChevronRight}
                className={styles.navArrowIcon}
              />
            </button>
          </div>
        </header>

        <div className={styles.trackWrap}>
          <div
            ref={trackRef}
            className={styles.track}
            role="list"
            aria-label="Project cards"
          >
          {featuredWorkCards.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              style={
                {
                  "--card-accent": project.cardColor,
                  "--card-overlay-start": project.overlayStart,
                  "--card-overlay-end": project.overlayEnd,
                  "--card-text-color":
                    project.cardTextColor === "dark"
                      ? "var(--color-text)"
                      : "var(--color-text-inverse)",
                  "--card-text-muted":
                    project.cardTextColor === "dark"
                      ? "rgba(0, 0, 0, 0.7)"
                      : "rgba(255, 255, 255, 0.9)",
                } as React.CSSProperties
              }
              role="listitem"
            >
              <button
                type="button"
                className={styles.cardButton}
                onClick={() =>
                  openModal("caseStudy", {
                    caseStudy: { id: project.id, title: project.title },
                  })
                }
              >
                {/* Full-bleed background image */}
                <div className={styles.cardBg}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 85vw, 380px"
                      className={styles.cardBgImg}
                    />
                  ) : (
                    <div
                      className={styles.cardBgFallback}
                      style={{ background: project.cardColor }}
                      aria-hidden
                    />
                  )}
                </div>
                {/* Dark + colored gradient overlay for text readability & per-card color treatment */}
                {!project.disableColorOverlay && (
                  <div className={styles.cardOverlay} aria-hidden />
                )}
                {/* Foreground image at bottom of card (e.g. person + device) */}
                {project.foregroundImage && (
                  <div className={styles.cardForeground} aria-hidden>
                    <Image
                      src={project.foregroundImage}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 85vw, 380px"
                      className={styles.cardForegroundImg}
                    />
                  </div>
                )}
                {/* Content: icon + title in a row, description below */}
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      {project.icon ? (
                        <Image
                          src={project.icon}
                          alt=""
                          width={40}
                          height={40}
                          className={styles.iconImg}
                        />
                      ) : (
                        <span className={styles.iconPlaceholder} aria-hidden />
                      )}
                    </div>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{project.shortDescription}</p>
                </div>
              </button>
            </article>
          ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
