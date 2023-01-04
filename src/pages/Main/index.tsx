import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import FilterOffcanvas from '../../components/FilterOffcanvas';
import { useTranslation } from 'react-i18next';
import { IGoodsGroupType, IGoodsType } from '../../types/goods.type';
import { useGetGoodsQuery, useGetUserQuery } from '../../store/goodsApi';
import { getGoodsCategory } from '../../utilites/handlingGoods';
import CardOfGoods from '../../components/CardOfGoods';
import filterIcon from '../../img/filter-solid.svg';
import ErrorPage from '../ErrorPage';
import { getErrorMessage } from '../../utilites/errorProcessing';
import { useActions } from '../../hooks/useActions';
import { getTempGoods } from '../../utilites/tempGoods';

export interface IMainProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Main(props: IMainProps) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { t } = useTranslation();

  let goodsCategory: IGoodsGroupType[] = [];
  let goodsCategoryStr: string = 'УТ-00001810,УТ-00002184';

  const {
    data: userData,
    error: errorUser,
    isSuccess: userSuccess,
  } = useGetUserQuery('');

  const { signIn } = useActions();
  signIn(userSuccess);

  const {
    data: goods,
    error: errorGoods,
    isLoading: isLoadingGoods,
  } = useGetGoodsQuery({
    // limit: 100,
    onlyWithBalance: true,
    // goodsCategoryStr,
  });

  const errMsg = getErrorMessage(errorGoods);

  // const goods = getTempGoods();
  // console.log(goods);
  if (goods !== undefined) {
    goodsCategory = getGoodsCategory(goods);
  }

  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-md-start text-center">
        <Col className="text-start mb-2">
          <Button
            variant="primary"
            onClick={handleShow}
            className="mt-3 me-2 mt-2 btn-sm d-block"
            style={{ width: '140px', height: '30px' }}
          >
            {/* <svg style={{ width: '30px', height: '30px' }} href={filterIcon} /> */}
            {t('Filter')}
          </Button>
          <FilterOffcanvas
            show={show}
            goodsCategory={goodsCategory}
            handleClose={handleClose}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center d-flex justify-content-center flex-wrap">
          {/* {errorGoods && <ErrorPage errorTitle={errMsg} />}
          {isLoadingGoods && <h1>Завантажую дані</h1>} */}
          {goods?.map((e) => (
            <CardOfGoods key={e.good.id} dataCart={e} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
