"use client";
import { FC } from "react";
import styles from "./competiveRank.module.scss";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { usePlayerData } from "@/hooks/usePlayerData";
import { Player, Rank } from "@/utils/types";

interface CompetitiveRankProps {}

const CompetitiveRank: FC<CompetitiveRankProps> = () => {
  const { players } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  const rankClassMap: Rank = {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  };

  const getDisplayName = (playerData: Player[], index: number) => {
    return tabParam === "clans"
      ? playerData[index].clanName
      : playerData[index].characterName;
  };

  const nameStyle = tabParam === "clans" ? "user-name" : "character-name";

  return (
    <>
      {tabParam !== "history" && (
        <div className={styles["user-info"]}>
          {[2, 1, 3].map((rank) => (
            <div
              key={rank}
              className={`${styles["pfp-box"]} ${styles[rankClassMap[rank]]}`}
            >
              <div className={styles["pfp"]}>
                {tabParam === "clans" && (
                  <div className={styles["user-img"]}>
                    <Image
                      src={`/images/temp/user-${rank}.png`}
                      className="object-cover"
                      fill
                      alt=""
                    />
                  </div>
                )}
                <div className={styles[nameStyle]}>
                  {players && getDisplayName(players, rank - 1)}
                </div>
                <div className={styles.rank}>{`${rank}st`}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CompetitiveRank;
