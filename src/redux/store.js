import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import jobs from './slices/jobsSlice';

export const store = configureStore({
  reducer: {
    filter,
    jobs
    // cart,
    // auth,
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