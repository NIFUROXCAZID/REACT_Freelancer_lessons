import { useNavigate } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useTranslation } from 'react-i18next'

import pencilIcon from "@/assets/img/icons/pencil.svg";

export function ProductEditButton({ productId, styles }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.ProductEditPage.navigationPath(productId))
  }
  return (
    <button className={styles.productActBtn} title={t('edit')} onClick={onClick}>
      <img src={pencilIcon} width="44" height="44" alt="Edit product"/>
    </button>
  )
}
