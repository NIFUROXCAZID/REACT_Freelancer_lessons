import { useSelector, useDispatch } from "react-redux";
import { fetchPosts} from "@/redux/slices/posts/postThunk";
import { clearError } from "@/redux/slices/posts/postSlice";

import { createSelector } from "@reduxjs/toolkit";
import { useEffect} from "react";
const selectPostCount = createSelector([(state) => state.posts.posts], (posts) => posts.length);

function PostsLoader() {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const postCount = useSelector(selectPostCount);

  // Отримання dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Завантаження постів API (createAsyncThunk) (Завдання 2)</h2>
      <h3>Кількість постів: {postCount}</h3>
      <button onClick={() => dispatch(fetchPosts())}>Завантажити пости</button>
      {error && <button onClick={() => dispatch(clearError())}>Очистити помилку</button>}
      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsLoader;
