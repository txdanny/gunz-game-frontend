import { FC } from "react";
import styles from "./charts.module.scss";

interface ChartProps {
  title: string;
  percent: number;
  description: React.ReactNode;
}

const ScorePieChart: FC<ChartProps> = ({ title, percent, description }) => {
  return (
    <div className={styles["pie-chart"]}>
      <p className={styles["title"]}>{title}</p>
      <div className={styles["pie"]}>
        <div className={styles["percent"]}>{`${Math.floor(
          percent * 100
        )}%`}</div>
        {description}
      </div>
    </div>
  );
};

export default ScorePieChart;
