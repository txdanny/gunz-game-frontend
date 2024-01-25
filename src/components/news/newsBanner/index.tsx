import { FC } from "react";
import styles from "./newsBanner.module.scss";
import Image from "next/image";

const NewsBanner: FC = () => {
  return (
    <section className={styles["news-banner"]}>
      <div className={styles["banner-bg"]}>
        <Image src="/images/bg-news.jpg" alt="News Banner Bg" fill />
      </div>

      <div className={styles["news-content"]}>
        <div className={styles["news-box"]}>
          <h2 className={styles["intro-text"]}>news & articles</h2>
          <p>KEEP UP WITH THE LATEST NEWS & UPDATES IN GUNZ!</p>
        </div>
      </div>
    </section>
  );
};

export default NewsBanner;
