import React, { useEffect } from 'react';
import './App.css';
import './scss/style.scss';
import Router from './pages/router';
import Navigationbar from './pages/Navigationbar';
import { useGetUserQuery } from './store/userApi';

function App() {
  const {
    data: userData,
    error: errorUser,
    isSuccess: userSuccess,
  } = useGetUserQuery('');

  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <Router />
    </div>
  );
}

export default App;
