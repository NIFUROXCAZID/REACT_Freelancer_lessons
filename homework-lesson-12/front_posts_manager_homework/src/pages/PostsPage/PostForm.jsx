import styles from "./PostCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, addPost } from "@/store/slices/postsThunk";
import { useState } from "react";

function PostForm() {
  const { meta } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body || !authorId) return;

    const data = {
      title,
      body,
      authorId: Number(authorId),
    };

    dispatch(addPost(data)).then(() => {
      dispatch(fetchPosts(meta));
    });

    // очистка форми
    setTitle("");
    setBody("");
    setAuthorId("");
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.postForm_el}>
        <label>Заголовок</label>
        <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className={styles.postForm_el}>
        <label>Текст поста</label>
        <textarea placeholder="Текст поста" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>

      <div className={styles.postForm_el}>
        <label>ID Автора</label>
        <input type="number" placeholder="ID Автора" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
      </div>

      <button type="submit">Додати пост</button>
    </form>
  );
}

export default PostForm;
