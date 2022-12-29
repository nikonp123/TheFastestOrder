import { goodsGroupType, goodsType } from '../types/goods.type';

export function getGoodsCategory(goods: goodsType[]): goodsGroupType[] {
  // const goodsCategoryAll: string[] | undefined = [];
  // goods?.forEach((el) => {
  //   goodsCategoryAll.push(el.group.title);
  // });
  // const goodsCategory: string[] = Array.from(new Set(goodsCategoryAll));

  const goodsCategory: goodsGroupType[] = [];
  goods.forEach((el) => {
    if (!goodsCategory.find((elG) => elG.id === el.group.id)) {
      goodsCategory.push({ id: el.group.id, title: el.group.title });
    }
  });
  goodsCategory.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  //   console.log(goodsCategory.length);
  return goodsCategory;
}
