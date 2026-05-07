import CartItemCard from '@/entities/cartItem/ui/CartItemCard'
import {CartIncreaseButton, CartDecreaseButton, CartRemoveButton,} from '@/features/cart'

export function CartItemCardWithActions({item, userId, productId, styles}) {
  const quantity = item.quantity || 1

  return (
    <CartItemCard item={item} styles={styles}>
      <div className={styles.cart__actionsZone}>
        <CartDecreaseButton userId={userId} productId={productId} styles={styles}/>
        <span className={styles.cart__itemQuantity}>{quantity}</span>
        <CartIncreaseButton userId={userId} productId={productId} product={item} styles={styles}/>
        <CartRemoveButton userId={userId} productId={productId} styles={styles}/>
      </div>
    </CartItemCard>
  )
}