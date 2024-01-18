import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import { PageWithBg } from "@/components/widgets";
import RankTable from "@/components/leaderboards/rankTable";
import Image from "next/image";
import styles from "./leaderboards.module.scss";
import PageTabs from "@/components/leaderboards/pageTabs";
import RankHeader from "@/components/leaderboards/rankHeader";
import CompetiveRank from "@/components/leaderboards/competiveRank";
import SearchBar from "@/components/leaderboards/searchBar";
import MobileTopBar from "@/components/leaderboards/mobileTopBar";
import MobileTopBanner from "@/components/leaderboards/mobileTopBanner";
import MobileRankTable from "@/components/leaderboards/mobileRankTable";

export const metadata: Metadata = {
  title: "Ranking | GunZ Website",
  description: "",
};

export default function Ranking() {
  return (
    <MainPageLayout>
      <PageWithBg src="/images/bg-ranking.jpg">
        <div className={styles["icon-large"]}>
          <Image
            src="/images/ranking-top.png"
            className="object-contain"
            fill
            alt=""
          />
        </div>
        <div className={styles["container"]}>
          <PageTabs />
          <MobileTopBar />
          <MobileTopBanner />
          <RankHeader />
          <CompetiveRank />
          <SearchBar />
          <RankTable />
          <MobileRankTable />
        </div>
      </PageWithBg>
    </MainPageLayout>
  );
}
