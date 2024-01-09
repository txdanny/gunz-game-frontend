"use client";
import { FC } from "react";
import styles from "./serverStatus.module.scss";
import { useGame } from "@/contexts/gameProvider";

const ServerStatus: FC = () => {
  const { state } = useGame();
  const { serverStatus } = state;
  return (
    <div className={styles["server-status"]}>
      <p className={styles["title"]}>Server Status</p>
      <div className={styles["status"]}>{serverStatus}</div>
    </div>
  );
};

export default ServerStatus;
