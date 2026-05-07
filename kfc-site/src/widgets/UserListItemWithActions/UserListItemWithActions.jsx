import { UserItem } from '@/entities/user/ui/UserItem'
import { UserEditButton, UserDeleteButton } from '@/features/users'
import { useDeleteUserMutation } from '@/entities/user/api/userApi'

import { roles } from '@/shared/config/roles'

export function UserListItemWithActions({user, currentUser, currentRole, styles,}) {
  const isSelf = currentUser && user.uid === currentUser.uid
  const canEdit = currentRole === roles.admin && !isSelf
  const canDelete = currentRole === roles.admin && !isSelf

  const [deleteUser] = useDeleteUserMutation()
  const onDeleted = async (userId) => {
    await deleteUser(userId)
  }

  return (
    <UserItem user={user} styles={styles}>
      <div className={styles.editButtonsWrapper}>
        {canEdit && <UserEditButton userId={user.uid} styles={styles}/>}
        {canDelete && (<UserDeleteButton userId={user.uid} onDeleted={onDeleted} styles={styles}/>)}
      </div>
    </UserItem>
  )
}
