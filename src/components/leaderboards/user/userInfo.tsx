"use client";

import { FC } from "react";
import RankHeader from "../rankHeader";
import { useParams } from "next/navigation";
import useUserData from "@/hooks/useUserData";
import styles from "./user.module.scss";
import RankBox from "./rankBox";

const UserInfo: FC = () => {
  const params = useParams();
  const { userData } = useUserData(params.userId as string);
  console.log(userData);
  return (
    <div className={styles[""]}>
      <RankHeader title="CJSESAC" subTitle="Level 99" />
      {userData && (
        <div className={styles["info-content"]}>
          <div className={styles["left"]}>
            <RankBox rank={userData.rank} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
