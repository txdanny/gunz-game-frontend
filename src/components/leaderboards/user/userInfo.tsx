"use client";

import { FC } from "react";
import RankHeader from "../rankHeader";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";

const UserInfo: FC = () => {
  const params = useParams();
  console.log("searchParams:", params.userId);
  
  return (
    <div className="">
      <RankHeader />
    </div>
  );
};

export default UserInfo;
