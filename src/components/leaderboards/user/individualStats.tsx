import { Player } from "@/utils/types";
import { FC } from "react";
import styles from "./user.module.scss";
import { PiUserFill } from "react-icons/pi";
import Image from "next/image";

interface Props {
  user: Player;
}

const IndividualStats: FC<Props> = ({ user }) => {
  return (
    <div className={styles["stats"]}>
      <p className={styles["info-title"]}>Individual Stats</p>
      <div className={styles["label"]}>play time</div>
      <div className={styles["value"]}>
        6,221 Hours
        <Image src="/icons/clock.png" width={16} height={16} alt="" />
      </div>

      <div className={styles["label"]}>exp gained</div>
      <div className={styles["value"]}>
        {user.experience.toLocaleString()}
        <Image src="/icons/stars.png" width={16} height={16} alt="" />
      </div>

      <div className={styles["label"]}>last login date</div>
      <div className={styles["value"]}>
        28/10/2023{" "}
        <Image src="/icons/calendar.png" width={16} height={16} alt="" />
      </div>

      <div className={styles["label"]}>account creation date</div>
      <div className={styles["value"]}>
        25/10/2023{" "}
        <Image src="/icons/calendar.png" width={16} height={16} alt="" />
      </div>

      <div className={styles["label"]}>rank</div>
      <div className={styles["value"]}>
        Member <PiUserFill />
      </div>
    </div>
  );
};

export default IndividualStats;
