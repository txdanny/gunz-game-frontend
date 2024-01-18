import { Rank } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";

const RankBox: FC<Rank> = (props) => {
  const ribbon = "";
  console.log(props);
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
