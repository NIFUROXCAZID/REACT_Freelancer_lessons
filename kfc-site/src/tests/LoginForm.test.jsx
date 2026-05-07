import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '@/features/auth/login/ui/LoginForm'
import { describe, it, expect, vi } from 'vitest'
import { renderWithProviders } from './TestUtils'

// ДЛЯ ІЩОЛЮВАННЯ КОМПОНЕНТА
vi.mock('@/features/auth/login/model/useLogin', () => ({
  useLogin: () => ({
    handleSubmit: vi.fn(),
    isLoading: false,
    error: null,
  }),
}))
// ДЛЯ i18n РОБОТИ В ТЕСТАХ
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))



describe('LoginForm', () => {
  it('renders inputs and button', () => {
    renderWithProviders(<LoginForm />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/pass/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /log-in/i })).toBeInTheDocument()
  })

  it('allows typing', () => {
    renderWithProviders(<LoginForm />)
    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/pass/i)
    fireEvent.change(email, { target: { value: 'test@test.com' } })
    fireEvent.change(password, { target: { value: '123456' } })
    expect(email).toHaveValue('test@test.com')
    expect(password).toHaveValue('123456')
  })

  it('submit works', () => {
    renderWithProviders(<LoginForm />)
    const email = screen.getByPlaceholderText(/email/i)
    const password = screen.getByPlaceholderText(/pass/i)
    const button = screen.getByRole('button', { name: /log-in/i })
    fireEvent.change(email, { target: { value: 'test@test.com' } })
    fireEvent.change(password, { target: { value: '123456' } })
    fireEvent.click(button)
  })

})