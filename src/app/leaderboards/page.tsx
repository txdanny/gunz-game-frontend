import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import { PageWithBg } from "@/components/widgets";
import PageTabs from "@/components/leaderboards/pageTabs";

export const metadata: Metadata = {
  title: "Ranking | GunZ Website",
  description: "",
};

export default function Ranking() {
  return (
    <MainPageLayout>
      <PageWithBg src="/images/bg-ranking.jpg">
        <PageTabs />
      </PageWithBg>
    </MainPageLayout>
  );
}
