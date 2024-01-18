"use client";
import { FC, useState } from "react";
import styles from "./rankTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import RankRow from "./rankRow";
import LoadMoreButton from "@/components/button/loadMoreButton";
import { CLAINTABLETDS, INDIVIDUALTABLETDS, LADDERTABLETDS } from "@/config";
import { useSearchParams } from "next/navigation";

const RankTable: FC = () => {
  const { players, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");
  const tdData =
    tabParam === "clans"
      ? CLAINTABLETDS
      : tabParam === "individuals"
      ? INDIVIDUALTABLETDS
      : LADDERTABLETDS;

  return (
    <div className={styles["rank-table"]}>
      <div className={styles["table"]}>
        <div className={styles["thead"]}>
          <div className={styles["tr"]}>
            {tdData.map((td, index) => (
              <div className={styles["td"]} key={index}>
                {td}
              </div>
            ))}
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
