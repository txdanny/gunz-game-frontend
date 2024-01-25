import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../rankTable.module.scss";
import { useModal } from "@/contexts/modalProvider";

type Props = {
  isClansTab: boolean;
  tabParam: string | null;
  clanName: string;
  name: string;
  emblem: string | null | undefined;
  playCount: {
    win: number;
    lose: number;
    kills: number;
    deaths: number;
    winRate: number;
  };
  characterName: string;
  level: number;
  experience: number;
  role: string;
  pointsData: string | number;
};

const PlayersTd: FC<Props> = ({
  isClansTab,
  tabParam,
  playCount,
  clanName,
  name,
  emblem,
  characterName,
  role,
  level,
  experience,
  pointsData,
}) => {
  const { openImgViewModal } = useModal();

  return (
    <>
      {isClansTab && (
        <Link
          href={`/leaderboards/clan/${clanName}`}
          passHref
          className={styles["name"]}
        >
          <div className={styles["name"]}>{name}</div>
        </Link>
      )}
      {(tabParam === "individuals" || tabParam === "ladder") && (
        <div className={styles["name"]}>
          <div className={styles["name"]}>{characterName}</div>
        </div>
      )}
      {isClansTab && (
        <div
          className={styles["emblem"]}
          onClick={() => openImgViewModal(emblem, clanName)}
        >
          {emblem ? (
            <div className={styles["pfp"]}>
              <Image src={emblem} alt="" fill />
            </div>
          ) : (
            <div className={styles["no-image"]}>
              No
              <br />
              Emblem
            </div>
          )}
        </div>
      )}
      {isClansTab && (
        <Link
          href={`/leaderboards/user/${clanName}`}
          passHref
          className={styles["value"]}
        >
          <div className={styles["value"]}>{role}</div>
        </Link>
      )}
      {tabParam === "individuals" && (
        <div className={styles["value"]}>{level}</div>
      )}

      {tabParam !== "individuals" && (
        <div
          className={styles["value"]}
        >{`${playCount.win.toLocaleString()} / ${playCount.lose}`}</div>
      )}

      {tabParam == "individuals" && (
        <div className={styles["value"]}>{experience.toLocaleString()}</div>
      )}

      {tabParam == "individuals" && (
        <div
          className={styles["value"]}
        >{`${playCount.kills.toLocaleString()} / ${playCount.deaths.toLocaleString()}`}</div>
      )}
      {tabParam !== "individuals" && (
        <div className={styles["value"]}>
          {playCount.winRate.toLocaleString() + "%"}
        </div>
      )}

      <div className={styles["value"]}>{pointsData}</div>
    </>
  );
};

export default PlayersTd;
