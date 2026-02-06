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

const CONFETTI_TOAST_MESSAGES: string[] = [
  "Hey, who's gonna clean up all that confetti!",
  "Okay, now this is getting out of hand.",
  "I hope you’re planning to vacuum after this.",
  "The janitor just filed a formal complaint.",
  "At this point, the confetti is part of the decor.",
];

type ConfettiToast = {
  id: number;
  message: string;
  isClosing?: boolean;
};

export function Footer() {
  const confettiAnimationRef = useRef<number | null>(null);
  const spinBoostTimeoutRef = useRef<number | null>(null);
  const confettiToastTimeoutsRef = useRef<Record<number, number>>({});
  const nextToastIdRef = useRef(1);
  const [isSpinBoosted, setIsSpinBoosted] = useState(false);
  const [confettiClicks, setConfettiClicks] = useState(0);
  const [confettiToasts, setConfettiToasts] = useState<ConfettiToast[]>([]);

  useEffect(() => {
    return () => {
      if (confettiAnimationRef.current) {
        cancelAnimationFrame(confettiAnimationRef.current);
      }
      if (spinBoostTimeoutRef.current) {
        window.clearTimeout(spinBoostTimeoutRef.current);
      }
      Object.values(confettiToastTimeoutsRef.current).forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
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

    const colors = ["#ff3000", "#00cfff"];
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    setConfettiClicks((prev) => {
      const next = prev + 1;

      // From the very first confetti trigger onwards, queue a short-lived toast
      // with a message that changes based on how many times you've clicked,
      // but only up to the length of CONFETTI_TOAST_MESSAGES.
      if (next >= 1 && next <= CONFETTI_TOAST_MESSAGES.length) {
        const index = next - 1;
        const message = CONFETTI_TOAST_MESSAGES[index];

        if (message) {
          // Mark any existing toasts as closing so they fade out gracefully
          // while the new one animates in.
          setConfettiToasts((current) =>
            current.map((toast) => ({ ...toast, isClosing: true })),
          );

          const id = nextToastIdRef.current++;

          setConfettiToasts((current) => [...current, { id, message }]);

          const timeoutId = window.setTimeout(() => {
            setConfettiToasts((current) =>
              current.filter((toast) => toast.id !== id),
            );
            delete confettiToastTimeoutsRef.current[id];
          }, 3200);

          confettiToastTimeoutsRef.current[id] = timeoutId;
        }
      }

      return next;
    });

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
        spread: 100,
        origin: { x: 0 },
        colors,
        ticks: 100,
        shapes: ["square","circle"],
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 100,
        origin: { x: 1 },
        colors,
        ticks: 100,
        shapes: ["square","circle"],
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

          {confettiToasts.map((toast) => (
            <div
              key={toast.id}
              className={`${styles.toast} ${
                toast.isClosing ? styles.toastClosing : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {toast.message}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
