import { useAppSelector } from '../../hooks';
import CartIcon from '../Cart/CartIcon';
import './style.scss';

interface ICartButtonHeaderProps {
  onClick: () => void;
}

export default function CartButtonHeader(props: ICartButtonHeaderProps) {
  // temp plug
  const isButtonAnnimated = true;
  const cartData = useAppSelector((state) => state.cart);
  const cartItemsNumber = cartData.length;
  // temp plug

  const buttonClasses = 'button' + (isButtonAnnimated ? ' bump' : '');

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className="badge">{cartItemsNumber}</span>
    </button>
  );
}
