import { frontRoutes } from '@/shared/config/routes/frontRoutes'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

export function NewsAddButton() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onClick = () => {
    navigate(frontRoutes.pages.NewsEditPage.navigationPath())
  }
  return (
    <button className='defaultButton' onClick={onClick} >{t('newsAdd')}</button>
  )
}
