"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useModal } from "@/contexts/ModalContext";
import { modalBackdrop, modalContent } from "@/components/animations/variants";
import { Button } from "@/components/ui/Button";
import styles from "./CaseStudyModal.module.scss";

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function CaseStudyModal() {
  const { modal, payload, closeModal } = useModal();
  const isOpen = modal === "caseStudy";
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !contentRef.current) return;
      const focusables = contentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) return;
    const focusTarget = contentRef.current;
    if (focusTarget) {
      focusTarget.setAttribute("tabIndex", "-1");
      focusTarget.focus();
    }
  }, [isOpen]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          className={styles.wrapper}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          data-modal-open
        >
          <motion.div
            className={styles.backdrop}
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            onKeyDown={(e) => e.key === "Escape" && closeModal()}
          />
          <motion.div
            ref={contentRef}
            className={styles.content}
            variants={modalContent}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <h2 id="case-study-title" className={styles.title}>
                {payload?.caseStudy?.title ?? "Case Study"}
              </h2>
              <Button variant="ghost" onClick={closeModal} aria-label="Close">
                Close
              </Button>
            </div>
            <div className={styles.body}>
              <p>Case study content for {payload?.caseStudy?.id ?? "—"}.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") ?? document.body
  );
}
