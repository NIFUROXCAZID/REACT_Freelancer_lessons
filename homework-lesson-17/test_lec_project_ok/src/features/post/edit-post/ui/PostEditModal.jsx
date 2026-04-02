import { useState } from "react";
import { useCreatePostMutation, useUpdatePostMutation } from "@/entities/post/api/postApi";

export function PostEditModal({ post, onClose }) {
  const isEdit = Boolean(post?.id);

  const [form, setForm] = useState({
    title: post?.title || "",
    content: post?.content || "",
  });

  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await updatePost({ id: post.id, data: form });
    } else {
      await createPost(form);
    }

    onClose();
  };

  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <h3>{isEdit ? "Редагувати" : "Створити"} пост</h3>

      <form onSubmit={onSubmit}>
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" />

        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Content"
        />

        <button type="submit">Зберегти</button>
        <button type="button" onClick={onClose}>
          Закрити
        </button>
      </form>
    </div>
  );
}
