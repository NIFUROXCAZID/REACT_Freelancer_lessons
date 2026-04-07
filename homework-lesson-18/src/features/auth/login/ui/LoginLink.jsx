import { Link } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

export function LoginLink({ style }) {
  const { t } = useTranslation()
  return (
    <Link to={frontRoutes.pages.LoginPage.navigationPath} style={style}>
      {t('log-in')}
    </Link>
  )
}
