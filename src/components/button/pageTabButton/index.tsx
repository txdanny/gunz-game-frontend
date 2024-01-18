import { FC } from "react";
import styles from "./pageTabButton.module.scss";
import {
  LeaderBoardLeftTabIcon,
  LeaderBoardTabIcon,
} from "@/components/svgItems";

interface PageTabButtonProps {
  handleTabClick: (tabName: string) => void;
  tabName: string;
  tabText?: string;
  active?: boolean;
  leftDisableActiveState?: boolean;
  rightDisableActiveState?: boolean;
}

const PageTabButton: FC<PageTabButtonProps> = ({
  handleTabClick,
  tabName,
  tabText,
  active,
  leftDisableActiveState,
  rightDisableActiveState,
}) => {
  return (
    <div className={styles[`tab-content`]}>
      {tabName !== "clains" && (
        <LeaderBoardLeftTabIcon
          className={
            styles[
              `${
                active
                  ? "leftsvg-active"
                  : leftDisableActiveState
                  ? "leftsvg-disable-active"
                  : "leftsvg-disable"
              }`
            ]
          }
        />
      )}
      <p
        className={styles[`${active ? "tab-active" : "tab"}`]}
        onClick={() => handleTabClick(tabName)}
      >
        {tabText}
      </p>
      <LeaderBoardTabIcon
        className={
          styles[
            `${
              active
                ? "rightsvg-active"
                : rightDisableActiveState
                ? "rightsvg-disable-active"
                : "rightsvg-disable"
            }`
          ]
        }
      />
    </div>
  );
};

export default PageTabButton;
