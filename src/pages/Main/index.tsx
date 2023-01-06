import { useTranslation } from 'react-i18next';
import GoodsCards from '../../components/GoodsCards';

export interface IMainProps {
  children?: JSX.Element | JSX.Element[];
}

export default function Main(props: IMainProps) {
  // const { t } = useTranslation();

  // const {
  //   data: userData,
  //   error: errorUser,
  //   isSuccess: userSuccess,
  // } = useGetUserQuery('');

  return <GoodsCards />;
}
