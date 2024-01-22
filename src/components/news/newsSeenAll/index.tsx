import { FC } from "react";
import Image from "next/image";
import styles from "./newsSeenAll.module.scss";
import { useSearchParams } from "next/navigation";

const NewsSeenAll: FC = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  return (
    <>
      {tabParam === "blogPosts" && (
        <div className={styles["news-seen"]}>
          <div className={styles["image"]}>
            <Image
              src="/images/news/Illustration.png"
              alt="Illustration"
              fill
            />
          </div>
          <div className={styles["content"]}>
            <h1>{`You’re all caught up!`}</h1>
            <p>
              {`You’ve seen all the articles Available in this section.`} <br />
              <br />
              {`Come Back Soon for more!`}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsSeenAll;
