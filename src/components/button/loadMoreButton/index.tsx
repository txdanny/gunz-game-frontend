import { FC } from "react";
import styles from "./loadMoreButton.module.scss";

interface Props {
  title?: string;
  onClick?: () => void;
}

const LoadMoreButton: FC<Props> = ({ title = "Load More", onClick }) => {
  return (
    <button className={styles["btn"]} onClick={onClick}>
      <svg
        width="4"
        height="48"
        viewBox="0 0 4 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["pattern-l"]}
      >
        <path d="M4 0V48H0L4 0Z" />
      </svg>
      <svg
        width="4"
        height="48"
        viewBox="0 0 4 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["pattern-r"]}
      >
        <path d="M0 0H4L0 48V0Z" />
      </svg>
      {title}
    </button>
  );
};

export default LoadMoreButton;
