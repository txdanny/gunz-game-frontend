"use client";

import { ArrowDown, UserIcon } from "@/components/svgItems";
import { FC } from "react";
import styles from "./accountDropdown.module.scss";
import Image from "next/image";
import Link from "next/link";

const AccountDropdown: FC = () => {
  // const { data: session } = useSession();

  return (
    <div className={styles["account-dropdown"]}>
      <div className={styles["title-box"]}>
        <div className={styles["user-icon"]}>
          <UserIcon />
        </div>
        <div className={styles["title"]}>Account</div>
        <div className={styles["arrow-icon"]}>
          <ArrowDown subClassName={styles["icon"]} />
        </div>
      </div>
      <div className={styles["list-box"]}>
        <ul className={styles["list"]}>
          {/* {!session?.user ? ( */}
          {true ? (
            <>
              <li className={styles["log-in"]}>
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
              </li>
              <Link href={"/signup"}>
                <li className={styles["sign-up"]}>
                  <div className={styles["list-title"]}>
                    Sign Up
                    <Image
                      src={"/icons/signup.svg"}
                      width={17}
                      height={17}
                      alt=""
                    />
                  </div>
                  <div className={styles["sign-up-bg"]} />
                </li>
              </Link>
            </>
          ) : (
            <>
              <li className={styles["log-in"]}>
                <div className={styles["list-title"]}>View Account</div>
                <div className={styles["log-in-bg"]} />
              </li>
              <li className={styles["log-out"]}>
                <div className={styles["list-title"]}>
                  Log Out
                  <Image
                    src={"/icons/logout.svg"}
                    width={17}
                    height={17}
                    alt=""
                  />
                </div>
                <div className={styles["log-out-bg"]} />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AccountDropdown;
