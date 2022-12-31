import './style.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IGoodsType } from '../../types/goods.type';
import imgTest from '../../grenka.png';
import { Form, InputGroup } from 'react-bootstrap';

interface ICardOfGoodsProps {
  dataCart: IGoodsType;
}

function CardOfGoods({ dataCart }: ICardOfGoodsProps) {
  return (
    <>
      <Card border="primary" className="me-1 mt-1 " style={{ width: '15rem' }}>
        <Card.Img
          variant="top"
          src={imgTest}
          alt={dataCart.good.title}
          // className="img-fluid"
          // style={{ height: '8rem' }}
        />
        <Card.Body className="p-0">
          <Card.Title
            className="ms-0"
            data-title={dataCart.good.id}
            data-title2="Test for :hover in style.scss"
            title={dataCart.good.title}
            // className="text-nowrap"
            // style={{ height: '5rem' }}
          >
            {dataCart.good.title}
          </Card.Title>
          <Card.Text>Залишок: {dataCart.balance}</Card.Text>
          <Card.Footer>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="number"
                placeholder="Count goods"
                min="1"
                // step={0.1}
                // defaultValue="0"
                className="small-number-input-without-arrows text-center"
              />
              <Button
                className="ms-1 d-block w-25"
                variant="outline-secondary"
                // id="button-addon2"
              >
                +
              </Button>
              <Button
                className="ms-1 d-block w-25"
                variant="outline-secondary"
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
