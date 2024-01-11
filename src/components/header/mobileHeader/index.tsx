"use client";

import { FC, useState } from "react";
import styles from "./mobileHeader.module.scss";
import TopBar from "./topBar";
import ListGroup from "./listGroup";
import { NAV_LINKS } from "@/config";

const MobileHeader: FC = () => {
  const [opened, setOpened] = useState<boolean>(false); // Nav Menu expand/collapse status

  return (
    <header className={styles["mobile-header"]}>
      <div className={styles["banner"]}>bezel only</div>
      <div
        className={`${styles["header-content"]}`}
        style={{
          backgroundColor: opened ? "#1f1f1f" : "#111111",
          height: opened ? "100%" : 78,
        }}
      >
        <TopBar opened={opened} setOpened={setOpened} />
        {opened && (
          <div className={styles["navs"]}>
            {NAV_LINKS.map((item, key) => (
              <ListGroup list={item} key={key} />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
