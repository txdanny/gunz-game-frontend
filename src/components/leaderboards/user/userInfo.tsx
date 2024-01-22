"use client";
import { FC } from "react";
import RankHeader from "../rankHeader";
import { useParams } from "next/navigation";
import useUserData from "@/hooks/useUserData";
import styles from "./user.module.scss";
import RankBox from "./rankBox";
import ScorePieChart from "../charts/scorePieChart";
import Image from "next/image";
import IndividualStats from "./individualStats";

const UserInfo: FC = () => {
  const params = useParams();
  const { userData } = useUserData(params.userId as string);

  return (
    <div className={styles["user-info"]}>
      {userData && (
        <>
          <RankHeader
            title={userData.clanName}
            subTitle={`Level ${userData.level}`}
          />
          <div className={styles["info-content"]}>
            <div className={styles["left"]}>
              <RankBox rank={userData.rank} />
              <div className={styles["divide"]} />
              <div className={styles["chart"]}>
                <ScorePieChart
                  title="Current Kill / Death Ratio"
                  percent={
                    userData.playCount.kills /
                    (userData.playCount.kills + userData.playCount.deaths)
                  }
                  description={
                    <p className={styles["chart-description"]}>
                      <span>K/D</span>
                      <br />
                      {`${userData.playCount.kills.toLocaleString()} Kills /`}{" "}
                      <br />
                      {`${userData.playCount.deaths.toLocaleString()} Deaths`}
                    </p>
                  }
                />
              </div>
            </div>
            <div className={styles["right"]}>
              <div className={styles["current-clan"]}>
                <p className={styles["info-title"]}>Current Clan</p>
                <div className={styles["clan-data"]}>
                  <div className={styles["pfp"]}>
                    <Image
                      src={
                        userData.emblem
                          ? userData.emblem
                          : "/images/temp/user-4.png"
                      }
                      fill
                      alt=""
                    />
                  </div>
                  <p className={styles["info-title"]}>{userData.type.name}</p>
                </div>
                <div className={styles["divide"]} />
                <IndividualStats user={userData} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
