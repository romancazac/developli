import { createSlice } from "@reduxjs/toolkit";
import {setFilter}  from "../../utils/setFilter";

const initialState = {
   experience: [],
   category: [],
   employment: [],
   salary: [],
   location: [],
   sort:'',
   openFilter:false,
   isMob:false


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

         } else if (value === 'country') {        
            state.location=  setFilter(state.location, title) 

         } else if (value === 'employment') {        
            state.employment=  setFilter(state.employment, title) 

         }
         

      },
      setSort(state, action) {
         state.sort = action.payload
      },
      setOpenFilter(state, action) {
         state.openFilter = action.payload
      },
      setIsMob(state, action) {
         state.isMob = action.payload
      },
      setReset(state) {
         state.experience = [];   
         state.employment = [];   
         state.salary = [];   
         state.location = [];   
         state. category = [];   
   
      }

   }
})

export const { setFilters, setSort,setOpenFilter, setIsMob,setReset } = filterSlice.actions;
export default filterSlice.reducer