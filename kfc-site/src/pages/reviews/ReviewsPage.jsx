import ReviewsList from '@/widgets/Reviews/ReviewsList.jsx'
import { useSelector } from 'react-redux'
import { ErrorBoundary } from "react-error-boundary"
import ReviewsErrorFallback from '@/shared/errorBoundries/ReviewsErrorFallback'
import { ReviewsAddButton } from '@/features/reviews'
import { useTranslation } from 'react-i18next'

import styles from "./reviews.module.scss";

export default function ReviewsPage() {
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
      <h1>Відгуки</h1>
      <section className="containerBg">
        <ErrorBoundary FallbackComponent={ReviewsErrorFallback}>
          {role === 'user' || role === 'admin' || role === 'manager' ? (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <ReviewsAddButton />
          </div>
          ) : null}
          <ReviewsList user={user} role={role} styles={styles}/>
        </ErrorBoundary>
      </section>
    </section>
  )
}
