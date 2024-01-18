"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./pageTabs.module.scss";
import PageTabButton from "@/components/button/pageTabButton";

const PageTabs: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  const handleTabClick = (tabName: string) => {
    router.push(`/leaderboards?tabs=${tabName}`);
  };

  return (
    <div className={styles.pagetabs}>
      <PageTabButton
        handleTabClick={handleTabClick}
        tabName="clans"
        tabText="clans"
        active={tabParam === "clans"}
        rightDisableActiveState={false}
        leftDisableActiveState={tabParam !== "individuals"}
      />
      <PageTabButton
        handleTabClick={handleTabClick}
        tabName="individuals"
        tabText="individuals"
        active={tabParam === "individuals"}
        rightDisableActiveState={tabParam === "clans"}
        leftDisableActiveState={tabParam !== "clans"}
      />
      <PageTabButton
        handleTabClick={handleTabClick}
        tabName="ladder"
        tabText="ladder"
        active={tabParam === "ladder"}
        rightDisableActiveState={tabParam !== "history"}
        leftDisableActiveState={
          tabParam !== "individuals" && tabParam !== "clans"
        }
      />
      <PageTabButton
        handleTabClick={handleTabClick}
        tabName="history"
        tabText="history"
        active={tabParam === "history"}
        rightDisableActiveState={true}
        leftDisableActiveState={false}
      />
    </div>
  );
};

export default PageTabs;
