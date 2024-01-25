"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./newsTable.module.scss";
import Link from "next/link";
import { News } from "@/utils/types";

const NewsCard: FC<News> = ({ id, imgUrl, date, dataType, content, title }) => {
  return (
    <Link href={`/news/${id}`}>
      <div className={styles["news-card"]}>
        <div className={styles["card-img"]}>
          <Image fill alt="Card Image" src={imgUrl} />
        </div>
        <div className={styles["card-header"]}>
          <p>{date} </p>
          <span>{dataType}</span>
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
