import React, { useEffect } from 'react';
import './App.css';
import './scss/style.scss';
import Router from './pages/router';
import Navigationbar from './pages/Navigationbar';
import { useAppDispatch } from './hooks';
import { signInOut } from './store/authSlice';
import { useGetUserQuery } from './store/userApi';

function App() {
  const {
    data: userData,
    error: errorUser,
    isSuccess: userSuccess,
  } = useGetUserQuery('');
  // console.log(userData);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(signInOut(userSuccess));
  // }, [dispatch, userSuccess]);

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
