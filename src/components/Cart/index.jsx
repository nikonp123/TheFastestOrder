import Table from 'react-bootstrap/Table';
import { useAppSelector } from '../../hooks';
import RowCart from './RowCart';
import { Button, Container } from 'react-bootstrap';
interface ICartProps {
}

export default function Cart(props: ICartProps) {
  const cart = useAppSelector(state=>state.cart);
  let countAll = 0;
  cart.forEach(e=>{
    // e.summa=(e.price*e.count).toFixed(2);
    countAll=countAll+e.count;
  })

  return (
    <Container>
      <h1 className='mt-5'>Замовлення</h1>
      <Table striped bordered hover responsive="sm" className='mt-1'>
          <thead className='mt-5'> 
            <tr>
              {/* <th className="col-1">#</th> */}
              <th className='col-7'>Товар</th>
              <th className='col-1'>Кількість</th>
              <th className='col-1'>Ціна</th>
              <th className='col-2'>Сума</th>
              <th className='col-1'>Залишок</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((eCart,index)=><RowCart key={eCart.good.id} eCart={eCart} index={index+1}/>)}
          </tbody>
          <tfoot align="center" bgcolor='grey' className='fs-4'>
            <tr>
              <td>Итог</td>
              <td>{countAll}</td>
              <td></td>
              <td>{}</td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
        <Button>Відправити</Button>
      </Container>
  );
}
