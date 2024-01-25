import React, { FC } from "react";
import styles from "./continueButton.module.scss";

type ContinueButtonProps = {
  title: string;
  active: boolean;
};
const ContinueButton: FC<ContinueButtonProps> = ({ title, active }) => {
  return (
    <div className={styles["continue-btn"]}>
      <p>{title}</p>
    </div>
  );
};

export default ContinueButton;
