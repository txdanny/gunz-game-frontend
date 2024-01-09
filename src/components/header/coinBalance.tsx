import Image from "next/image";
import { FC } from "react";

const CoinBalance: FC = () => {
  return (
    <div className="flex items-center flex-col w-[58px] ml-10 mr-[22px]">
      <p className="font-tungsten text-primary-50 text-[16px] leading-5 tracking-[0.2px] font-semibold">
        Z Coins
      </p>
      <div className="flex items-center gap-1 text-white text-[16px] leading-5 tracking-[0.2px] font-tungsten font-medium">
        10,000
        <Image
          src="/images/guns-coin@sm.png"
          style={{
            filter: "drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.25))",
          }}
          width={16}
          height={16}
          alt=""
        />
      </div>
    </div>
  );
};

export default CoinBalance;
