import { Player, Rank } from "@/utils/types";
import { FC } from "react";
import styles from "../rankTable.module.scss";
import Image from "next/image";
import { useModal } from "@/contexts/modalProvider";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import RankRowAvatar from "./rankRowAvatar";
import { PLAYERS } from "@/config";
import PlayersTd from "./playersTd";

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

  enum TabParam {
    Clans = "clans",
    Individuals = "individuals",
    Ladder = "ladder",
    History = "history",
    Undefined = "",
  }

  const isClansTab =
    tabParam === TabParam.Clans || tabParam === TabParam.Undefined;

  const name = isClansTab ? clanName : characterName;
  const pointsData =
    isClansTab || tabParam === TabParam.Ladder
      ? points
      : (playCount.kills / playCount.deaths).toFixed(2);

  return (
    <>
      <div
        className={`${styles["tr"]} ${
          rank < 4 ? styles[backgroundClass[rank]] : styles["bg-default"]
        }`}
      >
        <RankRowAvatar rank={rank} />
        <PlayersTd
          isClansTab={isClansTab}
          tabParam={tabParam}
          playCount={playCount}
          emblem={emblem}
          clanName={clanName}
          name={name}
          characterName={characterName}
          role={role}
          pointsData={pointsData}
          level={level}
          experience={experience}
        />
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
