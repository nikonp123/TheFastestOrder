import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FilterOffcanvas from '../../components/FilterOffcanvas';
import { useTranslation } from 'react-i18next';
import { IGoodsGroupType, IGoodsType } from '../../types/goods.type';
import { useGetGoodsQuery } from '../../store/goodsApi';
import { getGoodsCategory } from '../../utilites/handlingGoods';
import CardOfGoods from '../../components/CardOfGoods';
import filterIcon from '../../img/filter-solid.svg';

export default function Main() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { t } = useTranslation();

  let goodsCategory: IGoodsGroupType[] = [];
  // goodsCategory.push({ id: '11', title: 'Рыба' });
  // goodsCategory.push({ id: '12', title: 'Х/з' });
  let goodsCategoryStr: string = 'УТ-00001810,УТ-00002184';

  const {
    data: goods,
    // error: errorGoods,
    isLoading: isLoadingGoods,
  } = useGetGoodsQuery({
    // limit: 100,
    onlyWithBalance: true,
    // goodsCategoryStr,
  });

  // //test start
  // const goods: IGoodsType[] | undefined = [];
  // if (goods !== undefined) {
  //   goods.push({
  //     good: {
  //       id: '99',
  //       title:
  //         'Гренки "Днепровские" ЛОСОСЬ вес. (Фас. 500 гр / ящ. 6 кг) и вообще содержит самое большое название которое только можно придумать',
  //       group: { id: '22', title: 'Сухарики' },
  //     },
  //     balance: 3,
  //   });
  //   goods.push({
  //     good: {
  //       id: '1',
  //       title: 'Корюшка Lorem',
  //       group: { id: '11', title: 'Рыба' },
  //     },
  //     balance: 11,
  //   });
  //   goods.push({
  //     good: {
  //       id: '2',
  //       title: 'Рыбные чипсы',
  //       group: { id: '12', title: 'Снеки' },
  //     },
  //     balance: 5,
  //   });
  //   goods.push({
  //     good: {
  //       id: '3',
  //       title: 'Куриные чипсы',
  //       group: { id: '12', title: 'Снеки' },
  //     },
  //     balance: 4,
  //   });
  //   goods.push({
  //     good: {
  //       id: '4',
  //       title: 'Плотва',
  //       group: { id: '11', title: 'Рыба' },
  //     },
  //     balance: 24,
  //   });
  //   goods.push({
  //     good: {
  //       id: '5',
  //       title: 'Скумбрия',
  //       group: { id: '11', title: 'Рыба' },
  //     },
  //     balance: 6,
  //   });
  //   goods.push({
  //     good: {
  //       id: '6',
  //       title:
  //         'Гренки "Днепровские" САЛО С ГОРЧИЦЕЙ вес. (Фас. 500 гр / ящ. 6 кг)',
  //       group: { id: '22', title: 'Сухарики' },
  //     },
  //     balance: 2,
  //   });
  // }
  // //test finish

  // console.log(goods);
  if (goods !== undefined) {
    goodsCategory = getGoodsCategory(goods);
  }
  // console.log(goodsCategory);

  return (
    <Container>
      <Row className="justify-content-md-start text-center">
        <Col className="text-start mb-2">
          <Button
            variant="primary"
            onClick={handleShow}
            className="me-2 mt-2 btn-sm d-block"
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
        {/* <Row className="justify-content-around text-center"> */}
        <Col className="text-center d-flex justify-content-center flex-wrap">
          {/* {isLoadingGoods && <h1>Завантажую дані</h1>} */}
          {goods?.map((e) => (
            <CardOfGoods key={e.good.id} dataCart={e} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
