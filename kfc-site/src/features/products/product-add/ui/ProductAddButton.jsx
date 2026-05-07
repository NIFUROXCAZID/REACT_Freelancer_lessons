import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function ProductAddButton() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.ProductEditPage.navigationPath())
  }
  return (
    <button className='defaultButton' onClick={onClick} >{t('addProduct')}</button>
  )
}
