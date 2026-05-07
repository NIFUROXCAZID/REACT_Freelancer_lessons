import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderWithProviders } from './TestUtils'
import ContactsForm from '@/entities/contacts/ui/ContactForm'

// ======================
// MOCKS
// ======================

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))

const mockSendMessage = vi.fn()

vi.mock('@/features/contacts/api/contactsApi', () => ({
  useSendContactMessageMutation: () => [
    mockSendMessage,
    { isLoading: false, error: null }
  ],
}))

// ======================
// TESTS
// ======================

describe('ContactsForm', () => {

  beforeEach(() => {
    mockSendMessage.mockReset()
  })

  it('renders form', () => {
    renderWithProviders(<ContactsForm />)

    expect(screen.getByPlaceholderText('eamilYours')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contactMessage')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'sendMessage' }))
      .toBeInTheDocument()
  })

  it('shows validation errors', async () => {
    renderWithProviders(<ContactsForm />)

    fireEvent.click(screen.getByRole('button', { name: 'sendMessage' }))

    await waitFor(() => {
      expect(screen.getByText('emailRequired')).toBeInTheDocument()
      expect(screen.getByText('textRequired')).toBeInTheDocument()
    })
  })

  it('submits form', async () => {
    mockSendMessage.mockResolvedValueOnce({})

    renderWithProviders(<ContactsForm />)

    fireEvent.change(screen.getByPlaceholderText('eamilYours'), {
      target: { value: 'test@test.com' },
    })

    fireEvent.change(screen.getByPlaceholderText('contactMessage'), {
      target: { value: 'Hello message' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'sendMessage' }))

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith({
        email: 'test@test.com',
        message: 'Hello message',
      })
    })
  })

  it('shows success message', async () => {
    mockSendMessage.mockResolvedValueOnce({})

    renderWithProviders(<ContactsForm />)

    fireEvent.change(screen.getByPlaceholderText('eamilYours'), {
      target: { value: 'test@test.com' },
    })

    fireEvent.change(screen.getByPlaceholderText('contactMessage'), {
      target: { value: 'Hello message' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'sendMessage' }))

    await waitFor(() => {
      expect(screen.getByText('messageWasSent')).toBeInTheDocument()
    })
  })
})