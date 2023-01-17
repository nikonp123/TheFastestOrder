import * as React from 'react';
import { Form } from 'react-bootstrap';

export interface IFormControlProps {
  count: number;
  changeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormControlCount({
  count,
  changeInputHandler,
}: IFormControlProps) {
  return (
    <Form.Control
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      type="number"
      placeholder="Count goods"
      min={0}
      step={0.1}
      className="small-number-input-without-arrows text-center"
      value={count}
      onChange={changeInputHandler}
    />
  );
}
