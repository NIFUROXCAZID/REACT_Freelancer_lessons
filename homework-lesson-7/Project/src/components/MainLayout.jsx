import { Outlet } from 'react-router'
import NavBar from './NavBar'
// Отут основний скелет базовий типу 
function MainLayout() {
    return (
        <div className='container'>
            <header className='header'><NavBar /></header>
            <main className='main'><Outlet /></main>
            <footer className='footer'>Shop footer</footer>
        </div>
    )
}

export default MainLayout
