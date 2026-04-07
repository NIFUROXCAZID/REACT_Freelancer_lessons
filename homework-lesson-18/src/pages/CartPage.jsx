import CartList from '../widgets/CartList/CartList'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function CartPage() {
  const user = useSelector((state) => state.auth.user)
  const { t } = useTranslation()
  if (!user) return <div>{t('authOnly')}</div>
  return (
    <div>
      <h1>{t('myCart')}</h1>
      <CartList userId={user.uid} />
    </div>
  )
}
