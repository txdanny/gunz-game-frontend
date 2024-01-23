"use client";
import { FC } from "react";
import styles from "./competiveTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import CompetiveRow from "./competiveRow";
import Pagination from "@mui/material/Pagination";
import CompetiveHeader from "./coompetiveHeader";

const CompetiveTable: FC = () => {
  const { competives } = usePlayerData();

  return (
    <div className={styles["competive-table"]}>
      <div className={styles["table"]}>
        <div className={styles["thead"]}>
          <CompetiveHeader />
        </div>
        <div className={styles["tbody"]}>
          {" "}
          {competives &&
            competives.map((history, index) => (
              <CompetiveRow {...history} key={index} />
            ))}
        </div>
        <div className={styles["pagination-content"]}>
          <Pagination count={5} shape="rounded" />
        </div>
      </div>
    </div>
  );
};

export default CompetiveTable;
