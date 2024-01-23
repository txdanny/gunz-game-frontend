"use client";
import { FC } from "react";
import styles from "./rankTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import RankRow from "./rankRow";
import LoadMoreButton from "@/components/button/loadMoreButton";
import { useSearchParams } from "next/navigation";
import ImageViewModal from "@/components/modal/imgViewModal";
import RankTr from "./rankHeader";

const RankTable: FC = () => {
  const { players, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  return (
    <>
      {(tabParam !== "history" || tabParam === null) && (
        <div className={styles["rank-table"]}>
          <div className={styles["table"]}>
            <div className={styles["thead"]}>
              <RankTr />
            </div>
            <div className={styles["tbody"]}>
              {players &&
                players.map((player, index) => (
                  <RankRow {...player} key={index} />
                ))}
            </div>
          </div>
          <div className={styles["action"]}>
            <LoadMoreButton onClick={loadMore} title="Load More" />
          </div>
        </div>
      )}
      <ImageViewModal />
    </>
  );
};

export default RankTable;
