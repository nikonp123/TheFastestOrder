import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import {
  ENamesGoodsFilters,
  IGoodFilter,
  IGoodsCategoryType,
} from '../../types/goods.type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGoodsFilterInArray } from '../../store/goodsFiltersSlice';
import { useLazyGetGoodsQuery } from '../../store/goodsApi';
import { getStringFromArrayGoodsFiltersByName } from '../../utilites/handlingGoods';
import { changeGoodsCategoryChecked } from '../../store/goodsCategorySlice';
import { FormCheck } from 'react-bootstrap';

interface IFormWithCheckBoxesProps {
  // goodsCategory: IGoodsCategoryType[] | undefined;
}

export default function FormWithCheckBoxes() {
  const dispatch = useAppDispatch();
  // const currentFilters = useAppSelector((state) => state.goodsFilters);
  const goodsCategory = useAppSelector((state) => state.goodsCategory);

  const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(`id=${e.target.id} checked=${e.target.checked}`);

    const filters: IGoodFilter[] = [];
    filters.push({
      value: e.target.id,
      apply: e.target.checked,
    });
    dispatch(
      changeGoodsFilterInArray({
        name: ENamesGoodsFilters.category,
        filters: filters,
      })
    );
    dispatch(
      changeGoodsCategoryChecked({
        id: e.target.id,
        title: e.target.title,
        apply: e.target.checked,
      })
    );
    // let goodsCategoryStr: string = 'УТ-00001810,УТ-00002184';
    // fetchGoods({ goodsCategoryStr: goodsCategoryStr }); // const testFilterOnlyWithBalance = {
    //   name: ENamesGoodsFilters.onlyWithBalance,
    //   value: false,
    // };
    // dispatch(
    //   changeGoodsFilter(testFilterOnlyWithBalance)
    // );
  };
  return (
    <Form>
      {goodsCategory?.map((el) => (
        <div key={el.id} className="mb-3">
          <Form.Check
            inline
            // disabled
            label={el.title}
            // name="group1"
            type={'checkbox'}
            id={el.id}
            key={el.id}
            // defaultChecked={false}
            checked={el.apply}
            onChange={(e) => checkChangeHandler(e)}
          />
        </div>
      ))}
    </Form>
  );
}
