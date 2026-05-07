import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('basic test', () => {
  it('renders text', () => {
    render(<div>Hello world</div>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
})

// ПРОСТИЙ ТЕСТ ЩОБ ЗРОЗУМІТЬ ЩО ВОНИ ПРАЦЮЮТЬ
// АЛЕ З РЕАЛЬНИМ ВИПАДКОМ СКЛАДНІШЕ БО В ДОДАТКУ БАГАТО ОБГОРТОК ФУНКЦІОНАЛЬНИХ

// Шпаргалка до тестування
// npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

// npm run test:ui
// npm run test

// ---ШПАРГАЛКА ПОЯСНЕННЯ ДЛЯ ЧОГО ТЕСТУВАННЯ
// 💥 Це називається REGRESSION
// 👉 коли новий код ламає старий функціонал
// Тести — це система раннього попередження

// У реальних командах:
// Кожен push:
// 1. запускаються тести
// 2. перевіряється білд
// 3. якщо щось зламалось → merge блокується