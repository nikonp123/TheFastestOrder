import { useAppSelector } from '../../hooks';
import CartIcon from '../Cart/CartIcon';
import { useEffect, useState } from 'react';
import './style.scss';
import { getCountAndAmountOfCart } from '../../utilites/handlingCart';

interface ICartButtonHeaderProps {
  onClick: () => void;
}

export default function CartButtonHeader(props: ICartButtonHeaderProps) {
  const [isButtonAnnimated, setIsButtonAnnimated] = useState(false);
  const cartData = useAppSelector((state) => state.cart);

  // const cartItemsNumber = cartData.length;
  const titleCart = getCountAndAmountOfCart(cartData);
  useEffect(() => {
    if (titleCart !== '') {
      setIsButtonAnnimated(true);
    }
    const timer = setTimeout(() => {
      setIsButtonAnnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [titleCart]);

  const buttonClasses = 'button' + (isButtonAnnimated ? ' bump' : '');

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className="badge">{titleCart}</span>
    </button>
  );
}
