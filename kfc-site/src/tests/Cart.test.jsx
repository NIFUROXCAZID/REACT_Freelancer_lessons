import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { renderWithProviders } from './TestUtils'
import CartList from '@/widgets/CartList/CartList'

// ======================
// MOCKS
// ======================

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))

// mock API
let isLoadingMock = false
let cartMock = {}

vi.mock('@/entities/cartItem/api/cartItemApi', () => ({
  useGetUserCartQuery: () => ({
    data: cartMock,
    isLoading: isLoadingMock,
  }),
}))

// mock child component
vi.mock('../CartItemCardWithActions', () => ({
  CartItemCardWithActions: ({ item }) => (
    <div>{item.name}</div>
  ),
}))



// ======================
// TESTS
// ======================

describe('CartList', () => {

  beforeEach(() => {
    isLoadingMock = false
    cartMock = {}
  })

  it('shows loading state', () => {
    isLoadingMock = true

    renderWithProviders(
      <CartList userId="1" styles={{}} />
    )

    expect(screen.getByText('loading')).toBeInTheDocument()
  })

  it('shows empty cart message', () => {
    cartMock = {}

    renderWithProviders(
      <CartList userId="1" styles={{}} />
    )

    expect(screen.getByText('cartEmpty')).toBeInTheDocument()
  })

  it('renders cart items', () => {
    cartMock = {
      1: { name: 'Burger', price: 10, quantity: 2 },
      2: { name: 'Fries', price: 5, quantity: 1 },
    }

    renderWithProviders(
      <CartList userId="1" styles={{}} />
    )

    expect(screen.getByText('Burger')).toBeInTheDocument()
    expect(screen.getByText('Fries')).toBeInTheDocument()
  })

  it('shows total price', () => {
    cartMock = {
      1: { name: 'Burger', price: 10, quantity: 2 },
    }

    renderWithProviders(
      <CartList userId="1" styles={{}} />
    )

    // 10 * 2 = 20
    expect(screen.getByText(/20/)).toBeInTheDocument()
  })

  it('shows pay button when items exist', () => {
    cartMock = {
      1: { name: 'Burger', price: 10, quantity: 1 },
    }

    renderWithProviders(
      <CartList userId="1" styles={{}} />
    )

    expect(screen.getByText('goToPay')).toBeInTheDocument()
  })

})