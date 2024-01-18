import { FC } from "react";
import styles from "./mobileTopBar.module.scss";
import Image from "next/image";

const MobileTopBar: FC = () => {
  return (
    <div className={styles["topbar"]}>
      <div className={styles["title"]}>GUNZ LEADERBOARD</div>
      <div className={styles["rank"]}>
        <Image
          src={"/icons/rank.svg"}
          className="object-cover"
          width={20}
          height={20}
          alt=""
        />
      </div>
    </div>
  );
};

export default MobileTopBar;
