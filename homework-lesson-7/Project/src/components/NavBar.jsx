import { NavLink } from 'react-router'

// Типу как хедер тобто панель навігації
function NavBar() {
    return (
        <nav className='navigation'>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => ['nav-link', isActive ? "nav-link--active" : ''].join(' ')}>Головна</NavLink></li>
                <li><NavLink to="/shop" className={({ isActive }) => ['nav-link', isActive ? "nav-link--active" : ''].join(' ')}>Магазин</NavLink></li>
                <li><NavLink to="/rules" className={({ isActive }) => ['nav-link', isActive ? "nav-link--active" : ''].join(' ')}>Правила оплати</NavLink></li>
                <li><NavLink to="/contacts" className={({ isActive }) => ['nav-link', isActive ? "nav-link--active" : ''].join(' ')}>Контакти</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar
