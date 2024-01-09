import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import CoinBalance from "./coinBalance";
import ServerStatus from "./serverStatus";
import AccountDropdown from "./accountDropdown";
import ImageButtonSm from "../button/imageButtonSm";
import NavLinks from "./navLinks";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <div className={styles["header-left"]}>
          <Link href="/">
            <div className={styles["logo-box"]}>
              <Image
                src={"/images/logo@sm.svg"}
                fill
                className={styles["logo-image"]}
                alt="Logo"
              />
            </div>
          </Link>
        </div>
        <div className={styles["header-right"]}>
          <NavLinks />
          <CoinBalance />
          <ServerStatus />
          <AccountDropdown />
          <ImageButtonSm title={"play now"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
