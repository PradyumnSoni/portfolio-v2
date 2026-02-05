"use client";

import { ReactNode } from "react";
import { ModalProvider } from "@/contexts/ModalContext";
import { ReducedMotionProvider } from "@/contexts/ReducedMotionContext";
import { CaseStudyModal } from "@/components/modals/CaseStudyModal";
import { ImageZoomModal } from "@/components/modals/ImageZoomModal";
import { ProjectModal } from "@/components/modals/ProjectModal";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ReducedMotionProvider>
      <ModalProvider>
        {children}
        <CaseStudyModal />
        <ProjectModal />
        <ImageZoomModal />
      </ModalProvider>
    </ReducedMotionProvider>
  );
}
