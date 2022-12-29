import * as React from 'react';
import { Button } from 'react-bootstrap';
import { usePostOrderMutation } from '../../store/goodsApi';
import { goodType } from '../../types/goods.type';
import { orderType } from '../../types/order.type';

export interface IAppProps {}

export default function Home(props: IAppProps) {
  const good1: goodType = {
    id: 'УТ-00000873',
    title: 'Чипсы куриные в кунжуте с чесноком ТМ BELOSVET',
    group: { id: '1', title: '2' },
  };
  const good2: goodType = {
    id: 'УТ-00007151',
    title: 'Утка по-пекински',
    group: { id: '10', title: '20' },
  };

  let order: orderType = {
    customer_phone: '+380509716064',
    customer_firstName: 'Alex',
    goods: [
      { count: 7, good: good1 },
      { count: 22, good: good2 },
    ],
  };
  const [postOrder, { isError, isLoading }] = usePostOrderMutation();
  const handleOnClick = async (order: orderType) => {
    console.log(order);

    await postOrder(order);
    // console.log(isError);
  };
  return (
    <div>
      <Button onClick={() => handleOnClick(order)}>
        Відправити тестове замовлення
      </Button>
    </div>
  );
}
