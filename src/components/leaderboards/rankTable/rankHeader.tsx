"use client";
import { FC } from "react";
import styles from "./rankTable.module.scss";
import { CLANTABLETDS, INDIVIDUALTABLETDS, LADDERTABLETDS } from "@/config";
import { useSearchParams } from "next/navigation";

const RankTr: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");
  const tdData =
    tabParam === "clans" || tabParam === null
      ? CLANTABLETDS
      : tabParam === "individuals"
      ? INDIVIDUALTABLETDS
      : LADDERTABLETDS;

  return (
    <div className={styles["tr"]}>
      {tdData.map((td, index) => (
        <div className={styles["td"]} key={index}>
          {td}
        </div>
      ))}
    </div>
  );
};

export default RankTr;
