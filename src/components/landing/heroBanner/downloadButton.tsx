import Image from "next/image";
import { FC } from "react";
import styles from "./heroBanner.module.scss";

interface DownloadButtonProps {
  title: string;
  showIcon: boolean;
}
const DownloadButton: FC<DownloadButtonProps> = ({ title, showIcon }) => {
  return (
    <>
      <button className={styles["btn-download"]}>
        <div className={styles["img-back"]}>
          <Image
            src="/images/button/download@back.svg"
            className="play-shadow"
            alt=""
            fill
          />
        </div>
        <div className={styles["img-front"]}>
          <Image
            src="/images/button/download@front.svg"
            className="play-shadow"
            alt=""
            fill
          />
        </div>

        <div className={styles["text"]}>
          {showIcon && (
            <Image src={"/icons/windows.svg"} width={30} height={30} alt="" />
          )}
          {title}
        </div>
        <div className={styles["bg-shadow"]} />
      </button>
      <button className={styles["btn-mobile"]}>
        <div className={styles["img-back"]}>
          <Image
            src="/images/button/download-sm@back.svg"
            className="play-shadow"
            alt=""
            fill
          />
        </div>
        <div className={styles["img-front"]}>
          <Image
            src="/images/button/download-sm@front.svg"
            className="play-shadow"
            alt=""
            fill
          />
        </div>

        {!showIcon && <div className={styles["text"]}>{title}</div>}
        {showIcon && <div className={styles["text"]}>play for free</div>}
      </button>
    </>
  );
};

export default DownloadButton;
