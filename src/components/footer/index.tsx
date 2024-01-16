import { FC } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { SocialGroup } from "../widgets";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["cta-links"]}>
        <Link href={"#"}>
          <div className={styles["btn-link"]}>
            <span>download the game</span>
          </div>
        </Link>
        <Link href={"#"}>
          <div className={styles["btn-link"]}>
            <span>create an account</span>
          </div>
        </Link>
      </div>
      <div className={styles["pattern-l"]}>
        <Image
          src="/images/footer-l.png"
          className="object-content"
          fill
          alt=""
        />
      </div>
      <div className={styles["pattern-r"]}>
        <Image
          src="/images/footer-r.png"
          className="object-content"
          fill
          alt=""
        />
      </div>
      <div className={styles["footer-main"]}>
        <div className={styles["content"]}>
          <h5>join our community</h5>
          <SocialGroup />
          <div className={styles["copyright"]}>
            <div className={styles["logo"]}>
              <Image src="/images/logo@new.png" fill alt="" />
            </div>
            <p>
              © 2023 GUNZ. ALL RIGHTS RESERVED. © 2023 GOSU. ALL RIGHTS
              RESERVED. Trademarks referenced herein belong to their respective
              owners.
            </p>
          </div>
          <div className={styles["terms"]}>
            <Link href={"#"}>
              <div className={styles["link"]}>privacy policy</div>
            </Link>
            <div className={styles["divide"]} />
            <Link href={"#"}>
              <div className={styles["link"]}>terms of use</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
