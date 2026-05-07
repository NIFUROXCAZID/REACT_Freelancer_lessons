import { useParams, useNavigate } from 'react-router'
import { useGetAllNewsQuery } from '@/entities/news/api/newsApi'
import { NewsEditForm } from '@/features/news'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

import styles from "./news.module.scss";

export default function NewsEditPage() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: news = [], isLoading } = useGetAllNewsQuery()
  const newsCurrent = news.find((u) => u.id === id)

  const handleSuccess = () => {
    navigate(frontRoutes.pages.NewsPage.navigationPath)
  }

  if (isLoading) return <section className='containerBg'><p>{t('loading')}</p></section>
  
  return (
    <section className='containerBg'>
      <h1 style={{ textAlign: 'center' }}>{t('newsEdit')}</h1>
      <NewsEditForm news={newsCurrent} onSuccess={handleSuccess} />
    </section>
  )
}
