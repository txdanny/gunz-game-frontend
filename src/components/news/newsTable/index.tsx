"use client";
import { FC, useState } from "react";
import styles from "./newsTable.module.scss";
import NewsCard from "./newsCard";
import LoadMoreButton from "@/components/button/loadMoreButton";
import NewsSeenAll from "../newsSeenAll";

const NewsTable: FC = () => {
  return (
    <div className={styles["news-table"]}>
      <div className={styles["table"]}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <NewsSeenAll />
      <LoadMoreButton />
    </div>
  );
};

export default NewsTable;
