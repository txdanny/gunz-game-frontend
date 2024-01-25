import { Player } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";
import { SHOW_RANK_AVATAR_LIMIT } from "@/config";

interface Props {
  rank: number;
}
const RankRowAvatar: FC<Props> = ({ rank }) => {
  const showRankAvatar = rank < SHOW_RANK_AVATAR_LIMIT;

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
