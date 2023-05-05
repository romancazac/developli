import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import jobs from './slices/jobsSlice';
import articles from './slices/articlesSlice';
import auth from './slices/authSlice'
import wish from './slices/wishSlice'
export const store = configureStore({
  reducer: {
    filter,
    jobs,
    articles,
    auth,
    wish

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})