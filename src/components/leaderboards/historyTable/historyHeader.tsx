"use client";
import { FC } from "react";
import styles from "./historyTable.module.scss";
import { HISTORYTABLETDS } from "@/config";

const HistoryHeader: FC = () => {
  return (
    <div className={styles["tr"]}>
      {HISTORYTABLETDS.map((td, index) => (
        <div className={styles["td"]} key={index}>
          {td}
        </div>
      ))}
    </div>
  );
};

export default HistoryHeader;
