"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./competiveTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import { useSearchParams } from "next/navigation";
import { COMPETIVETABLETDS } from "@/config";
import CompetiveRow from "./competiveRow";
import Pagination from "@mui/material/Pagination";
import UsePagination from "./pagination";
import PaginationItem from "@mui/material/PaginationItem";

const CompetiveTable: FC = () => {
  const { competives, loadMore } = usePlayerData();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  return (
    <div className={styles["competive-table"]}>
      <div className={styles["table"]}>
        <div className={styles["thead"]}>
          <div className={styles["tr"]}>
            {COMPETIVETABLETDS.map((td, index) => (
              <div className={styles["td"]} key={index}>
                <span>{td.title}</span>
                <div className={styles["icon"]}>
                  <Image fill alt="" src={td.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["tbody"]}>
          {" "}
          {competives &&
            competives.map((history, index) => (
              <CompetiveRow {...history} key={index} />
            ))}
        </div>
        <div className={styles["pagination-content"]}>
          <Pagination
            count={5}
            shape="rounded"
            // renderItem={(item) => (
            //   <PaginationItem
            //     slots={{
            //       previous: () => <h1>Previous</h1>,
            //       next: () => <h1>Next</h1>,
            //     }}
            //     {...item}
            //   />
            // )}
          />
        </div>
      </div>
    </div>
  );
};

export default CompetiveTable;
