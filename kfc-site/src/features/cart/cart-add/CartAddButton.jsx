import { useAddOrIncreaseToCartMutation } from '@/entities/cartItem/api/cartItemApi'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function CartAddButton({ product, userId }) {
  const { t } = useTranslation()
  const [addOrIncrease] = useAddOrIncreaseToCartMutation()

  // Попап для додавання в кошик
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    if (!showPopup) return
    const timer = setTimeout(() => setShowPopup(false), 600)
    return () => clearTimeout(timer)
  }, [showPopup])

  const handleAddToCart = async () => {
    await addOrIncrease({userId, productId: product.id, product,})
    setShowPopup(false)
    setTimeout(() => setShowPopup(true), 0)
  }

  return (
    <button className='defaultButton' style={{ width: '100%' }} onClick={handleAddToCart}>
      <span>{t('add')}</span>
      <span style={{ position: "absolute" }} className={`defaultButton__popupShow ${showPopup ? "isVisible" : ""}`} aria-hidden='true'>{t("added")}</span>
    </button>
  )
}
