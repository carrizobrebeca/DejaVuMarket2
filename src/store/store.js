import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import carritoReducer from './carritoSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    carrito: carritoReducer
  },
});

export default store;
