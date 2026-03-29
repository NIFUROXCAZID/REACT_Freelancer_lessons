import { routes } from "@/app/router/routes";
import { NavLink } from "react-router";

function MainMenu() {
  const routesForMenu = routes[0].children.filter((route) => route.meta?.title);
  return (
    <nav>
      <ul>
        {routesForMenu.map((route, index) => (
          <li key={index}>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={route.path}>
              {route.meta.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
