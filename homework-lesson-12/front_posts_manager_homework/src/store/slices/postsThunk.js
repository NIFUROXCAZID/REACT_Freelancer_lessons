import { loadPosts } from '@/api/postsApi'
import { createPost, deletePostById } from "@/api/postsApi";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return await loadPosts({ page, limit })
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addPost = createAsyncThunk(
  'posts/add',
  async (data, { rejectWithValue }) => {
    try {
      return await createPost(data)
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deletePostById(id)
      return id
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)