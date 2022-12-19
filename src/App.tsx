import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Router from './pages/router';
import { useGetGoodsQuery } from './store/goodsApi';

function App() {
  const {
    data: goods,
    error: errorGoods,
    isLoading: isLoadingGoods,
  } = useGetGoodsQuery(5);

  console.log(goods);
  console.log(errorGoods);
  console.log(isLoadingGoods);

  return (
    <div className="App">
      <NavBar />
      <Router />
      {isLoadingGoods && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
