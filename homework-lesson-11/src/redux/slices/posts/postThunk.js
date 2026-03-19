import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAPI } from "../../../services/postAPI";

export const fetchPosts = createAsyncThunk("posts/fetchAll", async (_, { rejectWithValue }) => {
  try {
    return await postAPI.fetchAllPosts(9999);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchPostById = createAsyncThunk("posts/fetchById", async (id, { rejectWithValue }) => {
  try {
    return await postAPI.fetchById(id);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
