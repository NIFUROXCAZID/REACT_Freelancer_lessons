import { routes } from '@/router/routes'
import { NavLink } from 'react-router'

function MainMenu() {
  const menuItems = routes[0].children.filter((route) => route?.meta?.title)
  return (
    <nav>
      <ul>
        {menuItems.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path}>{route.meta.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
