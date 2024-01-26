"use client";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface ModalContextType {
  openImgViewModal: (
    clanImgUrl: string | null | undefined,
    clanName: string
  ) => void;
  closeImgViewModal: () => void;
  isOpenImgViewModal: boolean;
  openImgUploadModal: (imgURL: string | ArrayBuffer) => void;
  closeImgUploadModal: () => void;
  isOpenImgUploadModal: boolean;
  imgUploadUrl: string | ArrayBuffer;
  clanImgUrl: string | null | undefined;
  clanName: string;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  const [isOpenImgViewModal, setOpenImgViewModal] = useState<boolean>(false);

  const [isOpenImgUploadModal, setOpenImgUploadModal] =
    useState<boolean>(false);

  const [imgUploadUrl, setImgUploadUrl] = useState<string | ArrayBuffer>("");

  const [clanImgUrl, setClanImgUrl] = useState<string | null | undefined>("");
  const [clanName, setClanName] = useState<string>("");

  const openImgViewModal = (
    clanImgUrl: string | null | undefined,
    clanName: string
  ) => {
    setClanImgUrl(clanImgUrl);
    setClanName(clanName);
    setOpenImgViewModal(true);
    document.body.classList.add("modal-open");
  };

  const closeImgViewModal = () => {
    setOpenImgViewModal(false);
    document.body.classList.remove("modal-open");
  };

  const openImgUploadModal = (imgURL: string | ArrayBuffer) => {
    setImgUploadUrl(imgURL);
    setOpenImgUploadModal(true);
    document.body.classList.add("modal-open");
  };

  const closeImgUploadModal = () => {
    setOpenImgUploadModal(false);
    document.body.classList.remove("modal-open");
  };

  const modalContextValue: ModalContextType = {
    openImgViewModal: openImgViewModal,
    closeImgViewModal: closeImgViewModal,
    isOpenImgViewModal: isOpenImgViewModal,

    openImgUploadModal: openImgUploadModal,
    closeImgUploadModal: closeImgUploadModal,
    isOpenImgUploadModal: isOpenImgUploadModal,

    imgUploadUrl: imgUploadUrl,
    clanImgUrl: clanImgUrl,
    clanName: clanName,
  };

  useEffect(() => {
    closeImgViewModal();
  }, [tabParam]);

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
