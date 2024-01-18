"use client";
import { FC } from "react";
import styles from "./mobileRankTable.module.scss";
import Image from "next/image";
import { usePlayerData } from "@/hooks/usePlayerData";
import { Rank } from "@/utils/types";
import LoadMoreButton from "@/components/button/loadMoreButton";

interface MobileRankTable {}

const MobileRankTable: FC<MobileRankTable> = () => {
  const { players, loadMore } = usePlayerData();

  const borderClass: Rank = {
    1: "border-gold",
    2: "border-silver",
    3: "border-bronze",
  };

  const bgClass: Rank = {
    1: "bg-gold",
    2: "bg-silver",
    3: "bg-bronze",
  };

  const rankClassMap: Rank = {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  };

  return (
    <div className={styles["table"]}>
      {" "}
      <div className={styles["table-content"]}>
        {players?.map((data, index) => (
          <div
            className={`${styles["user-info"]} ${
              data.rank < 4
                ? styles[borderClass[data.rank]]
                : styles["border-default"]
            } ${
              data.rank < 4 ? styles[bgClass[data.rank]] : styles["bg-default"]
            }`}
            key={index}
          >
            <div
              className={`${styles["user-img"]}  ${
                data.rank < 4 ? styles[rankClassMap[data.rank]] : ""
              }`}
            >
              <div className={`${styles["pfp-box"]}`}>
                <div
                  className={`${styles["pfp"]} ${styles["bannerbg-default"]}`}
                >
                  <div className={styles["user-img"]}>
                    <Image
                      src={"/images/temp/user-3.png"}
                      className="object-cover"
                      fill
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["user-name"]}>{data.username}</div>
            <div
              className={`${styles["user-banner"]}  ${
                data.rank < 4
                  ? styles["bannerbg-gold"]
                  : styles["bannerbg-default"]
              }`}
            />
            <div className={styles["user-detail"]}>
              <div className={styles["detail"]}>
                <p>Clain Rank</p>
                <div>
                  <span>RANK {data.rank}</span>
                  {data.rank < 4 && (
                    <div className={styles["ribbon"]}>
                      <Image
                        src={`/images/ribbon-sm@${data.rank}.png`}
                        alt=""
                        fill
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles["detail"]}>
                {" "}
                <p>Clain Leader</p>
                <div>
                  <span>{data.role}</span>
                </div>
              </div>
              <div className={styles["detail"]}>
                {" "}
                <p>Wins / Losses</p>
                <div>
                  <span>
                    {data.playCount.win} / {data.playCount.loss}
                  </span>
                </div>
              </div>
              <div className={styles["detail"]}>
                <p>Wins Rate</p>
                <div>
                  <span>{data.playCount.winRate}</span>
                </div>
              </div>
              <div className={styles["detail"]}>
                <p>Point</p>
                <div>
                  <span>{data.points}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["loadmorebutton"]}>
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default MobileRankTable;
