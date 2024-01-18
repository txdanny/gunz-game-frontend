import { IndividualsPlayer, NavLink, Player, Streaming } from "@/utils/types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "";

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
      { title: "Clans", url: "/leaderboards?tabs=clans" },
      { title: "Individuals", url: "/leaderboards?tabs=individuals" },
      { title: "Ladder", url: "/leaderboards?tabs=ladder" },
      { title: "History", url: "/leaderboards?tabs=history" },
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

export const STREAMING_DATA: Streaming[] = [
  {
    channelID: "fps_shaka",
    brand: "/icons/streaming-1.svg",
  },
  {
    channelID: "esl_dota2",
    brand: "/icons/streaming-2.svg",
  },
  {
    channelID: "funnyskk",
    brand: "/icons/streaming-3.svg",
  },
  {
    channelID: "balcksasu",
    brand: "/icons/streaming-4.svg",
  },
];

export const SOCIALS = [
  {
    name: "discord",
    link: "#",
  },
  {
    name: "twitter",
    link: "#",
  },
  {
    name: "youtube",
    link: "#",
  },
  {
    name: "instagram",
    link: "#",
  },
  {
    name: "tiktok",
    link: "#",
  },
];

export const CLAINTABLETDS = [
  "Rank",
  "Clan",
  "Emblem",
  "Leader",
  "Wins / Losses",
  "Win Rate",
  "Points",
];

export const INDIVIDUALTABLETDS = [
  "Rank",
  "Character Name",
  "Level",
  "Experience",
  "Kills / Deaths",
  "K/D Ratio",
];

export const LADDERTABLETDS = [
  "Rank",
  "Character Name",
  "Wins / Losses",
  "Win Rate",
  "Points",
];

export const PLAYERS: Player[] = [
  {
    id: "",
    rank: 1,
    username: "Legend",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-1.png",
    role: "CLCESAR",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 1095,
  },
  {
    id: "",
    rank: 2,
    username: "Rakuzan",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-2.png",
    role: "dianabol",
    playCount: {
      win: 11,
      loss: 4,
      winRate: 85.54,
    },
    points: 1018,
  },
  {
    id: "",
    rank: 3,
    username: "Armaxr",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-3.png",
    role: "Leiker",
    playCount: {
      win: 10,
      loss: 8,
      winRate: 82.12,
    },
    points: 978,
  },
  {
    id: "",
    rank: 4,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },
  {
    id: "",
    rank: 5,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },
  {
    id: "",
    rank: 6,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },

  {
    id: "",
    rank: 7,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },
  {
    id: "",
    rank: 8,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },
  {
    id: "",
    rank: 9,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },
  {
    id: "",
    rank: 10,
    username: "Cyxonse",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    playCount: {
      win: 35,
      loss: 4,
      winRate: 89.74,
    },
    points: 962,
  },
];

export const INDIVIDUALPLAYERS: IndividualsPlayer[] = [
  {
    id: "",
    rank: 1,
    username: "CJCESAR",
    level: 99,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 2,
    username: "cazador007",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 3,
    username: "Armaxr",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 4,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 5,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 6,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },

  {
    id: "",
    rank: 7,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 8,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 9,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
  {
    id: "",
    rank: 10,
    username: "Cyxonse",
    level: 96,
    experience: 1617124551,
    playCount: {
      kills: 67500,
      deaths: 22019,
    },
    points: 3.06,
  },
];
