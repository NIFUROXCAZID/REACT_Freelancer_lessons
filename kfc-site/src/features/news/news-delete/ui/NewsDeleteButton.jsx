import { useDeleteNewsMutation } from '@/entities/news/api/newsApi'
import { useTranslation } from 'react-i18next'

import trashIcon from "@/assets/img/icons/trash.svg";

export function NewsDeleteButton({ newsId, onDeleted, styles }) {
  const { t } = useTranslation()
  const [deleteNews] = useDeleteNewsMutation()
  const handleDelete = async () => {
    await deleteNews(newsId)
    onDeleted && onDeleted()
  }
  return (
    <button onClick={handleDelete} title={t('delete')}>
      <img src={trashIcon} width="44" height="44" alt="Delete news"/>
    </button>
  )
}
