"use client";
import { FC } from "react";
import RankHeader from "../rankHeader";
import { useParams } from "next/navigation";
import useUserData from "@/hooks/useUserData";
import styles from "./user.module.scss";
import RankBox from "./rankBox";
import ScorePieChart from "../charts/scorePieChart";
import ClanStats from "./clanStats";
import ImgUpload from "@/components/imgUpload";
import ImgUploadModal from "@/components/modal/imgUploadModal";

const ClanInfo: FC = () => {
  const params = useParams();
  const { userData } = useUserData(params.userId as string);

  return (
    <div className={styles["clan-user-info"]}>
      {userData && (
        <>
          <RankHeader
            title={userData.clanName}
            subTitle={`Level ${userData.level}`}
          />
          <div className={styles["clan-info-content"]}>
            <RankBox rank={userData.rank} />
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
            <div className="data">
              <ClanStats user={userData} />
            </div>
          </div>
          <div className={styles["content"]}>
            <ImgUpload userId={""} />
          </div>
          <ImgUploadModal imgUrl={undefined} name={""} />
        </>
      )}
    </div>
  );
};

export default ClanInfo;
