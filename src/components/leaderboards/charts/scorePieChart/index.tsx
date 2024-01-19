import { FC } from "react";
import styles from "../charts.module.scss";
import { PieChart } from "@mui/x-charts/PieChart";
import { PieArc } from "@/components/svgItems";

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

        <PieArc />
        <div className={styles["circle-bg"]}>
          <PieChart
            width={300}
            height={300}
            series={[
              {
                data: [{ id: "s", value: 1 }],
                innerRadius: 104,
                outerRadius: 160,
                paddingAngle: 1,
                cornerRadius: 0,
                startAngle: 0,
                endAngle: 360 * percent,
                cx: 145,
                cy: 145,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ScorePieChart;
