"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import { modalBackdrop, modalContent } from "@/components/animations/variants";
import { Button } from "@/components/ui/Button";
import styles from "./ImageZoomModal.module.scss";

export function ImageZoomModal() {
  const { modal, payload, closeModal } = useModal();
  const isOpen = modal === "imageZoom";

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (typeof document === "undefined") return null;

  const src = payload?.imageZoom?.src ?? "";
  const alt = payload?.imageZoom?.alt ?? "Preview";

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && src && (
        <div
          className={styles.wrapper}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
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
            className={styles.content}
            variants={modalContent}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.imageWrap}>
              <Image
                src={src}
                alt={alt}
                fill
                className={styles.image}
                sizes="90vw"
              />
            </div>
            <Button
              className={styles.closeBtn}
              variant="ghost"
              onClick={closeModal}
              aria-label="Close"
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") ?? document.body
  );
}
