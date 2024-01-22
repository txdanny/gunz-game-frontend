"use client";
import { FC } from "react";
import styles from "./newsFilter.module.scss";
import Image from "next/image";

const NameFilter: FC = () => {
  return (
    <div className={styles["search-content"]}>
      <input className={styles["search-input"]} placeholder="Search" />
      <div className={styles["search-icon"]}>
        <Image fill alt="Search Icon" src="/icons/search-2.svg" />
      </div>
    </div>
  );
};

export default NameFilter;
