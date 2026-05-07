import { Link } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

export function LoginLink({ styles, variant, mode = "login" }) {
  const { t } = useTranslation()
  return (
    <Link className={`${styles.header__login} ${variant === 'aside' ? styles['header__login--aside'] : ''}`} to={`${frontRoutes.pages.LoginPage.navigationPath}?mode=${mode}`} title={t('log-in')}>
      {t('log-in')}
    </Link>
  )
}
