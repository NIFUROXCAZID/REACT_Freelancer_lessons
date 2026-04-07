import { useLogout } from '@/features/auth/logout/model/useLogout'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

export function LogoutButton({ className }) {
  const { t } = useTranslation()
  const { logout } = useLogout()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate(frontRoutes.pages.LoginPage.navigationPath)
  }
  return (
    <button
      onClick={handleLogout}
      className={
        className ||
        'ml-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-semibold transition'
      }
    >
      {t('log-out')}
    </button>
  )
}
