import { CloseIcon, HamburgerIcon } from "@/components/svgItems";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./topBar.module.scss";

interface TopBarProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const TopBar: FC<TopBarProps> = ({ opened, setOpened }) => {
  return (
    <div className={styles["top-bar"]} data-testid="top-bar">
      {opened ? (
        <>
          <Image
            src="/images/logo@yellow.svg"
            width={90}
            height={27.4}
            alt=""
          />
          <button
            className={styles["btn-close"]}
            onClick={() => setOpened(false)}
            data-testid="btn-close"
          >
            <CloseIcon />
          </button>
        </>
      ) : (
        <>
          <Image src="/images/logo@sm.svg" width={90} height={27.4} alt="" />
          <button
            className={styles["btn-open"]}
            onClick={() => setOpened(true)}
            data-testid="btn-open"
          >
            <HamburgerIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default TopBar;
