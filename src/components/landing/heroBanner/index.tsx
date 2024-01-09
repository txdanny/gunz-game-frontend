import { FC } from "react";
import styles from "./heroBanner.module.scss";

const HeroBanner: FC = () => {
  return (
    <div className={styles["hero-banner"]}>
      <video className={styles["video"]} autoPlay={true} playsInline loop muted>
        <source
          src="/videos/landing-page-hero.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HeroBanner;
