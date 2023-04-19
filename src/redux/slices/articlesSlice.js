import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

// First, create the thunk
export const fetchArticles = createAsyncThunk(
   'articles/fetchArticlesStatus',
   async (params) => {
      

      const response = await axios.get(`${BASE_URL}/articles`)
      // const totalCount = response.headers['x-total-count'];
 
      return response.data

      // return {
      //    articles: response.data,
      //    totalCount
      // }
   }
)

const initialState = {
   articlesData: [],
   totalCount: 0,
   status: "loading"


}

export const articlesSlice = createSlice({
   name: 'articles',

   initialState,
   reducers: {
      // setarticles(state, action) {
      //    state.articles= action.payload;
      // }

   },
   extraReducers: {
      [fetchArticles.pending]: (state) => {
         state.status = 'loading';
         state.articlesData = [];
         state.totalCount = 0;
      },
      [fetchArticles.fulfilled]: (state, action) => {
         state.articlesData = action.payload;


         state.status = 'succes';
      },
      [fetchArticles.rejected]: (state) => {
         state.status = 'error';
         state.articlesData = [];
         state.totalCount = 0;
      },
   }
})

export const { setaArticles } = articlesSlice.actions;
export default articlesSlice.reducer