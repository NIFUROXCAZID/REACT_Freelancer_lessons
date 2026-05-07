import { useState } from 'react'
import styles from "./contents.module.scss";
import { useTranslation } from 'react-i18next'

export default function Contents({ content }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
return ( <>
  <section className={styles.content}>
    <h2>{t("content")}</h2>
    <button className={`${styles.content__button} ${!isOpen ? styles.btnShow : styles.btnHidden}`}
      onClick={() => setIsOpen(true)}>👁️ {t("show")}</button>
    <button className={`${styles.content__button} ${isOpen ? styles.btnShow : styles.btnHidden}`}
      onClick={() => setIsOpen(false)}>👁️ {t("hide")}</button>
      <div className={`${styles.content__wrapper} ${isOpen ? styles.menuShow : ''}`}>
          <ul className={styles.listed}>
            {content.map((item, i) => (
            <li key={i}>
              <a href={item.href}>{item.title}</a>
            </li>
            ))}
          </ul>
      </div>
  </section>
</>
)
}