import ProductCard from '@/entities/product/ui/ProductCard'
import CartAddButton from '@/features/cart/cart-add/CartAddButton'
import { ProductEditButton, ProductDeleteButton } from '@/features/products'
import { roles } from '@/shared/config/roles'

export function ProductCardWithActions({ product, user, role, onDeleted }) {
  const isOwner = user && product.ownerId === user.uid
  const canEdit = role === roles.admin || (role === roles.manager && isOwner)
  const canDelete = role === roles.admin || (role === roles.manager && isOwner)
  const canAddToCart = role === roles.user

  return (
    <ProductCard product={product}>
      <div className="flex flex-nowrap gap-1 w-full justify-between absolute bottom-2 left-2 right-2">
        {canAddToCart && <CartAddButton product={product} userId={user.uid} />}
        {canEdit && <ProductEditButton productId={product.id} />}
        {canDelete && (
          <ProductDeleteButton productId={product.id} onDeleted={onDeleted} />
        )}
      </div>
    </ProductCard>
  )
}
