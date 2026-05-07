import { useTranslation } from 'react-i18next'
import ContactsForm from '@/entities/contacts/ui/ContactForm'
export default function ContactsPage() {
  const { t } = useTranslation()
  return (
    <>
      <section className="containerBg">
        <h1>Зв'яжіться з нами</h1>
        <p>Якщо у вас виникли запитання щодо роботи ресторанів KFC — наприклад, про меню, замовлення чи обслуговування — будь ласка, заповніть форму звернення до служби підтримки. Ми уважно розглянемо ваш запит і надамо відповідь у найкоротший можливий термін.</p>
        <ContactsForm/>
      </section>
    </>
  )
}