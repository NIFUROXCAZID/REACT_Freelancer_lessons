import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

import pencilIcon from "@/assets/img/icons/pencil.svg";

export function NewsEditButton({ newsId, styles }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.NewsEditPage.navigationPath(newsId))
  }
  return (
    <button title={t('edit')} onClick={onClick}>
      <img src={pencilIcon} width="44" height="44" alt="Edit news"/>
    </button>
  )
}
