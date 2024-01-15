"use client";

import { FC, useState } from "react";
import styles from "./rank.module.scss";
import Image from "next/image";
import TabButton from "./tabButton";
import WinnerCard from "./winnerCard";

const Rank: FC = () => {
  const [tab, setTab] = useState<"clan" | "individual" | "ladder">("clan");

  return (
    <section className={styles["rank"]}>
      <div className={styles["bg-image"]}>
        <Image
          src="/images/bg-rank.jpg"
          className="object-cover"
          fill
          data-testid="rank-bg"
          alt="Z Coins"
        />
      </div>
      <div className={styles["rank-content"]}>
        <h2 className={styles["title"]}>the battle for rank #1</h2>
        <p className={styles["description"]}>
          Join a clan or become the top individual in the rankings!
          <br />
          Show your skills and compete with the best of the best in GunZ: The
          Duel.
        </p>
        <div className={styles["tabs"]}>
          <TabButton
            label="clan"
            onClick={() => setTab("clan")}
            active={tab === "clan"}
          />
          <TabButton
            label="individual"
            onClick={() => setTab("individual")}
            active={tab === "individual"}
          />
          <TabButton
            label="ladder"
            onClick={() => setTab("ladder")}
            active={tab === "ladder"}
          />
        </div>
        <div className={styles["cards-box"]}>
          <WinnerCard
            username="DBZS"
            pfp="/images/temp/user-1.png"
            pts={1000}
            rank={{ rank: 3, type: "clan" }}
          />
          <WinnerCard
            username="Avoid"
            pfp="/images/temp/user-2.png"
            pts={1750}
            rank={{ rank: 1, type: "clan" }}
          />
          <WinnerCard
            username="Rakuzan"
            pfp="/images/temp/user-3.png"
            pts={940}
            rank={{ rank: 2, type: "clan" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Rank;
