import { useState } from "react";
import { useCreateUserMutation, useUpdateUserMutation } from "@/entities/user/api/userApi";

export function UserEditModal({ user, onClose }) {
  const isEdit = Boolean(user?.id);

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    role: user?.role || "client",
  });

  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await updateUser({ id: user.id, data: form });
    } else {
      await createUser(form);
    }

    onClose();
  };

  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <h3>{isEdit ? "Редагувати" : "Створити"} користувача</h3>

      <form onSubmit={onSubmit}>
        <input placeholder="Імʼя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

        {!isEdit && (
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        )}

        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="client">client</option>
          <option value="manager">manager</option>
          <option value="admin">admin</option>
        </select>

        <button type="submit">Зберегти</button>
        <button type="button" onClick={onClose}>
          Закрити
        </button>
      </form>
    </div>
  );
}
