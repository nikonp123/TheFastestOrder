import './style.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ICartType, IGoodsType } from '../../types/goods.type';
import imgTest from '../../grenka.png';
import { Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeItemCart } from '../../store/cartSlice';
// import { getDataCart } from '../../utilites/handlingCart';
import { useState } from 'react';

interface ICardOfGoodsProps {
  dataGood: IGoodsType;
}

function CardOfGoods({ dataGood }: ICardOfGoodsProps) {
  const dispatch = useAppDispatch();
  const currentCountV =
    useAppSelector((state) => state.cart).find(
      (e) => e.good.id === dataGood.good.id
    )?.count ?? 0;
  const [count, setCount] = useState(currentCountV);
  console.log(`render: ${dataGood.good.title} `);

  const changeCount = (c: number): void => {
    setCount((prev) => (prev + c < 0 ? 0 : prev + c));
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCount(+e.target.value);
  };

  const orderHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const currentItem: ICartType = {
      good: dataGood.good,
      balance: dataGood.balance ? dataGood.balance : 0,
      count: count,
    };
    dispatch(changeItemCart(currentItem));
  };

  return (
    <>
      <Card border="primary" className="me-1 mt-1 " style={{ width: '15rem' }}>
        <Card.Img
          variant="top"
          src={imgTest}
          alt={dataGood.good.title}
          // className="img-fluid"
          // style={{ height: '8rem' }}
        />
        <Card.Body className="p-0">
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
          <Card.Footer>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="number"
                placeholder="Count goods"
                min={0}
                step={0.1}
                // defaultValue="0"
                className="small-number-input-without-arrows text-center"
                value={count}
                onChange={changeInputHandler}
              />
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
              <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>{' '}
            </InputGroup>
            <Button variant="primary" onClick={orderHandler}>
              Замовити
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardOfGoods;
