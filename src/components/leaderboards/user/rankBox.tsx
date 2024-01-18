import { Rank } from "@/utils/types";
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
      <p>Current Player Rank</p>
      <div className={styles["medal"]}>
        <Image src={ribbon} className="object-contain" fill alt="" />
      </div>
    </div>
  );
};

export default RankBox;
