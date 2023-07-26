import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__header">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__info">
          <p className="footer__date">&copy; {new Date().getFullYear()}</p>
          <div className="footer__links">
            <Link
              className="footer__link-practicum"
              to="https://practicum.yandex.ru/"
            >
              Яндекс.Практикум
            </Link>
            <Link
              className="footer__link-github"
              to="https://github.com/RomanKrasinskiy"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
