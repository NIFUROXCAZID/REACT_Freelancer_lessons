// --------------- Задачі 1 і 2 виконати за зразком product----------
// Задача 1. Додати у entites UserForm.  Використати у UserEditForm
//  компонент UserForm передавши потрібну функцію


import {
  useUpdateUserRoleMutation,
  useAddUserMutation,
} from '@/entities/user/api/userApi'
import { UserForm } from '@/entities/user/ui/UserForm'

export function UserEditForm({ user = {}, onSuccess }) {
  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation()

  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation()

  const handleSubmit = async (data) => {
    if (user.id) {
      await updateUserRole({ uid: user.id, role: data.role })
    } else {
      await addUser(data)
    }

    onSuccess && onSuccess()
  }

  return (
    <UserForm
      initialData={user}
      onSubmit={handleSubmit}
      isLoading={isUpdating || isAdding}
      error={updateError || addError}
    />
  )
}