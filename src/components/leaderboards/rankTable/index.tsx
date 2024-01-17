import { FC } from "react";
import styles from "./rankTable.module.scss";

const RankTable: FC = () => {
  return (
    <div className={styles["rank-table"]}>
      <div className={styles["table"]}>
        <div className={styles["thead"]}>
          <div className={styles["tr"]}>
            <div className={styles["td"]}>Rank</div>
            <div className={styles["td"]}>Clan Name</div>
            <div className={styles["td"]}>Emblem</div>
            <div className={styles["td"]}>Leader</div>
            <div className={styles["td"]}>Win / Losses</div>
            <div className={styles["td"]}>Win Rate</div>
            <div className={styles["td"]}>Points</div>
          </div>
          <div className={styles["tbody"]}></div>
        </div>
      </div>
    </div>
  );
};

export default RankTable;
