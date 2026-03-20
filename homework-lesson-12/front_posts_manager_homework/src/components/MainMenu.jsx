import { routes } from '@/router/router'
import { NavLink } from 'react-router'
import styles from './MainMenu.module.css'

function MainMenu() {
  return (
    <nav className={styles.mainMenu}>
      <span className={styles.logo}>PostsApp</span>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        {routes[0].children.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path} className={styles.menuItem}>
              {route.meta.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
