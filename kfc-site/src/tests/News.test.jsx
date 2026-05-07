import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { renderWithProviders } from './TestUtils'
import NewsList from '@/widgets/news/NewsList'

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
vi.mock('@/entities/news/api/newsApi', () => ({
  useGetAllNewsQuery: () => ({
    data: [
      { id: 1, title: 'News 1' },
      { id: 2, title: 'News 2' },
    ],
    isLoading: false,
  }),
}))

// child component mock
vi.mock('@/features/news', () => ({
  NewsEditButton: () => <button>Edit</button>,
  NewsDeleteButton: () => <button>Delete</button>,
}))

vi.mock('@/entities/news/ui/NewsCard', () => ({
  default: ({ news, children }) => (
    <div>
      <div>{news.title}</div>
      {children}
    </div>
  ),
}))

// ======================
// TESTS
// ======================

describe('NewsList', () => {

  it('renders news list', () => {
    renderWithProviders(
      <NewsList role="user" styles={{}} />
    )

    expect(screen.getByText('News 1')).toBeInTheDocument()
    expect(screen.getByText('News 2')).toBeInTheDocument()
  })

  // it('shows loading state', () => {
  //   vi.doMock('@/entities/news/api/newsApi', () => ({
  //     useGetAllNewsQuery: () => ({
  //       data: [],
  //       isLoading: true,
  //     }),
  //   }))

  //   renderWithProviders(
  //     <NewsList role="user" styles={{}} />
  //   )

  //   expect(screen.getByText('loading')).toBeInTheDocument()
  // })

  it('shows edit/delete buttons for admin', () => {
    renderWithProviders(
      <NewsList role="admin" styles={{}} />
    )

    expect(screen.getAllByText('Edit').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Delete').length).toBeGreaterThan(0)
  })

  it('shows edit/delete buttons for manager', () => {
    renderWithProviders(
      <NewsList role="manager" styles={{}} />
    )

    expect(screen.getAllByText('Edit').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Delete').length).toBeGreaterThan(0)
  })

  it('hides buttons for normal user', () => {
    renderWithProviders(
      <NewsList role="user" styles={{}} />
    )

    expect(screen.queryByText('Edit')).not.toBeInTheDocument()
    expect(screen.queryByText('Delete')).not.toBeInTheDocument()
  })

})