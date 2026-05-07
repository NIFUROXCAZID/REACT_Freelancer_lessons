import { useTranslation } from 'react-i18next'

export default function FooterErrorFallback({ error, resetErrorBoundary }) {
  const { t } = useTranslation()
  return (
    <div className="errorBoundry">
      <h3>{t('footerErrorBoundry')}</h3>
      <p>{error.message}</p>
      <button className="defaultButton" onClick={resetErrorBoundary}>
        <span>{t('tryAgain')}</span>
      </button>
      <button className="defaultButton" onClick={() => window.location.reload()}>
        <span>{t('reloadPage')}</span>
      </button>
    </div>
  )
}