import { FC } from "react";
import styles from "./user.module.scss";
import { PiUserFill } from "react-icons/pi";

const UserDetailTopBar: FC = () => {
  return (
    <div className={styles["topbar"]}>
      Player Information <PiUserFill className={styles["icon"]} />
    </div>
  );
};

export default UserDetailTopBar;
