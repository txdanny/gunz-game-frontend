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

export interface Winner {
  username: string;
  pfp: string;
  pts: number;
  rank: {
    type: string;
    rank: 1 | 2 | 3;
  };
}
