"use client";
import { FC } from "react";
import styles from "./mobileHistoryTable.module.scss";
import Image from "next/image";
import { usePlayerData } from "@/hooks/usePlayerData";
import LoadMoreButton from "@/components/button/loadMoreButton";
import { useSearchParams } from "next/navigation";

interface MobileHistoryTable {}

const MobileHistoryTable: FC<MobileHistoryTable> = () => {
  const { historys, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  return (
    <>
      {tabParam === "history" && (
        <div className={styles["table"]}>
          {" "}
          <div className={styles["table-content"]}>
            {historys?.map((data, index) => (
              <div
                className={`${styles["user-info"]} ${styles["border-default"]} ${styles["bg-default"]}`}
                key={index}
              >
                <div className={styles["result-content"]}>
                  <div className={styles["point"]}>
                    <p>Winner: </p>
                    <span>{data.firstPoints + " Points"}</span>
                  </div>
                  <div className={styles["name-group"]}>
                    <>
                      {data.winners?.map((names, index) => (
                        <p className={styles["name"]} key={index}>
                          {names}
                        </p>
                      ))}
                    </>
                  </div>
                  <div className={styles["anime"]}>
                    <div className={styles["vs-group"]}>
                      <div className={styles["gun"]}>
                        <Image
                          src={"/icons/gun.svg"}
                          className="object-cover"
                          fill
                          alt=""
                        />
                      </div>
                      <div className={styles["vs-banner"]} />
                      <p>VS</p>
                      <div className={styles["vs-banner"]} />
                      <div className={styles["bullet-group"]}>
                        <div className={styles["bullet"]}>
                          <Image
                            src={"/icons/bullet.svg"}
                            className="object-cover"
                            fill
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["point"]}>
                    <p>Loser: </p>
                    <span>{data.secondPoints + " Points"}</span>
                  </div>
                  <div className={styles["name-group"]}>
                    <>
                      {data.losers.map((names, index) => (
                        <p className={styles["name"]} key={index}>
                          {names}
                        </p>
                      ))}
                    </>
                  </div>
                </div>
                <div className={styles["banner"]} />
                <div className={styles["map-date-group"]}>
                  <div className={styles["map-group"]}>
                    <p>Map</p>
                    <span>{data.map}</span>
                  </div>
                  <div className={styles["map-group"]}>
                    {" "}
                    <p>Date</p>
                    <span>{data.date}</span>
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

export default MobileHistoryTable;
