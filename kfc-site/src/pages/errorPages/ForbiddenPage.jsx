import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { frontRoutes } from '@/shared/config/routes/frontRoutes';

export default function ForbiddenPage() {
  const { t } = useTranslation()
  return ( <>
    <section>
      <div className="red_symbol">
        <div className="red_symbol__red"></div>
        <div className="red_symbol__grey"></div>
        <div className="red_symbol__red"></div>
        <div className="red_symbol__grey"></div>
        <div className="red_symbol__red"></div>
      </div>
      <h1 className="h1_footer">{t('forbiddenPageTitle')}</h1>
      <section className="containerBg">
        <p style={{textAlign: "center"}}>{t('forbiddenPage')} <strong>{t('mainPage')}</strong></p>
        <div className='flex_center'>
          <Link className='defaultButton' to={frontRoutes.pages.HomePage.navigationPath}><span>{t('toHome')}</span></Link>
        </div>
      </section>
    </section>
  </>
  )
}