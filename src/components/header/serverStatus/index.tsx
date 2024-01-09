import { FC } from "react";
import styles from "./serverStatus.module.scss";

const ServerStatus: FC = () => {
  return (
    <div className={styles["server-status"]}>
      <p className={styles["title"]}>Server Status</p>
      <div className={styles["status"]}>Online</div>
    </div>
  );
};

export default ServerStatus;
