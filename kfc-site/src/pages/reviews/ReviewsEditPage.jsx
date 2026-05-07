import { useParams, useNavigate } from 'react-router'
import { useGetAllReviewsQuery } from '@/entities/reviews/api/reviewsApi'
import { ReviewsEditForm } from '@/features/reviews'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import styles from "./reviews.module.scss";

export default function ReviewsEditPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: reviews = [], isLoading } = useGetAllReviewsQuery()
  const reviewsCurrent = reviews.find((u) => u.id === id)
  const user = useSelector((state) => state.auth.user)

  const handleSuccess = () => {
    navigate(frontRoutes.pages.ReviewsPage.navigationPath)
  }

  if (isLoading) return <section className='containerBg'>
    <p>{t('loading')}</p>
  </section>
  
  return (
    <section className='containerBg'>
      <h1 style={{ textAlign: 'center' }}>{t('reviewEditing')}</h1>
      <ReviewsEditForm user={user} reviews={reviewsCurrent} onSuccess={handleSuccess} />
    </section>
  )
}
