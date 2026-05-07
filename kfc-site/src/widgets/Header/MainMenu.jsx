import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'
import { NavLink } from 'react-router-dom'
import { getPagesObjectList } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'



export function MainMenu() {
  const { t } = useTranslation()

  const user = useSelector(selectAuthUser)

  // Фільтруємо маршрути, які потрібно показати в меню (ті, що мають title)
  // І враховуємо requireAuth і ролі

  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false
    if (!meta.requireAuth) return true
    if (!user) return false
    if (!meta.roles) return true
    return meta?.roles.includes(user?.role)
  })

  return (
    <>
      {allowedRoutes.map(({ path, meta }) => (
        <li><NavLink key={path} to={path} aria-label={t(meta.title)} className={({ isActive }) => (isActive ? "current-page--1" : "")}>
          {t(meta.title)}
        </NavLink></li>
      ))}
    </>
  )
}
