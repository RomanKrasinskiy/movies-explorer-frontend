import React, { useState, useEffect, useContext } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SearchForm.css";

export default function SearchForm({
  handleSearchSubmit,
  isGlobalSearch,
  setSearchError,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [errorQuery, setErrorQuery] = useState("");
  const { values, handleChange, isValid, setIsValid } =
    useFormWithValidation({ search: "" });
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setErrorQuery("");
  }, [isValid]);

  useEffect(() => {
    if (isGlobalSearch) {
      const checkedBefore = localStorage.getItem("shortsMovies");
      setIsChecked(checkedBefore === "true" ? true : false);
      const searchBefore = localStorage.getItem("search");
      if (searchBefore) {
        values.search = searchBefore;
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isGlobalSearch) {
      localStorage.setItem("search", values.search);
    }
    isValid
      ? handleSearchSubmit({
          shortsState: isChecked,
          keyWords: values.search,
          isGlobalSearch: isGlobalSearch,
        })
      : setErrorQuery("Нужно ввести ключевое слово.");
  }

  const toggleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    setSearchError({ isError: false, text: "" });
    handleSearchSubmit({
      shortsState: e.target.checked,
      keyWords: values.search ? values.search : "",
      isGlobalSearch: isGlobalSearch,
    });
  };

  return (
    <section className="search">
      <div className="search__container">
        <form
          className="search__form"
          noValidate
          name="search"
          onSubmit={handleSubmit}
        >
          <input
            className="search__input"
            placeholder="Фильм"
            name="search"
            type="text"
            required
            autoComplete="off"
            value={values.search}
            onChange={handleChange}
          />
          <span className="search__error">{errorQuery}</span>
          <button className="search__submit" type="submit">
            Найти
          </button>
        </form>
        <label className="search__params">
          <input
            className="search__shorts"
            id="shorts"
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          Короткометражки
        </label>
      </div>
    </section>
  );
}
