import { Player, Rank } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";

const RankRow: FC<Player> = ({
  rank,
  clanName,
  emblem,
  role,
  playCount,
  points,
}) => {
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
      <div className={styles["name"]}>{clanName}</div>
      <div className={styles["emblem"]}>
        {emblem ? (
          <div className={styles["pfp"]}>
            <Image src={emblem} alt="" fill />
          </div>
        ) : (
          <div className={styles["no-image"]}>
            No
            <br />
            Emblem
          </div>
        )}
      </div>
      <div className={styles["value"]}>{role}</div>
      <div
        className={styles["value"]}
      >{`${playCount.win} / ${playCount.lose}`}</div>
      <div className={styles["value"]}>{playCount.winRate}</div>
      <div className={styles["value"]}>{points}</div>
      <div
        className={`${
          styles[rank < 4 ? hoverClass[rank] : "gradient-normal"]
        } ${styles["hover"]}`}
      />
    </div>
  );
};

export default RankRow;
