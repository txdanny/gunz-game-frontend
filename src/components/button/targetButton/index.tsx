import Image from "next/image";
import { CSSProperties, FC } from "react";
import styles from "./targetButton.module.scss";

interface ButtonProps {
  title?: string | number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const TargetButton: FC<ButtonProps> = ({
  title,
  className,
  style,
  onClick,
}) => {
  return (
    <div className={styles["socials"]}>
      <div className={styles["social"]}>
        <div className={styles["icon"]}>
          <Image src={`/icons/search.svg`} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default TargetButton;
