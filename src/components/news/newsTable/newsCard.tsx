"use client";
import { FC, useState } from "react";
import Image from "next/image";
import styles from "./newsTable.module.scss";
import Link from "next/link";
import { News } from "@/utils/types";

const NewsCard: FC<News> = ({ id, imgUrl, date, dataType, content, title }) => {
  const type =
    dataType == 1
      ? "patch notes"
      : dataType === 2
      ? "blog posts"
      : "announcements";
  return (
    <Link href={`/news/${id}`}>
      <div className={styles["news-card"]}>
        <div className={styles["card-img"]}>
          <Image fill alt="Card Image" src={imgUrl} />
        </div>
        <div className={styles["card-header"]}>
          <p>{date} </p>
          <span>{type}</span>
        </div>
        <p className={styles["title"]}>{title}</p>
        <div className={styles["detail-content"]}>
          {content.map((data, index) => (
            <span className={styles["detail"]} key={index}>
              {data}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
