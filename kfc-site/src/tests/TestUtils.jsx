import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { RouterProvider, createMemoryRouter } from 'react-router'

export function renderWithProviders(ui) {
  const store = configureStore({
    reducer: {},
  })

  const router = createMemoryRouter([
    {
      path: '/',
      element: ui,
    },
  ])

  return render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}