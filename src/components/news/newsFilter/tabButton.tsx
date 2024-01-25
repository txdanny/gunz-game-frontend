"use client";
import { FC } from "react";
import styles from "./newsFilter.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  label: string;
  link: string;
  active?: boolean;
}

const TabButton: FC<Props> = ({ label, link, active = false }) => {
  const router = useRouter();
  const handleTabClick = (tabName: string) => {
    router.push(`/news?tabs=${tabName}`, { scroll: false });
  };

  return (
    <div className={styles["tab-btn"]} onClick={() => handleTabClick(link)}>
      {!active ? (
        <>
          <Image
            src={"/images/button/newstab@default.svg"}
            className={styles["default"]}
            fill
            alt=""
          />
        </>
      ) : (
        <Image
          src={"/images/button/newstab@active.svg"}
          className={styles["active"]}
          fill
          alt=""
        />
      )}
      {label}
    </div>
  );
};

export default TabButton;
