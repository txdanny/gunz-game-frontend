"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./competiveTable.module.scss";
import { COMPETIVETABLETDS } from "@/config";

const CompetiveHeader: FC = () => {
  return (
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
  );
};

export default CompetiveHeader;
