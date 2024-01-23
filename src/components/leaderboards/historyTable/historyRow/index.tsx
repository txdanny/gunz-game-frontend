import { History } from "@/utils/types";
import { FC } from "react";
import styles from "../historyTable.module.scss";

const HistoryRow: FC<History> = ({
  date,
  map,
  winners,
  firstPoints,
  losers,
  secondPoints,
}) => {
  return (
    <div className={`${styles["tr"]} ${styles["bg-default"]}`}>
      <div className={styles["date"]}>{date}</div>
      <div className={styles["map"]}>{`${map}`}</div>
      <div className={styles["winners"]}>
        {winners.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
      <div className={styles["firstpoints"]}>{firstPoints}</div>
      <div className={styles["losers"]}>
        {losers.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
      <div className={styles["secondpoints"]}>{secondPoints}</div>
      <div className={`${styles["gradient-normal"]} ${styles["hover"]}`} />
    </div>
  );
};

export default HistoryRow;
