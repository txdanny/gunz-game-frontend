import { NavLink, Player, Streaming, History, Competive } from "@/utils/types";

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
      { title: "Clans", url: "/leaderboards?tabs=clans" },
      { title: "Individuals", url: "/leaderboards?tabs=individuals" },
      { title: "Ladder", url: "/leaderboards?tabs=ladder" },
      { title: "History", url: "/leaderboards?tabs=history" },
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

export const CLANTABLETDS = [
  "Rank",
  "Clan Name",
  "Emblem",
  "Leader",
  "Wins / Losers",
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
  "Wins / Losees",
  "Win Rate",
  "Points",
];

export const HISTORYTABLETDS = [
  "Date",
  "Map",
  "Winners",
  "Points",
  "Losers",
  "Points",
];

export const COMPETIVETABLETDS = [
  { title: "Name", icon: "/icons/union.png" },
  { title: "Level", icon: "/icons/level.png" },
  { title: "Rank", icon: "/icons/chevron.png" },
  { title: "Points", icon: "/icons/star.png" },
  { title: "Join Date", icon: "/icons/calendar.png" },
];

export const PLAYERS: Player[] = [
  {
    id: "",
    rank: 1,
    clanName: "Legend",
    characterName: "CJCESAR",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-2.png",
    role: "Cyzone",
    level: 99,
    experience: 33417124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 2,
    clanName: "Rakuzan",
    characterName: "cazador007",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-1.png",
    role: "Cyzone",
    level: 98,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 3,
    clanName: "Armaxr",
    characterName: "AnGeLeSxD",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-3.png",
    role: "Cyzone",
    level: 99,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 4,
    clanName: "Cyxonse",
    characterName: "Quest4ever",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 97,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 5,
    clanName: "UltdNation",
    characterName: "NinjaPao",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 95,
    experience: 16171345551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 6,
    clanName: "Legion",
    characterName: "_Master___",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 99,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },

  {
    id: "",
    rank: 7,
    clanName: "DBZS",
    characterName: "BongFire",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 56,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 8,
    clanName: "Crusaders",
    characterName: "BongFire",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 97,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 9,
    clanName: "Goojofoq",
    characterName: "XSfeew",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 67,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 10,
    clanName: "Capable",
    characterName: "GDwer",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 87,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
];

export const HISTORYS: History[] = [
  {
    id: "",
    date: "2023-08-12 (4:30 PM EST)",
    map: "Factory",
    winners: ["fright"],
    firstPoints: 6,
    losers: ["King_WarZ"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["snuwfersucks"],
    firstPoints: 6,
    losers: ["Mishandelaar"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["ApMagic", "wodalG", "bonedamage"],
    firstPoints: 6,
    losers: ["Mishandelaar", "MONEYCHAINZ", "Rabid"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2022-08-12 (5:02 PM EST)",
    map: "Prison II",
    winners: ["ApMagic", "wodalG", "bonedamage"],
    firstPoints: 6,
    losers: ["Mishandelaar", "MONEYCHAINZ", "Rabid"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["ApMagic", "wodalG"],
    firstPoints: 3,
    losers: ["Mishandelaar", "MONEYCHAINZ"],
    secondPoints: 6,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["wodalG"],
    firstPoints: 3,
    losers: ["MONEYCHAINZ"],
    secondPoints: 6,
  },
];

export const COMPETIVES: Competive[] = [
  {
    id: "",
    name: "Strike",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Cessation",
    level: 71,
    rank: "Admin",
    points: 1590,
    joinDate: "02/08/2020",
  },
  {
    id: "",
    name: "Command",
    level: 65,
    rank: "Member",
    points: 606,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Ask420",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Korra",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Simp",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Derange",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "LexTalionis",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
];
