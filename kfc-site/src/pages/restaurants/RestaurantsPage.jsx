import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import RestaurantsLocationsMap from '@/widgets/KfcMap/KfcLocationsMap';
import styles from "./restaurants.module.scss";

export default function RestaurantsPage() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="red_symbol">
        <div className="red_symbol__red"></div>
        <div className="red_symbol__grey"></div>
        <div className="red_symbol__red"></div>
        <div className="red_symbol__grey"></div>
        <div className="red_symbol__red"></div>
      </div>
      <section className="containerBg">
        <h1>Знайдіть свій місцевий ресторан</h1>
        <p>Більше 30 000 ресторанів KFC Сьогодні у світі налічується понад 30 000 ресторанів KFC у більш ніж 130 країнах. І це не межа! В Україні перший ресторан KFC відкрився у Києві в 2012 році. Наразі мережа в Україні має понад 60 закладів, де ви можете насолодитися смачною куркою</p>
      
        <RestaurantsLocationsMap styles={styles}/>

        <p>Замовляй онлайн: 1 грн = 1 бал. Накопичуй бали й переходь на нові рівні. Обмінюй бали в розділі «Нагороди» на страви, мерч та спеціальні події. Економ час із застосунком KFC: доставка, самовивіз, замовлення до столу.</p>
      </section>
    </section>
  )
}