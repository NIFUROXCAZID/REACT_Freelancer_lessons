import MainMenu from '@/components/MainMenu'
import { Outlet } from 'react-router'
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <MainMenu />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
