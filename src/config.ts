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

export const NAV_LINKS_MOBILE: NavLink[] = [
  {
    title: "Game Info",
    url: "#",
    submenu: [
      { title: "News & Articles", url: "/news" },
      { title: "Download", url: "/download" },
    ],
  },
  {
    title: "Guides",
    url: "#",
    submenu: [
      { title: "Default Controls", url: "#" },
      { title: "Recommended Controls", url: "#" },
      { title: "Play Style", url: "#" },
      { title: "Items: General Information", url: "#" },
      { title: "Items: Weapons", url: "#" },
      { title: "Items: Armor", url: "#" },
      { title: "Items: Miscellaneous", url: "#" },
      { title: "Clan/Friends Guide", url: "#" },
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
    title: "Boundty Shop",
    url: "#",
    submenu: [
      { title: "Event Items", url: "#" },
      { title: "Item Set", url: "#" },
      { title: "Armor", url: "#" },
      { title: "Melee Weapons", url: "#" },
      { title: "Ranged Wapons", url: "#" },
      { title: "Special Items", url: "#" },
    ],
  },
  {
    title: "Premium Shop",
    url: "#",
    submenu: [
      { title: "V.I.P Set", url: "#" },
      { title: "Melee Weapons", url: "#" },
      { title: "Ranged Weapons", url: "#" },
      { title: "Emotes", url: "#" },
    ],
  },
  {
    title: "Name Shop",
    url: "#",
    submenu: [
      { title: "Character Name Change", url: "#" },
      { title: "V.I.P Colored Name", url: "#" },
    ],
  },
  {
    title: "Z Coins & V.I.P Shop",
    url: "#",
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
