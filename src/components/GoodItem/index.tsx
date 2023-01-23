import './style.scss';
import { ICartType, IGoodType } from '../../types/goods.type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cartActions } from '../../store/cartSlice';
// import { getDataCart } from '../../utilites/handlingCart';
import { MouseEvent, useCallback, useState } from 'react';
import CardGoodItem from './CardGoodItem';
import { ECardVariants, SettingsValueType } from '../../types/settings.type';
import TableGoodItem from './TableGoodItem';

interface IGoodItemProps {
  dataGood: IGoodType;
  cardVariant: SettingsValueType;
}

export interface IGoodItemComponentProps {
  dataGood: IGoodType;
  count: number;
  cardVariant: SettingsValueType;
  error: string;
  changeCount: (c: number) => void;
  changeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  orderHandler: (e: MouseEvent) => void;
}

function GoodItem({ dataGood, cardVariant }: IGoodItemProps) {
  const dispatch = useAppDispatch();
  const currentCountV =
    useAppSelector((state) => state.cart).find((e) => e.good.id === dataGood.id)
      ?.count ?? 0;
  const error =
    useAppSelector((state) => state.cart).find((e) => e.good.id === dataGood.id)
      ?.error ?? '';
  const [count, setCount] = useState(currentCountV);
  // console.log(`render: ${dataGood.good.title} `);

  const changeCount = useCallback((c: number): void => {
    setCount((prev) => (prev + c < 0 ? 0 : prev + c));
  }, []);

  const changeInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setCount(+e.target.value);
    },
    []
  );

  const orderHandler = useCallback(
    (e: MouseEvent): void => {
      e.preventDefault();
      const currentItem: ICartType = {
        good: dataGood,
        count: count,
      };
      dispatch(cartActions.changeItemCart(currentItem));
    },
    [dispatch, dataGood, count]
  );

  const cardComponentsMapping = {
    [ECardVariants.cards]: CardGoodItem,
    [ECardVariants.table]: TableGoodItem,
  };

  const cardProps = {
    dataGood,
    count,
    cardVariant,
    error,
    orderHandler,
    changeCount,
    changeInputHandler,
  };

  const Component = cardComponentsMapping[cardVariant as ECardVariants];
  return <Component {...cardProps} />;

  // const Component = cardVariant === ECardVariants.cards ? CardGoodItem : TableGoodItem
  // return <Component {...cardProps}/>

  // return cardVariant === ECardVariants.cards ? (
  //   <CardGoodItem {...cardProps} />
  // ) : (
  //   <TableGoodItem {...cardProps} />
  // );
}

export default GoodItem;
