import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import categorySlice from '../slices/categorySlice';
import fashionSlice from '../slices/fashionSlice';
import homeSlice from '../slices/homeSlice';
import news1Slice from '../slices/news1Slice';
import news2Slice from '../slices/news2Slice';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    fashion: fashionSlice,
    category: categorySlice,
    home: homeSlice,
    user: userSlice,
    news1: news1Slice,
    news2: news2Slice,
  },
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;