"use client";

import Image from "next/image";
import { FC } from "react";
import styles from "./coinBalance.module.scss";
import { useGame } from "@/contexts/gameProvider";

const CoinBalance: FC = () => {
  const { state } = useGame();
  const { balance } = state;
  return (
    <div className={styles["coin-balance"]}>
      <p className={styles["title"]}>Z Coins</p>
      <div className={styles["balance"]}>
        {balance.toLocaleString()}
        <Image
          src="/images/gunz-coin@sm.png"
          className={styles["coin-icon"]}
          width={16}
          height={16}
          alt="coin icon"
        />
      </div>
    </div>
  );
};

export default CoinBalance;
