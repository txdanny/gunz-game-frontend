"use client";
import { FC, useState } from "react";
import styles from "./newsFilter.module.scss";
import TabButton from "./tabButton";
import DateFilter from "./dateFilter";
import NameFilter from "./nameFilter";
import { useSearchParams } from "next/navigation";

const NewsFilter: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");
  return (
    <div className={styles["tab-content"]}>
      <div className={styles["tabs"]}>
        <TabButton
          label="latest"
          link="latest"
          active={tabParam === "latest" || tabParam == null}
        />
        <TabButton
          label="Announcements"
          link="announcements"
          active={tabParam === "announcements"}
        />
        <TabButton
          label="Patch Notes"
          link="patchNotes"
          active={tabParam === "patchNotes"}
        />
        <TabButton
          label="Blog Posts"
          link="blogPosts"
          active={tabParam === "blogPosts"}
        />
      </div>
      <div className={styles["others"]}>
        <DateFilter />
        <NameFilter />
      </div>
    </div>
  );
};

export default NewsFilter;
