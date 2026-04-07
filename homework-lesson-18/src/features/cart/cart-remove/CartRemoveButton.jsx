import { useRemoveFromCartMutation } from '../../../entities/cartItem/api/cartItemApi'
import { useTranslation } from 'react-i18next'

export default function CartRemoveButton({ userId, productId }) {
  const { t } = useTranslation()
  const [remove] = useRemoveFromCartMutation()
  return (
    <button
      className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium"
      onClick={() => remove({ userId, productId })}
    >
      {t('delete')}
    </button>
  )
}
