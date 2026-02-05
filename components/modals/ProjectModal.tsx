"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useModal } from "@/contexts/ModalContext";
import { modalBackdrop, modalContent } from "@/components/animations/variants";
import { Button } from "@/components/ui/Button";
import { DispatchProjectContent } from "@/components/projects/DispatchProjectContent";
import styles from "./ProjectModal.module.scss";

export function ProjectModal() {
  const { modal, payload, closeModal } = useModal();
  const isOpen = modal === "project";
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  const project = payload?.project;
  const hasCustomContent = project?.customContentId === "dispatch";
  const hasIframe = !!project?.projectLink && !hasCustomContent;

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !contentRef.current) return;
      const focusables = contentRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
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

  useEffect(() => {
    if (!isOpen) {
      setIsIframeLoading(true);
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
          aria-label="Project details"
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
            <div className={styles.body}>
              {hasCustomContent ? (
                <div className={styles.customContent}>
                  <DispatchProjectContent />
                </div>
              ) : hasIframe ? (
                <div className={styles.frameWrap}>
                  {isIframeLoading && (
                    <div className={styles.loading} aria-label="Loading project details">
                      <div className={styles.spinner} />
                      <div className={styles.loadingLabel}>Loading project…</div>
                    </div>
                  )}
                  <iframe
                    className={styles.iframe}
                    src={project.projectLink}
                    title={project?.title ?? "Project"}
                    allow="fullscreen"
                    onLoad={() => setIsIframeLoading(false)}
                  />
                </div>
              ) : (
                <p>
                  Detailed content for <strong>{project?.id ?? "this project"}</strong> will live
                  here. For now, this is a placeholder case study body.
                </p>
              )}
            </div>
          </motion.div>
          <Button
            className={styles.closeButton}
            variant="ghost"
            onClick={closeModal}
            aria-label="Close project details"
          >
            <Icon path={mdiClose} className={styles.closeIcon} />
          </Button>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") ?? document.body
  );
}

