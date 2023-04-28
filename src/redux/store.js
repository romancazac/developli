import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import jobs from './slices/jobsSlice';
import articles from './slices/articlesSlice';
import auth from './slices/authSlice'
export const store = configureStore({
  reducer: {
    filter,
    jobs,
    articles,
    // cart,
    auth
    // wish,
    // compare,
    // categories,
    // popup
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})