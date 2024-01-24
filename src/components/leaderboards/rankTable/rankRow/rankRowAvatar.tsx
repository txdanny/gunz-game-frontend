import { Player } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";
import { SHOWRANKAVATARLIMIT } from "@/config";

interface Props {
  rank: number;
}
const RankRowAvatar: FC<Props> = ({ rank }) => {
  const showRankAvatar = rank < SHOWRANKAVATARLIMIT;

  return (
    <>
      <div className={styles["rank"]}>
        {showRankAvatar ? (
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
