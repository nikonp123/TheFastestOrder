import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import FormWithCheckBoxes from '../FormWithCheckBoxes';
import React from 'react';

interface IFilterOffcanvasProps {
  show: boolean;
  // goodsCategory: IGoodsCategoryType[] | undefined;
  handleClose: () => void;
}

export default function FilterOffcanvas({
  show,
  // goodsCategory,
  handleClose,
}: IFilterOffcanvasProps) {
  const { t } = useTranslation();

  // const applyHandler = () => {};

  // console.log(goodsCategory);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        {/* <Button className="mt-1" onClick={handleClose}>
          {t('apply')}
        </Button> */}
        <Offcanvas.Header closeButton className="w-200">
          <Offcanvas.Title>{t('goodsCategory')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormWithCheckBoxes />
          {/* <FormWithCheckBoxes goodsCategory={goodsCategory} /> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
