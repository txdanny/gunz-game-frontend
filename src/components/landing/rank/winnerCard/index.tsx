import { FC } from "react";
import styles from "./winnerCard.module.scss";
import { Winner } from "@/utils/types";
import Image from "next/image";
import { getOrdinalFormat } from "@/utils/format";

const WinnerCard: FC<Winner> = ({ username, pts, rank: { rank }, pfp }) => {
  const rankClassMap = {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  };
  const hoverClass = {
    1: "hover-gold",
    2: "hover-silver",
    3: "hover-bronze",
  };
  const pfpBgClass = styles[rankClassMap[rank] || "gradient-bronze"];

  return (
    <div className={`${styles["winner-card"]}`}>
      <div className={"user-info"}>
        <div
          className={`${styles["pfp-box"]} ${pfpBgClass} ${
            styles[hoverClass[rank]]
          }`}
        >
          <div className={`${styles["pfp"]}`}>
            <Image
              src={pfp}
              className="object-cover"
              alt={`Profile Picture of ${username}`}
              fill
            />
          </div>
        </div>
        <div className={styles["username"]}>{username}</div>
        <div className={styles["pts"]}>{pts} PTS</div>
      </div>
      <div className={styles["ribbon"]}>
        <Image
          src={`/images/ribbon@${rank}.png`}
          className="object-contain"
          fill
          alt=""
        />
        <div className={styles["order"]}>{getOrdinalFormat(rank)}</div>
      </div>
    </div>
  );
};

export default WinnerCard;
