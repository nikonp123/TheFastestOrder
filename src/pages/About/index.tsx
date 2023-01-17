import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="mt-5">{t('titleAbout')}</h1>
      {/* <h2>{t('somethingElse')}</h2>
      <h3>{t('page1.titlePage1')}</h3>
      <p>{t('page1.page11.titlepage11')}</p>
      <p>{t('page1.page11.someTextPage11')}</p>
      <h3>{t('page1.page12')}</h3> */}
    </div>
  );
}
