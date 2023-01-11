import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { ECardVariants, radiosCardVariants } from '../../types/settings.type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSetting } from '../../store/settingsSlice';

function RadioShowCards() {
  const dispatch = useAppDispatch();
  const currentCardsVariant =
    useAppSelector((state) => state.settings).find(
      (e) => e.name === 'cardsVariant'
    )?.value ?? ECardVariants.table;
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(currentCardsVariant);

  const changeButtonHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.currentTarget.value;
    setRadioValue(value);
    dispatch(setSetting({ name: 'cardsVariant', value }));
  };

  const radios = radiosCardVariants;

  return (
    <>
      <ButtonGroup className="mt-3 ">
        {radios.map((radio, idx) => (
          <ToggleButton
            className="btn-sm"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => changeButtonHandler(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default RadioShowCards;
