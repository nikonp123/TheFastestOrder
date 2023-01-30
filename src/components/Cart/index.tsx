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
      <h1 className="mt-5">{t('orderCartTittle')}</h1>
      <Table striped bordered hover responsive="sm" className="mt-1">
        <thead className="mt-5">
          <tr>
            {/* <th className="col-1">#</th> */}
            <th className="col-6">{t('good')}</th>
            <th className="col-1">{t('count')}</th>
            <th className="col-1">{t('price')}</th>
            <th className="col-2">{t('amount')}</th>
            <th className="col-1">{t('delete')}</th>
            <th className="col-1">{t('balance')}</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((eCart, index) => (
            <RowCart key={eCart.good.id} eCart={eCart} index={index + 1} />
          ))}
        </tbody>
        <tfoot className="fs-4 bg-secondary">
          <tr>
            <td>{t('discount')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>{t('total')}</td>
            <td>{countTotal}</td>
            <td></td>
            <td>{amountTotal}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
      <Button onClick={() => handleOnClick()}>{t('send')}</Button>
      {isLoading && (
        <h1>
          {t('sendingOrder')} <SpinnerLoading />
        </h1>
      )}
      {showModalWindow && <ModalWindow {...propsModal} />}
    </Container>
  );
}
