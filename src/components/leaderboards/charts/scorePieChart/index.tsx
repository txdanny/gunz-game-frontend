import { FC } from "react";
import styles from "../charts.module.scss";
import Piece from "./piece";

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

        <div className={styles["circle"]}>
          {Array.from({ length: 10 }).map((_, key) => (
            <Piece index={key} key={key} percent={0.75} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScorePieChart;
