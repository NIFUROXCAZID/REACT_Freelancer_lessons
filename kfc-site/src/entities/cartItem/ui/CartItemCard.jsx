import { useTranslation } from 'react-i18next'

export default function CartItemCard({ item, children, styles }) {
  const { t } = useTranslation()
  const quantity = item.quantity || 1
  const total = (item.price || 0) * quantity
  return (
    <div className={styles.cart__item}>
      <div className={styles.cart__imgWrap}>
        {item.image && (
          <img className={styles.products__productImage} src={item.image}
            alt={item.name} width="249" height="166"
        />)}
      </div>
      <div className={styles.cart__info}>
        <h3>{item.name}</h3>
        <div className={styles.cart__itemPrice}>
          <p>{t('price')}: <strong>{item.price} {t('uah')}</strong></p>
          <p>{t('total')}: <strong>{total} {t('uah')}</strong></p>
        </div>
      </div>
      {children}
    </div>
  )
}
