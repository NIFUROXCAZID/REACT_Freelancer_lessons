import { useGetAllReviewsQuery } from '@/entities/reviews/api/reviewsApi'
import { ReviewsCardWithActions } from '../ReviewsCardWithActions'
import { useTranslation } from 'react-i18next'


export default function ReviewsList({user, role, styles }) {
  const { t } = useTranslation()
  const { data: reviews = [], isLoading } = useGetAllReviewsQuery()

  if (isLoading)
    return (
      <p>
        {t('loading')}
      </p>
    )

  return (
    <>
      <div className={styles.reviews__wrapper}>
        {reviews.map((n) => (
          <ReviewsCardWithActions
            key={n.id}
            reviews={n}
            role={role}
            user={user}
            styles={styles}
          />
        ))}
      </div>
    </>
  )
}
