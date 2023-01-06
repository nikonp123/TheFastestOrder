import Form from 'react-bootstrap/Form';
import {
  ENamesGoodsFilters,
  IGoodFilter,
  IGoodsGroupType,
} from '../../types/goods.type';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGoodsFilterInArray } from '../../store/goodsFiltersSlice';

interface IFormWithCheckBoxesProps {
  goodsCategory: IGoodsGroupType[];
}

export default function FormWithCheckBoxes({
  goodsCategory,
}: IFormWithCheckBoxesProps) {
  const dispatch = useAppDispatch();
  const currentFilters = useAppSelector((state) => state.goodsFilters);
  // console.log(currentFilters);

  const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(`id=${e.target.id} checked=${e.target.checked}`);
    const filters: IGoodFilter[] = [];
    filters.push({ value: e.target.id, apply: e.target.checked });
    dispatch(
      changeGoodsFilterInArray({
        name: ENamesGoodsFilters.category,
        filters: filters,
      })
    );
    // const testFilterOnlyWithBalance = {
    //   name: ENamesGoodsFilters.onlyWithBalance,
    //   value: false,
    // };
    // dispatch(
    //   changeGoodsFilter(testFilterOnlyWithBalance)
    // );
  };
  return (
    <Form>
      {goodsCategory.map((el) => (
        <div key={el.id} className="mb-3">
          <Form.Check
            inline
            // disabled
            label={el.title}
            // name="group1"
            type={'checkbox'}
            id={el.id}
            onChange={(e) => checkChangeHandler(e)}
          />
        </div>
      ))}
    </Form>
  );
}
