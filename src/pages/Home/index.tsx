import * as React from 'react';
import { Button } from 'react-bootstrap';
import { usePostOrderMutation } from '../../store/goodsApi';
import { IGoodType } from '../../types/goods.type';
import { IOrderType } from '../../types/order.type';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const good1: IGoodType = {
    id: 'УТ-00000873',
    title: 'Чипсы куриные в кунжуте с чесноком ТМ BELOSVET',
    group: { id: '1', title: '2' },
  };
  const good2: IGoodType = {
    id: 'УТ-00007151',
    title: 'Утка по-пекински',
    group: { id: '10', title: '20' },
  };

  let order: IOrderType = {
    customer_phone: '+380509716064',
    customer_firstName: 'Alex',
    goods: [
      { count: 7, price: 17, good: good1 },
      { count: 22, price: 3, good: good2 },
    ],
  };
  const [postOrder, { error, isLoading }] = usePostOrderMutation();
  const handleOnClick = async (order: IOrderType) => {
    console.log(order);

    await postOrder(order);
    console.log(error);
  };

  let errMsg: string | undefined;
  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
      // if (error.originalStatus !== 200) {
      // }
    } else {
      // you can access all properties of `SerializedError` here
      errMsg = error.message;
    }
  }

  return (
    <div>
      {isLoading && <h1>Завантаження в 1С</h1>}
      {errMsg && <h1>{errMsg}</h1>}
      <Button onClick={() => handleOnClick(order)}>
        Відправити тестове замовлення
      </Button>
    </div>
  );
}
