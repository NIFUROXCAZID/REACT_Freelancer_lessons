import { useGetUserCartQuery } from '@/entities/cartItem/api/cartItemApi'
import { CartItemCardWithActions } from '../CartItemCardWithActions'
import { useTranslation } from 'react-i18next'

export default function CartList({ userId, styles }) {
  const { t } = useTranslation()
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId)
  const items = Object.entries(cart).filter(([_, item]) => item)
  .sort(([idA], [idB]) => idA.localeCompare(idB))
  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )
  if (isLoading) return <p>{t('loading')}</p>
  return (
    <div className={`${styles.cart} ${styles.cartList}`}>
      <div className={styles.cartList__wrapper}>
        {items.length === 0 && <h2 className={styles.cartList__empty}>{t('cartEmpty')}</h2>}
      {items.map(([productId, item]) => (
        <CartItemCardWithActions
          key={productId}
          item={item}
          userId={userId}
          productId={productId}
          styles={styles}
        />
      ))}
      </div>
      {items.length > 0 && (
          <div className={styles.cartList__payTotalZone}>
            <p className={styles.cart__total}>{t('totalCost')}: <strong>{total} {t('uah')}</strong></p>
            <button className='defaultButton'><span>{t('goToPay')}</span></button>
          </div>
      )}
    </div>
  )
}