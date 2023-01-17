import { Form } from 'react-bootstrap';
import { EOrderGoodsVariants } from '../../types/settings.type';

interface IOrderGoodsProps {
  onChangeOrderGoodsHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currenVariantOrderGoods: string;
}

export default function OrderGoods({
  onChangeOrderGoodsHandler,
  currenVariantOrderGoods,
}: IOrderGoodsProps) {
  return (
    <Form.Select
      className="ms-2 mt-3 w-auto"
      size="sm"
      aria-label="Default select example"
      onChange={(e) => onChangeOrderGoodsHandler(e)}
      value={currenVariantOrderGoods}
    >
      <option value={EOrderGoodsVariants.byName}>
        {EOrderGoodsVariants.byName}
      </option>
      <option value={EOrderGoodsVariants.increasePrice}>
        {EOrderGoodsVariants.increasePrice}
      </option>
      <option value={EOrderGoodsVariants.decreasePrice}>
        {EOrderGoodsVariants.decreasePrice}
      </option>
    </Form.Select>
  );
}
