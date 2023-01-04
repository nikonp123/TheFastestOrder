import { IGoodsType } from '../types/goods.type';

export const getTempGoods = (): IGoodsType[] => {
  //test start
  const goods: IGoodsType[] | undefined = [];
  if (goods !== undefined) {
    goods.push({
      good: {
        id: '99',
        title:
          'Гренки "Днепровские" ЛОСОСЬ вес. (Фас. 500 гр / ящ. 6 кг) и вообще содержит самое большое название которое только можно придумать',
        group: { id: '22', title: 'Сухарики' },
      },
      balance: 3,
    });
    goods.push({
      good: {
        id: '1',
        title: 'Корюшка Lorem',
        group: { id: '11', title: 'Рыба' },
      },
      balance: 11,
    });
    goods.push({
      good: {
        id: '2',
        title: 'Рыбные чипсы',
        group: { id: '12', title: 'Снеки' },
      },
      balance: 5,
    });
    goods.push({
      good: {
        id: '3',
        title: 'Куриные чипсы',
        group: { id: '12', title: 'Снеки' },
      },
      balance: 4,
    });
    goods.push({
      good: {
        id: '4',
        title: 'Плотва',
        group: { id: '11', title: 'Рыба' },
      },
      balance: 24,
    });
    goods.push({
      good: {
        id: '5',
        title: 'Скумбрия',
        group: { id: '11', title: 'Рыба' },
      },
      balance: 6,
    });
    goods.push({
      good: {
        id: '6',
        title:
          'Гренки "Днепровские" САЛО С ГОРЧИЦЕЙ вес. (Фас. 500 гр / ящ. 6 кг)',
        group: { id: '22', title: 'Сухарики' },
      },
      balance: 2,
    });
  }
  //test finish
  return goods;
};
