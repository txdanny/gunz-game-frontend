"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./pageTabs.module.scss";

import PageTabButton from "@/components/button/pageTabButton";

interface PageTabsProps {}

const PageTabs: FC<PageTabsProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  const handleTabClick = (tabName: string) => {
    router.push(`/leaderboards?tabs=${tabName}`);
  };

  return (
    <div className={styles.pagetabs}>
      <div className={styles.content}>
        <PageTabButton
          handleTabClick={handleTabClick}
          tabName="clains"
          tabText="clains"
          active={tabParam === "clains" || tabParam == undefined}
          rightDisableActiveState={false}
          leftDisableActiveState={tabParam !== "individuals"}
        />
        <PageTabButton
          handleTabClick={handleTabClick}
          tabName="individuals"
          tabText="individuals"
          active={tabParam === "individuals"}
          rightDisableActiveState={tabParam === "clains"}
          leftDisableActiveState={
            tabParam !== "clains" || tabParam == undefined
          }
        />
        <PageTabButton
          handleTabClick={handleTabClick}
          tabName="ladder"
          tabText="ladder"
          active={tabParam === "ladder"}
          rightDisableActiveState={tabParam !== "history"}
          leftDisableActiveState={
            (tabParam !== "individuals" && tabParam !== "clains") ||
            (tabParam !== "individuals" && tabParam === undefined)
          }
        />
        <PageTabButton
          handleTabClick={handleTabClick}
          tabName="history"
          tabText="history"
          active={tabParam === "history"}
          rightDisableActiveState={true}
          leftDisableActiveState={tabParam == "!clains"}
        />
      </div>
    </div>
  );
};

export default PageTabs;
