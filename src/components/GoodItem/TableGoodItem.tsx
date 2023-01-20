import * as React from 'react';
import { IGoodItemComponentProps } from '.';
import { Button, Form, InputGroup } from 'react-bootstrap';
import FormControlCount from './FormControlCount';
import CardInputGroup from './CardInputGroup';
import './style.scss';

export default function TableGoodItem({
  dataGood,
  count,
  cardVariant,
  error,
  changeCount,
  changeInputHandler,
  orderHandler,
}: IGoodItemComponentProps) {
  const cardProps = {
    dataGood,
    count,
    cardVariant,
    error,
    orderHandler,
    changeCount,
    changeInputHandler,
  };

  const classCart = error ? ' errorCart ' : count !== 0 ? ' validCart ' : '';

  return (
    <React.Fragment>
      <tr key={dataGood.id} className={classCart}>
        <td>{dataGood.id}</td>
        <td>{dataGood.title}</td>
        <td>{dataGood.price}</td>
        <td>{dataGood.balance}</td>
        <td>
          <CardInputGroup {...cardProps} />
        </td>
      </tr>
    </React.Fragment>
  );
}
