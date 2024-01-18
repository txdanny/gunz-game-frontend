import Link from "next/link";
import { FC } from "react";
import styles from "./user.module.scss";
import { FaChevronLeft } from "react-icons/fa6";

interface ButtonProps {
  url: string;
  title?: string;
}

const BackToHome: FC<ButtonProps> = ({
  url,
  title = "back to leaderboard",
}) => {
  return (
    <div className={styles["breadcrumbs"]}>
      <Link href={url}>
        <div className={styles["title"]}>
          <FaChevronLeft className={styles["arrow"]} />
          {title}
          <svg
            width="19"
            height="53"
            viewBox="0 0 19 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["edge-right"]}
          >
            <path d="M18.6028 53L-8.29494e-05 -1.57361e-06L-8.7738e-05 53L18.6028 53Z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default BackToHome;
