import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import HeroBanner from "@/components/landing/heroBanner";
import StreamingNow from "@/components/landing/streamingNow";
import ZCoins from "@/components/landing/zCoins";

export const metadata: Metadata = {
  title: "Home | GunZ Website",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <MainPageLayout>
      {/* <HeroBanner />
      <StreamingNow /> */}
      <ZCoins />
    </MainPageLayout>
  );
}
