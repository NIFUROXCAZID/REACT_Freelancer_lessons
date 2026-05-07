import { LogoutButton } from '@/features/auth/logout/ui/LogoutButton'

import { GoogleAuthProvider } from 'firebase/auth'

import { LoginLink } from '@/features/auth/login/ui/LoginLink'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'

export function UserInfo({ styles, variant }) {
  const user = useSelector(selectAuthUser)

  if (!user) {
    return (<div className={`${styles.header__user} ${variant === 'aside' ? styles['header__user--aside'] : ''}`}>
      <LoginLink styles={styles} variant="aside" />
    </div>) 
  }

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  return (
    <div className={`${styles.header__user} ${variant === 'aside' ? styles['header__user--aside'] : ''}`}>
      <div className={`${styles.header__userPhotoWrapper} ${variant === 'aside' ? styles['header__userPhotoWrapper--aside'] : ''}`}>
        {user.photoURL ? (
        <img src={user.photoURL} alt="user avatar" />
        ) : (
        <div className='icon_user'></div>
        )}
      </div>
      <div className={`${styles.header__userInfoWrapper} ${variant === 'aside' ? styles['header__userInfoWrapper--aside'] : ''}`}>
        <p>{user.email}</p>
      </div>
      <LogoutButton styles={styles} variant="aside" />
    </div>
  )
}
