"use client";
import { FC } from "react";
import styles from "./mobileTopBanner.module.scss";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const MobileTopBanner: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");
  return (
    <div className={styles[`header`]}>
      <div className={styles[`header-img`]}>
        <Image
          src={"/images/header-ranking@mobile.png"}
          className="object-cover"
          fill
          alt=""
        />
      </div>
      <div className={styles["header-title"]}>
        <svg
          width="12"
          height="36"
          viewBox="0 0 12 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="12"
            height="35"
            transform="translate(0 0.5)"
            fill="#FFBE17"
          />
        </svg>
        <p>{tabParam} RANKED LEADERBOARD</p>
      </div>
    </div>
  );
};

export default MobileTopBanner;
