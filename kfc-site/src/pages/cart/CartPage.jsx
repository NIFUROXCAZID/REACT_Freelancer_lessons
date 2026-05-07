import CartList from '../../widgets/CartList/CartList'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import styles from "./cart.module.scss";

export default function CartPage() {
  const user = useSelector((state) => state.auth.user)
  const { t } = useTranslation()
  if (!user) return <section className='containerBg'>{t('authOnly')}</section>
  return (
    <section className='containerBg'>
      <h1>{t('myCart')}</h1>
      <CartList userId={user.uid} styles={styles}/>
    </section>
  )
}
