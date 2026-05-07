export function UserItem({ user, children, styles }) {
  return (
    <>
      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>
        <div className={styles.userPhoto}>
          {user.photoURL ? (
        <img src={user.photoURL} alt="user avatar" width="44" height="44"/>
        ) : (
        <div className='icon_user'></div>
        )}
        </div>
      </td>
      <td>{user.role}</td>
      <td>{children}</td>
    </>
  )
}