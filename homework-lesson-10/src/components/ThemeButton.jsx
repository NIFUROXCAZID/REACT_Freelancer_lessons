import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeButton() {
  // Зчитуєм контекст
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className={theme} onClick={toggleTheme}>
      Change theme (кнопка памь'ятає тему через useContext)
    </button>
  );
}

export default ThemeButton;
