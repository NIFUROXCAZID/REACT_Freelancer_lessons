import { screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import SignUpForm from '@/features/auth/signUp/ui/SignUpForm'
import { renderWithProviders } from './TestUtils'

// mock signup hook
vi.mock('@/features/auth/signUp/model/useSignUp', () => ({
  useSignUp: () => ({
    signUp: vi.fn(),
    isLoading: false,
    error: null,
  }),
}))

// mock i18n
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))

describe('SignUpForm', () => {
  it('renders all inputs and button', () => {
    renderWithProviders(<SignUpForm />)

    expect(screen.getByPlaceholderText(/userName/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/userEmail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/userPhoto/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/^pass$/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign-up/i })
    ).toBeInTheDocument()
  })

  it('allows typing in all fields', () => {
    renderWithProviders(<SignUpForm />)

    const name = screen.getByPlaceholderText(/userName/i)
    const email = screen.getByPlaceholderText(/userEmail/i)
    const photo = screen.getByPlaceholderText(/userPhoto/i)
    const password = screen.getByPlaceholderText(/^pass$/i)

    fireEvent.change(name, {
      target: { value: 'John Doe' },
    })

    fireEvent.change(email, {
      target: { value: 'john@test.com' },
    })

    fireEvent.change(photo, {
      target: { value: 'https://test.com/photo.jpg' },
    })

    fireEvent.change(password, {
      target: { value: 'Password123' },
    })

    expect(name).toHaveValue('John Doe')
    expect(email).toHaveValue('john@test.com')
    expect(photo).toHaveValue('https://test.com/photo.jpg')
    expect(password).toHaveValue('Password123')
  })

  it('submit button works', () => {
    renderWithProviders(<SignUpForm />)

    const name = screen.getByPlaceholderText(/userName/i)
    const email = screen.getByPlaceholderText(/userEmail/i)
    const password = screen.getByPlaceholderText(/^pass$/i)

    const button = screen.getByRole('button', {
      name: /sign-up/i,
    })

    fireEvent.change(name, {
      target: { value: 'John Doe' },
    })

    fireEvent.change(email, {
      target: { value: 'john@test.com' },
    })

    fireEvent.change(password, {
      target: { value: 'Password123' },
    })

    fireEvent.click(button)
  })
})