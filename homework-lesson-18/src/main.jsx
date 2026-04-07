import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router'
import './i18n/i18n'
import { router } from './app/router/router'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { AppInit } from './app/init/AppInit'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppInit />
    <Suspense fallback={<div>Завантаження...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)
