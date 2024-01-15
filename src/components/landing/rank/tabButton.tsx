import { FC } from "react";
import styles from "./rank.module.scss";
import Image from "next/image";

interface Props {
  onClick: () => void;
  label: string;
  active?: boolean;
}

const TabButton: FC<Props> = ({ label, onClick, active = false }) => {
  return (
    <div className={styles["tab-btn"]} onClick={onClick}>
      {!active ? (
        <>
          <Image
            src={"/images/button/tab@default.svg"}
            className={styles["default"]}
            fill
            alt=""
          />
          <Image
            src={"/images/button/tab@hover.svg"}
            className={styles["hover"]}
            fill
            alt=""
          />
        </>
      ) : (
        <Image
          src={"/images/button/tab@active.svg"}
          className={styles["active"]}
          fill
          alt=""
        />
      )}
      {label}
    </div>
  );
};

export default TabButton;
