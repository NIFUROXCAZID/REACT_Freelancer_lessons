import { UserList } from '@/widgets/userList/UserList'
import { useTranslation } from 'react-i18next'

import { ErrorBoundary } from "react-error-boundary"
import UsersErrorFallback from '@/shared/errorBoundries/UsersErrorFallback'

import styles from "./users.module.scss";

export default function UsersPage() {
  const { t } = useTranslation()
  
  return (
    
    <section className="containerBg">
      <ErrorBoundary FallbackComponent={UsersErrorFallback}>
        <h1>{t('users')}</h1>
        <UserList styles={styles} />
      </ErrorBoundary>
    </section>
  )
}
