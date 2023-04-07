import { createSlice } from "@reduxjs/toolkit";
import {setFilter}  from "../../utils/setFilter";

const initialState = {
   experience: [],
   category: [],
   employment: [],
   salary: [],
   location: [],



}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setFilters(state, action) {
         const { value, title } = action.payload;

         if (value === 'experience') {
            state.experience = setFilter(state.experience, title) 

         } else if (value === 'salary') {        
            state.salary =  setFilter(state.salary, title) 

         } else if (value === 'category') {        
            state.category =  setFilter(state.category, title) 

         } else if (value === 'location') {        
            state.location=  setFilter(state.location, title) 

         } else if (value === 'employment') {        
            state.employment=  setFilter(state.employment, title) 

         }
         

      },

   }
})

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer