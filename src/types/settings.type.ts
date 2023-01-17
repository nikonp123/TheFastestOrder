export enum ECardVariants {
  table = 'table',
  cards = 'cards',
}

export enum EOrderGoodsVariants {
  byName = 'За найменуванням',
  increasePrice = 'Спочатку дешеві',
  decreasePrice = 'Спочатку дорогі',
}
export const radiosCardVariants = [
  { name: 'таблиця', value: ECardVariants.table },
  { name: 'картки', value: ECardVariants.cards },
];

export type SettingsValueType = string | number | boolean | undefined;
