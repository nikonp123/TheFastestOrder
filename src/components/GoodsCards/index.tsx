import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useGetGoodsQuery } from '../../store/goodsApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ErrorPage from '../../pages/ErrorPage';
import { IGoodsGroupType } from '../../types/goods.type';
import { getErrorMessage } from '../../utilites/errorProcessing';
import { getGoodsCategory } from '../../utilites/handlingGoods';
import CardOfGoods from '../CardOfGoods';
import FilterOffcanvas from '../FilterOffcanvas';
import { useAppSelector } from '../../hooks';

// interface IFoodsCardsProps {}

export default function GoodsCards() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  let goodsCategory: IGoodsGroupType[] = [];
  // let goodsCategoryStr: string = 'УТ-00001810,УТ-00002184';

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
            {t('filter')}
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
          {errorGoods && <ErrorPage errorTitle={errMsg} />}
          {isLoadingGoods && <h1>{t('loadingData')}</h1>}
          {goods?.map((e) => (
            <CardOfGoods key={e.good.id} dataCart={e} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
