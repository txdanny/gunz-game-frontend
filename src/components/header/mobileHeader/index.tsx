"use client";

import React, { FC, useState } from "react";
import styles from "./mobileHeader.module.scss";
import { NAV_LINKS_MOBILE } from "@/config";
import TopBar from "./topBar";
import ListGroup from "./listGroup";
import Image from "next/image";

const MobileHeader: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  const headerContentStyle = {
    backgroundColor: opened ? "#1f1f1f" : "#111111",
    height: opened ? "100%" : 78,
  };

  return (
    <header className={styles["mobile-header"]}>
      <div
        className={`${styles["header-content"]}`}
        data-testid="header-content"
        style={headerContentStyle}
      >
        <TopBar opened={opened} setOpened={setOpened} />
        {opened && (
          <>
            <div className={styles.navs}>
              {NAV_LINKS_MOBILE.map((item, key) => (
                <ListGroup
                  list={item}
                  key={key}
                  onCloseMenu={() => setOpened(false)}
                />
              ))}
            </div>
            <div className={styles["bottom-control"]}>
              <button className={styles["log-in"]}>
                <div className={styles["list-title"]}>
                  Log In
                  <Image
                    src={"/icons/login.svg"}
                    width={17}
                    height={17}
                    alt=""
                  />
                </div>
                <div className={styles["log-in-bg"]} />
              </button>
              <button className={styles["play-now"]}>
                <div className={styles["list-title"]}>Play Now</div>
                <div className={styles["play-now-bg"]} />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
