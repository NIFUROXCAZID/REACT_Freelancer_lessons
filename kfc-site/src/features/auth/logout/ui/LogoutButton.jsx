import { useLogout } from '@/features/auth/logout/model/useLogout'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

export function LogoutButton({ styles, variant }) {
  const { t } = useTranslation()
  const { logout } = useLogout()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate(frontRoutes.pages.LoginPage.navigationPath)
  }
  return (
    <button onClick={handleLogout} className={`${styles.header__logout} ${variant === 'aside' ? styles['header__logout--aside'] : ''}`}>
      {t('log-out')}
    </button>
  )
}
