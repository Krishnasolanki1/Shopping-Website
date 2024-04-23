import { configureStore } from '@reduxjs/toolkit';
import addCartReducer from '../redux/Slice'; // Adjust the import path accordingly

export const store = configureStore({
  reducer: {
    addCart: addCartReducer // Use the correct slice name and reducer
  }
});
// console.log(store.getState().addCart.cart);
// console.log(store.getState().removeCart);