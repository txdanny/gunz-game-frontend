import { FC } from "react";
import styles from "./community.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SocialGroup } from "@/components/widgets";

const Community: FC = () => {
  return (
    <section className={styles["community"]}>
      <div className={styles["bg-image"]}>
        <Image
          src="/images/bg-community.jpg"
          className="object-cover"
          fill
          alt="GunZ Community"
        />
      </div>
      <div className={styles["bg-overlay"]}>
        <Image
          src="/images/community-overlay.png"
          className=""
          fill
          alt="GunZ Community"
        />
      </div>
      <div className={styles["content"]}>
        <div className={styles["info"]}>
          <div className={styles["title"]}>GunZ Community</div>
          <p className={styles["description"]}>
            Whether you&#39;re a seasoned veteran or a new player just starting
            out, you&#39;ll find a place in our community, with the additional
            help of guides. We have channels for players of all skill levels, so
            you&#39;re sure to find people to play with who are at your level.
            <br />
            <br />
            Make sure to also check out the blog posts! Regular updates & new
            articles about upcoming events, new features, and even
            behind-the-scenes looks at the game&#39;s development are uploaded
            in this section.
          </p>
          <SocialGroup />
          <div className={styles["action"]}>
            <Link href={"#"}>
              <div className={styles["btn-link"]}>news & articles</div>
            </Link>
            <Link href={"#"}>
              <div className={styles["btn-link"]}>game guide</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
