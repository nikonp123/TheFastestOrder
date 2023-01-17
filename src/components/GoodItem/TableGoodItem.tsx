import * as React from 'react';
import { IGoodItemComponentProps } from '.';
import { Button, Form, InputGroup } from 'react-bootstrap';
import FormControlCount from './FormControlCount';
import CardInputGroup from './CardInputGroup';

export default function TableGoodItem({
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
    <React.Fragment>
      <tr key={dataGood.good.id}>
        <td>{dataGood.good.id}</td>
        <td>{dataGood.good.title}</td>
        <td>{dataGood.price}</td>
        <td>{dataGood.balance}</td>
        <td>
          <CardInputGroup {...cardProps} />
        </td>
      </tr>
    </React.Fragment>
  );
}
