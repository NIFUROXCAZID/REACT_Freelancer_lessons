import { useState } from "react"
import styles from "./stars.module.scss";

const Star = ({ fill = 0 }) => {
  const id = Math.random().toString(36).slice(2)

  return (
    <div className={styles.starElement}>
        <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <linearGradient id={id}>
            <stop offset={`${fill}%`} stopColor="gold" />
            <stop offset={`${fill}%`} stopColor="#ccc" />
          </linearGradient>
        </defs>

        <path
          fill={`url(#${id})`}
          d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
        />
      </svg>
    </div>
    
  )
}

export default function StarRating({ value = 0, onChange, readOnly }) {
  const [hover, setHover] = useState(null)
  const display = hover ?? value

  return (
    <div className={styles.rating}>
      {[1, 2, 3, 4, 5].map((star) => {
        let fill = 0

        if (display >= star) fill = 100
        else if (display >= star - 0.5) fill = 50

        return (
          <div className={styles.rating__starsWrap}
            key={star}
            onMouseLeave={() => setHover(null)}>
            <Star fill={fill} />
          
            {!readOnly && (
              <>
                <div onMouseEnter={() => setHover(star - 0.5)} onClick={() => onChange(star - 0.5)}
                  className={styles.rating__leftSide}/>

                <div
                  onMouseEnter={() => setHover(star)} onClick={() => onChange(star)}
                  className={styles.rating__rightSide}/>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}