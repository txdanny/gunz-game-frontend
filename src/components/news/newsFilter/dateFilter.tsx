"use client";
import { FC } from "react";
import styles from "./newsFilter.module.scss";
import Image from "next/image";
import { ArrowDown } from "@/components/svgItems";

const DateFilter: FC = () => {
  return (
    <div className={styles["date-content"]}>
      <p>Date Posted</p>
      <div className={styles["dateIcon"]}>
        <Image alt="calendar" src="/icons/calendarFill.png" fill />
      </div>
      <div className={styles["arrow-icon"]}>
        <ArrowDown subClassName={styles["icon"]} />
      </div>
    </div>
  );
};

export default DateFilter;
