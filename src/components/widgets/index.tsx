import { FC, ReactNode } from "react";
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

interface PageBgProps {
  src: string;
  children?: ReactNode;
}

export const PageWithBg: FC<PageBgProps> = ({ src, children }) => {
  return (
    <div
      className="page-bg"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {children}
    </div>
  );
};
