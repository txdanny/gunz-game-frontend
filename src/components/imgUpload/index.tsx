import Image from "next/image";
import { FC, useRef, useState } from "react";
import styles from "./imgUpload.module.scss";
import { useModal } from "@/contexts/modalProvider";

interface ImageUploadProps {
  userId: number | string;
}

const ImgUpload: FC<ImageUploadProps> = ({}) => {
  const hiddenBannerInput = useRef(null);
  const { closeImgUploadModal, openImgUploadModal } = useModal();
  const [inputImg, setInputImg] = useState<any>("");

  const handleBannerAdd = () => {
    if (hiddenBannerInput.current) {
      (hiddenBannerInput.current as HTMLInputElement).click();
    }
  };

  const onInputChange = (e: any) => {
    // convert image file to base64 string
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        reader.result && openImgUploadModal(reader.result);
        // setInputImg(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles["upload-content"]}>
      <div className={styles["upload-img"]}>
        <Image src={"/icons/upload-1.svg"} alt={""} fill />
      </div>
      <div
        className={styles["upload-btn"]}
        onClick={() => {
          handleBannerAdd();
          // inputImg && openImgUploadModal(inputImg);
        }}
      >
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
