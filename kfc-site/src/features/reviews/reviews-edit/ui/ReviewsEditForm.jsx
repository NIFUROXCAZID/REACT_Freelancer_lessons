
import {useAddReviewsMutation, useUpdateReviewsMutation,} from '@/entities/reviews/api/reviewsApi'
import { ReviewsForm } from '@/entities/reviews/ui/ReviewsForm'

export function ReviewsEditForm({ user, reviews = {}, onSuccess }) {
  const [updateReviews, { isLoading: isUpdating, error: updateError }] =
  useUpdateReviewsMutation()

  const [addReviews, { isLoading: isAdding, error: addError }] =
    useAddReviewsMutation()

  const handleSubmit = async (data) => {
    if (reviews.id) {
      await updateReviews({ id: reviews.id, ...data }).unwrap()
    } else {
      await addReviews(data)
    }
    onSuccess && onSuccess()
  }

  return (
    <ReviewsForm
      initialData={reviews}
      user={user}
      onSubmit={handleSubmit}
      isLoading={isUpdating || isAdding}
      error={updateError || addError}
    />
  )
}