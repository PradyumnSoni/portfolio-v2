"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type ModalType = "caseStudy" | "imageZoom" | null;

export type ModalPayload = {
  caseStudy?: { id: string; title: string };
  imageZoom?: { src: string; alt: string };
};

type ModalContextValue = {
  modal: ModalType;
  payload: ModalPayload | null;
  openModal: (type: ModalType, payload?: ModalPayload) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalType>(null);
  const [payload, setPayload] = useState<ModalPayload | null>(null);

  const openModal = useCallback((type: ModalType, p?: ModalPayload) => {
    setModal(type);
    setPayload(p ?? null);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    setPayload(null);
  }, []);

  return (
    <ModalContext.Provider value={{ modal, payload, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
