import { Player } from "@/utils/types";
import { FC } from "react";
import styles from "./user.module.scss";
import { PiUserFill } from "react-icons/pi";
import Image from "next/image";

interface Props {
  user: Player;
}

const ClanStats: FC<Props> = ({ user }) => {
  return (
    <div className={styles["stats"]}>
      <p className={styles["info-title"]}>Clan Stats</p>
      <div className={styles["label"]}>clan leader</div>
      <div className={styles["value"]}>
        Strike
        <PiUserFill />
      </div>

      <div className={styles["label"]}>points</div>
      <div className={styles["value"]}>
        {user.experience.toLocaleString()}
        <Image src="/icons/star.png" width={16} height={16} alt="" />
      </div>

      <div className={styles["label"]}>total points</div>
      <div className={styles["value"]}>
        {"5792".toLocaleString()}
        <Image src="/icons/star.png" width={16} height={16} alt="" />
      </div>

      <div className={styles["label"]}>clan creation date</div>
      <div className={styles["value"]}>
        25/10/2023{" "}
        <Image src="/icons/calendar.png" width={16} height={16} alt="" />
      </div>
    </div>
  );
};

export default ClanStats;
