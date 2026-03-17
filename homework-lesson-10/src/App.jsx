import { RouterProvider } from "react-router";
import ConfigRouter from "@/router/ConfigRouter";
import { useState } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import { useEffect } from "react";

import { useReducer } from "react";
import { TripContext } from "@/context/TripContext";
import { tripReducer } from "@/reducers/tripReducer";
// Задача 2. Розробити сайт для планування подорожі (потрібно вибирати автобуси і готелі). На одній сторінці знаходиться перелік автобусів, на другій сторінці вибираємо готелі. Вибрати можна декілька автобусів і готелів (тоді турфірма самостійно вибере один доступних і вибраних вами) . На третій відображаємо результати вибору з попередніх сторінок (список вибраних автобусів і готелів) (тут можна видалити деякі автобуси чи готелі). Тут бекенд не використовуємо а константні дані.

const initialState = {
  selectedBuses: [],
  selectedHotels: [],
};

function App() {
  const [theme, setTheme] = useState("task--light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "task--light" ? "task--dark" : "task--light"));
  };

  useEffect(() => {
    document.body.classList.remove("task--light", "task--dark");
    document.body.classList.add(theme);
  }, [theme]);

  // Ініціалізація редюсера
  const [state, dispatch] = useReducer(tripReducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <TripContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={ConfigRouter} />
      </TripContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
