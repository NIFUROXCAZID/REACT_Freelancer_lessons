// import { useLogout } from '@/features/auth/logout/model/useLogout'
import { LogoutButton } from '@/features/auth/logout/ui/LogoutButton'
import userDefault from '@/assets/user-default.svg'
import { GoogleAuthProvider } from 'firebase/auth'

import { Link } from 'react-router'
import { LoginLink } from '@/features/auth/login/ui/LoginLink'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'

export function UserInfo() {
  const user = useSelector(selectAuthUser)

  if (!user) {
    return <LoginLink style={{ marginLeft: 20 }} />
  }

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  return (
    <div className="flex items-center gap-3 ml-5 text-gray-600 dark:text-gray-300">
      <img
        src={user.photoURL || userDefault}
        alt="user avatar"
        className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <span className="font-medium">
        {user.email} - {user.role}{' '}
      </span>
      <LogoutButton />
    </div>
  )
}
