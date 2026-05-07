import { useTranslation } from 'react-i18next'

export default function NewsCard({ news, children, styles }) {
  const { t } = useTranslation()
  
  return (
    <article className={styles.news__item}>
      <div className={styles.news__imgWrap}>
        <div className={styles.news__background}> {news.imgSrc && (
          <img className={styles.news__newsImage} src={news.imgSrc} alt={news.title} width="370" height="171"/>)}
        </div>
      </div>
      <div className={styles.news__infoZone}>
        <h3 className={styles.news__title} >{news.title}</h3>
        <a className={styles.news__ref} href={news.ref}>{t("moreDetails")}</a>
        {children}
      </div>
    </article>
  )
}