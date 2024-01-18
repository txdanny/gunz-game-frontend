"use client";

import { FC } from "react";
import styles from "./rankTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import RankRow from "./rankRow";
import LoadMoreButton from "@/components/button/loadMoreButton";

const RankTable: FC = () => {
  const { players, loadMore } = usePlayerData();

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
        </div>
        <div className={styles["tbody"]}>
          {players &&
            players.map((player, index) => <RankRow {...player} key={index} />)}
        </div>
      </div>
      <div className={styles["action"]}>
        <LoadMoreButton onClick={loadMore} title="Load More" />
      </div>
    </div>
  );
};

export default RankTable;
