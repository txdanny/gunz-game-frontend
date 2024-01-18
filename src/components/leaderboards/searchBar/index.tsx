import { FC } from "react";
import styles from "./searchBar.module.scss";
import Image from "next/image";
import SearchInput from "@/components/input/searchInput";
import TargetButton from "@/components/button/targetButton";
import SearchButton from "@/components/button/searchButton";

interface SearchBar {}

const SearchBar: FC<SearchBar> = () => {
  return (
    <div className={styles[`searchbar`]}>
      <div className={styles["input-group"]}>
        <SearchInput />
        <TargetButton />
      </div>
      <div className={styles["input-group"]}>
        <SearchInput />
        <TargetButton />
      </div>
      <div className={styles["button-group"]}>
        <SearchButton title={"player"} name={"icejpeg"} rank={816} />
        <SearchButton title={"clan"} name={"Legend"} rank={816} />
      </div>
    </div>
  );
};

export default SearchBar;
