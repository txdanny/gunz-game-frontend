import { Competive } from "@/utils/types";
import { FC } from "react";
import styles from "../competiveTable.module.scss";

const CompetiveRow: FC<Competive> = ({
  name,
  level,
  rank,
  points,
  joinDate,
}) => {
  return (
    <div className={`${styles["tr"]} ${styles["bg-default"]}`}>
      <div className={styles["name"]}>{name}</div>
      <div className={styles["level"]}>{`${level}`}</div>
      <div className={styles["rank"]}>{rank}</div>
      <div className={styles["points"]}>{points}</div>
      <div className={styles["joinDate"]}>{joinDate}</div>
    </div>
  );
};

export default CompetiveRow;
