import axios from 'axios'

// const baseUrl = 'http://localhost:3000'
const baseUrl = import.meta.env.VITE_API_URL;

export const loadPosts = async ({ page = 1, limit = 10 }) => {
  const res = await axios.get(`${baseUrl}/posts`, {
    params: {
      page,
      limit,
    },
  })
  return res?.data
}

// ➕ POST
export const createPost = async (data) => {
  const res = await axios.post(`${baseUrl}/posts`, data)
  return res.data
}

// ❌ DELETE
export const deletePostById = async (id) => {
  await axios.delete(`${baseUrl}/posts/${id}`)
  return id
}