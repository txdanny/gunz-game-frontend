"use client";

import { FC } from "react";
import RankHeader from "../rankHeader";
import { useParams } from "next/navigation";
import useUserData from "@/hooks/useUserData";
import styles from "./user.module.scss";

const UserInfo: FC = () => {
  const params = useParams();
  console.log("searchParams:", params.userId);
  const userData = useUserData(params.userId as string);
  console.log(userData);
  return (
    <div className={styles[""]}>
      <RankHeader title="CJSESAC" subTitle="Level 99" />
      <div className={styles[""]}>
        
      </div>
    </div>
  );
};

export default UserInfo;
