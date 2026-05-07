import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { renderWithProviders } from './TestUtils'
import ReviewsList from '@/widgets/Reviews/ReviewsList'

// ======================
// MOCKS
// ======================

// i18n
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))

// API mock
vi.mock('@/entities/reviews/api/reviewsApi', () => ({
  useGetAllReviewsQuery: () => ({
    data: [
      { id: 1, text: 'Review 1', userId: 10 },
      { id: 2, text: 'Review 2', userId: 20 },
    ],
    isLoading: false,
  }),
}))

// Card mock
vi.mock('@/entities/reviews/ui/ReviewsCard', () => ({
  default: ({ reviews, children }) => (
    <div>
      <div>{reviews.text}</div>
      {children}
    </div>
  ),
}))

// Buttons mock
vi.mock('@/features/reviews', () => ({
  ReviewsEditButton: () => <button>Edit</button>,
  ReviewsDeleteButton: () => <button>Delete</button>,
}))

// ======================
// TESTS
// ======================

describe('ReviewsList', () => {

  it('renders reviews list', () => {
    renderWithProviders(
      <ReviewsList
        role="user"
        user={{ id: 1 }}
        styles={{}}
      />
    )

    expect(screen.getByText('Review 1')).toBeInTheDocument()
    expect(screen.getByText('Review 2')).toBeInTheDocument()
  })

  // it('shows loading state', () => {
  //   vi.doMock('@/entities/reviews/api/reviewsApi', () => ({
  //     useGetAllReviewsQuery: () => ({
  //       data: [],
  //       isLoading: true,
  //     }),
  //   }))

  //   renderWithProviders(
  //     <ReviewsList
  //       role="user"
  //       user={{ id: 1 }}
  //       styles={{}}
  //     />
  //   )

  //   expect(screen.getByText('loading')).toBeInTheDocument()
  // })

  it('shows edit/delete buttons for admin', () => {
    renderWithProviders(
      <ReviewsList
        role="admin"
        user={{ id: 999 }}
        styles={{}}
      />
    )

    expect(screen.getAllByText('Edit').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Delete').length).toBeGreaterThan(0)
  })

  it('shows edit/delete buttons for owner (same userId)', () => {
    renderWithProviders(
      <ReviewsList
        role="user"
        user={{ id: 10 }}
        styles={{}}
      />
    )

    expect(screen.getAllByText('Edit').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Delete').length).toBeGreaterThan(0)
  })

  it('hides buttons for other users', () => {
    renderWithProviders(
      <ReviewsList
        role="user"
        user={{ id: 999 }}
        styles={{}}
      />
    )

    expect(screen.queryByText('Edit')).not.toBeInTheDocument()
    expect(screen.queryByText('Delete')).not.toBeInTheDocument()
  })

})