import Image from "next/image";
import { CSSProperties, FC } from "react";
import styles from "./imageButtonSm.module.scss";

interface ButtonProps {
  title?: string | number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const ImageButtonSm: FC<ButtonProps> = ({
  title,
  className,
  style,
  onClick,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${styles["image-button"]} ${className}`}
    >
      <div className={styles["bg-shadow"]} />
      <div className={styles["line-image-box"]}>
        <Image
          src={"/images/button/play@line.svg"}
          className={styles["btn-image"]}
          fill
          alt=""
        />
      </div>
      <div className={styles["up-image-box"]}>
        <Image
          src={"/images/button/play@up.svg"}
          className={styles["btn-image"]}
          fill
          alt=""
        />
      </div>
      <div className={styles["btn-title"]}>{title}</div>
    </button>
  );
};

export default ImageButtonSm;
