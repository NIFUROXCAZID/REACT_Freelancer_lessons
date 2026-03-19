import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, fetchPostById } from "./postThunk";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    //--- posts
    posts: [],
    loading: false,
    error: null,
    //--- selectedPost
    selectedPost: null,
    postLoading: false,
    postError: null,
  },
  reducers: {
    clearSelectedPost: (state) => {
      state.selectedPost = null;
      state.postError = null;
    },
    clearErrors: (state) => {
      state.error = null;
      state.postError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all users
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch user by ID
      // .addCase(fetchPostById.pending, (state) => {
      //   state.postLoading = true;
      //   state.postError = null;
      // })
      // .addCase(fetchPostById.fulfilled, (state, action) => {
      //   state.postLoading = false;
      //   state.selectedPost = action.payload;
      // })
      // .addCase(fetchPostById.rejected, (state, action) => {
      //   state.postLoading = false;
      //   state.postError = action.payload;
      // });
  },
});
// Експорт дії
export const { clearError } = postsSlice.actions;
// Експорт редюсера
export default postsSlice.reducer;
