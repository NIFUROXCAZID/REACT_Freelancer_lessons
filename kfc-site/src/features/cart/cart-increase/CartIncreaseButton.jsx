import { useAddOrIncreaseToCartMutation } from '../../../entities/cartItem/api/cartItemApi'

export default function CartIncreaseButton({ userId, productId, product, styles }) {
  const [increase] = useAddOrIncreaseToCartMutation()
  return (
    <button className={styles.cart__countBtn} onClick={() => increase({ userId, productId, product })}><span>+</span></button>
  )
}
