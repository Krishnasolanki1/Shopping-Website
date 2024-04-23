import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

export const addCartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      let addItem = state.cart.findIndex((item)=>item.id === action.payload.id)
      if(addItem >= 0){
        state.cart[addItem].quantity += 1;
    }
    else{
        const temp = {...action.payload, quantity: 1}
        state.cart = [...state.cart , temp]
    }
      //  state.cart.push(action.payload)
      
    },
    removeCart: (state, action)=>{
      
       let remove=   state.cart.filter((obj)=>obj.id !== action.payload)
        state.cart = remove

    },
     removesingleItem : (state, action)=>{
        let item = state.cart.findIndex((item)=>item.id === action.payload.id)
        if(state.cart[item].quantity >1  ){
          state.cart[item].quantity -= 1 
        }

     }
  }
});

export const { addCart, removeCart,removesingleItem } = addCartSlice.actions;

export default addCartSlice.reducer;
