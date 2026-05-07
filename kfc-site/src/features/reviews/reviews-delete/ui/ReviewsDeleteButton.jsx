import { useDeleteReviewsMutation } from '@/entities/reviews/api/reviewsApi'
import { useTranslation } from 'react-i18next'

import trashIcon from "@/assets/img/icons/trash.svg";

export function ReviewsDeleteButton({ reviewsId, onDeleted, styles }) {
  const { t } = useTranslation()
  const [deleteReviews] = useDeleteReviewsMutation()
  const handleDelete = async () => {
    await deleteReviews(reviewsId)
    onDeleted && onDeleted()
  }
  return (
    <button onClick={handleDelete} title={t('delete')}>
      <img src={trashIcon} width="44" height="44" alt="Delete Reviews"/>
    </button>
  )
}
