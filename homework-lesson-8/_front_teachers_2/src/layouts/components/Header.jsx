import { NavLink } from 'react-router'
import frontRoutes from '../../routes/frontRoutes'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.container}>
      <NavLink
        to={frontRoutes.pages.home}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Home
      </NavLink>
      <NavLink
        to={frontRoutes.pages.teachers.root}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Teachers
      </NavLink>
      <NavLink
        to={frontRoutes.pages.meeting}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Meetings
      </NavLink>
      <NavLink
        to={frontRoutes.pages.aboutApp}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        About app
      </NavLink>
      <NavLink
        to={frontRoutes.pages.aboutDev}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        About developers
      </NavLink>
    </header>
  )
}

export default Header
