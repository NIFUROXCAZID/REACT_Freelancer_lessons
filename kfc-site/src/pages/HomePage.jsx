import { useTranslation } from 'react-i18next'
import RunLine from '@/shared/components/runLine/RunLine'
import KfcSlider from '@/shared/components/kfcSlider/KfcSlider'
import Contents from '@/shared/components/contents/Contents'
import Questions from '@/shared/components/questions/Questions'

export default function HomePage() {
const { t } = useTranslation()
return (
<>
  <KfcSlider />
  <RunLine />
  <section className="containerBg">
    <Contents content={[{ title: 'Відмінні особливості та переваги для відвідувачів', href: '#standout' }, { title: 'Що приваблює відвідувачів', href: '#attracts' }, { title: 'Часті запитання', href: '#questions' },]} />
      
    <h1>Сайт про смажену курку, що розповзлась по всьому світу.</h1>
    <ul>
      <li><strong>Ролі:</strong> admin manager user guest</li>
      <li><strong>Паролі для всіх:</strong> 123456 </li>
      <li><strong>Логіни для ролей:</strong></li>
      <li>admin@gmail.com</li>
      <li>manager@gmail.com</li>
      <li>user@gmail.com</li>
      <li>guest@gmail.com</li>
    </ul>
    <br />
    <ul>
      <li><strong>React 19 + Vite</strong> SPA application</li>

      <li><strong>Feature-Sliced Design (FSD)</strong> architecture</li>
      <li><strong>Redux Toolkit + RTK Query</strong> state management and API handling</li>
      <li><strong>Optimistic updates and cache synchronization</strong> using RTK Query</li>

      <li><strong>Firebase Authentication</strong> (login, registration, session persistence)</li>
      <li><strong>Protected routes and auth guards</strong></li>

      <li><strong>React Hook Form + Yup</strong> form validation</li>

      <li><strong>Products filtering and sorting</strong></li>
      <li><strong>Favorites and likes system</strong></li>
      <li><strong>Shopping cart functionality</strong></li>

      <li><strong>i18next</strong> multilingual support</li>
      <li><strong>Dark / Light theme switching</strong></li>

      <li><strong>Lazy loading</strong> for route optimization</li>
      <li><strong>Error boundaries</strong> for crash handling</li>

      <li><strong>Interactive restaurants map</strong> (Leaflet)</li>

      <li><strong>Responsive design</strong> up to 320px smooth</li>
      <li><strong>SCSS Modules</strong> styling architecture</li>
      <li><strong>Icon font system</strong> for scalable UI icons</li>

      <li><strong>Component testing</strong> with Vitest and React Testing Library</li>
    </ul>
    <h2 id="standout">Відмінні особливості та переваги для відвідувачів</h2>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><strong>Параметр</strong></td>
            <td><strong>Деталі</strong></td>
          </tr>
          <tr>
            <td>Офіційний сайт</td>
            <td>
              <a href='https://www.kfc.ua/' className='kfc_off_ref' target="_blank" rel="noopener noreferrer">kfc.ua</a>
            </td>
          </tr>
          <tr>
            <td>Асортимент меню</td>
            <td>Курячі крильця, бургери, роли, баскети, гарніри та десерти</td>
          </tr>
          <tr>
            <td>Популярні сети</td>
            <td>Баскет на компанію, бокс-мастери, ланч-бокси</td>
          </tr>
          <tr>
            <td>Напої</td>
            <td>Кола, Фанта, спрайт, кава, чай та сезонні напої</td>
          </tr>
          <tr>
            <td>Середній чек</td>
            <td>Від 120 до 300 грн залежно від замовлення</td>
          </tr>
          <tr>
            <td>Способи замовлення</td>
            <td>Зала ресторану, доставка, самовивіз, мобільний додаток</td>
          </tr>
          <tr>
            <td>Час приготування</td>
            <td>У середньому 5–15 хвилин залежно від завантаженості</td>
          </tr>
          <tr>
            <td>Графік роботи</td>
            <td>Більшість ресторанів працює з 09:00 до 22:00</td>
          </tr>
          <tr>
            <td>Локації</td>
            <td>Великі міста України: Київ, Львів, Харків, Дніпро, Одеса</td>
          </tr>
          <tr>
            <td>Сервіси</td>
            <td>Доставка через Glovo, Bolt Food, власний сайт та додаток</td>
          </tr>
          <tr>
            <td>Мобільний додаток</td>
            <td>Доступний для iOS та Android із бонусами та акціями</td>
          </tr>
          <tr>
            <td>Акції та пропозиції</td>
            <td>Комбо-меню, знижки, сезонні бургери та промокоди</td>
          </tr>
          <tr>
            <td>Обслуговування клієнтів</td>
            <td>Швидка каса, самообслуговування, підтримка через гарячу лінію</td>
          </tr>
          <tr>
            <td>Система лояльності</td>
            <td>Бонуси за покупки через додаток та персональні пропозиції</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>
      KFC в Україні — це не просто фастфуд, а місце, де можна швидко та смачно поїсти, провести час із друзями або зробити перерву під час насиченого дня. Поєднання хрусткої курки, фірмових соусів і зручного сервісу робить його одним із найпопулярніших закладів швидкого харчування.
    </p>
    <ol>
      <li>
        <strong>Різноманітне меню:</strong> KFC пропонує великий вибір страв — від класичних крилець і ніжних стріпсів до бургерів із соковитою куркою та фірмовими соусами. Кожен знайде щось під свій смак, чи то ситний обід, чи швидкий перекус.
      </li>
      <li>
        <strong>Зручність і швидкість:</strong> Замовлення готується дуже швидко, що робить KFC ідеальним варіантом для обіду в офісі, навчанні або під час прогулянки містом. Також доступна доставка прямо додому.
      </li>
      <li>
        <strong>Атмосфера для відпочинку:</strong> Ресторани KFC створені так, щоб можна було комфортно посидіти з друзями, поспілкуватися або просто перепочити. Сучасний інтер’єр і музика створюють невимушену атмосферу.
      </li>
      <li>
        <strong>Мобільний додаток:</strong> Через додаток KFC можна швидко оформити замовлення, отримати знижки та брати участь в акціях. Це зручно для тих, хто цінує свій час.
      </li>
      <li>
        <strong>Доступні ціни:</strong> Меню KFC дозволяє смачно поїсти без великих витрат. Регулярні комбо-пропозиції роблять замовлення ще вигіднішим.
      </li>
      <li>
        <strong>Акції та бонуси:</strong> Постійні промо-пропозиції, сезонні новинки та спеціальні сети дозволяють кожного разу відкривати щось нове у знайомому меню.
      </li>
    </ol>
    <h2 id='attracts'>Що приваблює відвідувачів</h2>
    <p>
      KFC виділяється серед інших закладів швидкого харчування завдяки поєднанню смаку, швидкого обслуговування та стабільної якості. Це місце, куди приходять не лише поїсти, а й провести час у комфортній атмосфері.
    </p>
    <ul>
      <li>
        <strong>Фірмовий смак:</strong> Хрустка курка з унікальною паніровкою та спеціями — головна причина популярності KFC у всьому світі.
      </li>
      <li>
        <strong>Швидке обслуговування:</strong> Навіть у години пік замовлення видаються досить швидко, що зручно для зайнятих людей.
      </li>
      <li>
        <strong>Зручні локації:</strong> Ресторани розташовані у торгових центрах, на центральних вулицях та біля транспортних вузлів.
      </li>
      <li>
        <strong>Сучасні сервіси:</strong> Самообслуговування, термінали замовлення та онлайн-доставка роблять процес максимально простим.
      </li>
      <li>
        <strong>Постійні оновлення меню:</strong> Нові бургери, сезонні пропозиції та експериментальні страви додають різноманітності.
      </li>
    </ul>
    <h2 id='questions'>Часті запитання</h2>
    <Questions questions={[ { title: 'Які страви є в меню KFC?' , text: 'У KFC можна замовити курячі бургери, стрипси, байтси, відра з куркою, твістери, а також гарніри, салати та десерти.' }, { title: 'Чи є в KFC доставка?' , text: 'Так, KFC пропонує доставку через власний сервіс або партнерські платформи доставки у більшості міст.' }, { title: 'Чи можна замовити їжу онлайн?' , text: 'Так, замовлення можна оформити через сайт або мобільний додаток KFC з можливістю самовивозу або доставки.' }, { title: 'Які є популярні сети в KFC?' , text: 'Найпопулярніші сети включають баскети з куркою, комбо-набори з бургером, картоплею та напоєм.' }, { title: 'Чи є в KFC вегетаріанські опції?' , text: 'У деяких ресторанах доступні гарніри, салати та снеки без м’яса, але асортимент залежить від локації.' }, { title: 'Чи можна замовити KFC для великої компанії?' , text: 'Так, доступні великі сети та баскети, які підходять для компаній або святкових подій.' }, { title: 'Чи є акції та знижки в KFC?' , text: 'KFC регулярно проводить акції, сезонні пропозиції та знижки через додаток або спеціальні комбо.' }, { title: 'Який час роботи KFC?' , text: 'Графік роботи залежить від конкретного ресторану, зазвичай зранку до пізнього вечора або 24/7 у великих містах.' } ]} />
  </section>
</>
)
}