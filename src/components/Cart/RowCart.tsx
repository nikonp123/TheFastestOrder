import { useAppDispatch } from '../../hooks';
import { cartActions } from '../../store/cartSlice';
import { ICartType } from '../../types/goods.type';
import DeleteIcon from './DeleteIcon';
import './style.scss';

interface IRowCartProps {
  eCart: ICartType;
  index: number;
}

export default function RowCart({ eCart, index }: IRowCartProps) {
  const dispatch = useAppDispatch();
  const classCart = eCart.error ? ' errorCart ' : '';
  // ? ' errorCart '
  // : eCart.count !== 0
  // ? ' validCart '
  // : '';

  //get summa with customer's discount
  // const summa = (eCart.count * (eCart?.price ?? 0)).toFixed(2);

  const onClickDeleteItemCart = () => {
    if (window.confirm('Видалити?')) {
      dispatch(cartActions.removeItemCart({ id: eCart.good.id }));
    }
  };

  return (
    <tr className={classCart}>
      {/* <td>{index}</td> */}
      <td>{eCart.good.title}</td>
      <td>{eCart.count}</td>
      <td>{eCart.price}</td>
      <td>{eCart.amount}</td>
      <td className="hoverDeleteIcon" onClick={onClickDeleteItemCart}>
        <DeleteIcon />
      </td>
      <td>{eCart.good.balance}</td>
    </tr>
  );
}
