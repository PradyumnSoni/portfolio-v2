"use client";

import Image from "next/image";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { motion } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { fadeInUp } from "@/components/animations/variants";
import { featuredWorkCards } from "@/content/projects";
import { useModal } from "@/contexts/ModalContext";
import styles from "./FeaturedWorkSection.module.scss";

export function FeaturedWorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const compute = () => {
      const scrollLeft = el.scrollLeft;
      // Enable/disable arrows based on remaining scroll space.
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const eps = 2; // avoid float rounding issues
      setCanPrev(scrollLeft > eps);
      setCanNext(scrollLeft < maxScrollLeft - eps);
    };

    const onScroll = () => compute();
    const onResize = () => compute();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    compute();

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scroll = useCallback((direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const isMobile = window.innerWidth <= 768;
    const cardWidth = el.offsetWidth * (isMobile ? 1 : 0.85); // ~1 card on mobile, ~1 card + gap on desktop
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
              Featured Projects
            </h2>
            <p className={styles.subtitle}>
              Real-world products, experiments, and explorations across domains.
            </p>
          </div>
          <div className={styles.carouselControls}>
            <div className={styles.nav} role="group" aria-label="Carousel navigation">
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => scroll("prev")}
                disabled={!canPrev}
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
                disabled={!canNext}
                aria-label="Next projects"
              >
                <Icon
                  path={mdiChevronRight}
                  className={styles.navArrowIcon}
                />
              </button>
            </div>
          </div>
        </header>

        <div className={styles.trackWrap}>
          <div
            ref={trackRef}
            className={styles.track}
            role="list"
            aria-label="Project cards"
          >
          {featuredWorkCards.map((project, index) => (
            <motion.article
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
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.15,
              }}
            >
              <button
                type="button"
                className={styles.cardButton}
                onClick={() => {
                  if (project.id === "marketplace-project") {
                    setComingSoon(true);
                    window.setTimeout(() => setComingSoon(false), 3000);
                    return;
                  }
                  openModal("project", {
                    project: {
                      id: project.id,
                      title: project.title,
                      projectLink:
                        project.projectLink ?? project.prototypeLink ?? project.figmaLink,
                      customContentId: project.customContentId,
                    },
                  });
                }}
              >
                {/* Full-bleed background image */}
                <div className={styles.cardBg}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
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
                      sizes="(max-width: 768px) 100vw, 380px"
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
            </motion.article>
          ))}
          </div>
        </div>
        {comingSoon && (
          <div className={styles.toast} role="status" aria-live="polite">
            This project is undergoing an update. Please check back later. 🪴
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
