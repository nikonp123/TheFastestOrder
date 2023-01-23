import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useCallback } from 'react';
import { useLazyGetGoodsQuery } from '../../store/goodsApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ErrorPage from '../../pages/ErrorPage';
import { getStringFromArrayGoodsFiltersByName } from '../../utilites/handlingGoods';
import GoodItem from '../GoodItem';
import FilterOffcanvas from '../FilterOffcanvas';
import { useAppSelector } from '../../hooks';
import { getErrorMessage } from '../../utilites/errorProcessing';
import RadioShowCards from '../RadioShowCards';
import { Form, Table } from 'react-bootstrap';
import useCardVariant from '../../hooks/use-card-variant';
import { defaultSetForCardVariants } from '../../config/settingsConfig';
import SpinnerLoading from '../UI/Spinner/SpinnerLoading';
import { ENamesGoodsFilters } from '../../types/goods.type';
import { useDebounce } from '../../hooks/use-debounce';
import './style.scss';
import OrderGoods from '../OrderGoods';

export default function Goods() {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState('');
  const [currenVariantOrderGoods, setCurrenVariantOrderGoods] = useState('');
  const handleShow = useCallback(() => setShowFilters(true), []);
  const handleClose = useCallback(() => setShowFilters(false), []);

  const currentFilters = useAppSelector((state) => state.goodsFilters);

  const debounced = useDebounce(search);

  const [
    fetchLazyGoods,
    {
      data: goods,
      error: errorGoods,
      isLoading: isLoadingGoods,
      isFetching: isFetchingGoods,
    },
  ] = useLazyGetGoodsQuery();

  const errMsg = getErrorMessage(errorGoods);
  const cardVariant = useCardVariant();

  useEffect(() => {
    const goodsCategoryStr = getStringFromArrayGoodsFiltersByName(
      ENamesGoodsFilters.category,
      currentFilters
    );
    fetchLazyGoods(
      {
        // limit: 3,
        onlyWithBalance: true,
        goodsCategoryStr,
        goodsName: debounced.length < 3 ? '' : debounced,
        orderGoods: currenVariantOrderGoods,
      },
      // preferCacheValue
      true
    );
  }, [fetchLazyGoods, currentFilters, debounced, currenVariantOrderGoods]);

  const onChangeOrderGoodsHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrenVariantOrderGoods(e.target.value);
    },
    []
  );

  const renderGoods = () => {
    return goods?.map((e) => (
      <GoodItem key={e.id} dataGood={e} cardVariant={cardVariant} />
    ));
  };

  return (
    <Container fluid className="mt-2 ps-0 ">
      <Container
        fluid
        className="position-fixed mt-2 ml-0 w-100 bg-info zIndex"
      >
        <Row>
          <Col className="text-start mb-2 d-flex flex-row align-items-center">
            <Button
              variant="primary"
              onClick={handleShow}
              className="me-2 mt-3 btn-sm d-block"
              style={{ width: '140px' }}
            >
              {t('filter')}
            </Button>
            <FilterOffcanvas show={showFilters} handleClose={handleClose} />
            <RadioShowCards />
            <OrderGoods
              onChangeOrderGoodsHandler={onChangeOrderGoodsHandler}
              currenVariantOrderGoods={currenVariantOrderGoods}
            />
            <Form className="ms-2 me-2 mt-3 d-flex ">
              <Form.Control
                type="search"
                placeholder="пошук"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5 pt-4">
        <Row className="mt-5">
          <Col className="text-center d-flex justify-content-center flex-wrap">
            {errorGoods && <ErrorPage errorTitle={errMsg} />}
            {(isLoadingGoods || isFetchingGoods) && (
              <h1>
                {t('loadingData')} <SpinnerLoading />
              </h1>
            )}
            {cardVariant === defaultSetForCardVariants && (
              <Table striped bordered hover>
                <tbody>{renderGoods()}</tbody>
              </Table>
            )}
            {cardVariant !== defaultSetForCardVariants && renderGoods()}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
