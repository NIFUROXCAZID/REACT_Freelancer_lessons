import NewsList from '../../widgets/news/NewsList'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from "react-error-boundary"
import NewsErrorFallback from '@/shared/errorBoundries/NewsErrorFallback'
import { NewsAddButton } from '@/features/news'
import { useTranslation } from 'react-i18next'

import styles from "./news.module.scss";

export default function NewsPage() {
  const { t } = useTranslation()
  const user = useSelector((state) => state.auth.user)
  const role = user?.role
  
  return (
    <section>
      <div className="red_symbol">
        <div className="red_symbol__red"></div>
        <div className="red_symbol__grey"></div>
        <div className="red_symbol__red"></div>
        <div className="red_symbol__grey"></div>
        <div className="red_symbol__red"></div>
      </div>
      <section className="containerBg">
        <h1>Новини</h1>
        <ErrorBoundary FallbackComponent={NewsErrorFallback}>
          {role === 'admin' || role === 'manager' ? (
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <NewsAddButton />
            </div>
          ) : null}
          <NewsList user={user} role={role} styles={styles} />
        </ErrorBoundary>
      </section>
    </section>
  )
}