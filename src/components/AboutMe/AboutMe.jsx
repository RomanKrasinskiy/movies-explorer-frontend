import "./AboutMe.css";
import { Link } from "react-router-dom";
import avatar from "../../images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-creator">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__grid">
          <h3 className="about_me__name">Роман</h3>
          <p className="about-me__job">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__text">
            Я родился и живу в Крыму закончил РГУП по специальности
            Юриспруденция. Отработал несколько лет, но возникло желание
            развиваться в более интересном направлении с некоторой творческой
            составляющей. Веб-разработка оказалась именно тем, что я искал.
          </p>
          <div className="about-me__link-cont">
            <Link className="about-me__link-github" to="https://github.com/RomanKrasinskiy" target="_blank">
              Github
            </Link>
          </div>
          <img
            className="about-me__photo"
            src={avatar}
            alt="Аватар автора"
          ></img>
        </div>
      </div>
    </section>
  );
}
