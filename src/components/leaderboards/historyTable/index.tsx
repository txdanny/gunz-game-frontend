"use client";
import { FC } from "react";
import styles from "./historyTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import LoadMoreButton from "@/components/button/loadMoreButton";
import { HISTORYTABLETDS } from "@/config";
import { useSearchParams } from "next/navigation";
import HistoryRow from "./historyRow";

const HistoryTable: FC = () => {
  const { historys, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  return (
    <>
      {tabParam === "history" && (
        <div className={styles["history-table"]}>
          <div className={styles["table"]}>
            <div className={styles["thead"]}>
              <div className={styles["tr"]}>
                {HISTORYTABLETDS.map((td, index) => (
                  <div className={styles["td"]} key={index}>
                    {td}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles["tbody"]}>
              {" "}
              {historys &&
                historys.map((history, index) => (
                  <HistoryRow {...history} key={index} />
                ))}
            </div>
          </div>
          <div className={styles["action"]}>
            <LoadMoreButton onClick={loadMore} title="Load More" />
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryTable;
