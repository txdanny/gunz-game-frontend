import React, { FC } from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
}

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
      <div className="mx-4 mt-4 rounded-lg bg-opacity-75 bg-black">
        <div className="flex items-center justify-between p-4">
          <div className="text-white">Logo</div>
          <nav className="text-white">
            <ul className="flex items-center gap-4">
              {LINKS.map((menu, index) => (
                <li key={`${index}-${menu.title}`}>
                  <Link href={menu.url}>{menu.title}</Link>
                  {menu.submenu && (
                    <ul className="hidden">
                      {menu.submenu.map((subMenuItem, subIndex) => (
                        <li key={`${index}-${subIndex}-${subMenuItem.title}`} className="font-din">
                          <a href={subMenuItem.url}>{subMenuItem.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
