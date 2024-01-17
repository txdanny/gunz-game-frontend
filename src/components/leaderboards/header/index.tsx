"use client";
import { FC } from "react";
import styles from "./pageTabs.module.scss";

interface Header {}

const Header: FC<Header> = () => {
  return (
    <div className={styles[`header`]}>
      <div className={styles[`header-img`]}></div>
    </div>
  );
};
