import Table from 'react-bootstrap/Table';
import { useAppDispatch, useAppSelector } from '../../hooks';
import RowCart from './RowCart';
import { Button, Container } from 'react-bootstrap';
import { usePostOrderMutation } from '../../store/goodsApi';
import { useTranslation } from 'react-i18next';
import SpinnerLoading from '../UI/Spinner/SpinnerLoading';
import { cartActions } from '../../store/cartSlice';
import ModalWindow from '../UI/ModalWindow';
import { useCallback, useEffect, useState } from 'react';
import { getErrorMessage } from '../../utilites/errorProcessing';
import { getCartTotals } from '../../utilites/handlingCart';

export default function Cart() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const auth = useAppSelector((state) => state.auth);
  const [showModalWindow, setShowModalWindow] = useState(false);

  const { amountTotal, countTotal } = getCartTotals(cart);

  const [postOrder, { isLoading, error, isError, isSuccess, data }] =
    usePostOrderMutation();
  const handleOnClick = async () => {
    try {
      await postOrder({
        customer_phone: auth.phone,
        customer_firstName: auth.name,
        goods: cart,
      }).unwrap();
      dispatch(cartActions.clearCart());
    } catch (error) {
      // console.log('eror');
      // console.log(error);
    }
  };

  useEffect(() => {
    setShowModalWindow(isError || isSuccess ? true : false);
  }, [isError, isSuccess]);

  const onHideModalWindow = useCallback((hideWindow: boolean) => {
    setShowModalWindow(hideWindow);
  }, []);

  // let errorMessage = error
  // if (error) {
  //   if ('data' in error) {
  //     // TypeScript will handle it as `FetchBaseQueryError` from now on.
  // }

  const propsModal = {
    text: isError ? getErrorMessage(error) : JSON.stringify(data),
    isError,
    showModalWindow: true,
    onHideModalWindow,
  };
  return (
    <Container>
      <h1 className="mt-5">Замовлення</h1>
      <Table striped bordered hover responsive="sm" className="mt-1">
        <thead className="mt-5">
          <tr>
            {/* <th className="col-1">#</th> */}
            <th className="col-6">Товар</th>
            <th className="col-1">Кількість</th>
            <th className="col-1">Ціна</th>
            <th className="col-2">Сума</th>
            <th className="col-1">Видалити</th>
            <th className="col-1">Залишок</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((eCart, index) => (
            <RowCart key={eCart.good.id} eCart={eCart} index={index + 1} />
          ))}
        </tbody>
        <tfoot className="fs-4 bg-secondary">
          <tr>
            <td>Знижка</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Разом</td>
            <td>{countTotal}</td>
            <td></td>
            <td>{amountTotal}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <Button onClick={() => handleOnClick()}>Відправити</Button>
      {isLoading && (
        <h1>
          {t('sendingOrder')} <SpinnerLoading />
        </h1>
      )}
      {showModalWindow && <ModalWindow {...propsModal} />}
    </Container>
  );
}
