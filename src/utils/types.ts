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
