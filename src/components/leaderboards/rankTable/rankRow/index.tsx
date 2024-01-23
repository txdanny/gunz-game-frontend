import { Player, Rank } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";
import { useModal } from "@/contexts/modalProvider";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RankRow: FC<Player> = ({
  rank,
  clanName,
  characterName,
  emblem,
  role,
  playCount,
  points,
  experience,
  level,
}) => {
  const { openImgViewModal } = useModal();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  const backgroundClass: Rank = {
    1: "bg-gold",
    2: "bg-silver",
    3: "bg-bronze",
  };

  const hoverClass: Rank = {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  };

  const isClansTab = tabParam === "clans" || tabParam === null;

  const name = isClansTab ? clanName : characterName;
  const pointsData =
    isClansTab || tabParam === "ladder"
      ? points
      : (playCount.kills / playCount.deaths).toFixed(2);

  return (
    <>
      <div
        className={`${styles["tr"]} ${
          rank < 4 ? styles[backgroundClass[rank]] : styles["bg-default"]
        }`}
      >
        <div className={styles["rank"]}>
          {rank < 4 ? (
            <div className={styles["ribbon"]}>
              <Image src={`/images/ribbon-sm@${rank}.png`} alt="" fill />
            </div>
          ) : (
            rank
          )}
        </div>
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
        <div
          className={`${
            styles[rank < 4 ? hoverClass[rank] : "gradient-normal"]
          } ${styles["hover"]}`}
        />
      </div>
    </>
  );
};

export default RankRow;
