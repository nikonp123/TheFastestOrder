import * as React from 'react';
import { Card } from 'react-bootstrap';
import imgTest from '../../grenka.png';
import { IGoodsType } from '../../types/goods.type';

interface ICardAttributeProps {
  dataGood: IGoodsType;
}

export default function CardAttribute({ dataGood }: ICardAttributeProps) {
  return (
    <Card.Body className="p-0">
      <Card.Img
        variant="top"
        src={imgTest}
        alt={dataGood.good.title}
        // className="img-fluid"
        // style={{ height: '8rem' }}
      />
      <Card.Title
        className="ms-0"
        data-title={dataGood.good.id}
        data-title2="Test for :hover in style.scss"
        title={dataGood.good.title}
        // className="text-nowrap"
        // style={{ height: '5rem' }}
      >
        {dataGood.good.title}
      </Card.Title>
      <Card.Text>
        Залишок: {dataGood.balance} ціна: {dataGood.price?.toFixed(2)}{' '}
      </Card.Text>
    </Card.Body>
  );
}
