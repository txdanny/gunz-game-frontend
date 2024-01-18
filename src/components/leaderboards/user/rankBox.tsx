import { Rank } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  rank: number;
}

const RankBox: FC<Props> = ({ rank }) => {
  const ribbon = "";
  return (
    <div className="rank-box">
      <p>Current Player Rank</p>
      <div className="medal">
        <Image src={ribbon} className="object-contain" fill alt="" />
      </div>
    </div>
  );
};

export default RankBox;
