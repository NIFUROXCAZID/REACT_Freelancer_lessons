import React from 'react'

export function UserListItem({ user, onEdit }) {
  return (
    <div>
      <strong>{user.name}</strong> — {user.email} — {user.role}
      <button onClick={onEdit}>Редагувати</button>
    </div>
  );
}
