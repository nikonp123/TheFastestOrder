import * as React from 'react';
import { useTranslation } from 'react-i18next';

export interface IErrorPageProps {}

export default function ErrorPage(props: IErrorPageProps) {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('invalidPageTitle')}</h1>
    </div>
  );
}
