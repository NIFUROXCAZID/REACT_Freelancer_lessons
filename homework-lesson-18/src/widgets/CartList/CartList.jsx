import { useGetUserCartQuery } from '@/entities/cartItem/api/cartItemApi'
import { CartItemCardWithActions } from '../CartItemCardWithActions'
import { useTranslation } from 'react-i18next'

export default function CartList({ userId }) {
  const { t } = useTranslation()
  const { data: cart = {}, isLoading } = useGetUserCartQuery(userId)
  const items = Object.entries(cart).filter(([_, item]) => item)
  .sort(([idA], [idB]) => idA.localeCompare(idB))
  const total = items.reduce(
    (sum, [_, item]) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )
  if (isLoading) return <div>{t('loading')}</div>
  return (
    <div>
      {items.length === 0 && <div>{t('cartEmpty')}</div>}
      {items.map(([productId, item]) => (
        <CartItemCardWithActions
          key={productId}
          item={item}
          userId={userId}
          productId={productId}
        />
      ))}
      {items.length > 0 && (
        <div style={{ marginTop: 16, fontWeight: 'bold' }}>
          {t('totalCost')}: {total}
        </div>
      )}
    </div>
  )
}