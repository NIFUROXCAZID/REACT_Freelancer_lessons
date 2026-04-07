// --------------- Задачі 1 і 2 виконати за зразком product----------
// Задача 1. Додати у entites UserForm.  Використати у UserEditForm
//  компонент UserForm передавши потрібну функцію
// Задача 2. Додати CartItemCardWithActions і використати у CartList.

import CartItemCard from '@/entities/cartItem/ui/CartItemCard'
import {CartIncreaseButton, CartDecreaseButton, CartRemoveButton,} from '@/features/cart'

export function CartItemCardWithActions({item, userId, productId,}) {
  const quantity = item.quantity || 1

  return (
    <CartItemCard item={item}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <CartDecreaseButton userId={userId} productId={productId} />
        <span>{quantity}</span>
        <CartIncreaseButton
          userId={userId}
          productId={productId}
          product={item}
        />
        <CartRemoveButton userId={userId} productId={productId} />
      </div>
    </CartItemCard>
  )
}