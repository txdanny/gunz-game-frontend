import Image from "next/image";
import { FC, useRef, useState } from "react";
import styles from "./imgUpload.module.scss";
import { useModal } from "@/contexts/modalProvider";
import { useLockedBody } from "@/hooks/useLockedBody";

interface ImageUploadProps {
  userId: number | string;
}

const ImgUpload: FC<ImageUploadProps> = ({}) => {
  const hiddenBannerInput = useRef(null);
  const { openImgUploadModal } = useModal();

  const handleBannerAdd = () => {
    if (hiddenBannerInput.current) {
      (hiddenBannerInput.current as HTMLInputElement).click();
    }
  };

  function handleImageChange(e: any): Promise<void> {
    // Convert image file to base64 string
    const file = e.target.files[0];
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.addEventListener("load", async () => {
        if (reader.result) {
          const result = await openImgUploadModal(reader.result);
          resolve(result);
        }
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  }

  const onInputChange = (e: any) => {
    handleImageChange(e);
  };

  return (
    <div className={styles["upload-content"]}>
      <div className={styles["upload-img"]}>
        <Image src={"/icons/upload-1.svg"} alt={""} fill />
      </div>
      <div className={styles["upload-btn"]} onClick={handleBannerAdd}>
        <p>Upload New Clan Emblem </p>
        <input
          type="file"
          accept="image/*"
          onChange={onInputChange}
          ref={hiddenBannerInput}
        />
        <div className={styles["upload"]}>
          <Image src={"/icons/upload-2.svg"} alt={""} fill />
        </div>
      </div>
      <p className={styles["drag-title"]}>
        or drag an image file here (PNG and JPEG are accepted)
      </p>
    </div>
  );
};

export default ImgUpload;
