// import './style.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IGoodsType } from '../../types/goods.type';
import imgTest from '../../grenka.png';

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
            <Button variant="primary">Заказати</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardOfGoods;
