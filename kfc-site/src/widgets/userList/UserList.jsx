import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'
import { useGetAllUsersQuery } from '../../entities/user/api/userApi'
import { UserListItemWithActions } from '../UserListItemWithActions'
import { useTranslation } from 'react-i18next'

export function UserList({ styles }) {
  const { t } = useTranslation()
  const { data, isLoading, error } = useGetAllUsersQuery()
  const currentUser = useSelector(selectAuthUser)
  const currentRole = currentUser?.role

  if (isLoading) return <div>{t('loading')}</div>
  if (error) return <div>{t('error')}: {error.toString()}</div>

  const users = data || []

  return (
    <>
    <figure>
      <table>
        <tbody>
          <tr>
              <td><strong>Ім'я</strong></td>
              <td><strong>емейл</strong></td>
              <td><strong>Фото</strong></td>
              <td><strong>Роль</strong></td>
              <td><strong>Дії</strong></td>
          </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <UserListItemWithActions user={user}
                  currentUser={currentUser}
                  currentRole={currentRole}
                  styles={styles}/>
            </tr>))}
        </tbody>
      </table>
    </figure>
      </>
  )
}
