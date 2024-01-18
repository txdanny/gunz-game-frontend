import { FC } from "react";
import styles from "./competiveRank.module.scss";
import Image from "next/image";
import WinnerCard from "@/components/landing/rank/winnerCard";

interface CompetiveRank {}

const CompetiveRank: FC<CompetiveRank> = () => {
  const rankClassMap = {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  };

  return (
    <div className={styles[`user-info`]}>
      <div className={`${styles["pfp-box"]} ${styles[rankClassMap[2]]}`}>
        <div className={`${styles["pfp"]}`}>
          <div className={styles["user-img"]}>
            <Image
              src={"/images/temp/user-3.png"}
              className="object-cover"
              fill
              alt=""
            />
          </div>
          <div className={styles["user-name"]}>Rakuzan</div>
          <div className={`${styles["rank"]}`}>2nd</div>
        </div>
      </div>
      <div className={`${styles["pfp-box"]} ${styles[rankClassMap[1]]}`}>
        <div className={`${styles["pfp"]}`}>
          <div className={styles["user-img"]}>
            <Image
              src={"/images/temp/user-2.png"}
              className="object-cover"
              fill
              alt=""
            />
          </div>
          <div className={styles["user-name"]}>Avoid</div>
          <div className={`${styles["rank"]}`}>1st</div>
        </div>
      </div>
      <div className={`${styles["pfp-box"]} ${styles[rankClassMap[3]]}`}>
        <div className={`${styles["pfp"]}`}>
          <div className={styles["user-img"]}>
            <Image
              src={"/images/temp/user-4.png"}
              className="object-cover"
              fill
              alt=""
            />
          </div>
          <div className={styles["user-name"]}>Armaxr</div>
          <div className={`${styles["rank"]}`}>3rd</div>
        </div>
      </div>
    </div>
  );
};

export default CompetiveRank;
