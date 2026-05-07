import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

import pencilIcon from "@/assets/img/icons/pencil.svg";

export function UserEditButton({ userId, styles }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.UserEditPage.navigationPath(userId))
  }
  return (
    <button className={styles.userEditBtn} title={t('editUser')} onClick={onClick}>
      <img src={pencilIcon} width="44" height="44" alt="Edit user"/>
    </button>
  )
}
