import { UserList } from '@/widgets/userList/UserList'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function UsersPage() {
  const { t } = useTranslation()
  const role = useSelector((state) => state.auth.role)

  // if (role !== 'admin') {
  //   return <div>Доступ лише для адміністратора</div>
  // }

  return (
    <div>
      <h1>{t('users')}</h1>
      <UserList />
    </div>
  )
}
