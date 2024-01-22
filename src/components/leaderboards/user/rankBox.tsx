import Image from "next/image";
import { FC } from "react";
import styles from "./user.module.scss";

interface Props {
  rank: number;
}

const RankBox: FC<Props> = ({ rank }) => {
  let ribbon = rank < 4 ? `/images/ribbon@${rank}.png` : "";

  return (
    <div className={styles["rank-box"]}>
      <p className={styles["info-title"]}>Current Player Rank</p>
      <div className={styles["medal"]}>
        {ribbon !== "" && (
          <Image src={ribbon} className="object-contain" fill alt="" />
        )}
        <div className={styles["rank"]}>{`#${rank}`}</div>
      </div>
    </div>
  );
};

export default RankBox;
