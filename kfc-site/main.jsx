import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import "./assets/styles/index.scss";
import { RouterProvider } from 'react-router'
import './i18n/i18n'
import { router } from './app/router/router'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { AppInit } from './app/init/AppInit'
import { ThemeProvider } from "@/app/providers/theme";



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <AppInit />
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </ThemeProvider>
);

// Доступи
// user@gmail.com
// admin@gmail.com
// manager@gmail.com
// 123456

// У entities/api/itemApi отут назва має співпадати з назвою колекії в firebase

// ОХ ТУТ РІЛ Є НАД ЧИМ ПОПРАЦЮВАТИ 
// (уявляй що тебе взяли на роботу і сказали шо ти будеш прокачувать якийсь сайт нуу так на минулій ж роботі було че все как надо)

// 0 - Зробити перемикання тем (світла темна)
// 1 - Додати якісь фільтри по стравам чи інгрідіентам (поле пошуку і категорії)
// 2 - Зробити хедер і футер як в кфс
// 3 - Багатомовність є у кфс
// 4 - Додавання до улюбленого і можливість лайкати/дизлайкати страву
// 5 - Як в уроці 19 додать перевірку форм
// 6 - Як в уроці 20 додать обгортку для помилок
// 7 - Якщо прям перти буде можна накынуть тестування
// 8 - Додати редагування всякого, тобто страви, юзера, відгука
// 9 - Поправити форми й поля поточні, бо не всі поля є.
// 10 - Сторінку відгуків юзер може залишити враження поставити зірочки й написати пост, його можуть лайкать дізлайкать, може додати фото.
// 11 - Сторінка статистики, Якісь айпі карти ресторанів чи статистіка замовлень. Може топ найпопулярніших закладів
// 12 - У вкладці pages розбити сторінки на групи може
// 13 - Може ще один layout при регестрації чи тип того

// --------------------------------------------------------------------------------------------
