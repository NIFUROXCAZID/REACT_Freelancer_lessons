import { LoginForm } from '../features/auth/login'
import { SignUpForm } from '../features/auth/signup'
import { useSearchParams, useNavigate } from "react-router"
import { useTranslation } from 'react-i18next'

export default function LoginPage() {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const mode = searchParams.get("mode") || "login"
  const isSignUp = mode === "signup"

  const toggleMode = () => {
    navigate(`?mode=${isSignUp ? "login" : "signup"}`)
  }

  return (
    <section className='containerBg' style={{ textAlign: 'center' }}>
      <h1>{isSignUp ? t('sign-up') : t('log-in')}</h1>
      {isSignUp ? (<SignUpForm />) : (<LoginForm />)}
      {/* От погано, ця кнопка робить не те саме, що в хедері, а інтуїтивно має. */}
      {/* Поправив, але наступного разу роби нормально 2 кнопки (Логіе Реєстрація і не понтуйся) */}
      <button style={{ minWidth: "220px" }} className='defaultButton' type="button" onClick={toggleMode}>
        {isSignUp ? t('log-in') : t('sign-up')}
      </button>

    </section>
  )
}
