import ProductsList from '../../widgets/ProductsList/ProductsList'
import { useSelector } from 'react-redux'

import { ErrorBoundary } from "react-error-boundary"
import ProductsErrorFallback from '@/shared/errorBoundries/ProductsErrorFallback'
import ProductAddButton from '../../features/products/product-add/ui/ProductAddButton'
import { useTranslation } from 'react-i18next'

import styles from "./products.module.scss";

export default function ProductsPage() {
  const { t } = useTranslation()
  const user = useSelector((state) => state.auth.user)
  const role = user?.role

  return (
    <section>
      <h1>{t('productsCatalog')}</h1>
      <ErrorBoundary FallbackComponent={ProductsErrorFallback}>
        {role === 'admin' || role === 'manager' ? (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <ProductAddButton />
          </div>
      ) : null}
        <ProductsList user={user} role={role} styles={styles} />
      </ErrorBoundary>
    </section>
  )
}
