import NewsCard from '@/entities/news/ui/NewsCard'
import { NewsEditButton, NewsDeleteButton } from '@/features/news'

import { roles } from '@/shared/config/roles'

export function NewsCardWithActions({ news, role, onDeleted, styles }) {
  const canEdit = role === roles.admin || role === roles.manager
  const canDelete = role === roles.admin || role === roles.manager

  return (
    <NewsCard news={news} styles={styles}>
      <div className={styles.news__btnWrap}>
        {canEdit && <NewsEditButton newsId={news.id} styles={styles} />}
        {canDelete && (
          <NewsDeleteButton newsId={news.id} onDeleted={onDeleted} styles={styles} />
        )}
      </div>
    </NewsCard>
  )
}
