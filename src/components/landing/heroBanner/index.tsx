import { FC } from "react";
import styles from "./heroBanner.module.scss";
import Image from "next/image";

const HeroBanner: FC = () => {
  return (
    <div className={styles["hero-banner"]}>
      <video className={styles["video"]} autoPlay={true} playsInline loop muted>
        <source src="/videos/landing-page-hero.mp4" type="video/mp4" />
      </video>
      <div className={styles["hero-content"]}>
        <div className={styles["logo"]}>
          <Image src="/images/logo@metal.png" alt="Effected Logo" fill />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
