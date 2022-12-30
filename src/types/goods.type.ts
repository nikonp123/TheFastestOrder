export interface IGoodsGroupType {
  id: string;
  title: string;
}

export interface IGoodType {
  id: string;
  title: string;
  group: IGoodsGroupType;
}
export interface IGoodsType {
  good: IGoodType;
  balance?: number;
}
