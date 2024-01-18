import Image from "next/image";
import { CSSProperties, FC } from "react";
import styles from "./searchInput.module.scss";

interface InputProps {
  title?: string | number;
  className?: string;
  style?: CSSProperties;
  onChange?: () => void;
}

const SearchInput: FC<InputProps> = ({}) => {
  return (
    <div className={styles["seachinput"]}>
      <div className={styles["search-title"]}>Search for a Clan</div>
      <input className={styles["search-value"]} />
    </div>
  );
};

export default SearchInput;
