"use client";

import { ReactNode } from "react";
import { ModalProvider } from "@/contexts/ModalContext";
import { ReducedMotionProvider } from "@/contexts/ReducedMotionContext";
import { CaseStudyModal } from "@/components/modals/CaseStudyModal";
import { ImageZoomModal } from "@/components/modals/ImageZoomModal";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReducedMotionProvider>
      <ModalProvider>
        {children}
        <CaseStudyModal />
        <ImageZoomModal />
      </ModalProvider>
    </ReducedMotionProvider>
  );
}
