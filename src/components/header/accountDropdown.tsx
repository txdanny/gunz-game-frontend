"use client";

import { useSession } from "next-auth/react";
import { FC } from "react";
import { ArrowDown, UserIcon } from "../svgItems";

const AccountDropdown: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="relative flex items-center cursor-pointer pl-1.5 pr-[14px]">
      <div className="p-2.5">
        <UserIcon />
      </div>
      <div className="text-white font-din text-[20px] leading-[1]">Account</div>
      <div className="ml-1 w-3 h-3 grid place-content-center">
        <ArrowDown />
      </div>
    </div>
  );
};

export default AccountDropdown;
