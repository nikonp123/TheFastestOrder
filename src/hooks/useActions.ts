import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { authActions } from '../store/authSlice';
import { languageReducer } from '../store/languageSlice';

const actions = {
  ...cartActions,
  ...authActions,
  ...languageReducer,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
