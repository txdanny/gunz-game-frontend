import { Metadata } from "next";
import MainPageLayout from "@/components/layout";
import Image from "next/image";
import styles from "./news.module.scss";
import NewsBanner from "@/components/news/newsBanner";
import NewsFilter from "@/components/news/newsFilter";
import NewsTable from "@/components/news/newsTable";

export const metadata: Metadata = {
  title: "News | GunZ Website",
  description: "",
};

export default function News() {
  return (
    <MainPageLayout>
      <NewsBanner />
      <div className={styles["container"]}>
        <NewsFilter />
        <NewsTable />
      </div>
    </MainPageLayout>
  );
}
