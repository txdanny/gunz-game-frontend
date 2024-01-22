"use client";
import { FC, useState } from "react";
import Image from "next/image";
import styles from "./newsTable.module.scss";

const NewsCard: FC = () => {
  return (
    <div className={styles["news-card"]}>
      <div className={styles["card-img"]}>
        <Image fill alt="Card Image" src="/images/news/1.png" />
      </div>
      <div className={styles["card-header"]}>
        <p>08/09/23 </p>
        <span>PATCH NOTES</span>
      </div>
      <p className={styles["title"]}>GUNZ Update Log #002</p>
      <span className={styles["detail"]}>
        {` We're excited to share the details about the first big update that we
        have implemented for GunZ!`}
      </span>
    </div>
  );
};

export default NewsCard;
