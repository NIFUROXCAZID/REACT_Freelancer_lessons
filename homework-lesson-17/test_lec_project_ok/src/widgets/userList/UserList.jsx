import React, { useState } from 'react'
import { useGetUsersQuery } from '../../entities/user/api/userApi'
import { UserListItem } from '../../entities/user/ui/UserListItem'
import { UserEditModal } from '@/features/user/edit-user/ui/UserEditModal';


export function UserList() {
  const [page, setPage] = useState(1)
  const [editingUser, setEditingUser] = useState(null);
  const limit = 10
  const { data, isLoading, error } = useGetUsersQuery({ page, limit })

  if (isLoading) return <div>Завантаження...</div>
  if (error) return <div>Помилка: {error.toString()}</div>

  const users = data?.items || []
  const totalPages = data?.totalPages || 1

  return (
    <div>
      <button onClick={() => setEditingUser({})}>Додати користувача</button>
      {editingUser !== null && <UserEditModal user={editingUser} onClose={() => setEditingUser(null)} />}

      {users.map((user) => (
        <UserListItem key={user.id} user={user} onEdit={() => setEditingUser(user)} />
      ))}

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Назад
        </button>
        <span style={{ margin: "0 10px" }}>
          Сторінка {page} з {totalPages}
        </span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
          Вперед
        </button>
      </div>
    </div>
  );
}
