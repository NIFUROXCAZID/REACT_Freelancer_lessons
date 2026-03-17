import { NavLink } from "react-router";

function Home() {
  return (
    <nav className="header">
      <NavLink to="/" className={({ isActive }) => (isActive ? "current-page" : "")}>
        Home
      </NavLink>
      <NavLink to="/buspage" className={({ isActive }) => (isActive ? "current-page" : "")}>
        BusPage
      </NavLink>
      <NavLink to="/hotelpage" className={({ isActive }) => (isActive ? "current-page" : "")}>
        HotelPage
      </NavLink>
      <NavLink to="/resultpage" className={({ isActive }) => (isActive ? "current-page" : "")}>
        ResultPage
      </NavLink>
    </nav>
  );
}

export default Home;
