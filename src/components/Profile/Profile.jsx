import "./Profile.css";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export default function Profile({ formError, handleEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, setIsValid } =
    useFormWithValidation({ name: currentUser.name, email: currentUser.email });

  const [isEditable, setIsEditable] = useState(false);

  const onEditBtnClick = () => {
    setIsEditable(true);
    setIsValid(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile({
      name: values.name,
      email: values.email,
    });
    setIsEditable(false);
  };
  const onSignOutClick = () => {
    onSignOut();
  };

  return (
    <>
      <Header type="profile" loggedIn={true} />
      <section className="profile">
        <div className="profile__container">
          <form className="profile__form">
            <h1 className="profile__header">Привет, {currentUser.name}!</h1>
            <label className="profile__label">
              Имя
              <input
                className="profile__input"
                value={values.name || currentUser.name}
                type="text"
                name="name"
                onChange={handleChange}
                readOnly={isEditable ? false : true}
                required
              />
            </label>
            <label className="profile__label">
              E-mail
              <input
                className="profile__input"
                value={values.email || currentUser.email}
                type="email"
                name="email"
                onChange={handleChange}
                readOnly={isEditable ? false : true}
                required
              />
            </label>
          </form>
          <div className="profile__settings-cont">
            <span className="profile-form__form-success">
              {formError.isError ? formError.text : ""}
            </span>

            {isEditable ? (
              <button
                className={`button__submit ${
                  !isValid && "button__submit_disabled"
                }`}
                type="submit"
                disabled={isValid ? false : true}
                onClick={handleSubmit}
              >
                Сохранить
              </button>
            ) : (
              <button
                className="profile__edit"
                type="button"
                onClick={onEditBtnClick}
              >
                Редактировать
              </button>
            )}
            <button className="profile__logout" onClick={onSignOutClick}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
