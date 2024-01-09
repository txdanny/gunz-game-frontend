import { FC } from "react";

const ServerStatus: FC = () => {
  return (
    <div className="ml-10 mr-[22px] font-bold text-[12px] font-inter px-7 text-center">
      <p className="text-white">Server Status</p>
      <div className="text-success">
        Online
      </div>
    </div>
  );
};

export default ServerStatus;
