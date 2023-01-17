import './style.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ICartType, IGoodsType } from '../../types/goods.type';
import { Form, InputGroup, Table } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeItemCart } from '../../store/cartSlice';
// import { getDataCart } from '../../utilites/handlingCart';
import { MouseEvent, useState } from 'react';
import CardGoodItem from './CardGoodItem';
import { ECardVariants, SettingsValueType } from '../../types/settings.type';
import TableGoodItem from './TableGoodItem';

interface IGoodItemProps {
  dataGood: IGoodsType;
  cardVariant: SettingsValueType;
}

export interface IGoodItemComponentProps {
  dataGood: IGoodsType;
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
    useAppSelector((state) => state.cart).find(
      (e) => e.good.id === dataGood.good.id
    )?.count ?? 0;
  const error =
    useAppSelector((state) => state.cart).find(
      (e) => e.good.id === dataGood.good.id
    )?.error ?? '';
  const [count, setCount] = useState(currentCountV);
  // console.log(`render: ${dataGood.good.title} `);

  const changeCount = (c: number): void => {
    setCount((prev) => (prev + c < 0 ? 0 : prev + c));
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(+e.target.value);
  };

  const orderHandler = (e: MouseEvent): void => {
    e.preventDefault();
    const currentItem: ICartType = {
      good: dataGood.good,
      balance: dataGood.balance ? dataGood.balance : 0,
      count: count,
      price: dataGood.price,
    };
    dispatch(changeItemCart(currentItem));
  };

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
