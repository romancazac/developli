import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

// First, create the thunk
export const fetchJobs= createAsyncThunk(
   'jobs/fetchJobsStatus',
   async (params) => {
      // const { category, sort,  search,  page, brands } = params; 
      const  response  = await axios.get(`${BASE_URL}/jobs`)
      const totalCount = response.headers['x-total-count'];

      return response.data
      
      // return {
      //    jobs: response.data,
      //    totalCount
      // }
   }
)

const initialState = {
   jobsData: [],
   totalCount: 0,
   status:"loading"


}

export const jobsSlice = createSlice({
   name: 'jobs',

   initialState,
   reducers: {
      // setJobs(state, action) {
      //    state.jobs= action.payload;
      // }

   },
   extraReducers: {
      [fetchJobs.pending]: (state) => {
         state.status = 'loading';
         state.jobsData= [];
         state.totalCount = 0;
      },
      [fetchJobs.fulfilled]: (state, action) => {
         state.jobsData= action.payload;
        
   
         state.status = 'succes';
      },
      [fetchJobs.rejected]: (state) => {
         state.status = 'error';
         state.jobsData= [];
         state.totalCount = 0;
      },
   }
})

export const { setJobs} = jobsSlice.actions;
export default jobsSlice.reducer