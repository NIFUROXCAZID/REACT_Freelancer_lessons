import { useSetReactionMutation } from "@/entities/product/api/productApi"
import clsx from "clsx"

export const ReactionButtons = ({ productId, userId, product, styles }) => {
  const [setReaction] = useSetReactionMutation()

  const current = product.userReaction // 👈 ОЦЕ головне

  const handleReaction = (type) => {
    setReaction({ productId, userId, type })
  }

  return (
    <div className={styles.products__reactionsBtnWrap}>
      <button
        onClick={() => handleReaction("like")}
        className={clsx(styles.products__reactionsBtn, current === "like" && styles["products__reactionsBtn--active"])}>👍</button>

      <button
        onClick={() => handleReaction("dislike")}
        className={clsx(styles.products__reactionsBtn, current === "dislike" && styles["products__reactionsBtn--active"])}>👎</button>
    </div>
  )
}