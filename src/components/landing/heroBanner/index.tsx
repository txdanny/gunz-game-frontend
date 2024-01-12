import { FC } from "react";
import styles from "./heroBanner.module.scss";
import Image from "next/image";
import DownloadButton from "./downloadButton";

const HeroBanner: FC = () => {
  return (
    <section className={styles["hero-banner"]}>
      <video className={styles["video"]} autoPlay={true} playsInline loop muted>
        <source src="/videos/landing-page-hero.mp4" type="video/mp4" />
      </video>
      <div className={styles["hero-content"]}>
        <div className={styles["logo"]}>
          <Image src="/images/logo@metal.png" alt="Effected Logo" fill />
        </div>
        <h2 className={styles["intro-text"]}>
          The most competitive 3rd-person shooter that will
          <br /> test your skills and reflexes to the limit.
        </h2>
        <DownloadButton />
      </div>
    </section>
  );
};

export default HeroBanner;
