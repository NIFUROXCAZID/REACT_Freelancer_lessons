import { useTranslation } from 'react-i18next'
function GlobalErrorPage() {
  const { t } = useTranslation()
  return <div>{t('globalErrorPage')}</div>
}

export default GlobalErrorPage
