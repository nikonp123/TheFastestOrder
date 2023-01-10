import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import {
  useGetCategoryGoodsQuery,
  useGetGoodsQuery,
  useLazyGetGoodsQuery,
} from '../../store/goodsApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ErrorPage from '../../pages/ErrorPage';
import { getStringFromArrayGoodsFiltersByName } from '../../utilites/handlingGoods';
import CardOfGoods from '../CardOfGoods';
import FilterOffcanvas from '../FilterOffcanvas';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getErrorMessage } from '../../utilites/errorProcessing';
import { addAllGoodsCategory } from '../../store/goodsCategorySlice';
import { ENamesGoodsFilters } from '../../types/goods.type';
// interface IFoodsCardsProps {}

export default function GoodsCards() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // let goodsCategory: IGoodsCategoryType[] = [];
  // let goodsCategoryStr: string = 'УТ-00001810,УТ-00002184';
  // const currentFilters = useAppSelector((state) => state.goodsFilters);

  const dispatch = useAppDispatch();
  const currentFilters = useAppSelector((state) => state.goodsFilters);
  // console.log(currentFilters);
  const [
    fetchLazyGoods,
    { data: goods, error: errorGoods, isLoading: isLoadingGoods },
  ] = useLazyGetGoodsQuery();
  // const {
  //   data: goods,
  //   error: errorGoods,
  //   isLoading: isLoadingGoods,
  // } = useGetGoodsQuery({
  //   // limit: 100,
  //   onlyWithBalance: true,
  //   // goodsCategoryStr,
  // });

  const errMsg = getErrorMessage(errorGoods);

  const { data: goodsCategory } = useGetCategoryGoodsQuery({});
  useEffect(() => {
    if (goodsCategory !== undefined) {
      dispatch(addAllGoodsCategory(goodsCategory));
    }
  }, [dispatch, goodsCategory]);

  useEffect(() => {
    const goodsCategoryStr = getStringFromArrayGoodsFiltersByName(
      ENamesGoodsFilters.category,
      currentFilters
    );
    // console.log(goodsCategoryStr);
    fetchLazyGoods({
      limit: 3,
      onlyWithBalance: true,
      goodsCategoryStr,
    });
  }, [dispatch, fetchLazyGoods, currentFilters]);

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
            {t('filter')}
          </Button>
          <FilterOffcanvas
            show={show}
            // goodsCategory={goodsCategory}
            handleClose={handleClose}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center d-flex justify-content-center flex-wrap">
          {errorGoods && <ErrorPage errorTitle={errMsg} />}
          {isLoadingGoods && <h1>{t('loadingData')}</h1>}
          {goods?.map((e) => (
            <CardOfGoods key={e.good.id} dataGood={e} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
