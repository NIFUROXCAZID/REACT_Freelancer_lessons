import ReviewsCard from '@/entities/reviews/ui/ReviewsCard'
import { ReviewsEditButton, ReviewsDeleteButton } from '@/features/reviews'

import { roles } from '@/shared/config/roles'

export function ReviewsCardWithActions({ reviews, role, user, onDeleted, styles }) {
  const canEdit = role === roles.admin || role === roles.manager ||
  user?.id === reviews?.userId;
  const canDelete = role === roles.admin || role === roles.manager ||
  user?.id === reviews?.userId;

  return (
    <ReviewsCard reviews={reviews} styles={styles}>
      <div className={styles.reviews__btnWrap}>
        {canEdit && <ReviewsEditButton reviewsId={reviews.id} styles={styles} />}
        {canDelete && (
          <ReviewsDeleteButton reviewsId={reviews.id} onDeleted={onDeleted} styles={styles} />
        )}
      </div>
    </ReviewsCard>
  )
}
