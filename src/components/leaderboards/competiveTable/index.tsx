"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./competiveTable.module.scss";
import { usePlayerData } from "@/hooks/usePlayerData";
import { COMPETIVETABLETDS } from "@/config";
import CompetiveRow from "./competiveRow";
import Pagination from "@mui/material/Pagination";

const CompetiveTable: FC = () => {
  const { competives } = usePlayerData();

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
          <Pagination count={5} shape="rounded" />
        </div>
      </div>
    </div>
  );
};

export default CompetiveTable;
