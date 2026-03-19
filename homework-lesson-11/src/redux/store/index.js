import { configureStore } from "@reduxjs/toolkit";
//--імпорт редюсерів
import productsSliceReducer from "@/redux/slices/listFilter/productsManager";
import postsReducer from "../slices/posts/postSlice";

const store = configureStore({
  reducer: {
    products: productsSliceReducer,
    posts: postsReducer,
  },
});

export default store;
