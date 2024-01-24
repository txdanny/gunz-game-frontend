import React, { FC, useEffect, useState } from "react";
import styles from "./rankTable.module.scss";
import { CLANTABLETDS, INDIVIDUALTABLETDS, LADDERTABLETDS } from "@/config";
import { useSearchParams } from "next/navigation";

enum TabParam {
  Clans = "clans",
  Individuals = "individuals",
  Ladder = "ladder",
}

const RankTr: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs") as TabParam;
  const [tdData, setTdData] = useState(CLANTABLETDS);

  useEffect(() => {
    if (tabParam === TabParam.Individuals) {
      setTdData(INDIVIDUALTABLETDS);
    } else if (tabParam === TabParam.Ladder) {
      setTdData(LADDERTABLETDS);
    } else {
      setTdData(CLANTABLETDS);
    }
  }, [searchParams, tabParam]);

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
