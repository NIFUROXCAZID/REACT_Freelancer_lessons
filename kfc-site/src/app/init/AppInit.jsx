import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/shared/config/firebase-config'
import { logout } from '@/features/auth'
import { useRefreshMutation } from '@/features/auth/api/authApi'

export function AppInit() {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const [refresh] = useRefreshMutation()

  // 🔹 AUTH логіка
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await refresh().unwrap()
        } catch {
          dispatch(logout())
        }
      } else {
        dispatch(logout())
      }
    })

    return () => unsubscribe()
  }, [dispatch, refresh])

  // 🔹 i18n синхронізація між вкладками
  useEffect(() => {
    const onStorage = (e) => {
      if (
        e.key === 'i18nextLng' &&
        e.newValue &&
        e.newValue !== i18n.language
      ) {
        i18n.changeLanguage(e.newValue)
      }
    }

    window.addEventListener('storage', onStorage)

    return () => window.removeEventListener('storage', onStorage)
  }, [i18n])

  return null
}
