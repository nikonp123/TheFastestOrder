import { useAppSelector } from '../../hooks';
import { ICartType } from '../../types/goods.type';
interface IRowCartProps {
  eCart: ICartType;
  index: number;
}

export default function RowCart({ eCart, index }: IRowCartProps) {
  //get summa with customer's discount
  //   const summa = (eCart.count * (eCart?.price ?? 0)).toFixed(2);
  return (
    <tr>
      {/* <td>{index}</td> */}
      <td>{eCart.good.title}</td>
      <td>{eCart.count}</td>
      <td>{eCart.price}</td>
      <td>{eCart.summa}</td>
      <td>{eCart.balance}</td>
    </tr>
  );
}
