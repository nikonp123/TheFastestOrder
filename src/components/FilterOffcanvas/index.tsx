import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { useGetGoodsQuery } from '../../store/goodsApi';
import { goodsGroupType, goodsType } from '../../types/goods.type';
import { getGoodsCategory } from '../../utilites/handlingGoods';
import FormWithCheckBoxes from '../FormWithCheckBoxes';

interface IAppProps {
  show: boolean;
  handleClose: () => void;
}

export default function FilterOffcanvas({ show, handleClose }: IAppProps) {
  let goodsCategory: goodsGroupType[] = [];
  // goodsCategory.push({ id: '11', title: 'Рыба' });
  // goodsCategory.push({ id: '12', title: 'Х/з' });
  let goodsCategoryStr: string = 'УТ-00001810,УТ-00002184';

  const {
    data: goods,
    error: errorGoods,
    isLoading: isLoadingGoods,
  } = useGetGoodsQuery({
    // limit: 100,
    onlyWithBalance: true,
    goodsCategoryStr,
  });
  const { t } = useTranslation();

  // //test start
  // const goods: goodsType[] | undefined = [];
  // if (goods !== undefined) {
  //   goods.push({
  //     id: '1',
  //     title: 'Корюшка',
  //     group: { id: '11', title: 'Рыба' },
  //     balance: 11,
  //   });
  //   goods.push({
  //     id: '2',
  //     title: 'Рыбные чипсы',
  //     group: { id: '12', title: 'Снеки' },
  //     balance: 5,
  //   });
  //   goods.push({
  //     id: '3',
  //     title: 'Куриные чипсы',
  //     group: { id: '12', title: 'Снеки' },
  //     balance: 4,
  //   });
  // }
  // //test finish

  if (goods !== undefined) {
    goodsCategory = getGoodsCategory(goods);
  }

  // console.log(goods);
  // console.log(goodsCategory);
  return (
    <>
      {/* {errorGoods && <h1>Something went wrong</h1>}
      {isLoadingGoods && <h1>Loading goods categories...</h1>} */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="w-200">
          <Offcanvas.Title>{t('GoodsCategory')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormWithCheckBoxes goodsCategory={goodsCategory} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
