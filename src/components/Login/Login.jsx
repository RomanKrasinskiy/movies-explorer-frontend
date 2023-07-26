import "./Login.css";
import AuthForm from "../AuthForm/AuthForm";
import InputForm from "../InputForm/InputForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

export default function Login({ onLogin, formError }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <section className="login">
      <div className="login__container">
        <AuthForm
          headerText="Рады видеть!"
          btnText="Войти"
          spanBtnText="Ещё не зарегистрированы?"
          navSpanBtnLink="/signup"
          spanBtnLinkText="Регистрация"
          classButton="button__indent"
          onSubmit={handleSubmit}
          isValid={isValid}
          formError={formError}
          isDisabled={!isValid ? false : true}
        >
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
