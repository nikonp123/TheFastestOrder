import Form from 'react-bootstrap/Form';
import { IGoodsGroupType } from '../../types/goods.type';

interface IFormWithCheckBoxesProps {
  goodsCategory: IGoodsGroupType[];
}

export default function FormWithCheckBoxes({
  goodsCategory,
}: IFormWithCheckBoxesProps) {
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
            onChange={(e) =>
              console.log(`id=${e.target.id} checked=${e.target.checked}`)
            }
          />
        </div>
      ))}
    </Form>
  );
}
