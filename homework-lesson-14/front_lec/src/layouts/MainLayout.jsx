import MainMenu from '@/components/MainMenu'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
      <MainMenu />
      <Outlet />
    </div>
  )
}

export default MainLayout
