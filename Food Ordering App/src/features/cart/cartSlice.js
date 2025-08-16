import {createSlice} from "@reduxjs/toolkit"

const initialState = [];

 const cartSlice = createSlice({
     name : "cart",
     initialState,
     reducers : {
         addItem : (state,action) =>{
              state.push(action.payload);
         },
         removeItem : (state,action) =>{
             return state.filter((item) => item.id !== action.payload);
         },
         clearCart : ()=>{
             return [];
         }
     }
})

export const {addItem,removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;