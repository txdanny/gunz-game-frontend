import React, { FC } from "react";
import styles from "./rankTable.module.scss";
import { CLANTABLETDS, INDIVIDUALTABLETDS, LADDERTABLETDS } from "@/config";
import { useSearchParams } from "next/navigation";

enum TabParam {
  Clans = "clans",
  Individuals = "individuals",
  Ladder = "ladder",
  History = "history",
  Undefined = "",
}

const RankTr: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs") as TabParam;

  let tdData = CLANTABLETDS;
  if (tabParam === TabParam.Individuals) {
    tdData = INDIVIDUALTABLETDS;
  } else if (tabParam === TabParam.Ladder) {
    tdData = LADDERTABLETDS;
  }

  return (
    <div className={styles.tr}>
      {tdData.map((td, index) => (
        <div className={styles.td} key={index}>
          {td}
        </div>
      ))}
    </div>
  );
};

export default RankTr;
