import Image from "next/image";
import { CSSProperties, FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const ImageButtonSm: FC<ButtonProps> = ({
  children,
  className,
  style,
  onClick,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`relative ${className} w-[140px] h-9 group`}
    >
      <div className="w-[120px] h-[30px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-play-hover duration-300 group-hover:opacity-100" />
      <div className="w-[144px] h-[35px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={"/images/button/play@line.svg"}
          className="play-shadow group-hover:drop-shadow-none"
          fill
          alt=""
        />
      </div>
      <div className="w-[139px] h-[34px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={"/images/button/play@up.svg"}
          className="play-shadow group-hover:drop-shadow-none"
          fill
          alt=""
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-tungsten font-bold text-primary-200 uppercase text-[20px]">
        {children}
      </div>
    </button>
  );
};

export default ImageButtonSm;
