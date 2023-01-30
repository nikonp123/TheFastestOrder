import { useTranslation } from 'react-i18next';

export interface IErrorPageProps {
  errorTitle: string;
}

export default function ErrorPage({ errorTitle }: IErrorPageProps) {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('errorLoading')}</h1>
      <h1>{t('errorTitle')}</h1>
    </div>
  );
}
