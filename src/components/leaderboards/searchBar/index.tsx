"use client";
import { FC } from "react";
import styles from "./searchBar.module.scss";
import SearchInput from "@/components/input/searchInput";
import TargetButton from "@/components/button/targetButton";
import SearchButton from "@/components/button/searchButton";
import { useSearchParams } from "next/navigation";

interface SearchBar {}

const SearchBar: FC<SearchBar> = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tabs");

  return (
    <>
      {tabParam !== "history" && (
        <div className={styles[`searchbar`]}>
          <div className={styles["input-group"]}>
            <SearchInput title={`Search for a Clan`} />
            <TargetButton />
          </div>
          <div className={styles["input-group"]}>
            <SearchInput title={`Search for a Player`} />
            <TargetButton />
          </div>
          <div className={styles["button-group"]}>
            <SearchButton title={"player"} name={"icejpeg"} rank={816} />
            <SearchButton title={"clan"} name={"Legend"} rank={816} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
