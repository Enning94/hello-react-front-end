import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice';

export const store = configureStore({
  reducer: {
    data: greetingReducer,
  },
});

export default store;
