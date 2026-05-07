
import {useAddUserMutation, useUpdateUserMutation,} from '@/entities/user/api/userApi'
import { UserForm } from '@/entities/user/ui/UserForm'

export function UserEditForm({ user = {}, onSuccess }) {
  // Тільки зміна ролі
  // const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
  //   useUpdateUserRoleMutation()
  const [updateUser, { isLoading: isUpdating, error: updateError }] =
  useUpdateUserMutation()

  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation()

  const handleSubmit = async (data) => {
    if (user.id) {
      // await updateUserRole({ uid: user.id, role: data.role })
      await updateUser({ uid: user.id, ...data }).unwrap()
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