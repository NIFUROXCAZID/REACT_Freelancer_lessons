import { useState } from 'react'
import styles from './questions.module.scss'
import { useTheme } from "@/app/providers/theme";

import arrowWhite from "@/assets/img/icons/arrow-white.svg";
import arrowBlack from "@/assets/img/icons/arrow-black.svg";

export default function Questions({ questions }) {
  const [openItems, setOpenItems] = useState([])

  const toggle = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const { theme } = useTheme();
  const isDark = theme === "dark";
  const arrowIcon = isDark ? arrowWhite : arrowBlack;

  return (
    <section className={styles.questions}>
      <div className={styles.questions__wrapper}>
        {questions.map((q, i) => (
          <div key={i} className={`${styles.question} ${openItems.includes(i) ? styles.open : ''}`}>
            <button className={styles.question__button} onClick={() => toggle(i)}>
              <h3>{q.title}</h3>
              <img src={arrowIcon} loading='lazy' width="15" height="15"/>
            </button>
            <div className={styles.question__ansverWrapper}>
              <p>{q.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}