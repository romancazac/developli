import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

// First, create the thunk
export const fetchJobs = createAsyncThunk(
   'jobs/fetchJobsStatus',
   async (params) => {
      const { 
         filterExp, 
         filterCategory,
         filterEmployment,
         filterSalary,
         filterLocation,
         sortFinal,
         paginationPage
      } = params;

      const response = await axios.get(`${BASE_URL}/jobs?${filterExp}${filterCategory}${filterEmployment}${filterSalary}${filterLocation}${sortFinal}&_page=${paginationPage}&_limit=5`)
      const totalCount = response.headers['x-total-count'];
 
      // return response.data

      return {
         jobs: response.data,
         totalCount
      }
   }
)

const initialState = {
   jobsData: [],
   totalCount: 0,
   paginationPage:1,
   status: "loading"


}

export const jobsSlice = createSlice({
   name: 'jobs',

   initialState,
   reducers: {
      setPaginationPage(state, action) {
         state.paginationPage= action.payload;
      }

   },
   extraReducers: {
      [fetchJobs.pending]: (state) => {
         state.status = 'loading';
         state.jobsData = [];
         state.totalCount = 0;
      },
      [fetchJobs.fulfilled]: (state, action) => {
  
         state.jobsData = action.payload.jobs;
         state.totalCount= action.payload.totalCount   
         state.status = 'succes';
      },
      [fetchJobs.rejected]: (state) => {
         state.status = 'error';
         state.jobsData = [];
         state.totalCount = 0;
      },
   }
})

export const { setPaginationPage } = jobsSlice.actions;
export default jobsSlice.reducer