import * as React from 'react';
import { Button, Card, CardGroup, Form, InputGroup } from 'react-bootstrap';
import { IGoodItemComponentProps } from '.';
import FormControlCount from './FormControlCount';
import CardAttribute from './CardAttribute';
import CardInputGroup from './CardInputGroup';

export default function CardGoodItem({
  dataGood,
  count,
  cardVariant,
  changeCount,
  changeInputHandler,
  orderHandler,
}: IGoodItemComponentProps) {
  const cardProps = {
    dataGood,
    count,
    cardVariant,
    orderHandler,
    changeCount,
    changeInputHandler,
  };

  return (
    <Card border="primary" className="me-1 mt-1 " style={{ width: '15rem' }}>
      <CardAttribute dataGood={dataGood} />
      <Card.Footer>
        <CardInputGroup {...cardProps} />
      </Card.Footer>
    </Card>
  );
}
