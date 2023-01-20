import {
  ENamesGoodsFilters,
  ICartType,
  IGoodsCategoryType,
  IGoodsFilters,
  IGoodType,
} from '../types/goods.type';

export function getGoodsCategory(
  goods: IGoodType[],
  currentFilters: IGoodsFilters[]
): IGoodsCategoryType[] {
  const goodsCategory: IGoodsCategoryType[] = [];
  goods.forEach((el) => {
    if (!goodsCategory.find((elG) => elG.id === el.group.id)) {
      goodsCategory.push({
        id: el.group.id,
        title: el.group.title,
        apply: false,
      });
    }
  });
  if (currentFilters) {
    const filtersCategory = currentFilters.find(
      (e) => e.name === ENamesGoodsFilters.category
    );
    if (filtersCategory) {
      goodsCategory.forEach((e) => {
        e.apply = filtersCategory.filters?.find(
          (eFilter) => eFilter.value === e.id
        )
          ? true
          : false;
      });
    }
  }
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

export function getStringFromArrayGoodsFiltersByName(
  name: ENamesGoodsFilters,
  currentFilters: IGoodsFilters[]
): string {
  let goodsCategoryStr = '';
  const currentArray = currentFilters.find((e) => e.name === name);
  if (currentArray) {
    if (currentArray.filters) {
      goodsCategoryStr = currentArray.filters.map((e) => e['value']).toString();
    }
  }
  return goodsCategoryStr;
}
