import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

export function ReviewsAddButton() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.ReviewsEditPage.navigationPath())
  }
  return (
    <button style={{minWidth: "220px" }} className='defaultButton' onClick={onClick} >{t('reviewAdd')}</button>
  )
}
