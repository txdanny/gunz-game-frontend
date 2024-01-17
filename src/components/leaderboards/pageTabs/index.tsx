"use client";
import { FC } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./pageTabs.module.scss";
import {
  LeaderBoardLeftTabIcon,
  LeaderBoardTabIcon,
} from "@/components/svgItems";

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
        <TabContent
          handleTabClick={handleTabClick}
          tabName="clains"
          tabText="clains"
          active={tabParam === "clains"}
        />
        <TabContent
          handleTabClick={handleTabClick}
          tabName="individuals"
          tabText="individuals"
          active={tabParam === "individuals"}
        />
        <TabContent
          handleTabClick={handleTabClick}
          tabName="ladder"
          tabText="ladder"
          active={tabParam === "ladder"}
        />
        <TabContent
          handleTabClick={handleTabClick}
          tabName="history"
          tabText="history"
          active={tabParam === "history"}
        />
      </div>
    </div>
  );
};

interface TabContentProps {
  handleTabClick: (tabName: string) => void;
  tabName: string;
  tabText: string;
  active: boolean;
}

const TabContent: FC<TabContentProps> = ({
  handleTabClick,
  tabName,
  tabText,
  active,
}) => {
  return (
    <div className={styles[`tab-content`]}>
      {tabName !== "clains" && (
        <LeaderBoardLeftTabIcon color={active ? "#FFBE17" : "#474747"} />
      )}
      <div
        className={styles[`${active ? "tab-active" : "tab"}`]}
        onClick={() => handleTabClick(tabName)}
      >
        {tabText}
      </div>
      <LeaderBoardTabIcon color={active ? "#FFBE17" : "#474747"} />
    </div>
  );
};

export default PageTabs;
