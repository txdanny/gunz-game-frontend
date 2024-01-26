import React, { FC } from "react";
import styles from "./continueButton.module.scss";
import Link from "next/link";

type ContinueButtonProps = {
  title: string;
  active: boolean;
  tabLink: string;
};
const ContinueButton: FC<ContinueButtonProps> = ({
  title,
  active,
  tabLink,
}) => {
  return (
    <Link href={`${tabLink}`}>
      <div
        className={`${
          active ? styles["active-continue-btn"] : styles["continue-btn"]
        }`}
      >
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ContinueButton;
