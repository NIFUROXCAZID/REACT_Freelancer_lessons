import { useGetAllNewsQuery } from '@/entities/news/api/newsApi'
import { NewsCardWithActions } from '../NewsCardWithActions'
import { useTranslation } from 'react-i18next'

export default function NewsList({ role, styles }) {
  const { t } = useTranslation()
  const { data: news = [], isLoading } = useGetAllNewsQuery()

  if (isLoading)
    return (
      <p>
        {t('loading')}
      </p>
    )
  
  if (Math.random() > 0.5) {
    let data
    data.wrongFunc()
  }

  return (
    <>
      <div className={styles.news__wrapper}>
        {news.map((n) => (
          <NewsCardWithActions
            key={n.id}
            news={n}
            role={role}
            styles={styles}
          />
        ))}
      </div>
    </>
  )
}
