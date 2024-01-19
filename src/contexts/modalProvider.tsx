"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextType {
  openImageViewModal: () => void;
  closeImageViewModal: () => void;
  isOpenImageViewModal: boolean;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpenImageViewModal, setOpenImageViewModal] =
    useState<boolean>(false);

  const openImageViewModal = () => {
    setOpenImageViewModal(true);
    document.body.classList.add("modal-open");
  };

  const closeImageViewModal = () => {
    setOpenImageViewModal(false);
    document.body.classList.remove("modal-open");
  };

  const modalContextValue: ModalContextType = {
    openImageViewModal: openImageViewModal,
    closeImageViewModal: closeImageViewModal,
    isOpenImageViewModal: isOpenImageViewModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
