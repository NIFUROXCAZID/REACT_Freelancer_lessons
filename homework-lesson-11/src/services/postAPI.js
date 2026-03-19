import axios from 'axios'

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const postAPI = {
  fetchAllPosts: async (limit = 99999) => {
    const res = await axios.get(`${BASE_URL}/posts`, {
      params: { _limit: limit },
    });
    return res.data
  },
  // fetchById: async (postId) => {
  //   const res = await axios.get(`${BASE_URL}/posts/${postId}`);
  //   return res.data
  // },
}
