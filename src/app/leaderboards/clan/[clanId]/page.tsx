import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import { PageWithBg } from "@/components/widgets";
import Image from "next/image";
import styles from "../../leaderboards.module.scss";
import BackToHome from "@/components/leaderboards/user/backButton";
import UserDetailTopBar from "@/components/leaderboards/user/topBar";
import ClanInfo from "@/components/leaderboards/user/clanInfo";
import CompetiveTable from "@/components/leaderboards/competiveTable";

export const metadata: Metadata = {
  title: "Clan Detail | GunZ Website",
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
          <BackToHome url="/leaderboards" title="back to leaderboard" />
          <UserDetailTopBar title={"Clan"} />
          <ClanInfo />
          <CompetiveTable />
        </div>
      </PageWithBg>
    </MainPageLayout>
  );
}
