"use client";
import { FC, useState } from "react";
import styles from "./rankTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import RankRow from "./rankRow";
import LoadMoreButton from "@/components/button/loadMoreButton";
import {
  CLANTABLETDS,
  INDIVIDUALTABLETDS,
  LADDERTABLETDS,
  HISTORYTABLETDS,
} from "@/config";
import { useSearchParams } from "next/navigation";
import IndividualRankRow from "./individualRankRow";
import LadderRankRow from "./ladderRankRow";

const RankTable: FC = () => {
  const { players, individualplayers, ladderPlayers, loadMore } =
    usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");
  const tdData =
    tabParam === "clans"
      ? CLANTABLETDS
      : tabParam === "individuals"
      ? INDIVIDUALTABLETDS
      : tabParam === "ladder"
      ? LADDERTABLETDS
      : HISTORYTABLETDS;

  const renderPlayerRows = () => {
    if (tabParam === "clans") {
      return (
        players &&
        players.map((player, index) => <RankRow {...player} key={index} />)
      );
    } else if (tabParam === "individuals") {
      return (
        individualplayers &&
        individualplayers.map((player, index) => (
          <IndividualRankRow {...player} key={index} />
        ))
      );
    } else {
      return (
        ladderPlayers &&
        ladderPlayers.map((player, index) => (
          <LadderRankRow {...player} key={index} />
        ))
      );
    }
  };

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
        <div className={styles["tbody"]}>{renderPlayerRows()}</div>
      </div>
      <div className={styles["action"]}>
        <LoadMoreButton onClick={loadMore} title="Load More" />
      </div>
    </div>
  );
};

export default RankTable;
