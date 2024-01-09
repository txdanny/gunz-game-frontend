import Image from "next/image";
import { FC } from "react";
import styles from "./coinBalance.module.scss";

const CoinBalance: FC = () => {
  return (
    <div className={styles["coin-balance"]}>
      <p className={styles["title"]}>Z Coins</p>
      <div className={styles["balance"]}>
        10,000
        <Image
          src="/images/guns-coin@sm.png"
          className={styles["coin-icon"]}
          width={16}
          height={16}
          alt=""
        />
      </div>
    </div>
  );
};

export default CoinBalance;
