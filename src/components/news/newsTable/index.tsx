"use client";
import React, { FC } from "react";
import styles from "./newsTable.module.scss";
import NewsCard from "./newsCard";
import LoadMoreButton from "@/components/button/loadMoreButton";
import NewsSeenAll from "../newsSeenAll";
import { NEWS, NEWSTYPE } from "@/config";
import { useSearchParams } from "next/navigation";

const NewsTable: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  enum TabParam {
    LATEST = "latest",
    ANNOUNCEMENTS = "announcements",
    PATCH_NOTES = "patchNotes",
    BLOG_POSTS = "blogposts",
  }

  const filterData = NEWS.filter((item) => {
    if (tabParam === TabParam.LATEST || tabParam === null) {
      return true;
    } else if (tabParam === TabParam.ANNOUNCEMENTS) {
      return item.dataType === NEWSTYPE[2];
    } else if (tabParam === TabParam.PATCH_NOTES) {
      return item.dataType === NEWSTYPE[0];
    } else {
      return item.dataType === NEWSTYPE[1];
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
