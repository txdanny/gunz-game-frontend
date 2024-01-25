export type SubMenu = {
  title: string;
  url: string;
};

export type NavLink = {
  title: string;
  url: string;
  submenu?: SubMenu[];
};

export type Rank = {
  1: string;
  2: string;
  3: string;
  [key: number]: string; // Add this line
};

export type Streaming = {
  channelID: string;
  brand: string;
};

export type RankingTabs = "clans" | "individuals" | "ladder" | "history";

export type Winner = {
  clanName: string;
  pfp: string;
  pts: number;
  rank: {
    type: string;
    rank: 1 | 2 | 3;
  };
};

export type Player = {
  id: string;
  rank: number;
  clanName: string;
  characterName: string;
  type: {
    name: string;
    rank?: number;
  };
  emblem: string | undefined | null; //pfp image
  role: string;
  playCount: {
    win: number;
    lose: number;
    winRate: number;
    kills: number;
    deaths: number;
  };
  level: number;
  points: number;
  experience: number;
};

export type History = {
  id: string;
  date: string;
  map: string;
  winners: string[];
  firstPoints: number;
  losers: string[];
  secondPoints: number;
};

export type Competive = {
  id: string;
  name: string;
  level: number;
  rank: string;
  points: number;
  joinDate: string;
};

export type News = {
  id: number;
  imgUrl: string;
  date: string;
  dataType: string;
  title: string;
  content: string[];
};

export type Install = {
  tool: string;
  firstOption: string;
  secondOption: string;
};

export type Faq = {
  question: string;
  answer: string[];
};
