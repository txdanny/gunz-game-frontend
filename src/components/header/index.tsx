import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "../svgItems";
import CoinBalance from "./coinBalance";
import ServerStatus from "./serverStatus";
import AccountDropdown from "./accountDropdown";
import ImageButtonSm from "../button/imageButtonSm";

interface SubMenu {
  title: string;
  url: string;
}

interface NavLink {
  title: string;
  url: string;
  submenu?: SubMenu[];
}

const LINKS: NavLink[] = [
  {
    title: "Game Info",
    url: "#",
    submenu: [
      { title: "Guide", url: "/guide" },
      { title: "News & Articles", url: "/news" },
      { title: "Download", url: "/download" },
    ],
  },
  {
    title: "Leaderboards",
    url: "#",
    submenu: [
      { title: "Clans", url: "/leaderboard/clans" },
      { title: "Individuals", url: "/leaderboard/individuals" },
      { title: "Ladder", url: "/leaderboard/ladder" },
      { title: "History", url: "/leaderboard/history" },
    ],
  },
  {
    title: "Shop",
    url: "#",
    submenu: [
      { title: "Premium Shop", url: "/shop/premium" },
      { title: "V.I.P Shop", url: "/shop/vip" },
      { title: "Name Shop", url: "/shop/name" },
      { title: "Buy V.I.P", url: "/shop/buy-vip" },
      { title: "Buy Z Coins", url: "/shop/buy-z-coins" },
    ],
  },
  {
    title: "Community",
    url: "#",
    submenu: [
      { title: "Discord", url: "#" },
      { title: "YouTube", url: "#" },
      { title: "X (Twitter)", url: "#" },
      { title: "Instagram", url: "#" },
      { title: "Tiktok", url: "#" },
      { title: "Twitch", url: "#" },
    ],
  },
];

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="mx-4 mt-4 rounded-lg bg-opacity-75 bg-black overflow-hidden pr-2">
        <div className="flex items-center justify-between">
          <div className="bg-primary-100 px-5 py-2 rounded-l-lg">
            <Link href="/" className="w-20 h-[56px] relative">
              <div className="w-20 h-[56px] relative">
                <Image
                  src={"/images/logo@sm.svg"}
                  fill
                  className="object-fill"
                  alt="Logo"
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <nav className="text-white">
              <ul className="flex items-center gap-4">
                {LINKS.map((menu, index) => (
                  <li key={`${index}-${menu.title}`}>
                    <div className="">
                      <div className="flex items-center gap-3 py-1 px-4">
                        <Link href={menu.url} className="font-din text-[20px]">
                          {menu.title}
                        </Link>
                        <ArrowDown />
                      </div>
                      {menu.submenu && (
                        <ul className="hidden">
                          {menu.submenu.map((subMenuItem, subIndex) => (
                            <li
                              key={`${index}-${subIndex}-${subMenuItem.title}`}
                            >
                              <Link href={subMenuItem.url} className="font-din">
                                {subMenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <CoinBalance />
            <ServerStatus />
            <AccountDropdown />
            <ImageButtonSm className="ml-7 mr-4">play now</ImageButtonSm>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
