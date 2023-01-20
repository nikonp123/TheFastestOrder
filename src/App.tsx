import React, { useEffect } from 'react';
import './App.css';
import './scss/style.scss';
import Router from './pages/router';
import Navigationbar from './pages/Navigationbar';
import { useGetUserQuery } from './store/userApi';
import { useGetCategoryGoodsQuery } from './store/goodsApi';
import { goodsCategoryActions } from './store/goodsCategorySlice';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch();
  const {
    data: userData,
    error: errorUser,
    isSuccess: userSuccess,
  } = useGetUserQuery('');

  const { data: goodsCategory } = useGetCategoryGoodsQuery(
    {},
    { skip: !userSuccess }
  );
  useEffect(() => {
    if (goodsCategory !== undefined) {
      dispatch(goodsCategoryActions.addAllGoodsCategory(goodsCategory));
    }
  }, [dispatch, goodsCategory]);

  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <Router />
    </div>
  );
}

export default App;
