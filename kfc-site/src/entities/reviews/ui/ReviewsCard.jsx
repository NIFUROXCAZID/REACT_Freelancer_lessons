import StarRating from "@/shared/components/starsRating/StarRating";


export default function ReviewsCard({ reviews, children, styles }) {
  return (
    <article className={styles.reviews__item}>
      <div className={styles.reviews__imgZone}>
        {reviews.userAvatar ? (
        <img src={reviews.userAvatar} alt="user avatar" width="44" height="44"/>
        ) : (
        <div className='icon_user'></div>
        )}
        <p>{reviews.userName}</p>
      </div>
      <div className={styles.reviews__starsZone}>
        <StarRating value={reviews.rating} readOnly />
      </div>
      <div className={styles.reviews__infoZone}>
        <h3>{reviews.title}</h3>
        <p>{reviews.text}</p>
      </div>
      {children}
    </article>
  )
}