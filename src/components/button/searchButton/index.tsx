import Image from "next/image";
import { CSSProperties, FC } from "react";
import styles from "./searchButton.module.scss";

interface ButtonProps {
  title?: string | number;
  name?: string;
  rank?: string | number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const SearchButton: FC<ButtonProps> = ({
  title,
  name,
  rank,
  className,
  style,
  onClick,
}) => {
  return (
    <div className={`${styles["search"]}`}>
      <div className={`${styles["gradient-normal"]} ${styles["hover"]}`} />
      <div className={styles["title"]}>{title}</div>
      <div className={styles["name"]}>{name}</div>
      <div className={styles["rank"]}>RANK #{rank}</div>
    </div>
  );
};

export default SearchButton;
