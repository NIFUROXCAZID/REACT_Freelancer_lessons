import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import spentListSliceReducer from "@/store/slices/spentManager";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    spentList: spentListSliceReducer,
  },
});
