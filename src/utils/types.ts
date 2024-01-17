export interface SubMenu {
  title: string;
  url: string;
}

export interface NavLink {
  title: string;
  url: string;
  submenu?: SubMenu[];
}

export interface Streaming {
  channelID: string;
  brand: string;
}

export type RankingTabs = "clans" | "individuals" | "ladder" | "history";

export interface Winner {
  username: string;
  pfp: string;
  pts: number;
  rank: {
    type: string;
    rank: 1 | 2 | 3;
  };
}

export interface Player {
  id: string;
  rank: number;
  type: {
    name: string;
    rank?: number;
  };
  emblem: string; //pfp image
  role: string;
  playCount: {
    win: number;
    loss: number;
    winRate: number;
  };
  points: number;
}
