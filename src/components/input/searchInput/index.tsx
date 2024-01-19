import { CSSProperties, FC } from "react";
import styles from "./searchInput.module.scss";

interface InputProps {
  title?: string | number;
  className?: string;
  style?: CSSProperties;
  onChange?: () => void;
}

const SearchInput: FC<InputProps> = ({ title }) => {
  return (
    <div className={styles["seachinput"]}>
      <div className={styles["search-title"]}>{title}</div>
      <input className={styles["search-value"]} />
    </div>
  );
};

export default SearchInput;
