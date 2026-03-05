import { Route, Routes } from 'react-router'
import MainLayout from '../components/MainLayout'
import Home from '../views/Home'
import Shop from '../views/products/Shop'
import ProductsList from '../views/products/ProductsList'
import Rules from '../views/Rules'
import Contacts from '../views/Contacts'
import Page404 from '../views/Page404'

// Маршрутизація де імпортуєм компоненти і вставляєм по посиланню

// index означаж що коли url = / то підставляти {<Home />} 
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="shop">
                    <Route index element={<Shop />} />
                    <Route path=":category" element={<ProductsList />} />
                </Route>
                <Route path="rules" element={<Rules />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
