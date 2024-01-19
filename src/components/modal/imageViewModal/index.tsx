import { FC, useState } from "react";
import Image from "next/image";
import styles from "./imageViewModal.module.scss";
import { useModal } from "@/contexts/modalProvider";
interface ImageViewModalProps {
  imgUrl: string | null | undefined;
  name: string;
}
const ImageViewModal: FC<ImageViewModalProps> = ({ imgUrl, name }) => {
  const { closeImageViewModal, isOpenImageViewModal } = useModal();

  console.log("eme", imgUrl);

  if (!isOpenImageViewModal) return null;
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["image-content"]}>
          <div className={styles["image"]}>
            {imgUrl && <Image src={imgUrl} alt="" fill />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewModal;
