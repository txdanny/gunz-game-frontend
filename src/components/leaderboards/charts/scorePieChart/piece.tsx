import { FC } from "react";
import styles from "../charts.module.scss";
import Image from "next/image";

interface Props {
  index: number;
  percent: number;
}

const Piece: FC<Props> = ({ index, percent }) => {
  return (
    <div
      className={styles["piece"]}
      style={{
        transform: `translateY(-50%) rotate(${index * 36}deg)`,
      }}
    >
      <Image src="/images/chart/piece.svg" fill alt="" />
    </div>
  );
};

export default Piece;
