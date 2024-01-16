import { FC } from "react";
import { SOCIALS } from "@/config";
import Link from "next/link";
import styles from "./widgets.module.scss";
import Image from "next/image";

export const SocialGroup: FC = () => {
  return (
    <div className={styles["socials"]}>
      {SOCIALS.map((link, index) => (
        <Link href={link.link} key={`${index}-${link.name}`}>
          <div className={styles["social"]}>
            <div className={styles["icon"]}>
              <Image src={`/icons/${link.name}.svg`} alt="" fill />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
