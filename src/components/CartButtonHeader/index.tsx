import CartIcon from '../Cart/CartIcon';
import './style.scss';

interface ICartButtonHeaderProps {
  onClick: () => void;
}

export default function CartButtonHeader(props: ICartButtonHeaderProps) {
  // temp plug
  const isButtonAnnimated = false;
  const cartItemsNumber = 2;
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
