import { FC } from "react";
import styles from "./user.module.scss";
import { PiUserFill } from "react-icons/pi";

interface UserDetailTopBarProps {
  title: string;
}

const UserDetailTopBar: FC<UserDetailTopBarProps> = ({ title }) => {
  return (
    <div className={styles["topbar"]}>
      {title} Information <PiUserFill className={styles["icon"]} />
    </div>
  );
};

export default UserDetailTopBar;
