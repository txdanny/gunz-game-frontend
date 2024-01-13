import Image from "next/image";
import { FC } from "react";
import styles from "./zCoins.module.scss";

const ZCoins: FC = () => {
  return (
    <section className={styles["zcoins"]} data-testid="zcoins-section">
      <div className={styles["bg-image"]}>
        <Image
          src="/images/bg-zcoins.jpg"
          className="object-cover"
          fill
          data-testid="zcoins-bg"
          alt="Z Coins"
        />
      </div>
      <div className={styles["section-content"]}>
        <div className={styles["coin-info"]}>
          <h2 className={styles["title"]} data-testid="z-coins">
            Z Coins
          </h2>
          <div className={styles["coin-sm"]}>
            <Image
              src="/images/zcoin@large.png"
              className="object-contain"
              fill
              alt="Z Coins"
            />
          </div>
          <p className={styles["description"]} data-testid="z-description">
            <span>Z Coins</span> are the ultimate way to upgrade your
            <br /> arsenal and look your best in <span>GunZ: The Duel.</span>
            <br />
            <br /> With <span>Z Coins</span>, you can purchase the latest
            <br />
            weapons, armor, and cosmetics, allowing you
            <br /> to show off your skills in style.
          </p>
          <div className={styles["buttons"]}>
            <button className={styles["btn-buy"]}>buy z coins</button>
            <div className="">
              <button className={styles["btn-shop"]}>premium shop</button>
              <button className={styles["btn-shop"]}>v.i.p shop</button>
            </div>
          </div>
        </div>
        <div className={styles["coin"]}>
          <Image
            src="/images/zcoin@large.png"
            className="object-contain"
            fill
            alt="Z Coins"
          />
        </div>
      </div>
    </section>
  );
};

export default ZCoins;
