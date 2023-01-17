import { defaultSetForCardVariants } from '../config/settingsConfig';
import { useAppSelector } from '../hooks';

const useCardVariant = () => {
  const currentCardVariant =
    useAppSelector((state) => state.settings).find(
      (e) => e.name === 'cardsVariant'
    )?.value ?? defaultSetForCardVariants;
  return currentCardVariant;
};

export default useCardVariant;
