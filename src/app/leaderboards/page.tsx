import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import { PageWithBg } from "@/components/widgets";
import RankTable from "@/components/leaderboards/rankTable";
import Image from "next/image";
import styles from "./leaderboards.module.scss";
import PageTabs from "@/components/leaderboards/pageTabs";

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
          <RankTable />
        </div>
      </PageWithBg>
    </MainPageLayout>
  );
}
