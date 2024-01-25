"use client";
import React, { FC } from "react";
import styles from "./newsTable.module.scss";
import NewsCard from "./newsCard";
import LoadMoreButton from "@/components/button/loadMoreButton";
import NewsSeenAll from "../newsSeenAll";
import { NEWS } from "@/config";
import { useSearchParams } from "next/navigation";

const NewsTable: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  const filterData = NEWS.filter((item) => {
    if (tabParam === "latest" || tabParam === null) {
      return true;
    } else if (tabParam === "announcements") {
      return item.dataType === 3;
    } else if (tabParam === "patchNotes") {
      return item.dataType === 1;
    } else {
      return item.dataType === 2;
    }
  });

  return (
    <div className={styles["news-table"]}>
      <div className={styles.table}>
        {filterData.map((data, index) => (
          <NewsCard
            key={index}
            id={data.id}
            imgUrl={data.imgUrl}
            date={data.date}
            dataType={data.dataType}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
      <NewsSeenAll />
      <LoadMoreButton />
    </div>
  );
};

export default NewsTable;
