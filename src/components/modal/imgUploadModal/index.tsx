import { FC, useState } from "react";
import Image from "next/image";
import styles from "./imgUploadModal.module.scss";
import { useModal } from "@/contexts/modalProvider";
import Cropper from "react-easy-crop";

interface ImgUploadModalProps {
  imgUrl: string | null | undefined;
  name: string;
}
const ImgUploadModal: FC<ImgUploadModalProps> = ({ imgUrl, name }) => {
  const { closeImgUploadModal, isOpenImgUploadModal, imgUploadUrl } =
    useModal();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  if (!isOpenImgUploadModal) return null;
  return (
    <>
      {isOpenImgUploadModal && (
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <p>Edit Clan Emblem</p>
            <div className={styles["cropper"]}>
              <Cropper
                image={imgUploadUrl.toString()}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className={styles["controls"]}>
              <div className={styles["zoomOut"]}>
                <Image fill alt="" src="/icons/zoomOut.svg" />
              </div>
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e) => {
                  setZoom(Number(e.target.value));
                }}
                className={styles["zoom-range"]}
              />
              <div className={styles["zoomIn"]}>
                <Image fill alt="" src="/icons/zoomIn.svg" />
              </div>
            </div>
            <div className={styles["action"]}>
              <div
                className={styles["btn-cancel"]}
                onClick={closeImgUploadModal}
              >
                Cancel
              </div>
              <div className={styles["btn-save"]}>Save</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgUploadModal;
