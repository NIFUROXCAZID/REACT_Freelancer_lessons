import { useParams, useNavigate } from 'react-router'
import { useGetAllUsersQuery } from '@/entities/user/api/userApi'
import { UserEditForm } from '@/features/users'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

import styles from "./users.module.scss";

export default function UserEditPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: users = [], isLoading } = useGetAllUsersQuery()
  const user = users.find((u) => u.id === id)

  const handleSuccess = () => {
    navigate(frontRoutes.pages.UsersPage.navigationPath)
  }

  if (isLoading) return <div>{t('loading')}</div>
  
  return (
      <section className='containerBg'>
        <h1 style={{ textAlign: 'center' }}>{t('userEditing')}</h1>
        <UserEditForm user={user} onSuccess={handleSuccess} />
      </section>
  )
}
