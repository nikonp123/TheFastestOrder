import React, { useEffect } from 'react';
import './App.css';
import './scss/style.scss';
import Router from './pages/router';
import Navigationbar from './pages/Navigationbar';
import { useGetUserQuery } from './store/userApi';
import { useGetCategoryGoodsQuery } from './store/goodsApi';
import { goodsCategoryActions } from './store/goodsCategorySlice';
import { useAppDispatch } from './hooks';
import SpinnerLoading from './components/UI/Spinner/SpinnerLoading';
import ErrorPage from './pages/ErrorPage';

function App() {
  const dispatch = useAppDispatch();
  const {
    // data: userData,
    error: errorUser,
    isLoading: loadingUser,
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
      {loadingUser && <SpinnerLoading />}
      {errorUser && <ErrorPage errorTitle={'errorConnectTo1C'} />}
      {!errorUser && (
        <>
          <Navigationbar></Navigationbar>
          <Router />
        </>
      )}
    </div>
  );
}

export default App;
