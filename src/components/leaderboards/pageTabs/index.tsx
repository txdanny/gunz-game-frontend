import { FC } from "react";
import styles from "./pageTabs.module.scss";
import {
  LeaderBoardLeftTabIcon,
  LeaderBoardTabIcon,
} from "@/components/svgItems";

const PageTabs: FC = () => {
  return (
    <div className={styles["pagetabs"]}>
      <div className={styles["content"]}>
        <div className={styles["tab-content"]}>
          <div className={styles["tab"]}>clains</div>
          <LeaderBoardTabIcon />
        </div>
        <div className={styles["tab-content"]}>
          <LeaderBoardLeftTabIcon />
          <div className={styles["tab"]}>indivduals</div>
          <LeaderBoardTabIcon />
        </div>
        <div className={styles["tab-content"]}>
          <LeaderBoardLeftTabIcon />
          <div className={styles["tab"]}>ladder</div>
          <LeaderBoardTabIcon />
        </div>
        <div className={styles["tab-content"]}>
          <LeaderBoardLeftTabIcon />
          <div className={styles["tab"]}>history</div>
          <LeaderBoardTabIcon />
        </div>
      </div>
    </div>
  );
};

export default PageTabs;
