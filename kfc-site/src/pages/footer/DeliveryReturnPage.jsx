
import { useTranslation } from 'react-i18next'

export default function DeliveryReturnPage() {
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
    <h1 className="h1_footer">Політика повернення/скасування</h1>
    <section className="containerBg">
      <p>Продукти харчування не підлягають обміну (поверненню) згідно з Постановою Кабінету Міністрів України від 19 березня 1994 року № 172.</p>
    </section>
  </section>
</>
)
}