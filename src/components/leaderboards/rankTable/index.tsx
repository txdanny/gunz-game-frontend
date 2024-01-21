"use client";
import { FC } from "react";
import styles from "./rankTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import RankRow from "./rankRow";
import LoadMoreButton from "@/components/button/loadMoreButton";
import { CLANTABLETDS, INDIVIDUALTABLETDS, LADDERTABLETDS } from "@/config";
import { useSearchParams } from "next/navigation";
import IndividualRankRow from "./individualRankRow";
import LadderRankRow from "./ladderRankRow";
import ImageViewModal from "@/components/modal/imgViewModal";

const RankTable: FC = () => {
  const { players, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");
  const tdData =
    tabParam === "clans" || tabParam === null
      ? CLANTABLETDS
      : tabParam === "individuals"
      ? INDIVIDUALTABLETDS
      : LADDERTABLETDS;

  const renderPlayerRows = () => {
    if (tabParam === "clans" || tabParam === null) {
      return (
        players &&
        players.map((player, index) => <RankRow {...player} key={index} />)
      );
    } else if (tabParam === "individuals") {
      return (
        players &&
        players.map((player, index) => (
          <IndividualRankRow {...player} key={index} />
        ))
      );
    } else if (tabParam === "ladder") {
      return (
        players &&
        players.map((player, index) => (
          <LadderRankRow {...player} key={index} />
        ))
      );
    }
  };

  return (
    <>
      {(tabParam !== "history" || tabParam === null) && (
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
      )}
      <ImageViewModal imgUrl={""} name={""} />
    </>
  );
};

export default RankTable;
