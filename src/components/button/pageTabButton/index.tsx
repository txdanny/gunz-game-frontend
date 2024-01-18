import { FC } from "react";
import styles from "./pageTabButton.module.scss";
import { TabEdgeIcon, TabEdgeLeftIcon } from "@/components/svgItems";

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
  const getIconClassName = (
    active?: boolean,
    disableActiveState?: boolean,
    iconType?: "left" | "right"
  ) => {
    if (iconType === "left") {
      if (active) {
        return "leftsvg-active";
      } else if (disableActiveState) {
        return "leftsvg-disable-active";
      } else {
        return "leftsvg-disable";
      }
    } else if (iconType === "right") {
      if (active) {
        return "rightsvg-active";
      } else if (disableActiveState) {
        return "rightsvg-disable-active";
      } else {
        return "rightsvg-disable";
      }
    }
  };

  return (
    <div className={styles["tab-content"]}>
      {tabName !== "clans" && (
        <TabEdgeLeftIcon
          className={
            styles[
              getIconClassName(active, leftDisableActiveState, "left") as string
            ]
          }
        />
      )}
      <p
        className={styles[active ? "tab-active" : "tab"]}
        onClick={() => handleTabClick(tabName)}
      >
        {tabText}
      </p>
      <TabEdgeIcon
        className={
          styles[
            getIconClassName(active, rightDisableActiveState, "right") as string
          ]
        }
      />
    </div>
  );
};

export default PageTabButton;
