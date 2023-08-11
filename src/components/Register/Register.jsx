import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import InputForm from "../InputForm/InputForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export default function Register({ onRegister, formError }) {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <section className="register">
      <div className="register__container">
        <AuthForm
          headerText="Добро пожаловать!"
          btnText="Зарегистрироваться"
          spanBtnText="Уже зарегистрированы?"
          navSpanBtnLink="/signin"
          spanBtnLinkText="Войти"
          onSubmit={handleSubmit}
          isValid={isValid}
          isDisabled={!isValid ? false : true}
          formError={formError}
        >
          <InputForm
            type="text"
            name="name"
            required
            label="Имя"
            value={values.name}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            spanText={errors.name}
          />
          <InputForm
            type="email"
            name="email"
            required
            label="E-mail"
            value={values.email}
            onChange={handleChange}
            minLength={1}
            maxLength={30}
            spanText={errors.email}
          />
          <InputForm
            type="password"
            name="password"
            required
            label="Пароль"
            spanText={errors.password}
            // temporaryClass='input-form__input_error'
            minLength={1}
            value={values.password}
            onChange={handleChange}
            isValid={isValid}
          />
        </AuthForm>
      </div>
    </section>
  );
}
