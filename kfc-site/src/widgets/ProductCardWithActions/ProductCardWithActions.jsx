import ProductCard from '@/entities/product/ui/ProductCard'
import CartAddButton from '@/features/cart/cart-add/CartAddButton'
import { ProductEditButton, ProductDeleteButton } from '@/features/products'
import { FavoriteButton } from '@/features/products/product-favorites/ui/FavoritesButton'
import { ReactionButtons } from "@/features/products/product-reaction/ui/ProductReactionButtons"
import { roles } from '@/shared/config/roles'

export function ProductCardWithActions({ product, user, role, onDeleted, styles }) {
  const canEdit = role === roles.admin || role === roles.manager
  const canDelete = role === roles.admin || role === roles.manager
  const canAddToCart = role === roles.user
  const canReactions = role === roles.user
  const canFavorites = role === roles.user

  return (
    <ProductCard product={product} styles={styles}>
      <div className={styles.products__btnWrap}>
        {canAddToCart && <CartAddButton product={product} userId={user.uid} styles={styles} />}
        {canEdit && <ProductEditButton productId={product.id} styles={styles} />}
        {canDelete && (
          <ProductDeleteButton productId={product.id} onDeleted={onDeleted} styles={styles} />
        )}
        {canReactions && <ReactionButtons productId={product.id} userId={user.uid} product={product} styles={styles} />}
        {canFavorites && <FavoriteButton productId={product.id} userId={user.uid} isFavorite={product.isFavorite} styles={styles}/>}
      </div>
    </ProductCard>
  )
}
