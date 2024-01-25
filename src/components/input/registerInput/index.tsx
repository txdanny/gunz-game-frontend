import { CSSProperties, FC } from "react";
import styles from "./registerInput.module.scss";

type InputProps = {
  label: string;
  onChange?: () => void;
};

const RegisterInput: FC<InputProps> = ({ label }) => {
  return (
    <div className={styles["input-content"]}>
      <div className={styles["label"]}>{label}</div>
      <input className={styles["value"]} />
    </div>
  );
};

export default RegisterInput;
