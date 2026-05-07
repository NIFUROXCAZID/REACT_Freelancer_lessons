
import {useAddNewsMutation, useUpdateNewsMutation,} from '@/entities/news/api/newsApi'
import { NewsForm } from '@/entities/news/ui/NewsForm'

export function NewsEditForm({ news = {}, onSuccess }) {
  const [updateNews, { isLoading: isUpdating, error: updateError }] =
  useUpdateNewsMutation()

  const [addNews, { isLoading: isAdding, error: addError }] =
    useAddNewsMutation()

  const handleSubmit = async (data) => {
    if (news.id) {
      await updateNews({ id: news.id, ...data }).unwrap()
    } else {
      await addNews(data)
    }

    onSuccess && onSuccess()
  }

  return (
    <NewsForm
      initialData={news}
      onSubmit={handleSubmit}
      isLoading={isUpdating || isAdding}
      error={updateError || addError}
    />
  )
}