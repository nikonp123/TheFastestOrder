import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Router from './pages/router';
import { useGetGoodsQuery } from './store/goodsApi';
import { useTranslation } from 'react-i18next';
import { Container, Navbar } from 'react-bootstrap';
import NavbarList from './components/NavbarList';

function App() {
  const {
    data: goods,
    error: errorGoods,
    isLoading: isLoadingGoods,
  } = useGetGoodsQuery(10);
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <NavbarList />
        </Navbar>
      </header>
      <Router />
      {isLoadingGoods && <h1>Loading...</h1>}
      {errorGoods && <h1>{t('errorLoading')}</h1>}
    </div>
  );
}

export default App;
