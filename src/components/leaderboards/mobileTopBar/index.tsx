import { FC } from "react";
import styles from "./mobileTopBar.module.scss";

const MobileTopBar: FC = () => {
  return (
    <div className={styles["topbar"]}>
      <div className={styles["title"]}>GUNZ LEADERBOARD</div>
    </div>
  );
};

export default MobileTopBar;
