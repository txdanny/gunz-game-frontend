import { FC } from "react";
import Image from "next/image";
import styles from "./imgViewModal.module.scss";
import { useModal } from "@/contexts/modalProvider";

const ImgViewModal: FC = () => {
  const { closeImgViewModal, isOpenImgViewModal, clanImgUrl, clanName } =
    useModal();

  return (
    <>
      {isOpenImgViewModal && (
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <div className={styles["image-content"]}>
              {clanImgUrl ? (
                <div className={styles["image"]}>
                  <Image src={clanImgUrl} alt="" fill />
                </div>
              ) : (
                <div className={styles["no-image"]}>
                  No
                  <br />
                  Emblem
                </div>
              )}
            </div>
            <p>{clanName && clanName}</p>
            <div className={styles["close"]} onClick={closeImgViewModal}>
              <Image src={"/icons/close.svg"} fill alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgViewModal;
