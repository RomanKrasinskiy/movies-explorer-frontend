import Logo from "../Logo/Logo";
import "./AuthForm.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AuthForm({
  children,
  headerText,
  btnText,
  spanBtnText,
  navSpanBtnLink,
  spanBtnLinkText,
  isValid,
  onSubmit,
  formError,
}) {
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setErrorText(formError.isError ? formError.text : '');
  }, [formError]);

  useEffect(() => {
    setErrorText('');
  }, []);
  
  return (
    <>
      <Logo />
      <h1 className="auth-form__header">{headerText}</h1>
      <form className="auth-form__form">{children}</form>
      <span className="auth-form__form-error">{errorText}</span>
      <button
        className={`button__submit ${!isValid && 'button__submit_disabled'}`}
        type="submit"
        disabled={isValid ? false : true}
        onClick={onSubmit}
      >
        {btnText}
      </button>
      <div className="auth-form__btn_container">
        <span className="auth-form__btn_ask">{spanBtnText}</span>
        <Link className="auth-form__btn_link" to={navSpanBtnLink}>
          {spanBtnLinkText}
        </Link>
      </div>
    </>
  );
}
