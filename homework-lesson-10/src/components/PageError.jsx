import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <section className="page404">
      <h1>Схоже сталась помилка</h1>
      <p>Поверніться краще на головну сторінку</p>
      <Link className="oficcial-greeting__button" to="/">
        На головну
      </Link>
    </section>
  );
}
