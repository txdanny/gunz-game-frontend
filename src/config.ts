import { NavLink } from "@/utils/types";

export const NAV_LINKS: NavLink[] = [
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
