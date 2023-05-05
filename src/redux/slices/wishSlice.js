import { createSlice } from "@reduxjs/toolkit";
import { getWishFromLs } from "../../utils/getWishFromLs";


const { items, countWish } = getWishFromLs()
const initialState = {
   items,
   countWish
}
export const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {
      addInWish(state, action) {
         const itemId = action.payload.id;
         const itemIndex = state.items.findIndex((item) => item.id === itemId);
         if (itemIndex !== -1) {
             state.items = state.items.filter((item) => item.id !== itemId);
             state.countWish--;
         } else {
             state.items.push({ ...action.payload });
             state.countWish++;
         }
        
      }


   }
})
export const { addInWish, removeInWish } = wishSlice.actions;
export default wishSlice.reducer