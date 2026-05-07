import { useRemoveFromCartMutation } from '../../../entities/cartItem/api/cartItemApi'
import { useTranslation } from 'react-i18next'

export default function CartRemoveButton({ userId, productId, styles }) {
  const { t } = useTranslation()
  const [remove] = useRemoveFromCartMutation()
  return (
    <button className={styles.cart__removeBtn} onClick={() => remove({ userId, productId })}>{t('delete')}</button>
  )
}
