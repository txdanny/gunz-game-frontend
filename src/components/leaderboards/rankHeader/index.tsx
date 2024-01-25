"use client";
import { FC } from "react";
import styles from "./rankHeader.module.scss";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface HeaderProps {
  title?: string;
  subTitle?: string;
}

const RankHeader: FC<HeaderProps> = ({ title, subTitle }) => {
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tabs") as string;

  let titleText = title;

  switch (tabParam) {
    case "clans":
      titleText = "clans ranked leaderboard";
      break;
    case "individuals":
      titleText = "individuals ranked leaderboard";
      break;
    case "ladder":
      titleText = "ladder leaderboard";
      break;
    case "history":
      titleText = "ladder history";
      break;
    default:
      // handle default case or do nothing for an empty string
      break;
  }

  return (
    <div className={styles[`header`]}>
      <div className={styles[`header-img`]}>
        <Image
          src={"/images/header-ranking.png"}
          className="object-cover"
          fill
          alt=""
        />
      </div>
      <div className={styles["header-title"]}>
        <h2 id="titleText">{titleText}</h2>
        {subTitle && <p>{subTitle}</p>}
      </div>
    </div>
  );
};

export default RankHeader;
