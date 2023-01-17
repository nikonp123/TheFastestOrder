import * as React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import FormControlCount from './FormControlCount';
import { IGoodItemComponentProps } from '.';
import { ECardVariants } from '../../types/settings.type';

export default function CardInputGroup({
  dataGood,
  count,
  cardVariant,
  changeCount,
  changeInputHandler,
  orderHandler,
}: IGoodItemComponentProps) {
  const cardComponentsMapping = {
    [ECardVariants.cards]: 'onCenterw100',
    [ECardVariants.table]: '',
  };

  const btnForOrder = cardComponentsMapping[cardVariant as ECardVariants];

  return (
    <InputGroup size="sm" className="mb-3">
      {/* <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text> */}
      <FormControlCount count={count} changeInputHandler={changeInputHandler} />
      <Button
        className="ms-1 d-block w-25"
        variant="outline-secondary"
        onClick={() => changeCount(1)}
        // id="button-addon2"
      >
        +
      </Button>
      <Button
        className="ms-1 d-block w-25"
        variant="outline-secondary"
        onClick={() => changeCount(-1)}
        // id="button-addon2"
      >
        -
      </Button>
      <Button className={btnForOrder} variant="primary" onClick={orderHandler}>
        Замовити
      </Button>
      {/* <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>{' '} */}
    </InputGroup>
  );
}
