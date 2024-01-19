"use client";
import { FC } from "react";
import styles from "../mobileClansTable/mobileClansTable.module.scss";
import Image from "next/image";
import { usePlayerData } from "@/hooks/usePlayerData";
import { Rank } from "@/utils/types";
import LoadMoreButton from "@/components/button/loadMoreButton";
import { useSearchParams } from "next/navigation";

interface MobileIndividualTable {}

const MobileIndividualTable: FC<MobileIndividualTable> = () => {
  const { players, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

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
    <>
      {tabParam === "individuals" && (
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
                  data.rank < 4
                    ? styles[bgClass[data.rank]]
                    : styles["bg-default"]
                }`}
                key={index}
              >
                <div className={styles["user-name"]}>{data.characterName}</div>
                <div
                  className={`${styles["user-banner"]}  ${
                    data.rank < 4
                      ? styles["bannerbg-gold"]
                      : styles["bannerbg-default"]
                  }`}
                />
                <div className={styles["user-detail"]}>
                  <div className={styles["detail"]}>
                    <p>Individual Rank </p>
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
                    <p>Level</p>
                    <div>
                      <span>{data.level}</span>
                    </div>
                  </div>
                  <div className={styles["detail"]}>
                    {" "}
                    <p>Experience</p>
                    <div>
                      <span>{data.experience}</span>
                    </div>
                  </div>
                  <div className={styles["detail"]}>
                    <p>Kills / Deaths</p>
                    <div>
                      <span>
                        {data.playCount.kills} / {data.playCount.deaths}
                      </span>
                    </div>
                  </div>
                  <div className={styles["detail"]}>
                    <p>K / D Ratio</p>
                    <div>
                      <span>
                        {(data.playCount.kills / data.playCount.deaths).toFixed(
                          2
                        )}
                      </span>
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
      )}
    </>
  );
};

export default MobileIndividualTable;
