import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useCreatePostMutation, useUpdatePostMutation, useGetPostByIdQuery } from "../api/postsApi";

const PostEditPage = () => {
  const { id } = useParams(); // беремо id з URL
  const navigate = useNavigate();

  const isEdit = Boolean(id); // якщо є id → редагування

  // 🔥 отримуємо пост якщо це редагування
  const { data: post, isLoading } = useGetPostByIdQuery(id, {
    skip: !isEdit,
  });

  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();

  // 🧾 стейт форми
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // 🔄 заповнення форми при редагуванні
  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setContent(post.content || "");
      setLikes(post.likesNumber || 0);
      setDislikes(post.dislikesNumber || 0);
    }
  }, [post]);

  // 🚀 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      likesNumber: Number(likes),
      dislikesNumber: Number(dislikes),
      publicationDate: new Date().toISOString(),
    };

    try {
      if (isEdit) {
        await updatePost({ id, ...postData });
      } else {
        console.log(postData);
        await createPost(postData);
      }

      navigate("/posts");
    } catch (err) {
      console.error("Помилка:", err);
    }
  };

  if (isEdit && isLoading) return <p>Завантаження...</p>;

  return (
    <div>
      <h2>{isEdit ? "Редагування поста" : "Створення поста"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Назва:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label>Опис:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <div>
          <label>Лайки:</label>
          <input type="number" value={likes} onChange={(e) => setLikes(e.target.value)} />
        </div>

        <div>
          <label>Дислайки:</label>
          <input type="number" value={dislikes} onChange={(e) => setDislikes(e.target.value)} />
        </div>

        <button type="submit">{isEdit ? "Зберегти" : "Створити"}</button>
      </form>
    </div>
  );
};

export default PostEditPage;
