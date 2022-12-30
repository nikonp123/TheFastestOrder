import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import { IGoodsGroupType } from '../../types/goods.type';
import FormWithCheckBoxes from '../FormWithCheckBoxes';

interface IFilterOffcanvasProps {
  show: boolean;
  goodsCategory: IGoodsGroupType[];
  handleClose: () => void;
}

export default function FilterOffcanvas({
  show,
  goodsCategory,
  handleClose,
}: IFilterOffcanvasProps) {
  const { t } = useTranslation();

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
