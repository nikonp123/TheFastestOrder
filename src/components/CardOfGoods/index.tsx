import './style.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ICartType, IGoodsType } from '../../types/goods.type';
import imgTest from '../../grenka.png';
import { Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeItemCart } from '../../store/cartSlice';
import { getDataCart } from '../../utilites/handlingGoods';

interface ICardOfGoodsProps {
  dataGood: IGoodsType;
}

function CardOfGoods({ dataGood }: ICardOfGoodsProps) {
  const dispatch = useAppDispatch();
  const changeCart = (count: number): void => {
    const currentItem: ICartType = {
      good: dataGood.good,
      count: count,
    };
    dispatch(changeItemCart(currentItem));
  };

  const changeInputHandler = () => {
    // changeCart(currentCount);
  };

  const dataCart = useAppSelector((state) => state.cart);
  const currentCount = getDataCart(dataCart, dataGood.good.id);
  // console.log(dataCart);

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
          <Card.Text>Залишок: {dataGood.balance}</Card.Text>
          <Card.Footer>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="number"
                placeholder="Count goods"
                min={1}
                // step={0.1}
                // defaultValue="0"
                className="small-number-input-without-arrows text-center"
                value={currentCount}
                onChange={changeInputHandler}
              />
              <Button
                className="ms-1 d-block w-25"
                variant="outline-secondary"
                onClick={() => changeCart(1)}
                // id="button-addon2"
              >
                +
              </Button>
              <Button
                className="ms-1 d-block w-25"
                variant="outline-secondary"
                onClick={() => changeCart(-1)}
                // id="button-addon2"
              >
                -
              </Button>
              <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>{' '}
            </InputGroup>
            <Button variant="primary">Заказати</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardOfGoods;
