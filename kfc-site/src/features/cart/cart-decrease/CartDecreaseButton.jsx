import { useDecreaseQuantityMutation } from '../../../entities/cartItem/api/cartItemApi'

export default function CartDecreaseButton({ userId, productId, styles }) {
  const [decrease] = useDecreaseQuantityMutation()
  return (
    <button className={styles.cart__countBtn} onClick={() => decrease({ userId, productId })}><span>-</span></button>
  )
}
