import { Player, Rank } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";

const HistoryRow: FC<Player> = ({ rank, username, playCount, points }) => {
  const backgroundClass: Rank = {
    1: "bg-gold",
    2: "bg-silver",
    3: "bg-bronze",
  };

  const hoverClass: Rank = {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  };

  return (
    <div
      className={`${styles["tr"]} ${
        rank < 4 ? styles[backgroundClass[rank]] : styles["bg-default"]
      }`}
    >
      <div className={styles["rank"]}>
        {rank < 4 ? (
          <div className={styles["ribbon"]}>
            <Image src={`/images/ribbon-sm@${rank}.png`} alt="" fill />
          </div>
        ) : (
          rank
        )}
      </div>
      <div className={styles["name"]}>{username}</div>
      <div className={styles["value"]}>{`${playCount.win.toLocaleString()} / ${
        playCount.lose
      }`}</div>
      <div className={styles["value"]}>
        {playCount.winRate.toLocaleString() + "%"}
      </div>
      <div className={styles["value"]}>{points.toLocaleString()}</div>
      <div
        className={`${
          styles[rank < 4 ? hoverClass[rank] : "gradient-normal"]
        } ${styles["hover"]}`}
      />
    </div>
  );
};

export default HistoryRow;
