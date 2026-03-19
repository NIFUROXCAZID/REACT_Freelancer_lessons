import "./App.css";

import ListFilter from "./components/ListFilter";
import PostsLoader from "./components/PostsLoader";

// Задача 1. Список з фільтрацією
// Завдання: Створити список товарів. Має бути можливість додавання нового товару та фільтрації товарів за назвою (може бути одна сторінка, а можна додавання товарів зробити на окремій сторінці).

// Задача 2. Список постів з API (createAsyncThunk)
// Завдання: Завантажити список постів з публічного API
// (https://jsonplaceholder.typicode.com/posts) та відобразити їхні заголовки.
// Додати індикатор завантаження та повідомлення про помилку.
// Використати: createAsyncThunk для отримання масиву даних

function App() {
  return (
    <div>
      <ListFilter />
      <hr />
      <PostsLoader />
    </div>
  );
}

export default App;
