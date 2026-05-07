import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderWithProviders } from './TestUtils'

// ======================
// MOCK STATE (ВАЖЛИВО)
// ======================

let isLoadingMock = false

const mockProducts = [
  { id: 1, name: 'Burger', type: 'burger', isFavorite: true },
  { id: 2, name: 'Fries', type: 'snacks', isFavorite: false },
]

// ======================
// MOCKS
// ======================

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))

vi.mock('@/entities/product/api/productApi', () => ({
  useGetAllProductsQuery: () => ({
    data: mockProducts,
    isLoading: isLoadingMock,
  }),
}))

vi.mock('@/features/products/ProductCardWithActions', () => ({
  ProductCardWithActions: ({ product }) => (
    <div>{product.name}</div>
  ),
}))

import ProductsList from '@/widgets/ProductsList/ProductsList'

// ======================
// TESTS
// ======================

describe('ProductsList', () => {

  beforeEach(() => {
    isLoadingMock = false
  })

  it('renders products', () => {
    renderWithProviders(
      <ProductsList user={{ id: 1 }} role="user" styles={{}} />
    )

    expect(screen.getByText('Burger')).toBeInTheDocument()
    expect(screen.getByText('Fries')).toBeInTheDocument()
  })

  it('search filters products', () => {
    renderWithProviders(
      <ProductsList user={{ id: 1 }} role="user" styles={{}} />
    )

    const input = screen.getByPlaceholderText('search')

    fireEvent.change(input, {
      target: { value: 'Burger' },
    })

    expect(screen.getByText('Burger')).toBeInTheDocument()
    expect(screen.queryByText('Fries')).not.toBeInTheDocument()
  })

  it('shows favorite filter button', () => {
    renderWithProviders(
      <ProductsList user={{ id: 1 }} role="user" styles={{}} />
    )

    expect(screen.getByText('onlyFavorite')).toBeInTheDocument()
  })

  it('favorite filter toggles UI', () => {
    renderWithProviders(
      <ProductsList user={{ id: 1 }} role="user" styles={{}} />
    )

    const btn = screen.getByText('onlyFavorite')

    fireEvent.click(btn)

    expect(screen.getByText('Burger')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    isLoadingMock = true

    renderWithProviders(
      <ProductsList user={{ id: 1 }} role="user" styles={{}} />
    )

    expect(screen.getByText('loading')).toBeInTheDocument()
  })

})