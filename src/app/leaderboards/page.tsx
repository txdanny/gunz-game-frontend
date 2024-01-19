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
import MobileClansTable from "@/components/leaderboards/mobileClansTable";
import HistoryTable from "@/components/leaderboards/historyTable";
import MobileHistoryTable from "@/components/leaderboards/mobileHistoryTable";
import MobileIndividualTable from "@/components/leaderboards/mobileIndividualTable";
import MobileLadderTable from "@/components/leaderboards/mobileLadderTable";

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
          <HistoryTable />
          <MobileClansTable />
          <MobileIndividualTable />
          <MobileLadderTable />
          <MobileHistoryTable />
        </div>
      </PageWithBg>
    </MainPageLayout>
  );
}
