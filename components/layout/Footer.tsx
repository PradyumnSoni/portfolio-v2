"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import styles from "./Footer.module.scss";

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/pradyumnsoni/",
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/919667656325",
    label: "WhatsApp",
  },
  {
    href: "mailto:pradyumnsoni@gmail.com",
    label: "Email",
  },
];

const menuLinks = [
  { href: "#featured-work", label: "Projects" },
  { href: "#community-education", label: "Teaching" },
  { href: "#freelance", label: "Freelance" },
];

export function Footer() {
  const confettiAnimationRef = useRef<number | null>(null);
  const spinBoostTimeoutRef = useRef<number | null>(null);
  const [isSpinBoosted, setIsSpinBoosted] = useState(false);

  useEffect(() => {
    return () => {
      if (confettiAnimationRef.current) {
        cancelAnimationFrame(confettiAnimationRef.current);
      }
      if (spinBoostTimeoutRef.current) {
        window.clearTimeout(spinBoostTimeoutRef.current);
      }
    };
  }, []);

  const triggerConfetti = useCallback(() => {
    // Respect reduced motion.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    ) {
      return;
    }

    const colors = ["#ff3000", "#ffffff"];
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    // Temporarily speed up CD spin for the same duration.
    setIsSpinBoosted(true);
    if (spinBoostTimeoutRef.current) {
      window.clearTimeout(spinBoostTimeoutRef.current);
    }
    spinBoostTimeoutRef.current = window.setTimeout(() => {
      setIsSpinBoosted(false);
      spinBoostTimeoutRef.current = null;
    }, duration);

    if (confettiAnimationRef.current) {
      cancelAnimationFrame(confettiAnimationRef.current);
    }

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        ticks: 200,
        shapes: ["square"],
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        ticks: 200,
        shapes: ["square"],
      });

      if (Date.now() < end) {
        confettiAnimationRef.current = requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.nameRow} aria-label="Pradyumn footer wordmark">
        <div className={styles.nameWrap}>
          <Image
            src="/FooterName.svg"
            alt="Pradyumn"
            fill
            className={styles.nameImg}
            priority
          />
        </div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.contentInner}>
          <div className={styles.recordColumn}>
            <div
              className={styles.recordWrap}
              role="button"
              tabIndex={0}
              aria-label="Celebrate"
              data-boosted={isSpinBoosted ? "true" : "false"}
              onClick={triggerConfetti}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  triggerConfetti();
                }
              }}
            >
              <Image
                src="/PradyCD.png"
                alt=""
                fill
                className={styles.recordImg}
                sizes="250px"
                unoptimized
              />
            </div>
          </div>

          <div className={styles.contactColumn}>
            <p className={styles.columnHeading}>Contact</p>
            <ul className={styles.linkColumn} role="list">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <p className={styles.columnHeading}>Menu</p>
            <ul className={styles.linkColumn} role="list">
              {menuLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.summaryColumn}>
            <p className={styles.summary}>
              Open to full-time roles, contracts, and conversations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
