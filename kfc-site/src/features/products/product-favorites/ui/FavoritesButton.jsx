import { useToggleFavoriteMutation } from "@/entities/product/api/productApi"

export const FavoriteButton = ({ productId, userId, isFavorite, styles }) => {
  const [toggleFavorite] = useToggleFavoriteMutation()

  return (
    <button className={styles.products__favorites} onClick={() => toggleFavorite({ productId, userId })}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  )
}