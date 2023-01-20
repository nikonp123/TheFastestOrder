import * as React from 'react';
import { Card } from 'react-bootstrap';
import imgTest from '../../grenka.png';
import { IGoodType } from '../../types/goods.type';
import './style.scss';
interface ICardAttributeProps {
  dataGood: IGoodType;
  error: string;
  count: number;
}

export default function CardAttribute({
  dataGood,
  error,
  count,
}: ICardAttributeProps) {
  const classCart = error ? ' errorCart ' : count !== 0 ? ' validCart ' : '';
  // console.log(error);
  return (
    <Card.Body className="p-0">
      <Card.Img
        variant="top"
        src={imgTest}
        alt={dataGood.title}
        // className="img-fluid"
        // style={{ height: '8rem' }}
      />
      <Card.Title
        className={'ms-0' + classCart}
        data-title={dataGood.id}
        data-title2="Test for :hover in style.scss"
        title={dataGood.title}
        // className="text-nowrap"
        // style={{ height: '5rem' }}
      >
        {dataGood.title}
      </Card.Title>
      <Card.Text>
        Залишок: {dataGood.balance} ціна: {dataGood.price?.toFixed(2)}{' '}
      </Card.Text>
    </Card.Body>
  );
}
