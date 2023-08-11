import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Burger.css";

export default function Burger() {
  const [isOpened, setIsOpened] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(true);
  let scrollPosition = 0;

  const handleScroll = () => {
    if (window.scrollY > scrollPosition) {
      setIsScrollUp(false);
    } else {
      setIsScrollUp(true);
    }
    scrollPosition = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleButton = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="burger">
      <button
        className={`burger__button ${isScrollUp ? "scroll-up" : ""} ${
          isOpened ? "open" : ""
        }`}
        onClick={toggleButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`burger__container ${isOpened ? "show" : ""}`}>
        <nav className="burger__links">
          <NavLink className="burger__link" to="/">
            Главная
          </NavLink>
          <NavLink className="burger__link" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="burger__link" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </nav>
        <NavLink className="burger__link_type_profile" to="/profile">
          <div className="icon-profile">
            <p className="burger__link icon-profile_text" to="/profile">
              Аккаунт
            </p>
            <div className="icon-profile_icon" />
          </div>
        </NavLink>
      </div>
      <div className={`overlay ${isOpened ? "show" : ""}`} />
    </div>
  );
}
