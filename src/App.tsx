import React from 'react';
import './App.css';
import './scss/style.scss';
import Router from './pages/router';
import { useTranslation } from 'react-i18next';
import Navigationbar from './pages/Navigationbar';

function App() {
  // const {
  //   data: goods,
  //   error: errorGoods,
  //   isLoading: isLoadingGoods,
  // } = useGetGoodsQuery({ limit: 10 });

  const { t } = useTranslation();

  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <Router />
      {/* {isLoadingGoods && <h1>Loading...</h1>}
      {errorGoods && <h1>{t('errorLoading')}</h1>} */}
    </div>
  );
}

export default App;
