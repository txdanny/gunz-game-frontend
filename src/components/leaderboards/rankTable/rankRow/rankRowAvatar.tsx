import { Player } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";

interface Props {
  rank: number;
}
const RankRowAvatar: FC<Props> = ({ rank }) => {
  return (
    <>
      <div className={styles["rank"]}>
        {rank < 4 ? (
          <div className={styles["ribbon"]}>
            <Image src={`/images/ribbon-sm@${rank}.png`} alt="" fill />
          </div>
        ) : (
          rank
        )}
      </div>
    </>
  );
};

export default RankRowAvatar;
