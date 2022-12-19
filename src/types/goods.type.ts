export interface goodsGroupType {
  id: string;
  title: string;
}

export interface goodsType {
  id: string;
  title: string;
  group: goodsGroupType;
  balance: number;
}
