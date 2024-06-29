import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import categorySlice from '../slices/categorySlice';
import fashionSlice from '../slices/fashionSlice';
import homeSlice from '../slices/homeSlice';

const store = configureStore({
  reducer: {
    fashion: fashionSlice,
    category: categorySlice,
    home: homeSlice,
  },
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;